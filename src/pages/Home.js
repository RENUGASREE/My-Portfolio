import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import Button from '../components/Button';

function Home() {
  return (
    <motion.section
      className="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <img src={profilePic} alt="Renuga Sree" className="profile-pic" />
      <h1>Hi, I'm Renuga Sree 👋</h1>
      <h2>B.Tech in AI & Data Science | Passionate about intelligent systems</h2>
      <p>I build smart, scalable solutions that combine data science and web development.</p>
      <Button text="View My Resume" link="/Renuga_Resume.pdf" />
    </motion.section>
  );
}

export default Home;