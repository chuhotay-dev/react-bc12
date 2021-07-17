import './App.css';
import ClassBasedComponent from './CreateComponent/ClassBasedComponent';
import FunctionalComponent from './CreateComponent/FunctionalComponent';

function App() {
  return (
    <div className="App">
      Hello World from App component
      <ClassBasedComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
