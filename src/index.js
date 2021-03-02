import './index.css';
import state, {subscribe} from './redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, sendMessage, updateNewMessage} from './redux/State';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessage={updateNewMessage}/>
    </BrowserRouter>,document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);