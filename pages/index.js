import { useState, useEffect } from 'react'
import useContador from '../hooks/useContador'
import styles from '../styles/Home.module.css'
import GenericTitleComponent from '../components/GenericTitleComponent'

export const Home = () => {
  const [contador, aumentarContador, disminuirContador, reset] = useContador()

  return (
    <div className={styles.container}>
      <GenericTitleComponent
        texto={'Home Page'}
      />
      <h1>{contador}</h1>

      <button
        onClick={() => aumentarContador()}
      >
        +
      </button>
      <button
        onClick={() => reset()}
      >
        Reset
      </button>
      <button
        onClick={() => disminuirContador()}
      >
        -
      </button>
    </div>
  )
}

export default Home