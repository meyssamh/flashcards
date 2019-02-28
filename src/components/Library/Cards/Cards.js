import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid, Card, CardActionArea, CardContent, Typography,
    Divider, CardActions, IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        position: 'relative',
        height: 64
    },
    edit: {
        position: 'absolute',
        right: 68,
    },
    delete: {
        position: 'absolute',
        right: 12,
    }
}

function cards(props) {
    const { classes, course, lesson, count, clickedOpenCard, clickedEdit, disabled,
        clickedDelete, cardAction, text, del, edit, name, value, title, ...other } = props;
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={classes.card} style={{ border: 'green' }} {...other}>
                <CardActionArea onClick={clickedOpenCard} style={{ background: cardAction }}
                    name={name} value={value} disabled={disabled} title={title}
                >
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant={'h4'} style={{ color: text }}>
                            {lesson}
                        </Typography>
                        <Typography gutterBottom variant={'h6'} component={'h2'} style={{ color: text }}>
                            {course}
                        </Typography>
                        <Typography gutterBottom variant={'caption'} component={'h2'} style={{ color: text }}
                            children={
                                count === 0 ?
                                    `This lesson is disabled. Please click on edit and add some cards!` :
                                    `${count} Cards`
                            }
                        />
                    </CardContent>
                </CardActionArea>
                <Divider variant="middle" />
                <CardActions className={classes.cardActions} style={{ background: cardAction }}>
                    <IconButton className={classes.edit} title={'Edit'}
                        aria-label={'Edit'} style={{ color: edit }}
                        onClick={clickedEdit}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton className={classes.delete} title={'Delete'}
                        aria-label={'Delete'} style={{ color: del }} value={course}
                        onClick={clickedDelete} name={lesson}
                    >
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(cards);