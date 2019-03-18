import React from 'react';
import { number, shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    root: {
        flexGrow: 1,
    },
    bar: {
        height: 18,
    },
};

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        progress: number.isRequired,
        classes: shape({
            root: shape({
                flexGrow: number.isRequired,
            }),
            bar: shape({
                height: number.isRequired,
            }),
        }),
    }

    render() {
        const { classes, progress } = this.props;
        return (
            <div className={classes.root}>
                <LinearProgress variant="determinate"
                    value={progress}
                    className={classes.bar}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ProgressBar);
