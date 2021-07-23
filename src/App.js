import './App.css';
import DemoDataBinding from './lesson-1/data-binding/DemoDataBinding';
import ClassBasedComponent from './lesson-1/demo-component/ClassBasedComponent';
import FunctionalComponent from './lesson-1/demo-component/FunctionalComponent';
import Exercise1 from './lesson-1/exercise-component/exercise-1/Exercise1';
import Exercise2 from './lesson-1/exercise-component/exercise-2/Exercise2';
import Exercise3 from './lesson-1/exercise-component/exercise-3/Exercise3';
import ChooseCarColor from './lesson-2/choose-car-color/ChooseCarColor';
import DemoConditionalRendering from './lesson-2/conditional-rendering/DemoConditionalRendering';
import DemoHandlingEvents from './lesson-2/handling-events/DemoHandlingEvents';
import DemoListsAndKeys from './lesson-2/lists-and-keys/DemoListsAndKeys';
import DemoState from './lesson-2/state/DemoState';
import DemoStylingComponent from './lesson-2/styling-component/DemoStylingComponent';

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
        {/* <DemoHandlingEvents /> */}

        {/* Conditional Rendering */}
        {/* <DemoConditionalRendering /> */}

        {/* State */}
        {/* <DemoState /> */}

        {/* Styling Component */}
        {/* <DemoStylingComponent /> */}

        {/* Choose Car Color */}
        {/* <ChooseCarColor /> */}

        {/* Lists And Keys */}
        <DemoListsAndKeys />

    </div>
  );
}

export default App;
