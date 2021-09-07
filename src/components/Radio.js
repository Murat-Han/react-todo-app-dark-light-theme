import React from 'react'
import { Radio } from 'semantic-ui-react'

const RadioExampleToggle = ({darkMode,setDarkMode}) => {
    const mystyle={
        display:"flex",
         float:"right",
         padding:"1vh",
       fontWeight:"700"
    }
    return(
        <div style={mystyle}>
           <label onClick={() => setDarkMode(!darkMode)}> Dark Mode <Radio toggle /></label> 
        </div>)
}



export default RadioExampleToggle