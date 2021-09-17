import { useCallback, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import shortid from 'shortid';
import produce from 'immer';
import { SideBar } from './components/SideBar';
import { Layout } from './components/Layout';

function App() {
  const [formFields, setFormFields] = useState([]);

  const moveItem = useCallback(
    item => {
      setFormFields(
        produce(draft => {
          draft.push({
            ...item,
            id: shortid.generate(),
          });
        })
      );
    },
    [setFormFields],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="flex min-h-screen">
          <Layout moveItem={moveItem} formFields={formFields} />
          <SideBar />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
