import * as React from "react";
import { render } from "react-dom";
import "@styles/index.scss";
import App from "./App";

import { Provider } from 'react-redux';
import configureStore from './configureStoreRedux';

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);