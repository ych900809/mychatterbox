import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      server: 'http://52.78.213.9:3000/messages',
      allData:null,
      sendText:null,
      fetch:null,
    }
    this.initChatterbox = this.initChatterbox.bind(this)
  }
  
  initChatterbox(){
    // this.state.server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === xhr.DONE){
        if(xhr.status === 200 || xhr.status === 201){
          console.log(xhr.responseText)
        }else{
          console.error(xhr.responseText);
        }
      }
    }
    xhr.open('GET', this.state.server)
    xhr.send()
    console.log(this.state.alldata)
    this.setState({alldata:xhr.responseText})
    // setInterval(() => {
    //   xhr.open('GET', this.state.server);
    //   xhr.send();
    // }, 5000);
  }

  render() {

    this.initChatterbox()
    
    if(this.state.allData){
      return (
        <div className="App">

        <h1 className="mainName">chatterbox</h1>
        
        <div id="roomname"> 
          <span id="room">roomname <input id="bringRoom" type="text"></input></span>
        </div>

        <div id="chats">
          this is textBox
        </div>

        <div id="username">
          <span id="chatText">
            <span id="room">
              <span>Roomname:</span>
              <select id="selectBox"></select>
            </span>
            <span className="userna">
              Username: <input id="nameBox" type="text"></input>
            </span>
            <span className="textInput">
              <span className="chatTextInput">Chat: 
                <input id="inputBox" type="text"></input>
              </span>
              <button id="send" value="send">send</button>
            </span>
          </span>
        </div>
      </div>
      );
    }else{
      return(
        <div>It's on loading</div>
      );
    }
  }
}

export default App;
