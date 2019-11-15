import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#6666' }}>
      <div className="Box" style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ccc' }}>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
      </div>

      <div className="Box2" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#6525' }}>
        <div>flex</div>
        <div>direction</div>
        <div>column</div>
      </div>

      <div className="Box3" style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: '#cee' }}>
        <div>flex</div>
        <div>direction</div>
        <div>row-reverse</div>
      </div>

      <div className="Box2" style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#c43' }}>
        <div>FlewWrap</div>
        <div>Wrap</div>
        <div>Quebra de linha</div>
      </div>
    </div>

  );
}

export default App;
