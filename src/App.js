
import './App.css';
import Home from './Pages/Home/HomePage';
import About from './Pages/About/AboutPage';
import Contact from './Pages/Contact/ContactPage';
import Nav from './Component/Nav';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   <Nav />
   <div className="container">
   <Route exact={true} path="/" component={Home} />


   </div>
    </div>
  );
}

export default App;
