import React from 'react';
import './App.css';
import share from './icons/share.png';
import dotShare from './icons/dot.png';
import camera from './icons/camera.svg';
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
          <span className='share-icon-upper'><img src={share} alt='share'/></span>
          <span><img src={dotShare} alt='dot-btn'/></span>
        </div>
        <div className='profile-wrapper'>
           <div  className='profile-inner' cam={camera}>
            <img id='profile__img' src={profile}alt='profile'/>
            <span className='camera'>
            <img src={camera} alt='camera' style={{color:'transparent'}}/>
            </span>
           </div>
           <h2 id='twitter'>romauld</h2>
           <div id='slack' style={{display: 'none'}}>romauld</div>
        </div>
        </section>
        <section className='lintree-section'>
          <div className='lintree-wrap'>
          <div className='linktree-content'>
            <div>
            
              <a href='#'  className='link-items'>
              <span></span>
                Twitter
              <span>
                <img src={share} alt='share inner' className='share-icon'/>
              </span>
                </a>
            </div>
          </div>
          </div>
        </section>
        <div>
          <a>
           <img src=''/>
          </a>
        </div>
      </div>
      <footer className='link-tree-footer'>

      </footer>
      </div>
     </main>
    </div>
  );
}

export default App;
