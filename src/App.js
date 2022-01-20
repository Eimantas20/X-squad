import './App.css';
import SignUp from './Component/landingPage/SignUp';
import react, { useContext } from 'react';
import HomePage from './Component/homePage/Homepage';
import { LoginContext } from './Component/UserContext';

const App = () => {

  const [ logged ] = useContext(LoginContext);

  return (
      <div className="App">
        {!logged 
        ? <SignUp />
        :<HomePage />}
      </div>
  );
}

export default App;
