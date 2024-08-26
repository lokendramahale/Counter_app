import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/image.jpeg'; // Ensure the path is correct
import './Home.css'
// Container for the entire section
const Section = styled.section`
  background-image: linear-gradient(to right, #8bff09, #00ffea);
  position: relative;
  display: flex;
  // align-items: center;
  // justify-content: center;
  height: 100vh;
  overflow: hidden;
  color: black;
  
`;

// Blurred background image
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(2px); // Adjust blur amount as needed
  z-index: 1;
`;

// Content overlay
const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  left:60%;
  top:20%;
  border-radius: 8px;
  width:300px;
  font-family: Georgia;
`;

const Home = () => {
  return (
    <Section>
      <BackgroundImage />
      <Content>
        <h1>Frontend Developer & UI/UX Designer</h1>
        <p>Discover my projects and skills.</p>
      </Content>
    </Section>
  );
};

export default Home;
