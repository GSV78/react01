import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';

const App = () => {
  console.log('App');
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogues/*' element={<DialoguesContainer />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/users/*' element={<UsersContainer />} />
          <Route path='/settings/*' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
