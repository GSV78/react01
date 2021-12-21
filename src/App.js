import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import StoreContex from './StoreContex';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <StoreContex.Consumer>{
        (currentUser) => (
          <Navbar
            state={props.store.getState().navPage}
            userData={currentUser}
          />)
      }
      </StoreContex.Consumer>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={
            <Profile
              store={props.store}
            // state={props.state.profilePage}
            // dispatch={props.dispatch}
            />
          } />
          <Route path='/dialogues/*' element={
            <Dialogues
              store={props.store}
            // state={props.state.dialoguesPage}
            // dispatch={props.dispatch}
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
