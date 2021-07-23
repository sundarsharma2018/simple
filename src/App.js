import HomeScreen from "./Screens/HomeScreen";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App"> 
    <Route path="/" component={HomeScreen} exact />
    </div>
    </BrowserRouter>
  )
}

export default App
