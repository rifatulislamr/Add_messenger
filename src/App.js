import React, { Component } from 'react';
import './App.css';
import { MessengerChat } from "react-messenger-chat-plugin";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Welcome to Agro Dairy Firm</h2>
          <h3>Provider RIFATUL ISLAM RIAD</h3>
          <h4>change </h4>
        </div>
        <MessengerChat
    pageId="455120307946675"
    language="English"
    themeColor={"#000000"}
    bottomSpacing={20}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;