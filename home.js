import React from 'react'
import './home.css'

function HOME() {
  return (
    <div>
            <h1 style={{textAlign:"center"}}>Case-Converter</h1>
         <div id='main'>
        <div id='input1' >
         <input />
        </div>
        <div id='input'>
         <button id='camel'>camelCase</button>
         <button id='pascal' >PascalCase</button>
         <button id='snake' >snake_case</button>
         <button id='kebab' >kebab-case</button>
        </div>
        <div id='input2'>
           <input />
        </div>
        </div>
    </div>
  )
}

export default HOME