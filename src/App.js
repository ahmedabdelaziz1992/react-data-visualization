import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import Main from './example';
import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Main/>
			</DndProvider>
    </div>
  );
}

export default App;
