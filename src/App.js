import React, {useEffect} from 'react';
import './App.css';
import img1 from './img/twom.png';
import me from './img/img-2.jpg';
import node from './img/node.png';
import net from './img/net.png';
import nodeJ from './img/nodeJ.png';
import res from './img/res.pdf';

function App() {
  useEffect(() => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });

      const header = document.querySelector('.header.container');
      document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
          header.style.backgroundColor = '#29323c';
        } else {
          header.style.backgroundColor = 'transparent';
        }
      });
    return () => {
      hamburger.removeEventListener('click');
      header.removeEventListener('scroll');
    }
  }, [])
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero"><h1><span>A</span>khil <span>J</span>ames <span>J</span>oseph</h1></a>
            </div>
            <div className="nav-list">
              <div className="hamburger"><div className="bar"></div></div>
              <ul>
                <li><a href="#hero" data-after="Home">Home</a></li>
                <li><a href="#skills" data-after="skill">Skills</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="hero">
        <div className="hero container">
          <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name is <span></span></h1>
            <h1>Akhil<span></span></h1>
            <a href="#about" type="button" className="cta">About Me</a>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="skills container">
          <div className="skill-top">
            <h1 className="section-title">Sk<span>i</span>lls</h1>
            <p>According to Wikipedia "A skill is the ability to perform an action with determined results often within a given amount of time, energy, or both". Holding true to that analogy here are a few of mine.</p>
          </div>
          <div className="skill-bottom">
            <div className="skill-item">
              <div className="icon"><img src="https://img.icons8.com/color/128/000000/react-native.png"/></div>
              <h2>Front End Technologies</h2>
              <p>Good working knowledge of the JavaScript based front-end library ReactJS along with various other technologies such as Axios, Context API, SpringJS, React hooks and Redux along with operational knowledge on both HTTP and REST API servers.</p>
            </div>
            <div className="skill-item">
              <div className="icon">
              <img src={node}/>
              </div>
              <h2>Back End Technologies</h2>
              <p>Good working knowledge on the JavaScript based back-end framework NodeJS along with different other technologies such as ExpressJS , MongoDB, Mongoose and Firebase. Passport, JWT and Google OAuth based authentications.</p>
            </div>
            <div className="skill-item">
              <div className="icon"><img src="https://img.icons8.com/color/128/000000/bootstrap.png"/></div>
              <h2>UI Design Frameworks</h2>
              <p>Good working knowledge on the CSS framework Bootstrap as well as other UI libraries such as ReactStrap, CSS Grid, Flexbox and MaterialUI. Experienced in creating and maintaining clean and responsive front-end structures and designs.</p>
            </div>
            <div className="skill-item">
              <div className="icon"><img src="https://img.icons8.com/color/128/000000/wordpress.png"/></div>
              <h2>Content Management Systems</h2>
              <p>Good operational experience and knowledge in creating full fledged websites from scratch using CMS technologies such as Wix and Wordpress with tools such as Elementor, WooCommerce, Ninjaforms and Yoast to carry out Search Engine Optimizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">Recent <span>Projects</span></h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
            <h1>Netflix Clone</h1>
            <h2>ReactJS</h2>
            <p>Created a Netflix app clone with trailer playback using ReactJS by
            pulling in information from a third party API call TMDb and deployed it on Firebase.</p>
            <div>
            <a href="https://netflix-clone-2d41d.web.app/" type="button" className="cta" target="_blank">Demo</a>
            <a href="https://github.com/AkhilJ4007/netflix_clone" type="button" className="cta" target="_blank">Visit Repo</a>
            </div>
          </div>
          <div className="project-img">
            <img src={net} alt="img" />
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1>Spotify Clone</h1>
            <h2>ReactJS</h2>
            <p>Created a Spotify clone server using ReactJS along with Spotify's own API which lets Spotify premium users login and play their playlists. State management was achieved by implementing Context-API</p>
            <div>
                <a href="https://spotifyclone-7944a.web.app" type="button" className="cta" target="_blank">Visit</a>
                <a href="https://github.com/AkhilJ4007/SpotifyWeb" type="button" className="cta" target="_blank">Visit Repo</a>
            </div>
          </div>
          <div className="project-img">
            <img src={nodeJ} alt="img" />
          </div>
        </div>
        {/* <div className="project-item">
          <div className="project-info">
            <h1>Project 3</h1>
            <h2>Coding is Love</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iusto cupiditate voluptatum impedit unde rem ipsa distinctio illum quae mollitia ut, accusantium eius odio ducimus illo neque atque libero non sunt harum? Ipsum repellat animi, fugit architecto voluptatum odit et!</p>
            <a href="#about" type="button" className="cta">Demo</a>
          </div>
          <div className="project-img">
            <img src={net} alt="img" />
          </div>
        </div> */}
        {/* <div className="project-item">
          <div className="project-info">
            <h1>Netflix Clone</h1>
            <h2>ReactJS</h2>
            <p>
            Created a Netflix app clone with trailer playback using ReactJS by
            pulling in information from a third party API call TMDb and deployed it
            on Firebase.
            </p>
            <a href="https://netflix-clone-2d41d.web.app/" type="button" className="cta" target="_blank">Demo</a>
          </div>
          <div className="project-img">
            <img src={net} alt="img" />
          </div>
        </div> */}
        <div className="project-item">
          <div className="project-info">
            <h1>Shopping Web Application </h1>
            <h2>MERN Stack</h2>
            <p>Created a shopping web applicaion implementing the MERN stack and hosted website using Heroku. Maintained user sessions using cookies and also implemented sign in with Google OAuth</p>
                <div>
                <a href="https://akj-shopping.herokuapp.com" type="button" className="cta" target="_blank">Visit</a>
                <a href="https://github.com/AkhilJ4007/ShoppingApp" type="button" className="cta" target="_blank">Visit Repo</a>
                </div>
          </div>
          <div className="project-img">
            <img src={img1} alt="img" />
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={me} alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>Associate Full Stack Web Developer</h2>
          <p>Hi there! I'm Akhil James Joseph, a goal oriented individual and a multitasking programmer skilled in
            JavaScript along with the respective front-end and back-end JS frameworks as
            well as Content Management Systems such as Wordpress. I'm a quick learner
            with a will and desire to undergo self improvement for the growth of
            peers and the employer. Want to know more? Download my resume attached below or head on down to the Contact section to know more. Cheers!! :)</p>
          <a href={res} className="btn" target="_blank" >Download Resume</a>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="contact container">
        <div><h1 className="section-title">Contact <span>info</span></h1></div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png"/></div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+1 (647)-302-4007</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>akhiljamesjoseph944@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"/></div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>48 Brookdale Ave, St.Catherines, ON, Canada</h2>
            </div>
          </div>
        </div>
        <a href="#footer" className="btn">Follow Me</a>
      </div>
    </section>

    <section id="footer">
      <div className="footer container">
        <div className="brand"><h1><span>A</span>khil <span>J</span>ames  <span>J</span>oseph </h1></div>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://www.facebook.com/akhil.james3/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"/></a>
          </div>
          <div className="social-item">
            <a href="https://www.instagram.com/mask_off_1_/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"/></a>
          </div>
          <div className="social-item">
            <a href="https://github.com/AkhilJ4007" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/github.png"/></a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/akhiljamesjoseph/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png"/></a>
          </div>
        </div>
        <p>Copyright © 2020 Akhil. All rights reserved</p>
      </div>
    </section>
  </div>
  )
}

export default App