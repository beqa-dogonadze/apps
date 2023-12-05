import copy from 'clipboard-copy'
import React, { useRef, useState } from 'react'
import { BiSolidCopy } from 'react-icons/bi'
import './style.css'

const CopyTextButton = ({ textToCopy }) => {
  const textRef = useRef(null)
  const [color, setColor] = useState('red')

  //copy text and change copyLogo color
  const handleColor = () => {
    if (color === 'green') {
      setColor((document.getElementById('btn').style.content = 'white'))
      copy(textRef.current.innerText)
    } else {
      setColor((document.getElementById('btn').style = 'green'))
      copy(textRef.current.innerText)
    }
  }

  return (
    <button
      ref={textRef}
      className='flex items-center gap-2'
      id='btn'
      onClick={handleColor}
    >
      {textToCopy}
      <BiSolidCopy className={`${color}`} />
    </button>
  )
}

export default CopyTextButton
