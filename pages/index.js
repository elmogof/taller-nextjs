import useContador from '../hooks/useContador'
import styles from '../styles/HomePage.module.css'
import GenericTitleComponent from '../components/GenericTitleComponent'
import LayoutComponent from '../components/layout/LayoutComponent'
import AccordionComponent from '../components/AccordionComponent'
import PokemonListComponent from '../components/PokemonListComponent'

export const Home = () => {
  const [aumentar, disminuir, reset, contador] = useContador()

  return (
    <LayoutComponent>
      <div className={styles.container}>
        <PokemonListComponent />
        {/* <AccordionComponent /> */}
      </div>
    </LayoutComponent >
  )
}

export default Home


{/*<GenericTitleComponent
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
  </div>*/}