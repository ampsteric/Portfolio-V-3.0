import React from 'react'
export default function Card(props) {
    return (
        <div className="container" style={{border:'1px solid white' , borderRadius:10 , width:300 , padding:'10px 50px'}}>
            <div className="row">
                <div className="col-sm-2">
                    {
                        (props.ext=='svg')?
                        <img style={{width:50}} src={require(`C:/Users/SHASHWAT/Desktop/portfolio/src/Assets/${props.name}.svg`).default} />

                        :
                        <img style={{width:50}} src={require(`C:/Users/SHASHWAT/Desktop/portfolio/src/Assets/${props.name}.png`).default} />

                    }
                </div>
                <div className="col-sm-8 ml-4" style={{textAlig:'left' , alignItems:'left'}} align='left' >
                <h6 style={{textAlig:'left' , color:'white'}}>{props.title}</h6>
                </div>
                </div>
                <p style={{color:'#C8C9CA' , fontSize:12}}>dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea </p>
                {/* <div> */}
                {/* <button type="button" class="btn btn-secondary float-left">Secondary</button> */}
                {/* </div> */}
        </div>
    )
}
