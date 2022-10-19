import logo from './logo.svg';
import './App.css';
import Nav from './page/nav/nav.js';
import Menu from './menu.js';
import Newsfeed from './newsfeed.js';
 import Profile from './profile.js';

function App() {
  return ( <div>
    <div> <Nav/></div>
    <div className='flex-menu'>
    <div className='menu'><Menu/></div>
    <div className='news-feed'> < Newsfeed/></div>
    { <div className='request-profile'><Profile/></div> }
    </div>
  </div> );
}

export default App;
