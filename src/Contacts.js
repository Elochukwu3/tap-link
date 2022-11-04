import React from 'react'
import  "./Form.css"
export default function Contacts() {
  return (
    <div className='form-container'>
        <div className='form-inner'>
        <div className='form-wrapper'>
            <div className='form-cont'>
                <div className='form-content'>
                <section className='header'>
                    <div className='contact-header'>Contact Me</div>
                    <div className='support'>Hi there, contact me to ask me about anything you have in mind</div>
                </section>
                <form>
                    <div className='formTag'>
                            <div className='name'>
                                <span className='fullname'>
                                <label htmlFor={"first_name"}>Full name</label>
                                <input type={"text"} id={"first_name"}/>
                                </span>
                                <span className='lastname'>
                                <label htmlFor={"last_name"}>Last name</label>
                                <input type={"text"} id={"last_name"}/>
                                </span>
                            </div>
                            <div className='email'>
                                <p><label htmlFor={"email"}>Email</label></p>
                                <input type={"email"} id={"email"} placeholder={"yourname@email.com"}/>
                               
                            </div>
                            <div className='textArea' style={{width: "100%"}}>
                                <p><label htmlFor='message'>Message</label></p>
                                <textarea className='text-area' id={"message"}placeholder='Send me a message and i will reply you as soon as possible'/>
                            </div>
                            <div className='checkBox'>
                                <input type={"checkbox"}/>
                                <span style={{color: "#344054"}}> To providing your data who you may contact you</span>
                            </div>
                            <div style={{width:"100%"}}>
                                <button type='submit' id='btn__submit'> Send message</button>
                            </div>
                    </div>
                </form>
                </div>
    
            </div>

        </div>
        </div>
    </div>
  )
}

