import React from 'react';

export default function App(){
  return(
    <div>
      <Cabecalho/>
      <Texto/>
      <Cabecalho/>

    </div>
  )
}


export function Cabecalho(){
  return(
    <div
    style={{
      backgroundColor:'red',
      height:'20vh'
    }}>
  
    </div>
  )
}


export function Texto(){
  return(
    <div
    style={{
      paddingBottom:'20vh',
      paddingTop:'20vh'
    }}>
    <h1>Tricolor</h1>
  </div>
  )
}