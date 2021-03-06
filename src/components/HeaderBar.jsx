import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import '../css/App.css';
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));



const Theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto Mon', 'monospace',
        ].join(','),
    },});


function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

class HeaderBar extends React.Component {
    handleClick = () => {
        this.props.history.push("./Join");
    }

    handleClick1 = () => {
        this.props.history.push("./Start");
    }

    handleClick2 = () => {
        this.props.history.push("./Contribute");
    }

    render(props) {
        return (

            <React.Fragment>
                <CssBaseline/>
                <AppBar>
                    <div>
                        <Toolbar>
                            <div style={{minWidth: '300px', display: 'flex', display: 'flex',
                                flexFlow:'row wrap',}}>
                                <Link to ="/">
                                <Typography style={{minWidth: '200px', fontSize: '35px',  float: 'left'}}>Cards Against
                                    Cornellians</Typography>
                                </Link>
                                <ThemeProvider theme={Theme}>
                                    <div style={{
                                        marginRight: '0px',
                                        position: 'absolute', top: '15px',
                                        right: '15px',
                                        minWidth: '400px',
                                        display: 'inline-flex'
                                    }}>
                                        <Link to = "./game">
                                            <Typography variant="h6" style={{
                                                padding: '10px',
                                                display: 'inline',
                                                marginRight: '30px',
                                                minWidth: '20px',
                                                borderRadius: '30px'
                                            }}> <i> Start Game </i></Typography>
                                        </Link>

                                       <Link to="./Join">
                                           <Typography variant="h6" style={{
                                               padding: '10px',
                                               display: 'inline',
                                               marginRight: '30px',
                                               minWidth: '20px',
                                               borderRadius: '30px'
                                           }}> <i>Join Game </i></Typography>
                                       </Link>
                                        <Link to="./Contribute">
                                            <Typography variant="h6" style={{
                                                padding: '10px',
                                                display: 'inline',
                                                minWidth: '20px',
                                                borderRadius: '30px'
                                            }}> <i>Contribute</i></Typography>
                                        </Link>


                                    </div>
                                </ThemeProvider>
                            </div>


                        </Toolbar>
                    </div>
                </AppBar>
                <Toolbar id="back-to-top-anchor"/>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTop>
            </React.Fragment>
        );
    }
}
export default withRouter(HeaderBar);