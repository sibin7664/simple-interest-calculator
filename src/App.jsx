import './App.css'


import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';





function App() {

const[principle,setPrinciple]=useState(0)
const[interest,setInterest]=useState(0)
const[year,setYear]=useState(0)

const[simpleinterest,setsimpleinterest]=useState(0)
const[reset,setreset]=useState()

const[isInvalidprinciple,setisInvalidprinciple]=useState(false)
const[isInvalidinterest,setisInvalidinterest]=useState(false)
const[isInvalidyear,setisInvalidyear]=useState(false)

console.log(principle);

const validateInput=(tag)=>{

  const{name,value}=tag
  console.log(name,value);
  console.log(!!value.match(/^[0-9]*.?[0-9]+ $/)) ;
  if(!!value.match(/^\d*.?[0-9]+$/)){
    if(name=='principle'){
      setPrinciple(value)
      setisInvalidprinciple(false)
    }
    else if(name=='interest'){
      setInterest(value)
      setisInvalidinterest(false)
    }
    else{
      setYear(value)
      setisInvalidyear(false)
    }
  }else{
    if(name=='principle'){
      setisInvalidprinciple(true)

    }
    else if(name=='interest'){
      setisInvalidinterest(true)

    }
    else{
      setisInvalidyear(true)
    }
  }

  console.log(tag);


}

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("clicked");
    if(principle && interest && year){
      setsimpleinterest(principle * interest * year/100)

    }else{
      alert("please fill the form")
    }
  }
  const handlereset=(e)=>{
    console.log("ok");
    setsimpleinterest(0)
    setPrinciple(0)
    setInterest(0)
    setYear(0)

    setisInvalidprinciple(false)
    setisInvalidinterest(false)
    setisInvalidyear(false)
  }

  return (
    <>
    
    <div style={{minHeight:"100vh",width:'900px'}} className="d-flex align-item-center justify-content-center bg-dark p-1  ">
      <div style={{width:"600px"}} className="bg-light p-2 rounded mt-5 mb-5">
      <h2>Simple interest Calculator</h2>
      <p>calculate your simple interest easily</p>
      <div className="bg-warning rounded d-flex  text-light flex-column align-item-center justify-content-center" style={{height:"150px"}} >
        <h1 style={{textAlign:'center'}} >₹ &nbsp;{simpleinterest}</h1>
        <h4 style={{textAlign:'center'}}>Total simple interest</h4>
        
        
      </div>
      <form action="" className="mt-2 " >
      <div  className="mt-1 ">
      <TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} style={{width:'100%',}} id="outlined-basic" label="₹ principle Amount" variant="outlined" />
       
      </div>
      {
        isInvalidprinciple &&
        <p className='text-danger' >invalid principle amount</p>
      }
      <div  className="mt-1 ">
      <TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)} style={{width:'100%'}}  id="outlined-basic" label="Rate" variant="outlined" />
      </div>
      {
        isInvalidinterest &&
        <p className='text-danger' >invalid interest</p>
      }
      <div  className="mt-1 ">
      <TextField name='year' value={year || ""} onChange={e=>validateInput(e.target)} style={{width:'100%'}}  id="outlined-basic" label="Time period" variant="outlined" />
      </div>
      {
        isInvalidyear &&
        <p className='text-danger' >invalid year</p>
      }
      <Stack direction="row" spacing={2} className='p-3'>
       <Button disabled={isInvalidprinciple || isInvalidinterest || isInvalidyear} type='submit' onClick={handleCalculate} className='w-100 bg-dark' variant="contained">Calculate</Button>
       <Button onClick={handlereset} className='w-100' variant="outlined">Reset</Button>
        
      </Stack>
      </form>
      
      </div>

    </div>
    
     
            
            
      
    </>
  )
}

export default App








        