import React from 'react';
import Title from './components/Title';
import Pokemon from './components/Pokemon/Pokemon';

function App() {
  return (
    <main className="container my-5">
      <Title 
        content="Pokemon Cards"
      />
      <div className="row">
        <Pokemon />
    </div>
    </main>
  );
}

export default App;
