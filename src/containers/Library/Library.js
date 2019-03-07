import React, { Component, Fragment } from 'react';
import { Grid, MenuItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';

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
import * as actions from '../../store/actions/index';

//TODO: Username's logic must be added!
class Library extends Component {
    state = {
        Menu: null,
        Night: {
            Header: '#263238',
            Main: '#455a64',
            CardAction: '#263238',
            Text: 'white',
            Menu: '#37474f',
            Delete: '#f50057',
            Edit: 'white'
        },
        Day: {
            Header: '#64b5f6',
            Main: 'white',
            CardAction: '#fffde7',
            Text: '#263238',
            Menu: 'white',
            Delete: '#f50057',
            Edit: '#90a4ae'
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
            course: '',
            title: '',
            box0: 0,
            disableBox0: true,
            box1: 0,
            disableBox1: true,
            box2: 0,
            disableBox2: true,
            box3: 0,
            disableBox3: true,
            box4: 0,
            disableBox4: true,
            box5: 0,
            disableBox5: true,
            fav: 0,
            disableFav: true
        },
        ShowLesson: 'All'
    };

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
        if (this.props.Lessons[newCourse]) {
            this.setState({
                Menu: null,
                AddCourse: false,
                CSetting: false,
                Snackbars: {
                    AddCourseError: true
                }
            });
        } else {
            this.props.onAddCourse(newCourse)
            this.setState({
                Menu: null,
                AddCourse: false,
                CSetting: false,
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
        const course = this.state.SelectedCourse;
        this.props.onDeleteCourse(course);
        if (this.state.ShowLesson === course) {
            this.setState({
                Menu: null,
                ShowLesson: 'All',
                CSetting: false,
                Caution: false,
                DeleteCourse: false,
                Snackbars: {
                    DeleteCourse: true
                }
            });
        } else {
            this.setState({
                Menu: null,
                CSetting: false,
                Caution: false,
                DeleteCourse: false,
                Snackbars: {
                    DeleteCourse: true
                }
            });
        }
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
        const lessons = this.props.Lessons;
        const course = this.state.SelectCourse;
        const lesson = this.state.NewLesson;
        const LessonsKey = Object.keys(lessons[course]).map((name) => name);
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
                this.props.onAddLesson(course, lesson)
                this.setState({
                    Menu: null,
                    AddLesson: false,
                    LSetting: false,
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

    openCardHandler = (course, lesson) => {
        const lessons = this.props.Lessons;
        const clickedCourse = lessons[course];
        const clickedLesson = clickedCourse[lesson];
        const zero = {};
        const one = {};
        const two = {};
        const three = {};
        const four = {};
        const five = {};
        const favorite = {};
        let Key = Object.keys(clickedLesson);
        for (Key in clickedLesson) {
            const card = clickedLesson[Key];
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
                course: course,
                title: lesson,
                box0: countCardsHandler(zero),
                disableBox0: countCardsHandler(zero) === 0,
                box1: countCardsHandler(one),
                disableBox1: countCardsHandler(one) === 0,
                box2: countCardsHandler(two),
                disableBox2: countCardsHandler(two) === 0,
                box3: countCardsHandler(three),
                disableBox3: countCardsHandler(three) === 0,
                box4: countCardsHandler(four),
                disableBox4: countCardsHandler(four) === 0,
                box5: countCardsHandler(five),
                disableBox5: countCardsHandler(five) === 0,
                fav: countCardsHandler(favorite),
                disableFav: countCardsHandler(favorite) === 0,
            }
        });
    }

    editCardHandler = (course, lesson) => {
        const lessons = this.props.Lessons;
        const editCourse = lessons[course];
        const editLesson = editCourse[lesson];
        this.props.history.push('/edit');
        this.props.onInitEdit(editLesson, course, lesson);
    }

    deleteLessonHandler = (course, lesson) => {
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
        this.props.onDeleteLesson(course, lesson);
        this.setState({
            DeleteLesson: {
                show: false,
                course: '',
                lesson: '',
            },
            Snackbars: {
                DeleteLesson: true
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

    openLessonHandler = (e) => {
        const lessons = this.props.Lessons;
        const course = lessons[this.state.OpenLesson.course];
        const lesson = course[this.state.OpenLesson.title];
        const number = e.currentTarget.value;
        let selectedBox = {};
        Object.keys(lesson).map(cards => {
            let block = lesson[cards];
            if (block.box === parseInt(number)) {
                return selectedBox = { ...selectedBox, [cards]: block };
            } else {
                return null;
            }
        });
        this.props.onOpenLesson(selectedBox, course, lesson);
        this.props.history.push('/cards');
    }

    openFavoriteHandler = () => {
        const lessons = this.props.Lessons;
        const course = lessons[this.state.OpenLesson.course];
        const lesson = course[this.state.OpenLesson.title];
        let selectedBox = {};
        Object.keys(lesson).map(cards => {
            let block = lesson[cards];
            if (block.favorite) {
                return selectedBox = { ...selectedBox, [cards]: block };
            } else {
                return null;
            }
        });
        this.props.onOpenLesson(selectedBox, course, lesson);
        this.props.history.push('/cards');
    }

    closeLessonHandler = () => {
        this.setState({
            OpenLesson: {
                show: false,
                title: ''
            }
        });
    }

    signOutHandler = () => {
        const lessons = this.props.Lessons;
        this.props.onPostData(lessons);
        //Signout method comes here!
    }

    render() {

        if (this.props.Loading) {
            this.props.onFetchDataStart();
        }

        let menu = this.state.Menu; // to check for opening the menu in header

        let select = this.state.ShowLesson; // to show the lessons groupe

        let selectCourse = this.state.SelectCourse; // to select course for new lesson

        let disableAdd = this.state.SelectCourse === 'None' ? true : false; // disables add button

        let deleteSelected = this.state.SelectedCourse; // to delete the selected course

        let disableDelete = deleteSelected === 'None' ? true : false; // to disable delete button

        let nightMode = this.props.NightMode; // to check for the night mode

        let day = this.state.Day;

        let night = this.state.Night;

        let mode = nightMode ? night : day;

        let err = <div>
            <p>Sorry an Error has occurred:</p>
            <p style={{ color: 'red' }}>{this.props.Error}</p>
            <p>Please Try again later!</p>
        </div>;

        if (this.props.Error.length !== 0) {
            return err;
        }

        let courses = Object.keys(this.props.Lessons)
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
            this.props.Lessons[this.state.ShowLesson];

        let Card = this.state.ShowLesson === 'All' ? // Filter for showing the lesson cards
            (Object.keys(this.props.Lessons).map(course => {
                return [...Array(this.props.Lessons[course])].map(name => {
                    return Object.keys(name).map((lesson, id) => {
                        courseItems++; // to check if we have a lesson!
                        let everyLesson = name[lesson];
                        let count = 0;
                        count = Object.keys(everyLesson).length;
                        // have to use courses to check if there are courses!
                        return (
                            <Cards clickedOpenCard={() => this.openCardHandler(course, lesson)}
                                clickedEdit={() => this.editCardHandler(course, lesson)}
                                clickedDelete={() => this.deleteLessonHandler(course, lesson)}
                                lesson={lesson} course={course} count={count} text={mode.Text}
                                cardAction={mode.CardAction} del={mode.Delete} title={`${lesson} - ${course}`}
                                edit={mode.Edit} disabled={count === 0}
                                key={course + lesson + id}
                            />
                        );
                    });
                });
            })) :
            (Object.keys(showLesson).map((lesson, id) => {
                let everyLesson = showLesson[lesson];
                let count = 0;
                count = Object.keys(everyLesson).length;
                courseItems++;
                return (
                    <Cards clickedOpenCard={() => this.openCardHandler(this.state.ShowLesson, lesson)}
                        clickedEdit={() => this.editCardHandler(this.state.ShowLesson, lesson)}
                        clickedDelete={() => this.deleteLessonHandler(this.state.ShowLesson, lesson)}
                        lesson={lesson} course={this.state.ShowLesson} count={count}
                        cardAction={mode.CardAction} text={mode.Text} del={mode.Delete} edit={mode.Edit}
                        disabled={count === 0} title={`${lesson} - ${this.state.ShowLesson}`}
                        key={lesson + id}
                    />
                );
            }));

        let Study = courses.length === 0 ?
            <p>Please go to ' Menu > Course setting ' and add a Course!</p> :
            courseItems === 0 ?
                <p>Please go to ' Menu > Lesson setting ' and add a Lesson!</p> :
                Card;

        let height = window.innerHeight - 64;

        let content = this.props.Loading ?
            <Circular /> // to show loading at beginning
            :
            <Fragment>
                <Header avatar={'MH'} Menu={menu} openMenu={Boolean(menu)} closeMenu={this.closeMenuHandler}
                    header={mode.Header} clickedCSetting={this.cSettingHandler} disabled={disabled}
                    clickedLSetting={this.lSettingHandler} clickedNightMode={this.props.onNightMode}
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
                        disableBox0={this.state.OpenLesson.disableBox0} clicked0={this.openLessonHandler}
                        disableBox1={this.state.OpenLesson.disableBox1} clicked1={this.openLessonHandler}
                        disableBox2={this.state.OpenLesson.disableBox2} clicked2={this.openLessonHandler}
                        disableBox3={this.state.OpenLesson.disableBox3} clicked3={this.openLessonHandler}
                        disableBox4={this.state.OpenLesson.disableBox4} clicked4={this.openLessonHandler}
                        disableBox5={this.state.OpenLesson.disableBox5} clicked5={this.openLessonHandler}
                        disableFav={this.state.OpenLesson.disableFav} clickedF={this.openFavoriteHandler}
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

const mapStateToProps = state => {
    return {
        Fetched: state.Library.Fetched,
        Lessons: state.Library.Lessons,
        NightMode: state.Library.NightMode,
        Loading: state.Library.Loading,
        Error: state.Library.Error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNightMode: () => dispatch(actions.nightMode()),
        onFetchDataStart: () => dispatch(actions.fetchDataStart()),
        onAddCourse: (course) => dispatch(actions.addCourse(course)),
        onDeleteCourse: (course) => dispatch(actions.deleteCourse(course)),
        onAddLesson: (course, lesson) => dispatch(actions.addLesson(course, lesson)),
        onDeleteLesson: (course, lesson) => dispatch(actions.deleteLesson(course, lesson)),
        onOpenLesson: (block, course, lesson) => dispatch(actions.initBox(block, course, lesson)),
        onPostData: (lessons) => dispatch(actions.postData(lessons)),
        onInitEdit: (lesson, course, lessonName) => dispatch(actions.initEdit(lesson, course, lessonName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);