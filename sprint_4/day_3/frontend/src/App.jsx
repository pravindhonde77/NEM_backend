
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import CreateNote from './components/CreateNote';
import AllNotes from './components/Note';


function App() {
  return (
    <div className="App">
      <h1>Notes App</h1>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createnote' element={<CreateNote/>}></Route>
        <Route path='/allnotes' element={<AllNotes/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
