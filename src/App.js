import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='app-wrapper' >
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/dialogues/*' element={<DialoguesContainer />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/login/*' element={<Login />} />

            </Routes>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appPage.initialized,
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
