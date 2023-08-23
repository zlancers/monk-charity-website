import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
          Chakra UI is already enabled
        </p>
        <Button colorScheme='blue'>Get Started</Button>
      </header>
    </div>
  );
}

export default App;
