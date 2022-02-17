import React from 'react'
import './screen.css'
import { useRecoilState } from 'recoil';
import numState from '../../atoms/atom';

const Screen = () => {

  const [number] = useRecoilState(numState);

  return (
    <div className='screen'>
      <div className='top-screen'>{number}</div>
    </div>
  )
}

export default Screen