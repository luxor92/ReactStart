import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Settings  from "./components/Settings/Settings";
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogs"
              render={ () => <Dialogs state={props.state.dialogsPage}  sendMessage={props.sendMessage} updateNewMessage={props.updateNewMessage}/>} />
          <Route path="/Profile" 
              render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
          <Route path="/News" render={ () => <News />} />
          <Route path="/Music" render={ () => <Music />} />
          <Route path="/Settings" render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
