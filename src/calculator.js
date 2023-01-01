import React, { useState } from 'react';
import { FiDelete } from "react-icons/fi";

export default function Calculator() {

  const [value, updateValue] = useState('0');
  const [color,updateColor]=useState('#898E8C');
  const [logoColor,updateLogoColor]=useState('white');


  const one = () => {
    if (value === '0') {
      updateValue('1')
    } else (
      updateValue(value + '1')
    )
  }
  const two = () => {
    if (value === '0') {
      updateValue('2')
    } else (
      updateValue(value + '2')
    )
  }
  const three = () => {
    if (value === '0') {
      updateValue('3')
    } else (
      updateValue(value + '3')
    )
  }
  const four = () => {
    if (value === '0') {
      updateValue('4')
    } else (
      updateValue(value + '4')
    )
  }
  const five = () => {
    if (value === '0') {
      updateValue('5')
    } else (
      updateValue(value + '5')
    )
  }
  const six = () => {
    if (value === '0') {
      updateValue('6')
    } else (
      updateValue(value + '6')
    )
  }
  const seven = () => {
    if (value === '0') {
      updateValue('7')
    } else (
      updateValue(value + '7')
    )
  }
  const eight = () => {
    if (value === '0') {
      updateValue('8')
    } else (
      updateValue(value + '8')
    )
  }
  const nine = () => {
    if (value === '0') {
      updateValue('9')
    } else (
      updateValue(value + '9')
    )
  }
  const zero = () => {
    if (value === '0') {
      updateValue('0')
    } else (
      updateValue(value + '0')
    )
  }
  const ac = ()=>{
    updateValue('0')
  }
  const percent = () => {
    if (value !== '0') {
      updateValue( value + '%')
    } else (
      updateValue('0')
    )
  }
  const divide = () => {
    if (value !== '0') {
      updateValue( value + '/')
    } else (
      updateValue('0')
    )
  }
  const multiply = () => {
    if (value !== '0') {
      updateValue( value + 'x')
    } else (
      updateValue('0')
    )
  }
  const sub = () => {
    if (value !== '0') {
      updateValue( value + '-')
    } else (
      updateValue('0')
    )
  }
  const add = () => {
    if (value !== '0') {
      updateValue( value + '+')
    } else (
      updateValue('0')
    )
  }
  const dot = () => {
      updateValue( value + '.')
  }
  const erase = () => {
    let str=value.toString()

    if(str.length > 1){
      let popElement=str.slice(0,-1)
      updateValue(popElement)
    }
    else{
      updateValue('0')
    }
   
    
  }
  const equal = () => {
    if (value !== '0') {
      let str= value.replace(/x/g,'*')
      let result = eval(str)
      updateValue( result)
    } else (
      updateValue('0')
    )
  }
    function changeColor(e){
      if(color == '#898E8C'){
        updateColor('rgba(0, 0, 0, 0.024)')
        document.querySelectorAll('.toggle-btn')[0].style.float='right'
        updateLogoColor('black')

      }else{
        updateColor('#898E8C');
        document.querySelectorAll('.toggle-btn')[0].style.float='left'
        updateLogoColor('white')


      }
    }  
  
  

  return (
    <div className='calculator-wrapper'>
      <div className='calculator' style={{'backgroundColor':color}}>
        <h3 className='brandName' style={{'color':logoColor}}>Casio</h3><div className='colorMode' timeout={300}><button className='toggle-btn' onClick={changeColor}></button></div>
        <input className='calculator-display' value={value}></input>
        <button className='btn-design' >ON</button>
        <button className='btn-design' onClick={ac}>AC</button>
        <button className='btn-design' onClick={percent}>%</button>
        <button className='btn-design' onClick={divide}>/</button>
        <button className='btn-design' onClick={seven}>7</button>
        <button className='btn-design' onClick={eight}>8</button>
        <button className='btn-design' onClick={nine}>9</button>
        <button className='btn-design' onClick={multiply}>X</button>
        <button className='btn-design' onClick={four}>4</button>
        <button className='btn-design' onClick={five}>5</button>
        <button className='btn-design' onClick={six}>6</button>
        <button className='btn-design' onClick={sub}>-</button>
        <button className='btn-design' onClick={one}>1</button>
        <button className='btn-design' onClick={two}>2</button>
        <button className='btn-design' onClick={three}>3</button>
        <button className='btn-design' onClick={add}>+</button>
        <button className='btn-design' onClick={zero}>0</button>
        <button className='btn-design' onClick={dot}>.</button>
        <button className='btn-design' onClick={erase}><FiDelete size={'1.4rem'} className='ico' /></button>
        <button className='btn-design' onClick={equal}>=</button>

      </div>
    </div>
  )
}
