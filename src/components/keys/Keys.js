import React, {useState} from 'react'
import './keys.css'

const Keys = () => {

    const [amount, setAmount] = useState(0);
    
    const value = (value) =>{
        var nums = 0;
        nums += nums;
        console.log(nums);
    }

  return (
    <div className='keyboard'>
        <div className="row">
            <button className='key'>C</button>
            <button className='key'>+-</button>
            <button className='key'>%</button>
            <button className='key'>/</button>
        </div>
        <div className="row">
            <button className='key' value={7} onClick={value({value})}>7</button>
            <button className='key' value={8} onClick={(e) => setAmount(...e.target.value)}>8</button>
            <button className='key'>9</button>
            <button className='key'>X</button>
        </div>
        <div className="row">
            <button className='key'>4</button>
            <button className='key'>5</button>
            <button className='key'>6</button>
            <button className='key'>+</button>
        </div>
        <div className="row">
            <button className='key'>1</button>
            <button className='key'>2</button>
            <button className='key'>3</button>
            <button className='key'>-</button>
        </div>
        <div className="last-row">
            <button className='key'>0</button>
            <button className='key'>.</button>
            <button className='key'>=</button>
        </div>
    </div>
  )
}

export default Keys