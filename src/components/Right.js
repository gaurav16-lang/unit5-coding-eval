import React, { useEffect, useState } from 'react'
import style from './right.module.css'

const Right = () => {
  const [data, setdata] = useState([])
  const [receipe, setreceipe] = useState([])
  useEffect(() => {}, [data, receipe])

  const display = () => {
    fetch('http://localhost:4500/Receipes')
      .then((d) => d.json())
      .then((res) => {
        setdata(res)
      })
  }

  return (
    <div className={style.right}>
      <button onClick={display}>Display All the receipe</button>
      <h1 style={{ color: '#FF3D00' }}>Receipes</h1>
      <div className={style.bu}>
        {data.map((dat) => (
          <div key={dat.id}>
            <img src={dat.image} alt="img" />
            <h1>{dat.title}</h1>
            <p>{dat.ingredients}</p>
            <p>{dat.timeToCook}</p>
            <p>{dat.instructions}</p>
            <button
              onClick={() => {
                const payload = {
                  title: dat.title,
                  ingredients: dat.ingredients,
                  timeToCook: dat.timeToCook,
                  image: dat.image,
                  instructions: dat.instructions,
                }

                fetch('http://localhost:4500/Down', {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {
                    'content-type': 'application/json',
                  },
                }).then(() => {})
              }}
            >
              See whole detail of receipe
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Right

//  title: '',
// ingredients: '',
// timeToCook: '',
// image: '',
// instructions: '',
