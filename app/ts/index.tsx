
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import * as promiseMiddleware from "redux-promise";
import appReducers from "./Reducers";
import Router from "./Services/Router";

const storeEnhancer = compose(
	applyMiddleware(
		thunkMiddleware,
		promiseMiddleware
	)
);

const store = createStore(
	appReducers, storeEnhancer
);

//const router = new Router(store);

ReactDOM.render(
	<Provider store={store}>
		<App {...this.props} />
	</Provider>,
	document.getElementById("root")
);

//router.register();
