import React from 'react';
import './Home.css';
import logo2 from '../../assets/yocomic.png';

const Home = () => {
  return (
    <section id='bio'>
      <ul>
        <li className='table-bio'>
          <div>
            <h1 className='table-title'>About Me</h1>
            <p class='text'>
              Ey! I'm VinceBC, I'm a Product Manager with 6 years of experience,
              working on a Big change!! Come with me in my Amazing Journey.{' '}
            </p>
            <p>
              <a href='mailto:vibarcar@gmail.com' title="Let's GOOO">
                <button className='button-contact'>CONTACT ME</button>
              </a>
              <p className='text'>
                If you have any doubt or question please do not hesitate to
                contact me! Working on very Hard to become a Fullstack
                Developer!!!! Come on, friends!
              </p>
            </p>
          </div>
          <img
            src={logo2}
            alt='Vince Picture'
            width='300'
            height='300'
            className='pictureBio'
          />
        </li>
      </ul>
    </section>
  );
};

export default Home;
