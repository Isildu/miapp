import logo from './logo.svg';
import './App.css';
import useState from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
};
function ListaTareas() {
    const [tareas, setTareas] = useState([]);
    const agregarTarea = () => {
      setTareas([...tareas, `Elemento ${tareas.length + 1}`]);
    };
  

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>    
  );
}
export default App;
