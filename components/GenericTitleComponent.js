import React from 'react'
import styles from '../styles/HomePage.module.css'

const GenericTitleComponent = ({ texto }) => {
    return (
        <div>
            <h1 className={styles['main-header']}>{texto}</h1>
        </div>
    )
}

export default GenericTitleComponent