import React from 'react'
import Gif from '../../Assets/readme.gif'
export default function Overview() {
    return (
        <div className="container" style={{border:'1px solid gray' , borderRadius:10}}>
            <div className="row">
                <div className="col-sm-12" style={{color:'white' , marginTop:10 , marginLeft:10 , fontSize:12 , marginBottom:30}} align="left">
                <i class="fa fa-github-alt" aria-hidden="true" style={{color:'white' , marginRight:5}}></i>ampsteric<span style={{color:'grey'}}>/</span>README<span style={{color:'grey'}}>.md</span>
                </div>
                <div className="col-sm-12">
                <h1 style={{color:'white' , textAlign:'left'}}>𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞👋</h1>
                <hr style={{ width:'100%' , height:0.5 , borderWidth:0 , backgroundColor:'#a0a3a5'}} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p style={{color:'white' , textAlign:'left'}}>Hi, My name is Shashwat Mishra. I am a Sophomore at SRM-IST pursuing my Bachelor's Degree in Computer Science and Engineering. An 18 year old, decoding Life by building scalable Web services for high availability, resilience and security.</p>
                </div>
                <div className="col-sm-6">
                <img src={Gif} style={{width:'100%'}}/>
                </div>
            </div>
            <div className="col-sm-12" style={{color:'white', textAlign:'left'}}>
                <h1>Hello World!! 😃</h1>
                <hr style={{ width:'100%' , height:1 , borderWidth:0 , backgroundColor:'#a0a3a5'}} />
                💬 Ask me about anything an everything. <br/>
                📫 LinkedIn profile: <a  style={{color:'#2085FF'}} href='https://www.linkedin.com/in/shashwat-mishra-699bab194/'>Shashwat Mishra</a><br/>
                🔔 Instagram:-  <a style={{color:'#2085FF'}} href='https://www.instagram.com/_shashwatmishra_/'>_shashwatmishra_</a><br/><br/>
            </div>
        </div>
    )
}
