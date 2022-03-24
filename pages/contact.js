import React from 'react'
import GenericTitleComponent from '../components/GenericTitleComponent'

export const Contact = () => {
    const persona = {
        id: 12345678,
        nombre: 'Alberto',
        apellido: 'Cardenas'
      };
    return (
        <div>
            <GenericTitleComponent
                texto='Contact Page'
                persona={persona}
                numero={1}
            />
        </div>
    )
}

export default Contact