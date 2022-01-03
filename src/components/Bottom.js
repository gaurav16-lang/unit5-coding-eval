import React, { useState } from 'react'
import style from './bottom.module.css'
import { useEffect } from 'react'
const Bottom = () => {
  const [data, setdata] = useState([])
  useEffect(() => {}, [data])
  const getdata = () => {
    fetch('http://localhost:4500/Down')
      .then((d) => d.json())
      .then((res) => {
        setdata(res)
      })
  }
  console.log(data)
  return (
    <div className={style.bottom}>
      <button onClick={getdata}>see the Receipes</button>

      <h1 style={{ color: '#AB47BC' }}>Receipes</h1>
      <div className={style.grid}>
        {data.map((dat) => (
          <div key={dat.id}>
            <img src={dat.image} alt="img" />
            <h1>{dat.title}</h1>
            <p>{dat.ingredients}</p>
            <p>{dat.timeToCook}</p>
            <p>{dat.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bottom
