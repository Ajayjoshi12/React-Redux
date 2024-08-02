import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import Admin from './Admin';
import { Provider } from 'react-redux';
import store from './redux/store';
import Comment from './Comment';


function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Our Redux App</h1>
        <Login />
        <Logout />
        <Admin />
        <Comment/>
      </Provider>

    </>

  );
}

export default App;
