import React , {useState} from 'react'
import './App.css';
import Intro from './Components/Intro/Intro'
// import Tab from './Components/Tab/Tab'
import './Components/Tab/tab.css'
import Card from './Components/Card/Card'
import Project from './Components/Project/Project'
import Holder from './Components/Holder/Holder'
// import { useState } from 'react';
function App() {
const [choice , setchoice] = useState('overview');
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 mr-1 mt-5">
        <Intro />
        </div>
        <div className="col-md-8">
        <div style={{marginTop:30 ,color: '#C8C9CA'}}>
            <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link active"  onClick={(e)=>{e.preventDefault(); setchoice('overview')}}><i style={{marginRight:10}} class="fa fa-address-book-o" aria-hidden="true"></i>

                    overview</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"  onClick={(e)=>{e.preventDefault(); setchoice('projects')}}><i style={{marginRight:10}} class="fa fa-cube" aria-hidden="true"></i>
                    Projects</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" onClick={(e)=>{e.preventDefault(); setchoice('experience')}} ><i style={{marginRight:10}} class="fa fa-industry" aria-hidden="true"></i>
                    Experience</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" onClick={(e)=>{e.preventDefault(); setchoice('contact')}} ><i style={{marginRight:10}} class="fa fa-envelope-o" aria-hidden="true"></i>
                    Contact Me</a>
                      </li>
            </ul>
        </div>        
        
        <Holder show={choice}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
