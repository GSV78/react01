import './App.css';

const App = () => {
  return (<div className="app-wrapper">
    <header className="header">
      <img className="header__logo" src="https://camo.githubusercontent.com/947c145935a7ddb066a01a4b624c965ce9ea6f4401d4ff18238c1e260644c186/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f656469746f72636f6e6669672e737667" />
    </header>
    <nav className="nav">
      <div className="nav__item">
        <a>Profile</a>
      </div>
      <div className="nav__item">
        <a>Messages</a>
      </div>
      <div className="nav__item">
        <a>News</a>
      </div>
      <div className="nav__item">
        <a>Music</a>
      </div>
      <div className="nav__item">
        <a>Settings</a>
      </div>
    </nav>
    <div className="content">
      <img src="https://avatars.mds.yandex.net/get-zen_doc/3048507/pub_5eb02ef6dadc5a18844cd5fa_5eb02f8f6c15632218123633/scale_1200" />
      <div className="content__user">
        <div className="content__userAva">
          <img src="https://lh3.googleusercontent.com/PjEgzixcJoDC7-aeaVEOX6splcOvnDqlmb-dqtE5LT4kZ2qVSlPhH7SGiXMQWmqKyKs" />
        </div>
        <div className="description">

        </div>
      </div>
      <div className="content__my-post">

      </div>
      <div className="content__new-posts">
        <div className="content__new-post-1">

        </div>
        <div className="content__new-post-2">

        </div>
      </div>
    </div>

  </div>);
}

export default App;
