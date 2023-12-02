import React, { useState } from 'react'

import './Item.css'
import { Modal } from '../modal/Modal';

export function Item({door}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   <div className="item">
    {door.title}
    <button className={''} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
   </div> 
   {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  )
}
