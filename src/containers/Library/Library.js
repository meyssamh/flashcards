import React, { Component, Fragment } from 'react';
import { Grid, MenuItem, TextField } from '@material-ui/core';
import swal from 'sweetalert2';

import classes from './Library.css';
import Header from '../../components/Library/Header/Header';
import Circular from '../../components/UI/Loading/Circular/Circular';
import CourseSetting from '../../components/Library/Header/CourseSetting/CourseSetting';
import AddCourse from '../../components/Library/Header/CourseSetting/AddCourse/AddCourse';
import Caution from '../../components/Library/Header/CourseSetting/Caution/Caution';
import DeleteCourse from '../../components/Library/Header/CourseSetting/DeleteCourse/DeleteCourse';
import LessonSetting from '../../components/Library/Header/LessonSetting/LessonSetting';
import AddLesson from '../../components/Library/Header/LessonSetting/AddLesson/AddLesson';
import DeleteLesson from '../../components/Library/Cards/DeleteLesson/DeleteLesson';
import AddLessonErrorS from '../../components/Library/Header/LessonSetting/AddLesson/Snackbar/SnackbarError';
import AddLessonS from '../../components/Library/Header/LessonSetting/AddLesson/Snackbar/Snackbar';
import DeleteLessonS from '../../components/Library/Cards/DeleteLesson/Snackbar/Snackbar';
import AddCourseErrorS from '../../components/Library/Header/CourseSetting/AddCourse/Snackbar/SnackbarError';
import AddCourseS from '../../components/Library/Header/CourseSetting/AddCourse/Snackbar/Snackbar';
import DeleteCourseS from '../../components/Library/Header/CourseSetting/DeleteCourse/Snackbar/Snackbar';
import Cards from '../../components/Library/Cards/Cards';
import OpenLesson from '../../components/Library/Cards/OpenLesson/OpenLesson';
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
        AddCourse: false,
        NewCourse: '',
        Caution: false,
        DeleteCourse: false,
        SelectedCourse: 'None',
        LSetting: false,
        AddLesson: false,
        SelectCourse: 'None',
        NewLesson: '',
        Lessons: {},
        DeleteLesson: {
            show: false,
            course: '',
            lesson: ''
        },
        Snackbars: {
            AddCourse: false,
            AddCourseError: false,
            DeleteCourse: false,
            AddLesson: false,
            AddLessonError: false,
            DeleteLesson: false
        },
        OpenLesson: {
            show: false,
            title: '',
            box0: 0,
            box1: 0,
            box2: 0,
            box3: 0,
            box4: 0,
            box5: 0,
            fav: 0
        },
        ShowLesson: 'All',
        Loading: true,
        Error: ''
    };

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

    addCourseHandler = () => {
        this.setState({
            AddCourse: true
        });
    }

    closeAddCourseHandler = () => {
        this.setState({
            AddCourse: false
        });
    }

    newCourseChangeHandler = (e) => {
        this.setState({
            NewCourse: e.target.value
        });
    }

    finalAddCourseHandler = () => {
        const newCourse = this.state.NewCourse;
        const lessons = { ...this.state.Lessons, [newCourse]: {} };
        if (this.state.Lessons[newCourse]) {
            this.setState({
                Menu: null,
                AddCourse: false,
                CSetting: false,
                Snackbars: {
                    AddCourseError: true
                }
            });
        } else {
            this.setState({
                Menu: null,
                AddCourse: false,
                CSetting: false,
                Lessons: lessons,
                Snackbars: {
                    AddCourse: true
                }
            });
        }
    }

    deleteCourseHandler = () => {
        this.setState({
            Caution: true
        });
    }

    closeCautionHandler = () => {
        this.setState({
            Caution: false,
        });
    }

    openDeleteCourseHandler = () => {
        this.setState({
            DeleteCourse: true
        });
    }

    closeDeleteCourseHandler = () => {
        this.setState({
            DeleteCourse: false
        });
    }

    finalDeleteCourseHandler = () => {
        const lessons = { ...this.state.Lessons };
        const selected = this.state.SelectedCourse;
        delete lessons[selected];
        this.setState({
            Menu: null,
            CSetting: false,
            Caution: false,
            DeleteCourse: false,
            Lessons: lessons,
            Snackbars: {
                DeleteCourse: true
            }
        });
    }

    selectDeleteHandler = (e) => {
        const selected = e.target.value;
        this.setState({
            SelectedCourse: selected
        });
    }

    showCourseHandler = (e) => {
        const show = e.target.value;
        this.setState({
            ShowLesson: show
        });
    }

    selectCourseHandler = (e) => {
        const select = e.target.value;
        this.setState({
            SelectCourse: select
        });
    }

    openAddLessonHandler = () => {
        this.setState({
            AddLesson: true
        });
    }

    closeAddLessonHandler = () => {
        this.setState({
            AddLesson: false
        });
    }

    addLessonHandler = () => {
        const lessons = { ...this.state.Lessons };
        const course = this.state.SelectCourse;
        const lesson = this.state.NewLesson;
        const LessonsKey = Object.keys({ ...lessons[course] }).map((name) => name);
        let i = 0;
        do {
            if (LessonsKey[i] === lesson) {
                this.setState({
                    Menu: null,
                    AddLesson: false,
                    LSetting: false,
                    Snackbars: {
                        AddLessonError: true
                    }
                });
            } else {
                const newLessons = {
                    ...lessons[course], [lesson]: {
                        count: 0,
                        cards: {}
                    }
                };
                lessons[course] = newLessons;
                this.setState({
                    Menu: null,
                    AddLesson: false,
                    LSetting: false,
                    Lessons: lessons,
                    Snackbars: {
                        AddLesson: true
                    }
                });
            }
            i++;
        } while (i in LessonsKey);
    }

    newLessonChangeHandler = (e) => {
        this.setState({
            NewLesson: e.target.value
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

    openCardHandler = (e) => {
        const lessons = { ...this.state.Lessons };
        const lesson = e.currentTarget.name;
        const course = e.currentTarget.value;
        const clickedCourse = { ...lessons[course] };
        const clickedLesson = { ...clickedCourse[lesson] };
        const cards = { ...clickedLesson.cards };
        const zero = {};
        const one = {};
        const two = {};
        const three = {};
        const four = {};
        const five = {};
        const favorite = {};
        let Key = Object.keys(cards);
        for (Key in cards) {
            const card = { ...cards[Key] };
            switch (card.box) {
                case 0: zero[Key] = [card];
                    break;
                case 1: one[Key] = [card];
                    break;
                case 2: two[Key] = [card];
                    break;
                case 3: three[Key] = [card];
                    break;
                case 4: four[Key] = [card];
                    break;
                case 5: five[Key] = [card];
                    break;
                default:
                    console.log('Somthing went in Switch wrong!');
            }
            if (card.favorite) {
                favorite[Key] = [card];
            }
        }
        let countCardsHandler = (obj) => {
            let count = Object.keys(obj);
            return count.length;
        }
        this.setState({
            OpenLesson: {
                show: true,
                title: lesson,
                box0: countCardsHandler(zero),
                box1: countCardsHandler(one),
                box2: countCardsHandler(two),
                box3: countCardsHandler(three),
                box4: countCardsHandler(four),
                box5: countCardsHandler(five),
                fav: countCardsHandler(favorite)
            }
        });
        const Lessons = { ...this.state.Lessons };
        axios.post('/Lessons', Lessons).then(
            response => console.log(response)
        ).catch(
            error => console.log(error)
        );
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

    deleteLessonHandler = (e) => {
        const course = e.currentTarget.value;
        const lesson = e.currentTarget.name;
        this.setState({
            DeleteLesson: {
                show: true,
                course: [course],
                lesson: [lesson]
            }
        });
    }

    closeDeleteLessonHandler = () => {
        this.setState({
            DeleteLesson: {
                show: false,
                course: '',
                lesson: ''
            }
        });
    }

    finalDeleteLessenHandler = () => {
        const course = this.state.DeleteLesson.course;
        const lesson = this.state.DeleteLesson.lesson;
        const newLessons = { ...this.state.Lessons[course] };
        const oldLessons = { ...this.state.Lessons };
        delete newLessons[lesson];
        oldLessons[course] = newLessons;
        this.setState({
            Lessons: oldLessons,
            DeleteLesson: {
                show: false,
                course: '',
                lesson: '',
                Snackbars: {
                    DeleteLesson: true
                }
            }
        });
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
        }));
    }

    cSettingHandler = () => {
        this.setState({
            CSetting: true
        });
    }

    closeCSettingHandler = () => {
        this.setState({
            CSetting: false
        });
    }

    lSettingHandler = () => {
        this.setState({
            LSetting: true
        });
    }

    closeLSettingHandler = () => {
        this.setState({
            LSetting: false
        });
    }

    closeSnackbarsHandler = () => {
        this.setState({
            Snackbars: {
                AddCourse: false,
                AddCourseError: false,
                DeleteCourse: false,
                AddLesson: false,
                AddLessonError: false,
                DeleteLesson: false
            }
        });
    }

    closeLessonHandler = () => {
        this.setState({
            OpenLesson: {
                show: false,
                title: '',
                box0: 0,
                box1: 0,
                box2: 0,
                box3: 0,
                box4: 0,
                box5: 0,
                fav: 0
            }
        });
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

        let selectCourse = this.state.SelectCourse; // to select course for new lesson

        let disableAdd = this.state.SelectCourse === 'None' ? true : false; // disables add button

        let deleteSelected = this.state.SelectedCourse; // to delete the selected course

        let disableDelete = deleteSelected === 'None' ? true : false; // to disable delete button

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

        let newCourseInput = <TextField autoFocus name={'NewCourse'} margin={'dense'}
            id={'newCourse'} label={'New Course'} type={'text'} onChange={this.newCourseChangeHandler}
            fullWidth value={this.state.NewCourse}
        />;

        let newLessonInput = <TextField name={'NewLesson'} margin={'dense'} fullWidth
            id={'newLesson'} label={'New Lesson'} type={'text'} onChange={this.newLessonChangeHandler}
            value={this.state.NewLesson}
        />;

        let courseItems = 0;
        let showLesson = this.state.ShowLesson === 'All' ?
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
                                clickedEdit={this.editCardHandler} clickedDelete={this.deleteLessonHandler}
                                lesson={lesson} course={course} count={everyLesson.count}
                                cardAction={mode.CardAction} text={mode.Text} del={mode.Delete}
                                edit={mode.Edit} name={lesson} value={course} />
                        );
                    });
                });
            })) :
            (Object.keys(showLesson).map((lesson, id) => {
                let everyLesson = showLesson[lesson];
                courseItems++;
                return (
                    <Cards clickedOpenCard={this.openCardHandler} key={lesson + id}
                        clickedEdit={this.editCardHandler} clickedDelete={this.deleteLessonHandler}
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
                    header={mode.Header} clickedCSetting={this.cSettingHandler} disabled={disabled}
                    clickedLSetting={this.lSettingHandler} clickedNightMode={this.nightModeHandler}
                    clickedSignOut={this.signOutHandler} clickedOpenMenu={this.openMenuHandler}
                />
                <main className={classes.Main} style={{ background: mode.Main, minHeight: height }}>
                    <CourseSetting openCSetting={this.state.CSetting} closeCSetting={this.closeCSettingHandler}
                        addCourse={this.addCourseHandler} deleteCourse={this.deleteCourseHandler}
                        disabled={disabled}
                    />
                    <AddCourse closeAddCourse={this.closeAddCourseHandler} openAddCourse={this.state.AddCourse}
                        clickedAdd={this.finalAddCourseHandler} textFieldCourse={newCourseInput}
                    />
                    <Caution openCaution={this.state.Caution} closeCaution={this.closeCautionHandler}
                        clickedYes={this.openDeleteCourseHandler}
                    />
                    <DeleteCourse openDeleteCourse={this.state.DeleteCourse} items={courses}
                        closeDeleteCourse={this.closeDeleteCourseHandler} select={deleteSelected}
                        clickedDelete={this.finalDeleteCourseHandler} disabled={disableDelete}
                        changedDelete={this.selectDeleteHandler}
                    />
                    <LessonSetting openLSetting={this.state.LSetting} closeLSetting={this.closeLSettingHandler}
                        addLesson={this.openAddLessonHandler}
                    />
                    <AddLesson openAddLesson={this.state.AddLesson} closeAddLesson={this.closeAddLessonHandler}
                        clickedAdd={this.addLessonHandler} textFieldLesson={newLessonInput} select={selectCourse}
                        items={courses} changedSelect={this.selectCourseHandler} disabled={disableAdd}
                    />
                    <DeleteLesson openDeleteLesson={this.state.DeleteLesson.show}
                        clickedDelete={this.finalDeleteLessenHandler}
                        closeDeleteLesson={this.closeDeleteLessonHandler}
                    />
                    <AddLessonErrorS snackbarAddLE={this.state.Snackbars.AddLessonError}
                        closeALE={this.closeSnackbarsHandler}
                    />
                    <AddLessonS snackbarAddL={this.state.Snackbars.AddLesson}
                        closeAL={this.closeSnackbarsHandler}
                    />
                    <DeleteLessonS snackbarDeleteL={this.state.Snackbars.DeleteLesson}
                        closeDL={this.closeSnackbarsHandler}
                    />
                    <AddCourseErrorS snackbarAddCE={this.state.Snackbars.AddCourseError}
                        closeACE={this.closeSnackbarsHandler}
                    />
                    <AddCourseS snackbarAddC={this.state.Snackbars.AddCourse}
                        closeAC={this.closeSnackbarsHandler}
                    />
                    <DeleteCourseS snackbarDeleteC={this.state.Snackbars.DeleteCourse}
                        closeDC={this.closeSnackbarsHandler}
                    />
                    <OpenLesson open={this.state.OpenLesson.show} title={this.state.OpenLesson.title}
                        close={this.closeLessonHandler} box0={this.state.OpenLesson.box0}
                        box1={this.state.OpenLesson.box1} box2={this.state.OpenLesson.box2}
                        box3={this.state.OpenLesson.box3} box4={this.state.OpenLesson.box4}
                        box5={this.state.OpenLesson.box5} fav={this.state.OpenLesson.fav}
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