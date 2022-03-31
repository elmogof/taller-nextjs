import {useState, useEffect} from 'react'

const useContador = () => {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1)
        console.log('Contador: ', contador);
    }

    const disminuirContador = () => {
        setContador(contador - 1)
        console.log('Contador: ', contador);
    }

    const resetearContador = () => {
        setContador(0)
        console.log('Contador: ', contador);
    }

    // useEffect(() => {
    //     console.log('Valor: ', contador);
    // }, [contador])

    return [contador, aumentarContador, disminuirContador, resetearContador]
}

export default useContador