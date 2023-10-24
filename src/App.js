import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Map from './components/Dashboard/Map';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar';
import Test from './components/Dashboard/Test';
import Test2 from './components/Dashboard/Test2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

{/* <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
            <Router>
            <Navbar/>
            <Routes>
            <Route path='' element = {<Landing/>}/>

              <Route path='/dashboard' element = {<Dashboard/>}/>
            </Routes>
            </Router>
        </div>
    </ThemeProvider> */}

function App() {
  return (
      <div className="App">
            <Router>
            <Navbar/>
            <Routes>
              <Route path='' element = {<Landing/>}/>
              <Route path='/dashboard' element = {<Dashboard><Map/></Dashboard>}/>
              <Route path='/test' element = {<Test/>}/>
              <Route path='/test2' element = {<Test2/>}/>
            </Routes>
            </Router>
        </div>
  );
}

export default App;
