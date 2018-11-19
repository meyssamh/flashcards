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

    addCourseHandler = (props) => {

        swal({
            text: 'Please enter the name of your new course:',
            input: 'text',
            inputPlaceholder: 'New Course',
            showCancelButton: true
        }).then((result) => {
            if (result.value) {
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
                    backdrop: `
                        rgba(255, 0, 0, 0.2)
                    `
                })
            }
        })
    }

    groupeAddHandler = () => {
        // Add Groupe to Groupe
    }

    openGroupeHandler = () => {
        // Open Groupe (window.push or window.location)
    }

    editGroupeHandler = () => {
        // Edit Groupe
    }

    deleteGroupeHandler = () => {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
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
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal({
                    type: 'error',
                    title: 'Cancelled',
                    text: 'Your lesson is safe.',
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

        return (
            <Fragment>
                <Navigationbar username={'Username'} clickedSettings={this.settingsToggleHandler} />
                <Sidebar coursename={this.state.Coursename} clickedAddCourse={this.addCourseHandler} />
                <div className={classes.Groupe}>
                    <input className={classes.Btn} type={'button'} value={'+'} onClick={this.groupeAddHandler} />
                    <Groupe clickedOpenGroupe={this.openGroupeHandler} groupe={this.state.Groupe}
                        clickedEdit={this.editGroupeHandler} clickedDelete={this.deleteGroupeHandler}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Library;