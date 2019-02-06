import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Typography, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

import Menu from './Menu/Menu';

const styles = {
    div: {
        flexGrow: 1
    },
    typography: {
        flexGrow: 1
    }
}

function header(props) {
    const { classes, header, avatar, clickedOpenMenu, ...other } = props;

    return (
        <AppBar style={{background: header}}>
            <Toolbar>
                <Avatar className={classes.avatar}>{avatar}</Avatar>
                <Typography variant={'h6'} color={'inherit'} className={classes.typography}
                    align={'center'} inline={'true'} noWrap={true}
                >Flashcard web Application
                </Typography>
                <IconButton title={'Menu'} aria-label={'Menu'} className={classes.iconbutton}
                    aria-haspopup={'true'} onClick={props.clickedOpenMenu} color={'inherit'}>
                    <MoreVert />
                </IconButton>
                <Menu {...other} />
            </Toolbar>
        </AppBar>
    );
}

export default withStyles(styles)(header);