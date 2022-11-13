import React from 'react'
import s from './index.module.css'

export default function Triggers({ change_to_rus, change_to_de }) {
  return (
    <div className={s.triggers}>
      <button onClick={change_to_de}>De</button>
      <button onClick={change_to_rus}>Rus</button>
    </div>
  )
}
