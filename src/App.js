
import React from 'react';
import './App.css';
import dotShare from './icons/dot.png';
import camera from './icons/camera.svg';
import share from './icons/share.png';
import git from './icons/git.svg';
import slak from './icons/slack.svg';
import good from './icons/good.svg';
import profile from './images/wearingglass.png';
import Button from './Button';

function App() {
  const shareLink= async(url)=>{
    try {
      await navigator.share({link:url, text:'thanks'})
    } catch (error) {
    
    }
  };

  return (
    <div className="App">
     <main>
      <div className='linktree-page'>
      <div className='lintree-wrapper'>
        <section className='linktree-header'>
        <div className='share' data={'share'}>
          <span className='share-icon-upper'><img src={share} alt='share' /></span>
          <span className='share-two'><img src={dotShare} alt='dot-btn'/></span>
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
            
          <Button shareSocial={shareLink}altn={'tweet'}name={"Twitter"} link={'https://twitter.com/romauld_j'} ide={"twitter"} attr={"Redirect to my twitter page"}/>
          <Button shareSocial={shareLink} altn={'for coders'}name={"Zuri Coders Meet"} link={'http://training.zuri.team/'} ide={"btn__zuri"} attr={"Welcome to Zuri"}/>
          <Button shareSocial={shareLink} altn={'discover more'}name={"Discover More About Zuri Book"} link={'https://books.zuri.team'} ide={"books"} attr={"Discover more about zuri books. With premium and more free books to grab"}/>
          <Button shareSocial={shareLink} altn={'phthone'}name={"Python Book for Beginners"} link={'https://books.zuri.team/python-for-beginners?ref_id=<romauld>'} ide={"book__python"} attr={"Checkout the renowned zuri python books. Perfectly for beginners"}/>
          <Button shareSocial={shareLink} altn={'pitch'}name={"Zuri Tech-Haunt"} link={'https://background.zuri.team'} ide={"pitch"} attr={"Feel the experience of collaboration. Visit the zuri community program"}/>
          <Button shareSocial={shareLink} altn={'tweet'}name={"Free UI Design Book"} link={'https://books.zuri.team/design-rules'} ide={"book__design"} attr={"Be the best designer!!!, Grab a copy and be a legendary designer"}/>
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
