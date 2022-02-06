import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
    <Section 
      title="MODEL 3"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="CUSTOM ORDER"
      rightBtnText="EXISTING INVENTORY"


    />
    <Section
       title="MODEL Y"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText="CUSTOM ORDER"
      rightBtnText="EXISTING INVENTORY"
    />
    <Section
       title="MODEL S"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="CUSTOM ORDER"
      rightBtnText="EXISTING INVENTORY"
    />
    <Section
       title="MODEL X"
      description="Order Online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="CUSTOM ORDER"
      rightBtnText="EXISTING INVENTORY"
    />
   
    <Section
       title="LOWEST COST SOLAR PANELS IN AMERICA"
      description="MONEY-BACK GUARANTEE"
      backgroundImg="solar-panel.jpg"
      leftBtnText="ORDER NOW"
      rightBtnText="LEARN MORE"
    />
    <Section
       title="SOLAR ROOF"
      description="PRODUCE CLEAN ENERGY FROM YOUR ROOF"
      backgroundImg="solar-roof.jpg"
      leftBtnText="ORDER NOW"
      rightBtnText="LEARN MORE"
    />
      <Section
       title="ACCESSORIES"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="SHOP NOW"
      rightBtnText=""
    />
    

    </Container>
  )
}

export default Home
const Container=styled.div`
height:100vh;
`
