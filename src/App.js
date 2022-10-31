import React from 'react';
import './App.css';
import share from './icons/share.png';
import dotShare from './icons/dot.png';
import profile from './images/wearingglass.png'

function App() {
  console.log(share);
  return (
    <div className="App">
     <main>
      <div className='linktree-page'>
      <div className='lintree-wrapper'>
        <section className='linktree-header'>
        <div className='share'>
          <span><img src={share} alt='share'/></span>
          <span><img src={dotShare} alt='dot-btn'/></span>
        </div>
        <div className='profile-wrapper'>
           <div>
            <img id='profile__img' src={profile}alt='profile'/>
           </div>
        </div>
        </section>
      </div>
      </div>
     </main>
    </div>
  );
}

export default App;
