import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import App from '../components/App';
import rootReducer from '../reducers/index';
