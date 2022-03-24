import React from 'react'

const GenericTitleComponent = ({ texto, persona, numero }) => {
    // const { texto, persona, numero } = props;
    console.log(persona)
    return (
        <div>
            <h1>{texto}</h1>
            <p>{numero}</p>
            <p>{persona.nombre}</p>
        </div>
    )
}

export default GenericTitleComponent