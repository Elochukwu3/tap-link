import React from 'react';
import share from './icons/share.png';

export default function Button({name, attr, altn, link, ide, shareSocial}) {
  return (<div className='linktree-content' data={attr}>
              <div>
            
              <a href={link}  className='link-items' id={ide} onClick={()=>shareSocial(link)}>
              <span></span>
                {name}
              <span>
                <img src={share} alt={altn} className='share-icon'/>
              </span>
                </a>
            </div>
            </div>
  )
}
