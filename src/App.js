import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { withSuspense } from './hoc/withSuspense'
import Preloader from './components/common/Preloader/Preloader';

const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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
              <Route path='/profile/*' element={withSuspense(ProfileContainer)} />
              <Route path='/dialogues/*' element={withSuspense(DialoguesContainer)} />
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
