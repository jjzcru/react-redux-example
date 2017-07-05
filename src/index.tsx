// tslint:disable-next-line
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {App } from './components/App';
import todoApp from './reducers/index';

let store = createStore(todoApp);

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));