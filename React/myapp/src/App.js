import './App.css';
import TableFormat from './Components/TableFormat';
import D from './Components/D';
import ConsumerContext from './Components/ConsumerContext';
import UserContext from './Components/UserContext';
import ProviderContext from './Components/ProviderContext';
import ChildComponent from './Components/ChildComponent';
import FCounter from './Components/FCounter';
import FCounterBoth from './Components/FCounterBoth';
import ParentComponent from './Components/ParentComponent';
import FParentContext from './Components/FParentContext';
import ComponentLifeCycle from './Components/ComponentLifeCycle';
import TitleChange from './Components/TitleChange';
import Parent from './Components/Parent';
import A from './Components/A';

function App() {
  return (
    <div className="App">
        <UseRefHook1/>
    </div>
  );
}
export default App;