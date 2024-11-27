import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordlength] = useState(15)
  const [upperCase, setUppercase] = useState(true)
  const [lowerCase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [error, setError] = useState({})

  const generatePassword = () => {
    setError({});
    if(!upperCase && !lowerCase && !symbols){
      return setError("The password is not valid")
    }
    if(passwordLength === "0"){
      return setError(" The password length cannot be zero")
    }
    if(passwordLength === "")
      return setError(" The password length cannot be empty")
  
    if(passwordLength === "30")
      return setError("The password can not be exceed to 30 characters")

    let password = ""
    for(let i =0; i<passwordLength; i++){
      let choice = random(0,3)
      if(lowerCase && choice == 0){
        password += randomLower()
      }
      else if (upperCase && choice == 1){
        password += randomUpper()
    }
      else if (symbols && choice == 2){
        password += randomSymbols()
      }
      else if(numbers && choice == 3){
        password += random(0,9)
      }
      else{
        i--
      }
      
    }
  setPassword(password)
}

  const random = (min =0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  };

  const randomLower = () => {
    return String.fromCharCode(random(97,122))
  };

  const randomUpper =  () => {
    return String.fromCharCode(random(65,90))
  };
  const randomSymbols = ()  =>{
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };
  
  useEffect ( () =>{
    generatePassword(), []
  })


  return (
    <>
    
    <span>Password Generator</span>
    <div className='password'>
    <div>{password}</div>
    <button className='copy' onClick={() => navigator.clipboard.writeText(password)}>copy</button>
    </div>

    <div className='container'>
      <div className='subContainer'>
        <div className='option'>
          <label> Password length </label>
          <input
          type= "number" name='length' min={4} max={50} defaultValue={passwordLength} onChange={(e) => setPasswordlength(e.target.value)}>
          </input>
        </div>
      </div>
    </div>
  
    
     
    </>
  )
}

export default App
