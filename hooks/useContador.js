import { useState, useEffect } from 'react'

const useContador = () => {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    useEffect(() => {
        console.log('Contador: ', contador);
    }, [contador])

    return [aumentarContador, disminuirContador, resetearContador, contador]
}

export default useContador