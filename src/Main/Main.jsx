import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './../App.css';
import Profile from './Profile/Profile';
import Dialogues from './Dialogues/Dialogues';


const Main = () => {
    return (
      <BrowserRouter>
        <Route path='/profile' component={Profile}/>
        <Route path='/messages' component={Dialogues} />
      </BrowserRouter>
    )
  }

  export default Main;