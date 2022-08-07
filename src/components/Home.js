import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'
import Viewer from './Viewer'
import NewDisney from './NewDisney'
import Orignals from './Orignals'
import Trending from './Trending'

function Home() {
  return (
    <Container>
        <ImgSlider/>
        <Viewer/>
        <Recommends/>
        <NewDisney/>
        <Orignals/>
        <Trending/>
    </Container>
  )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("Images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
export default Home