import React from 'react'
import GenericTitleComponent from '../../components/GenericTitleComponent'

const About = () => {
  const persona = {
    id: 12345678,
    nombre: 'Alberto',
    apellido: 'Cardenas'
  };
  return (
    <div>
      <GenericTitleComponent
        texto='About Page'
        persona={persona}
        numero={1}
      />
    </div>
  )
}

export default About
