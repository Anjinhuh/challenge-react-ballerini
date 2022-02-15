import React from 'react';

import linkedin from './img/linkedin.svg'
import discord from './img/discord.svg'
import facebook from './img/facebook.svg'

import logo from './img/balledevlogo.svg'
import programador from './img/meninoProg.svg'

import blobs from './img/blobs.svg'

import './App.css';

function App() {
  return (
    <div className="App grid-template">
      <div className='blobs'>
        <img src={blobs} />
      </div>
      <header>
        <div className='icones'>
          <img src={linkedin} />
          <img src={discord} />
          <img src={facebook} />
        </div>
        <div className='logo'>
          <img src={logo} />            
        </div>
      </header>
      <main>
        <h1>O maior banco de devs do Brasil</h1>
        <p>Nao importa se front ou back end, fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
        <button>Entre agora</button>
      </main>
      <div className='programador'>
        <img src={programador} />
      </div>
    </div>
  );
}

export default App;
