import React , { useEffect }from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'
import Viewer from './Viewer'
import NewDisney from './NewDisney'
import Orignals from './Orignals'
import Trending from './Trending'
<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector( selectUserName );
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect( () =>
  {
    db.collection( "movies" ).onSnapshot( ( snapshot ) =>
    {
      snapshot.docs.map( ( doc ) =>
      {
        switch ( doc.data().type )
        {
          case "recommend":
            recommends = [ ...recommends, { id: doc.id, ...doc.data() } ];
            break;

          case "new":
            newDisneys = [ ...newDisneys, { id: doc.id, ...doc.data() } ];
            break;

          case "original":
            originals = [ ...originals, { id: doc.id, ...doc.data() } ];
            break;

=======
import { useDispatch , useSelector } from 'react-redux'
import db from '../firebase' 
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'

function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = []; 

  useEffect(() => {
    console.log("Hello");
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch(doc.data().type) {
          case "recommend":
            recommends = [ ...recommends, { id: doc.id, ...doc.data()}];
            break;
          case "new" : 
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data()}];
            break;
          case "original":
            originals = [ ...originals, { id: doc.id, ...doc.data() } ];
            break;
>>>>>>> origin/master
          case "trending":
            trending = [ ...trending, { id: doc.id, ...doc.data() } ];
            break;
        }
<<<<<<< HEAD
      } );

      dispatch(
        setMovies( {
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        } )
      );
    } );
  }, [ userName ] );

=======
      })
      dispatch(
        setMovies({
          recommend : recommends,
          newDisneys : newDisneys,
          original : originals,
          trending : trending,
        })
      )
    })
  }, [userName]);
>>>>>>> origin/master
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