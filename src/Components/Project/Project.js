import React from 'react'
import Poly from '../../Assets/1.png'
import Poly2 from '../../Assets/poly2.PNG'
export default function Project(props) {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-6">
                <h3 style={{color:'#58A6FF' , textAlign:'left'}}>{props.name}</h3>
                <p style={{color:'#C8C9CA' , fontWeight:10, fontSize:15 ,  textAlign:'left'}}>{props.desc}</p>
                <div className="row">
                <div className="col-sm-1">
                {
                    (props.lang=="HTML")?
                    <div style={{backgroundColor:'#E34C26' , borderRadius:20 , width:20 , height:20}}></div> 
                    :
                    <div style={{backgroundColor:'#F1E05A' , borderRadius:'50%', width:20 , height:20}}></div>

                }
                </div>
                <div className="col-sm-10" align='left'>
                {
                    (props.lang=="HTML")?
                    <h6 style={{fontSize:15 , color:'#C8C9CA' , fontWeight:10}}>HTML</h6>                    :
                    <h6 style={{fontSize:15 , color:'#C8C9CA' , fontWeight:10}}>Javascript</h6>                    

                } 
                </div>
            </div>
            </div>

            <div className="col-sm-6" align="right">
            <button type="button" class="btn btn-secondary" style={{width:100}}>Visit</button>
            <br/>
            {
                    (props.lang=="HTML")?
                    <img src={Poly} style={{marginTop:20}} />:
                    <img src={Poly2} style={{marginTop:20}} />   
                } 
            </div>
            <hr style={{ width:'100%' , height:1 , borderWidth:0 , backgroundColor:'#a0a3a5'}} />

            </div>
        </div>
    )
}
