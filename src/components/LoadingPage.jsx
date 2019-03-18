import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const style = {
    body: {
        maxHeight: '3000px',
        backgroundColor: '#0078CC',
        display: 'block',
        height: '120vh',
    },
};

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 50,
    },
});

function LoadingPage(props) {
    const { classes } = props;
    return (
        <div style={style.body}>
            <CircularProgress className={classes.progress} color='primary' size={150} />
        </div>
    );
}

LoadingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPage);