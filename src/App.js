import React from 'react';
import './App.css';
import SearchPage from './SearchPage.js';
import SecondPage from './components/SecondPage/SecondPage';
import { Route, Switch, Link } from 'react-router-dom';

function backgroundScheduler_1() {
  setTimeout(() => {
      document.querySelector(".img1").style.opacity = 0;
      document.querySelector(".img2").style.opacity = 0;
      document.querySelector(".img3").style.opacity = 0.5;
      order(["-3", "-1", "-2"], () => { backgroundScheduler_2() }, 1000);
  }, 3000);
}

function backgroundScheduler_2() {
  setTimeout(() => {
      document.querySelector(".img1").style.opacity = 0.5;
      document.querySelector(".img2").style.opacity = 0;
      document.querySelector(".img3").style.opacity = 0;
      order(["-2", "-3", "-1"], () => { backgroundScheduler_3() }, 1000);
  }, 3000);
}

function backgroundScheduler_3() {
  setTimeout(() => {
      document.querySelector(".img1").style.opacity = 0;
      document.querySelector(".img2").style.opacity = 0.5;
      document.querySelector(".img3").style.opacity = 0;
      order(["-1", "-2", "-3"], () => { backgroundScheduler_1() }, 1000);
  }, 3000);
}

function order(array, callback, time) {
  setTimeout(() => {
      document.querySelector(".img1").style.zIndex = array[0];
      document.querySelector(".img2").style.zIndex = array[1];
      document.querySelector(".img3").style.zIndex = array[2];
      callback();
  }, time);
}

backgroundScheduler_1();

function App() {
  return (
    <div className="App">
      <div class="background-container">
        <img class="background-image img1" src="https://c.pxhere.com/photos/59/f7/Bread_Foods_Fries_Lunch_Overhead_Plate_Plates_Potatoes-1618404.jpg!d" alt=""></img>
        <img class="background-image img2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Food_%2826171249335%29.jpg/800px-Food_%2826171249335%29.jpg" alt=""></img>
        <img class="background-image img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Egyptian_food_Koshary.jpg/800px-Egyptian_food_Koshary.jpg" alt=""></img>
      </div>
      <SearchPage />
      <Route path="/search" component={SecondPage}/>
    </div>
  );
}

export default App;
