import React from 'react'
import GenericTitleComponent from '../../components/GenericTitleComponent'
import LayoutComponent from '../../components/layout/LayoutComponent'

const About = () => {
  return (
    <LayoutComponent>
      <div>
        <GenericTitleComponent
          texto='About Page'
        />
      </div>
    </LayoutComponent>
  )
}

export default About
