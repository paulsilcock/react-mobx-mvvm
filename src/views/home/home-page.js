import React from 'react';

import { observer } from 'mobx-react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});

export class HomePage extends React.Component {

    render() {
        const { classes, model } = props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                        Home
                </Typography>
                    <Typography component="p">
                        This is the homepage
                </Typography>
                </Paper>
                <form>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={model.text}
                        margin="normal"
                    />
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);
