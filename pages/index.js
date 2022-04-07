import useContador from '../hooks/useContador'
import styles from '../styles/HomePage.module.css'
import GenericTitleComponent from '../components/GenericTitleComponent'

export const Home = () => {
  const [aumentar, disminuir, reset, contador] = useContador()

  return (
    <div className={styles.container}>
      <GenericTitleComponent
        texto={'Home Page'}
      />

      <h1 className={styles['contador']}>{contador}</h1>

      <div className={styles['buttons-container']}>
        <button
          className={styles.button}
          onClick={() => aumentar()}
        >
          +
        </button>
        <button
          className={styles.button}
          onClick={() => reset()}
        >
          Reset
        </button>
        <button
          className={styles['button']}
          onClick={() => disminuir()}
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Home