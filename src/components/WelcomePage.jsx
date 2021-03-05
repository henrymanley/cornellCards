import React from 'react';
import AppBar from './HeaderBar'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

export default function WelcomePage() {

    const Theme = createMuiTheme({
        typography: {
            fontFamily: [
                'DotGothic16', 'sans-serif',
            ].join(','),
        },});

    return (
        <div>
            <ThemeProvider theme={Theme}>
                <AppBar />
            </ThemeProvider>
        </div>

    );
}
