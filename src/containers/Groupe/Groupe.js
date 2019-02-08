import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './Groupe.css';
import Progressbar from '../../components/Groupe/Progressbar/Progressbar';
import Boxes from '../../components/Groupe/Boxes/Boxes';
import axios from '../../axios-orders';

//FIXME: New Style must be done!
//FIXME: Correct css from buttons and boxes!

class Groupe extends Component {
    state = {
        Course: 'IT', // we get this value from Library.js
        Lesson: 'Java', // we get this value from Library.js
        Zero: {},
        One: {},
        Two: {},
        Three: {},
        Four: {},
        Five: {},
        Favorite: {},
        Loading:false,
        Error: ''
    }

    //TODO: Progressbar counting must be done!

    componentDidMount() {
        this.loadLesson();
    }

    loadLesson = () => {
        return axios.get('/Lessons').then(
            response => {
                const data = { ...response.data };
                const course = { ...data[this.state.Course] }; // the course that user want to learn
                const lesson = { ...course[this.state.Lesson] }; // the lesson that user want to learn
                const cards = { ...lesson.cards };
                const zero = {};
                const one = {};
                const two = {};
                const three = {};
                const four = {};
                const five = {};
                const favorite = {};
                let Key = Object.keys(cards);;
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
                this.setState({
                    Zero: zero,
                    One: one,
                    Two: two,
                    Three: three,
                    Four: four,
                    Five: five,
                    Favorite: favorite,
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

    countCardsHandler = (obj) => {
        let count = Object.keys(obj);
        return count.length;
    }

    addCardHandler = () => {
        // Add Card to Groupe
    }

    doneHandler = () => {
        // Done and going back to Library
    }

    openBox0Handler = () => {
        // Open Box 0
        console.log('box0');
    }

    openBox1Handler = () => {
        // Open Box 1
        console.log('box1');
    }

    openBox2Handler = () => {
        // Open Box 2
        console.log('box2');
    }

    openBox3Handler = () => {
        // Open Box 3
        console.log('box3');
    }

    openBox4Handler = () => {
        // Open Box 4
        console.log('box4');
    }

    openBox5Handler = () => {
        // Open Box 5
        console.log('box5');
    }

    openFavHandler = () => {
        // Open Fav
        console.log('boxF');
    }

    render() {

        let err = <div>
            <p>Sorry an Error has occurred:</p>
            <p style={{ color: 'red' }}>{this.state.Error}</p>
            <p>Please Try again later!</p>
        </div>;

        if (this.state.Error.length !== 0) {
            return err;
        }

        const add = <FontAwesomeIcon icon={faPlus} />;

        let content= {};

        if (this.state.Loading === false) {
            content = <div className={classes.Groupe}>
                <button className={classes.Btn} title={'Add card'} onClick={this.addCardHandler}>{add}</button>
                <button className={classes.Done} onClick={this.doneHandler}>Done!</button>
                <div className={classes.Text}>{this.state.Lesson}</div> {/* title */}
                <div className={classes.Box}>
                    <div className={classes.Boxes}>
                        <Boxes clickedBox0={this.openBox0Handler} clickedBox1={this.openBox1Handler}
                            clickedBox2={this.openBox2Handler} clickedBox3={this.openBox3Handler}
                            clickedBox4={this.openBox4Handler} clickedBox5={this.openBox5Handler}
                            clickedFav={this.openFavHandler} count0={this.countCardsHandler(this.state.Zero)}
                            count1={this.countCardsHandler(this.state.One)}
                            count2={this.countCardsHandler(this.state.Two)}
                            count3={this.countCardsHandler(this.state.Three)}
                            count4={this.countCardsHandler(this.state.Four)}
                            count5={this.countCardsHandler(this.state.Five)}
                            countF={this.countCardsHandler(this.state.Favorite)} />
                    </div>
                    <div className={classes.Progress}>
                        <Progressbar width={'50%'} percent={'counting the percent!'} />
                    </div>
                </div>
            </div>
        }

        return (
            content
        );
    }
}

export default Groupe;