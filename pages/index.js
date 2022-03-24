import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GenericTitleComponent from '../components/GenericTitleComponent'


export const Home = () => {

  const persona = {
    id: 12345678,
    nombre: 'Alberto',
    apellido: 'Cardenas'
  };

  return (
    <div className={styles.container}>
      <GenericTitleComponent
        texto={'Home Page'}
        persona={persona}
        numero={1}
      />
    </div>
  )
}

export default Home