import React, { Component, Fragment } from 'react';
import swal from 'sweetalert2';

import Navigationbar from '../../components/Library/Navigationbar/Navigationbar';
import Sidebar from '../../components/Library/Sidebar/Sidebar';
import Groupe from '../../components/Library/Groupe/Groupe';
import Courses from '../../components/Library/Sidebar/Courses/Courses';
import Spinner from '../../components/UI/Spinner';
import classes from './Library.css';
import axios from '../../axios-orders';

//FIXME: New Style must be done!
//TODO: Username's logic must be added!
//TODO: Setting must be added!

class Library extends Component {
    state = {
        Lessons: {},
        ShowLesson: '',
        Loading: false,
        Error: ''
    }

    loadLessons = () => {
        this.setState({ Loading: true });
        return axios.get('/Lessons').then(
            response => {
                this.setState({
                    Lessons: response.data,
                    Loading: false
                });
            }
        ).catch(
            error => {
                console.log(error.message);
                this.setState({
                    Error: `${error.message}`,
                    Loading: false
                });
            }
        );
    }

    componentDidMount() {
        this.loadLessons();
    }

    settingsToggleHandler = () => {
        // Toggle for Setting in Navigationbar
    }

    addCourseHandler = (e) => {
        e.preventDefault();
        swal({
            text: 'Please enter the name of your new course:',
            input: 'text',
            inputPlaceholder: 'New Course',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                const value = result.value;
                const NewLessons = { ...this.state.Lessons, [value]: {} };
                this.setState({
                    Lessons: NewLessons
                });
                swal({
                    type: 'success',
                    title: 'Done!',
                    text: 'Your course has been added.',
                    toast: true,
                    animation: false,
                    customClass: 'animated slideInDown',
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000
                })
            } else if (result.value === '') {
                swal({
                    title: 'Error!',
                    type: 'warning',
                    text: 'Your course must have a name.',
                    animation: false,
                    customClass: 'animated flash',
                    backdrop: `rgba(255, 0, 0, 0.2)`
                })
            }
        })
    }

    deleteCourseHandler = (e) => {
        e.preventDefault();
        const lessons = { ...this.state.Lessons };
        const courses = Object.keys(lessons).map((name) => name); // to be used in dropdown field
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this and all your lessons in this course will be deleted!",
            type: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                swal({
                    text: 'Please select course:',
                    input: 'select',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Delete',
                    inputOptions: courses,
                    inputPlaceholder: 'Courses'
                }).then((result) => {
                    if (result.value === undefined) {
                        return null;
                    } else if (result.value !== '') {
                        const course = courses[result.value];
                        delete lessons[course];
                        this.setState({
                            Lessons: lessons,
                            ShowLesson: ''
                        });
                        swal({
                            type: 'success',
                            title: 'Deleted!',
                            text: 'Your course has been deleted.',
                            toast: true,
                            animation: false,
                            customClass: 'animated slideInDown',
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    } else if (result.value === '') {
                        swal({
                            type: 'warning',
                            title: 'Error',
                            text: 'You have to choose a course!',
                            animation: false,
                            customClass: 'animated flash',
                            backdrop: `rgba(255, 0, 0, 0.2)`
                        })
                    }
                })
            }
        })
    }

    //TODO: Delete button must be inactive at first!

    showCourseHandler = (e) => {
        e.preventDefault();
        const show = e.currentTarget.value;
        this.setState({
            ShowLesson: show
        });
    }

    addGroupeHandler = (e) => {
        e.preventDefault();
        const lessons = { ...this.state.Lessons };
        const courses = Object.keys(lessons).map((name) => name); // to be used in dropdown field
        swal.mixin({
            input: 'text',
            confirmButtonText: 'Next',
            showCancelButton: true,
            progressSteps: ['1', '2']
        }).queue([
            {
                text: 'Choose your course:',
                input: 'select',
                inputPlaceholder: 'Your course',
                inputOptions: courses
            },
            {
                text: 'Enter the name of your lesson:',
                inputPlaceholder: 'Your lesson',
                input: 'text'
            },
        ]).then((result) => {
            if (result.dismiss === swal.DismissReason.cancel) {
                return null;
            } else if (result.dismiss === swal.DismissReason.backdrop) {
                return null;
            } else if (result.dismiss === swal.DismissReason.esc) {
                return null;
            } else if (result.value[0] !== '' && result.value[1] !== '') {
                const course = courses[result.value[0]];
                const lesson = result.value[1];
                const LessonsKey = Object.keys({ ...lessons[course] }).map((name) => name);
                let i = 0;
                do {
                    if (LessonsKey[i] === lesson) {
                        swal({
                            type: 'error',
                            title: 'Oops...',
                            text: 'Lesson already exist!',
                            backdrop: `rgba(255, 0, 0, 0.2)` 
                        })
                    } else {
                        const newLessons = {
                            ...lessons[course], [lesson]: {
                                count: 0,
                                cards: {}
                            }
                        };
                        lessons[course] = newLessons;
                        this.setState({
                            Lessons: lessons
                        });
                        swal({
                            title: 'Done!',
                            text: 'Your lessen has been added.',
                            type: 'success',
                            showConfirmButton: false,
                            toast: true,
                            animation: false,
                            position: 'top-end',
                            customClass: 'animated slideInDown',
                            timer: 2000
                        })
                    }
                    i++;
                } while (i in LessonsKey);
            };
        })
    }

    openGroupeHandler = () => {
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
        // Open Groupe (window.push or window.location)
    }

    editGroupeHandler = () => {
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
        // Edit Groupe
    }

    deleteGroupeHandler = (e) => {
        e.preventDefault();
        const course = e.currentTarget.name;
        const lesson = e.currentTarget.value;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this and all your cards will be lost!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const newLessons = { ...this.state.Lessons[course] };
                const oldLessons = { ...this.state.Lessons };
                delete newLessons[lesson];
                oldLessons[course] = newLessons;
                this.setState({
                    Lessons: oldLessons
                });
                swal({
                    type: 'success',
                    title: 'Deleted!',
                    text: 'Your lesson has been deleted.',
                    toast: true,
                    animation: false,
                    customClass: 'animated slideInDown',
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    signOutHandler = () => {
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
        //Signout method comes here!
    }

    //TODO: add componentWillUnmount

    render() {

        let err = <div>
            <p>Sorry an Error has occurred:</p>
            <p style={{ color: 'red' }}>{this.state.Error}</p>
            <p>Please Try again later!</p>
        </div>;

        if (this.state.Error.length !== 0) {
            return err;
        }

        let sidebarCourses = Object.keys(this.state.Lessons)
            .map(course => {
                return <Courses key={course} clickedOnCourse={this.showCourseHandler}
                    children={course} value={course} />
            });

        sidebarCourses = sidebarCourses.length === 0 ?
            <p>Please add a Course</p> :
            sidebarCourses;

        let courseItems = 0;
        let showLesson = this.state.ShowLesson === '' ?
            {} :
            { ...this.state.Lessons[this.state.ShowLesson] };

        let groupeLoop = this.state.ShowLesson === '' ?
            (Object.keys(this.state.Lessons).map(course => {
                return [...Array(this.state.Lessons[course])].map(name => {
                    return Object.keys(name).map((lesson, id) => {
                        courseItems++; // to check if we have a lesson!
                        let everyLesson = name[lesson];
                        return (
                            <Groupe clickedOpenGroupe={this.openGroupeHandler} key={course + lesson + id}
                                clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                                cards={lesson} course={course} count={everyLesson.count} />
                        );
                    });
                });
            })) :
            (Object.keys(showLesson).map((lesson, id) => {
                let everyLesson = showLesson[lesson];
                courseItems++;
                return (
                    <Groupe clickedOpenGroupe={this.openGroupeHandler} key={lesson + id}
                        clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                        cards={lesson} course={this.state.ShowLesson} count={everyLesson.count} />
                );
            }));

        groupeLoop = courseItems === 0 ?
            <p>Please add a lesson!</p> :
            groupeLoop;

        let content = this.state.Error.length !== 0 ? err : <Spinner />;

        if (this.state.Loading === false) {
            content = <Fragment>
                <Navigationbar username={'Username'} clickedSettings={this.settingsToggleHandler} />
                <Sidebar clickedAddCourse={this.addCourseHandler} clickedDeleteCourse={this.deleteCourseHandler}
                    sidebarCourses={sidebarCourses} />
                <div className={classes.Groupe}>
                    <input className={classes.Btn} type={'button'} value={'+'} onClick={this.addGroupeHandler} />
                    {groupeLoop}
                </div>
            </Fragment>;
        }

        return (
            content
        );
    }
}

export default Library;