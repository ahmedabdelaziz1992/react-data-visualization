import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import Container from './container';
import './App.scss';

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Container/>
			</DndProvider>
    </div>
  );
}

export default App;
