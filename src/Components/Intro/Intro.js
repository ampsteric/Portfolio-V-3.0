import React from 'react'
import Dp from '../../Assets/cartoon.jpeg'
export default function Intro() {
    return (
        <div className="container" style={{width:350}}>
            <img src={Dp} style={{borderRadius:"50%" , height:250 , width:250 , border:'1px solid white' , align:'left'}} />
            <h1 style={{textAlign:'left' , color:'white'}}>Shashwat Mishra</h1>
            <h4 style={{textAlign:'left', color:'white'}}>ampsteric</h4>
            <p style={{textAlign:'left', color:'white'}}>WebDeveloper | Technical Head at <br/> @SRM-HackerEarth | Technical <br/> member at @DSC-SRM | Web designer<br/> at @WebarchClub</p>
            <button type="button" class="btn btn-secondary" style={{width:300 ,marginBottom:10}}>View Github</button>
            <br />
            <div style={{textAlign:'left'}}>
            <i class="fa fa-map-marker" aria-hidden="false" style={{color:'#C8C9CA', fontWeight:10}}></i> <span style={{color:'white'}}>India</span>
            <br/>
            <i class="fa fa-link" aria-hidden="false" style={{color:'#C8C9CA' , fontWeight:10}}></i> <span style={{color:'white'}}>http://shashwat-mishra.surge.sh/</span>
            </div>
            <hr style={{ width:'100%' , height:1 , borderWidth:0 , backgroundColor:'#a0a3a5'}} />
            <h4 style={{textAlign:'left', color:'white'}}>Highlights</h4>
            <div style={{textAlign:'left'}}>
            <i class="fa fa-snowflake-o" aria-hidden="false" style={{color:'#C8C9CA' , fontWeight:10}}></i> <span style={{color:'white'}}>Arctic Code Vault Contributor</span>
            <br/>
            {/* <i class="fa fa-link" aria-hidden="false" style={{color:'white'}}></i> <span style={{color:'white'}}>http://shashwat-mishra.surge.sh/</span> */}
            </div>

        </div>
    )
}
