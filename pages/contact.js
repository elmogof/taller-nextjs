import React from 'react'
import GenericTitleComponent from '../components/GenericTitleComponent'
import LayoutComponent from '../components/layout/LayoutComponent'

export const Contact = () => {
    return (
        <LayoutComponent>
            <div>
                <GenericTitleComponent
                    texto='Contact Page'
                />
            </div>
        </LayoutComponent>
    )
}

export default Contact