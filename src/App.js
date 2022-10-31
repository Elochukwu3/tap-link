import React from 'react';
import './App.css';
import share from './icons/share.png';
import dotShare from './icons/dot.png';
import camera from './icons/camera.svg';
import git from './icons/git.svg';
import slak from './icons/slack.svg';
import good from './icons/good.svg';
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
          <a href='#' style={{padding:'1rem'}}>
           <img src={slak} alt='slack'/>
          </a>
          <a href='#'style={{padding:'1rem'}}>
           <img src={git} alt='git'/>
          </a>
        </div>
      </div>
      <footer className='link-tree-footer'>
        <div className='link-tree-footer-content'>

      <div style={{display: 'flex', alignItems:'center'}}>
     <h2> Zuri </h2><span style={{background: "#e7332b",
borderRadius: "50%",
display: 'inline-block',
height: '8px',
width: '8px',
margin: '0 .5rem'}}></span> 
<h2>Internship</h2>
      </div>
      <div style={{color:'grey'}}>
      HNG Internship 9 Frontend Task
      </div>
      <div>
        <img src={good} alt='food logo'/>
      </div>
      
      </div>
      </footer>
      </div>
     </main>
    </div>
  );
}

export default App;
