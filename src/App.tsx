import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos'
import Settings from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users'

// export type AppStateType = {
//   state: RootStateType
//   dispatch: (action: ActionsType) => void 
//   store: StoreType
// }

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div>
      <div className = {classes.Wrapper}>
      <Header/>
      <Navbar/>
      <Route exact path='/dialogs' render={() => <DialogsContainer /> }/>
      <Route exact path='/profile' render={() => <Profile  /> }/>
      <Route exact path='/friends' render={() => <Friends/>}/>
      <Route exact path='/users' render={() => <Users/>}/>
      <Route exact path='/music' render={() => <Music/>}/>
      <Route exact path='/photos' render={() => <Photos/>}/>
      <Route exact path='/settings' render={() => <Settings/>}/>
  </div>
  </div>
  </BrowserRouter>
  );
}



export default App;
