import React, { useEffect, useState } from 'react'
import style from './left.module.css'
import Right from './Right'
// import rstyle from './right.module.css'

const Left = () => {
  const [data, setData] = useState({
    title: '',
    ingredients: '',
    timeToCook: '',
    image: '',
    instructions: '',
  })

  useEffect(() => {}, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }
  const handlereceipe = (e) => {
    fetch(`http://localhost:4500/Receipes`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    }).then(() => {
      setData('')
    })
  }

  return (
    <div className={style.top}>
      <div>
        <input
          type="text"
          placeholder="Receipe Title"
          name="title"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Receipe ingredients"
          name="ingredients"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="timeToCook"
          name="timeToCook"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder=" image of Receipe"
          name="image"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Instructions"
          name="instructions"
          onChange={handleChange}
        />
        <br />
        <button onClick={handlereceipe}>Add receipe</button>
      </div>
      <Right />
    </div>
  )
}

export default Left
