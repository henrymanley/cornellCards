import React from 'react';
import HeaderBar from './HeaderBar'
import GameBox from './GameBox'
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
                <header> <HeaderBar /></header>
                <div className="snowflakes" aria-hidden="true">
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❄
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❄
                    </div>
                    <div className="snowflake">
                        ❅
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❄
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                    <div className="snowflake">
                        ❆
                    </div>
                </div>
                <GameBox />
            </ThemeProvider>
        </div>
        

    );
}
