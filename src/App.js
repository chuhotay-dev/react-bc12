import './App.css';
import DemoDataBinding from './lesson-1/data-binding/DemoDataBinding';
import ClassBasedComponent from './lesson-1/demo-component/ClassBasedComponent';
import FunctionalComponent from './lesson-1/demo-component/FunctionalComponent';
import Exercise1 from './lesson-1/exercise-component/exercise-1/Exercise1';
import Exercise2 from './lesson-1/exercise-component/exercise-2/Exercise2';
import Exercise3 from './lesson-1/exercise-component/exercise-3/Exercise3';
import DemoHandlingEvents from './lesson-2/handling-events/DemoHandlingEvents';

function App() {
  return (
    <div className="App">
        {/* Demo component */}
        {/* <ClassBasedComponent /> */}
        {/* <FunctionalComponent /> */}

        {/* Exsercise 1 - Component */}
        {/* <Exercise1 /> */}

        {/* Exsercise 2 - Component */}
        {/* <Exercise2 /> */}

        {/* Exsercise 3 - Component */}
        {/* <Exercise3 /> */}

        {/* Data Binding */}
        {/* <DemoDataBinding /> */}

        {/* Handling Events */}
        <DemoHandlingEvents />
    </div>
  );
}

export default App;
