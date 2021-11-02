import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Chats from './components/Chats/Chats'
import { Route} from 'react-router'; 
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className = 'app-wrapper-content'>
      <Route path = '/profile'  component = {Profile}/>
      <Route path = '/chats'  component = {Chats}/>
      <Route path = '/news' component = {News}/>
      <Route path = '/music' component = {Music}/>
      <Route path = '/settings' component = {Settings}/>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

