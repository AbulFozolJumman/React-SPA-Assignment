import './App.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';

const App = () => {
  const [time, setTime] = useState(0);
  const readTimeHandler = (time) => {
    const previousTimeString = document.getElementById("previous-time").innerText;
    const previousTime = parseInt(previousTimeString);
    const newTime = previousTime + time;
    setTime(newTime)
  };

  const [title, setTitle] = useState([]);
  const bookmarkHandler = (blogTitle) => {
    const previousTitle = blogTitle;
    const newTitle = [...title, previousTitle]
    setTitle(newTitle);
  };
  return (
    <div>
      <Header></Header>
      <Main title={title} time={time} readTimeHandler={readTimeHandler} bookmarkHandler={bookmarkHandler}></Main>
      <Blog></Blog>
    </div>
  );
};

export default App;