import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const quotes = [
  "Believe you can and you're halfway there.", // Theodore Roosevelt
  'The best way to predict the future is to create it.', // Abraham Lincoln
  "Every day may not be good, but there's something good in every day.",
  'You are capable of amazing things.',
  'Keep your face always toward the sunshine, and shadows will fall behind you.', // Walt Whitman
  'The only way to do great work is to love what you do.', // Steve Jobs
  'Success is not final, failure is not fatal: It is the courage to continue that counts.', // Winston Churchill
  'The future belongs to those who believe in the beauty of their dreams.', // Eleanor Roosevelt
  'The only limit to our realization of tomorrow will be our doubts of today.', // Franklin D. Roosevelt
  'Happiness is not something ready made. It comes from your own actions.', // Dalai Lama
  "You miss 100% of the shots you don't take.", // Wayne Gretzky
  'The greatest glory in living lies not in never falling, but in rising every time we fall.', // Nelson Mandela
  "Your time is limited, don't waste it living someone else's life.", // Steve Jobs
  'It does not matter how slowly you go as long as you do not stop.', // Confucius
  'The mind is everything. What you think you become.', // Buddha
  'Strive not to be a success, but rather to be of value.', // Albert Einstein
  'The only person you are destined to become is the person you decide to be.', // Ralph Waldo Emerson
  "Life is what happens when you're busy making other plans.", // John Lennon
  'You can do anything you set your mind to.', // Benjamin Franklin
  'Challenges are what make life interesting. Overcoming them is what makes life meaningful.', // Joshua Marine
  "Don't be afraid to give up the good to go for the great.", // John D. Rockefeller
  'The difference between ordinary and extraordinary is that little extra.', // Jimmy Johnson
  'The best revenge is massive success.', // Frank Sinatra
  "It always seems impossible until it's done.", // Nelson Mandela
  'Life is too short to be anything but happy.',
  'Spread love everywhere you go. Let no one ever come to you without leaving happier.', // Mother Teresa
  'The journey of a thousand miles begins with a single step.', // Lao Tzu
  'Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.', // Henry David Thoreau
  'Dream big and dare to fail.', // Norman Vaughan
  'The expert at anything was once a beginner.', // Helen Hayes
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    // Function to get a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    };

    // Get a new quote on component mount and when page is refreshed
    getRandomQuote();
    window.onbeforeunload = () => getRandomQuote(); // Optional: Update on refresh
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>{randomQuote}</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>
            I'm a passionate developer who thrives on transforming creative
            ideas into elegant and functional digital solutions.
          </Desc>
          <Button>
            <a
              href="https://github.com/ruldane"
              target="_blank"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              See my works
            </a>
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
