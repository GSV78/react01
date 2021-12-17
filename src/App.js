import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.navPage} userData={props.state.currentUser} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={
            <Profile
              state={props.state.profilePage}
              userData={props.state.currentUser}
              dispatch={props.dispatch}
            />
          } />
          <Route path='/dialogues/*' element={
            <Dialogues
              state={props.state.messagesPage}
              dispatch={props.dispatch}
            />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/settings/*' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
