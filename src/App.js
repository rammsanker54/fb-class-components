import logo from './logo.svg';
import './App.css';
import Nav from './page/nav/nav.js';
import Menu from './menu.js';
import Newsfeed from './newsfeed.js';
 import Profile from './Profile.js';
 import { BrowserRouter} from 'react-router-dom';
 import { Route } from 'react-router-dom';
 import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Nav/>}> </Route><Route path='menu' element={<Menu/>}> </Route>
      <Route path='newsfeed' element={<Newsfeed/>}> </Route>
      <Route path='profile' element={<Profile/>}> </Route>

      <Route path='*' element="page not found 404"> </Route>
      </Routes>
        </BrowserRouter>
   );
}

export default App;
