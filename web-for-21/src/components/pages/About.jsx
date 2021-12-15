import React from 'react';
import '../style/About.css'

const About = () => {
  return (
    <div class="container">
      {/* <div class="row align-items-center my-5">
        <div class="col-lg-12">
          <div class="card bg-dark text-white">
            <img class="card-img logo" src="/images/logo.png" alt="Card image"/>
            <div class ="card-img-overlay">
            <h1 class ="card-title">Card title</h1>
            <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div> */}

      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src='/images/hinh_chinh_1.jpg'
            alt="about-img"
          />
        </div>
        <div class="col-lg-5">
          <h1 class="font-weight-light">About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;