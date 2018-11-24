import React, { Component } from 'react';
import logo from './logo.svg';



class App extends Component {
  render() {
    return (
      <div className="container">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
        <div id="homepg">
          <h1 id="hi"> Hi, my name is </h1>
          <h1 id="name"> George Thomas </h1>
          <h1 id="nameDesc"> I'm an Aspiring Front End Developer </h1>
          <a href="#projectpg" ><button id="homebutton" type="button" className="btn"> See my Work </button></a>
        </div>
        <div id="projectpg">
          <ul className="projectpanel">
            <a href="https://codepen.io/believeinthebees/full/OZdGQq/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img1 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/Local+Weather.PNG" /></li></a>
            <a href="https://codepen.io/believeinthebees/full/mGwGqm/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img2 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/React+Calculator.PNG" /></li></a>
           <a href="https://codepen.io/believeinthebees/full/NLaBLG/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img3 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/Pomodoro+Clock.PNG" /></li></a>
           <a href="https://codepen.io/believeinthebees/full/wjZLEe/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img4 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/Wikipedia+Viewer.PNG" /></li></a>
            <a href="https://codepen.io/believeinthebees/full/wjVvpa/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img5 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/twitchAPI.PNG" /></li></a>
            <a href="https://codepen.io/believeinthebees/full/GYLKwy/" target="_blank"><li className="project"> <div className="projectbg"><p class="codepen"> <span>Visit on Codepen <i class="fab fa-codepen"></i></span></p></div><img class="project-img6 imgformat pushup"src="https://s3.us-east-2.amazonaws.com/githubsite/product+landing+page.PNG" /></li></a>
          </ul>
        </div>
        <div id="biopg" class="angledbg">
        <div class="left-bio"> 
          <h6> My Skills:</h6>
            <h6> HTML5 <i class="fab fa-html5"></i></h6>
            <h6> CSS3 <i class="fab fa-css3"></i></h6>
            <h6> JavaScript <i id="js" class="fab fa-js"></i></h6>
            <h6> JQuery <img id="jquery"src="https://s3.us-east-2.amazonaws.com/githubsite/jqueryicon.png" /></h6>
            <h6> React.js <i id="react" class="fab fa-react"></i></h6>
          </div>
          <img id="biopic"src="https://s3.us-east-2.amazonaws.com/githubsite/img_me.PNG" />
          <h5 class="white"> I am...</h5>
          <h5 class="white"> A self-taught programmer and a recent college grad that has found a love for web design and code. I am a passionate and looking to create beautiful webpages that run smooth and look great! </h5> 
          
        </div>
        <div id="contactpg">
          <h2> Want to work with me?</h2>
          <h3 id="emailme"> Email me</h3>
          <h8 id="email">georgegetscoding@gmail.com</h8>    
        </div>
        <div id="endbar">
          <ul id="social-media">
            <a href="https://www.linkedin.com/in/george-thomas-95a3b3129/" target="_blank" class="icon"><li class="fab fa-linkedin"></li></a>
            <a href="https://github.com/aljf" target="_blank" class="icon"><li class="fab fa-github"> </li></a>
            <a href="https://www.freecodecamp.org/aljf" target="_blank" class="icon"><li class="fab fa-free-code-camp"></li></a>
          </ul>
          <p7 id="created-by"> Created by George Thomas 2018</p7>
        </div>
        </div>
    );
  }
}

export default App;
