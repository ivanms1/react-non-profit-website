import './App.css';
import React from 'react';


function PageOne(props){
    return  <div className='pageOne'>
                <h1 className='title'>Uniskript</h1>
                <div className="tribes">
                    <button onClick={()=>props.toWebsite()} className='continueBtn'>Akha</button>
                    <button onClick={()=>props.toWebsite()} className='continueBtn'>Lahu</button>
                    <button onClick={()=>props.toWebsite()} className='continueBtn'>English</button>
                    <button onClick={()=>props.toWebsite()} className='continueBtn'>Mandarin</button>
                </div>
            </div>
}

export default PageOne