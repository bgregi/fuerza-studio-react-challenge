import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupServer } from './services/mirage/server';
import './index.scss';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
    setupServer();
}

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </ BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);
