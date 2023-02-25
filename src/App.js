import './App.css';
import { FamilyDetailsContainer, SidePanel } from './components';
import { SelectionContext, TreeStateContext } from './contexts';



function App() {

  return (
    <div id='App' >
      <TreeStateContext>
        <SelectionContext>
          <SidePanel/>
          <FamilyDetailsContainer/>
        </SelectionContext>
      </TreeStateContext>
    </div>
  );
}

export default App;