import React from 'react'
import './keys.css'
import numState from '../../atoms/atom'
import { useRecoilState } from 'recoil'

const Keys = () => {

    const [number, setNumber] = useRecoilState(numState);
    
    const handleClick = (e) =>{
        setNumber(number.concat(e.target.name));
    }
    const clear = () =>{
        setNumber('');
    }

    const deleteLastInput = () =>{
        setNumber(number.slice(0, -1));
    }
    const calculate = () =>{
        setNumber(eval(number).toString());
    }
    

  return (
    <div className='keyboard'>
        <div className="row">
            <button className='highlight key'  onClick={clear}>C</button>
            <button className=' highlight key' onClick={deleteLastInput}>←</button>
            <button className='highlight key'  name='%' onClick={handleClick}>%</button>
            <button className='highlight key'  name='/' onClick={handleClick}>/</button>
        </div>
        <div className="row">
            <button className='key' name='7' onClick={handleClick}>7</button>
            <button className='key' name='8' onClick={handleClick}>8</button>
            <button className='key' name='9' onClick={handleClick}>9</button>
            <button className='highlight key' name='*' onClick={handleClick}>X</button>
        </div>
        <div className="row">
            <button className='key' name='4' onClick={handleClick}>4</button>
            <button className='key' name='5' onClick={handleClick}>5</button>
            <button className='key' name='6' onClick={handleClick}>6</button>
            <button className='highlight key' name='+' onClick={handleClick}>+</button>
        </div>
        <div className="row">
            <button className='key' name='1' onClick={handleClick}>1</button>
            <button className='key' name='2' onClick={handleClick}>2</button>
            <button className='key' name='3' onClick={handleClick}>3</button>
            <button className='highlight key' name='-' onClick={handleClick}>-</button>
        </div>
        <div className="last-row">
            <button className='key' name='0' onClick={handleClick}>0</button>
            <button className='key'name='.' onClick={handleClick}>.</button>
            <button className='highlight key' name='=' onClick={calculate}>=</button>
        </div>
    </div>
  )
}

export default Keys