import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const menu = props => (
    <Menu
        id={'simple-menu'}
        anchorEl={props.Menu}
        open={props.openMenu}
        onClose={props.closeMenu}
        style={{padding: 0, margin: 0}}
    >
        <MenuItem onClick={props.clickedCSetting}>Course setting</MenuItem>
        <MenuItem onClick={props.clickedLSetting}>Lesson setting</MenuItem>
        <MenuItem onClick={props.clickedNightMode}>Night mode</MenuItem>
        <MenuItem onClick={props.clickedSignOut}>Sign out</MenuItem>
    </Menu>
)

export default menu;