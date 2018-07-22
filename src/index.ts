import { setup } from '@cycle/run';
import { makeDOMDriver } from '@cycle/react-dom';

const { rerunner, restartable } = require('cycle-restart');

import Main from './components/Main';

function makeDrivers() {
    return {
        react: restartable(makeDOMDriver(document.getElementById('app')), { pauseSinksWhileReplaying: false }),
    };
}

const rerun = rerunner(setup, makeDrivers);
rerun(Main);

if ((module as any).hot) {
    (module as any).hot.accept('./components/Main', () => {
        const { default: newMain } = require('./components/Main');

        rerun(newMain);
    });
}
