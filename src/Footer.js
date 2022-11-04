import React from 'react'
import good from './icons/good.svg';

export default function Footer() {
  return (
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
  )
}
