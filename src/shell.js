import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HomePage from './views/home/home-page';
import SettingsPage from './views/settings/settings-page';

import HomePageViewModel from './viewmodel/home';

const viewMap = {
    home: <HomePage model={new HomePageViewModel()} />,
    settings: <SettingsPage />
};

class ShellBase extends React.Component {
    render() {
        const { rootStore: { routerStore } } = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        Hiya
                    </Toolbar>
                </AppBar>
                <RouterView routerStore={routerStore} viewMap={viewMap} />
            </div>
        );
    }
}

export const Shell = inject('rootStore')(ShellBase);