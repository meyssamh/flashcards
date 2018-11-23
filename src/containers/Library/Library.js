import React, { Component, Fragment } from 'react';
import swal from 'sweetalert2';

import Navigationbar from '../../components/Library/Navigationbar/Navigationbar';
import Sidebar from '../../components/Library/Sidebar/Sidebar';
import Groupe from '../../components/Library/Groupe/Groupe';
import classes from './Library.css';

class Library extends Component {
    state = {
        Coursename: {
            0: 'IT',
            1: 'BWL',
            2: 'VWL'
        },
        Groupe: {
            'IT': {
                'Java': 17,
                'JavaScript': 15,
                'C++': 0
            },
            'BWL': {
                'Marketing': 25,
                'Steuerlehre': 100,
                'BWL': 76
            },
            'VWL': {
                'Makro 1': 55,
                'Makro 2': 93,
                'VWL': 80
            }
        }
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
                let NextElement = 0;
                Object.keys(this.state.Coursename).map(key => {
                    let int = parseInt(key);
                    return NextElement = int + 1;
                });
                let New = { ...this.state.Coursename, [NextElement]: value };
                let NewGroupe = { ...this.state.Groupe, [value]: {} };
                this.setState({
                    Coursename: New,
                    Groupe: NewGroupe
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
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this and all your lessons in this course will be deleted!",
            type: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
                const courses = this.state.Coursename;
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
                    if (result.value !== '') {
                        const value = result.value;
                        const New = { ...this.state.Coursename };
                        const course = this.state.Coursename[value];
                        delete New[value];
                        const NewGroupe = { ...this.state.Groupe };
                        delete NewGroupe[course];
                        this.setState({
                            Coursename: New,
                            Groupe: NewGroupe
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

    showCourseHandler = () => {
        // Filter lessons by course
    }

    addGroupeHandler = (e) => {
        e.preventDefault();
        const courses = this.state.Coursename; // to be used in dropdown field
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
                const course = result.value[0];
                const lesson = result.value[1];
                const courseName = this.state.Coursename[course];
                const Courses = { ...this.state.Groupe[courseName], [lesson]: 0 };
                const localGroupe = { ...this.state.Groupe };
                localGroupe[courseName] = Courses;
                this.setState({
                    Groupe: localGroupe
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
        })
    }

    openGroupeHandler = () => {
        // Open Groupe (window.push or window.location)
    }

    editGroupeHandler = () => {
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
                const newGroupe = { ...this.state.Groupe[course] };
                const oldGroupe = { ...this.state.Groupe };
                delete newGroupe[lesson];
                oldGroupe[course] = newGroupe;
                this.setState({
                    Groupe: oldGroupe
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

    render() {

        let courseItems = 0;
        let groupeLoop = Object.keys(this.state.Groupe).map(course => {
            return [...Array(this.state.Groupe[course])].map(name => {
                return Object.keys(name).map((cards, id) => {
                    courseItems++; // to check if we have a lesson!
                    return (
                        <Groupe clickedOpenGroupe={this.openGroupeHandler} key={course + cards + id}
                            clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                            cards={cards} course={course} count={Object.values(name)[id]} />
                    );
                });
            });
        })

        groupeLoop = courseItems === 0 ?
            <p>Please add a groupe of cards!</p> :
            groupeLoop;

        return (
            <Fragment>
                <Navigationbar username={'Username'} clickedSettings={this.settingsToggleHandler} />
                <Sidebar coursename={this.state.Coursename} clickedAddCourse={this.addCourseHandler}
                    clickedDeleteCourse={this.deleteCourseHandler} clickedOnCourse={this.showCourseHandler} />
                <div className={classes.Groupe}>
                    <input className={classes.Btn} type={'button'} value={'+'} onClick={this.addGroupeHandler} />
                    {groupeLoop}
                </div>
            </Fragment>
        );
    }
}

export default Library;