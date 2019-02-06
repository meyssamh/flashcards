import React, { Component, Fragment } from 'react';
import { Grid, MenuItem } from '@material-ui/core';
import swal from 'sweetalert2';

import classes from './Library.css';
import Header from '../../components/Library/Header/Header';
import Circular from '../../components/UI/Loading/Circular/Circular';
import CourseSetting from '../../components/Library/Header/CourseSetting/CourseSetting';
import LessonSetting from '../../components/Library/Header/LessonSetting/LessonSetting';
import Cards from '../../components/Library/Cards/Cards';
import Filter from '../../components/Library/Filter/Filter';
import axios from '../../axios-orders';

//TODO: Username's logic must be added!

class Library extends Component {
    state = {
        Menu: null,
        NightMode: false,
        Night: {
            Header: '#263238',
            Main: '#455a64',
            CardAction: '#263238',
            Text: 'white',
            Menu: '#37474f',
            Delete: '#f50057',
            Edit: 'white',
        },
        Day: {
            Header: '#64b5f6',
            Main: 'white',
            CardAction: '#fffde7',
            Text: '#263238',
            Menu: 'white',
            Delete: '#f50057',
            Edit: '#90a4ae',
        },
        CSetting: false,
        LSetting: false,
        Lessons: {},
        ShowLesson: 'All',
        Loading: true,
        Error: ''
    }

    loadLessons = () => {
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

    showCourseHandler = (e) => {
        const show = e.target.value;
        this.setState({
            ShowLesson: show
        });
    }

    addCardHandler = (e) => {
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

    openCardHandler = () => {
        console.log('open');
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
        // Open Groupe (window.push or window.location)
    }

    editCardHandler = () => {
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
        // Edit Groupe
    }

    deleteCardHandler = (e) => {
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

    openMenuHandler = (e) => {
        this.setState({
            Menu: e.currentTarget
        });
    }

    closeMenuHandler = () => {
        this.setState({
            Menu: null
        });
    }

    nightModeHandler = () => {
        this.setState((prevState) => ({
            NightMode: !prevState.NightMode
        }))
    }

    cSettingHandler = () => {
        this.setState({
            CSetting: true
        })
    }

    closeCSettingHandler = () => {
        this.setState({
            CSetting: false
        })
    }

    lSettingHandler = () => {
        this.setState({
            LSetting: true
        })
    }

    closeLSettingHandler = () => {
        this.setState({
            LSetting: false
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

        let menu = this.state.Menu; // to check for opening the menu in header

        let select = this.state.ShowLesson; // to show the lessons groupe 

        let nightMode = this.state.NightMode; // to check for the night mode

        let day = this.state.Day;

        let night = this.state.Night;

        let mode = nightMode ? night : day;

        let err = <div>
            <p>Sorry an Error has occurred:</p>
            <p style={{ color: 'red' }}>{this.state.Error}</p>
            <p>Please Try again later!</p>
        </div>;

        if (this.state.Error.length !== 0) {
            console.log('oo')
            return err;
        }

        let courses = Object.keys(this.state.Lessons)
            .map(course => {
                return <MenuItem key={course} onClick={this.showCourseHandler}
                    children={course} name={'ShowLesson'} value={course} />
            });

        let disabled = courses.length === 0 ? true : false; // disables the 'delete course' button

        let courseItems = 0;
        let showLesson = this.state.ShowLesson === '' ?
            {} :
            { ...this.state.Lessons[this.state.ShowLesson] };

        let Card = this.state.ShowLesson === 'All' ? // Filter for showing the lesson cards
            (Object.keys(this.state.Lessons).map(course => {
                return [...Array(this.state.Lessons[course])].map(name => {
                    return Object.keys(name).map((lesson, id) => {
                        courseItems++; // to check if we have a lesson!
                        let everyLesson = name[lesson];
                        // have to use courses to check if there are courses!
                        return (
                            <Cards clickedOpenCard={this.openCardHandler} key={course + lesson + id}
                                clickedEdit={this.editCardHandler} clickedDelete={this.deleteCardHandler}
                                lesson={lesson} course={course} count={everyLesson.count}
                                cardAction={mode.CardAction} text={mode.Text} del={mode.Delete}
                                edit={mode.Edit} />
                        );
                    });
                });
            })) :
            (Object.keys(showLesson).map((lesson, id) => {
                let everyLesson = showLesson[lesson];
                courseItems++;
                return (
                    <Cards clickedOpenCard={this.openCardHandler} key={lesson + id}
                        clickedEdit={this.editCardHandler} clickedDelete={this.deleteCardHandler}
                        lesson={lesson} course={this.state.ShowLesson} count={everyLesson.count}
                        cardAction={mode.CardAction} text={mode.Text} del={mode.Delete}
                        edit={mode.Edit} />
                );
            }));

        let Study = courses.length === 0 ?
            <p>Please go to ' Menu > Course setting ' and add a Course!</p> :
            courseItems === 0 ?
                <p>Please go to ' Menu > Lesson setting ' and add a Lesson!</p> :
                Card;

        let height = window.innerHeight - 64;

        let content = this.state.Loading ?
            <Circular /> // to show loading at beginning
            :
            <Fragment>
                <Header avatar={'MH'} Menu={menu} openMenu={Boolean(menu)} closeMenu={this.closeMenuHandler}
                    header={mode.Header} clickedCSetting={this.cSettingHandler}
                    clickedLSetting={this.lSettingHandler} clickedNightMode={this.nightModeHandler}
                    clickedSignOut={this.signOutHandler} clickedOpenMenu={this.openMenuHandler}
                />
                <main className={classes.Main} style={{ background: mode.Main, minHeight: height }}>
                    <CourseSetting openCSetting={this.state.CSetting} closeCSetting={this.closeCSettingHandler}
                        addCourse={this.addCourseHandler} deleteCourse={this.deleteCourseHandler}
                        disabled={disabled}
                    />
                    <LessonSetting openLSetting={this.state.LSetting} closeLSetting={this.closeLSettingHandler}
                        addLesson={this.addCardHandler}
                    />
                    <Filter text={mode.Text} select={select} items={courses}
                        changedFilter={this.showCourseHandler}
                    />
                    <div className={classes.Container}>
                        <Grid container spacing={40}>
                            {Study}
                        </Grid>
                    </div>
                </main>
            </Fragment>;

        return (
            content
        );
    }
}

export default Library;