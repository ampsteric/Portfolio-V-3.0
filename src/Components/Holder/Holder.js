import React from 'react'
import Overview from '../Overview/Overview'; 
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact'
export default function Holder(props) {
    
    if(props.show=='overview'){
        return(
            <Overview />
        )    
    }
    else if(props.show=='experience'){
        return(
            <Experience />
        )    
    }
    else if(props.show=='projects'){
        return(
            <Projects />
        )    
    }
    else if(props.show=='contact'){
        return(
            <Contact />
        )    
    }
}
