import React from 'react'
import './Skills.css'
import react from './react.jpg'
import js from './js.jpg'
import html from './html.jpg'
import css from './css.jpg'
import git from './git.jpg'
import aws from './aws.jpg'
import mongo from './mongo.jpg'
import mongoose from './mongoose.jpg'
import redux from './redux.jpg'
import node from './node.jpg'
import ts from './ts.jpg'
import sql from './mysql.jpg'
import sqlz from './sequelize.jpg'
import fb from './firebase.jpg'
import ex from './express.jpg'
import post from './post.jpg'
import pyt from './pyt.jpg'
import rb from './rb.jpg'
import fm from './fm.jpg'
import socket from './socket.jpg'
import { Element } from 'react-scroll'

const Skills = () => {

  return (
    <Element name='Skills' className='skills'>
      <div className='animSkill'>
      <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json"  background="transparent"  speed="1"   loop  autoplay id='skillsAnim'></lottie-player>
      <h2 className='skillTitle'>Skills</h2>
      </div>
      <div className='skillsList'>
      <div className='div'><img src={html} alt='html' className='img'/><p>HTML</p></div>
      <div className='div'><img src={css} alt='css' className='img'/><p>CSS</p></div>
      <div className='div'><img src={js} alt='Js' className='img'/><p>JavaScript</p></div>
      <div className='div'><img src={git} alt='git' className='img'/><p>Github</p></div>
      <div className='div'><img src={react} alt='React' className='img'/><p>React Js</p></div>
      <div className='div'><img src={rb} alt='React Bootstrap' className='img'/><p>React Bootstrap</p></div>
      <div className='div'><img src={fb} alt='Firebase' className='img'/><p>Firebase</p></div>
      <div className='div'><img src={redux} alt='redux' className='img'/><p>Redux</p></div>
      <div className='div'><img src={node} alt='Node' className='img'/><p>Node Js</p></div>
      <div className='div'><img src={post} alt='Postman' className='img'/><p>Postman</p></div>
      <div className='div'><img src={pyt} alt='Python' className='img'/><p>Python</p></div>
      <div className='div'><img src={ex} alt='Express Js' className='img'/><p>Express Js</p></div>
      <div className='div'><img src={sql} alt='MySQL' className='img'/><p>MySQL</p></div>
      <div className='div'><img src={sqlz} alt='Sequelize' className='img'/><p>Sequelize</p></div>
      <div className='div'><img src={ts} alt='TypeScript' className='img'/><p>TypeScript</p></div>
      <div className='div'><img src={mongo} alt='mongodb' className='img'/><p>MongoDb</p></div>
      <div className='div'><img src={mongoose} alt='mongoose' className='img'/><p>Mongoose</p></div>
      <div className='div'><img src={socket} alt='socket' className='img'/><p>Socket io</p></div>
      <div className='div'><img src={fm} alt='fm' className='img'/><p>Framer Motion</p></div>
      <div className='div'><img src={aws} alt='Aws' className='img'/><p>AWS S3, EC2, RDS</p></div>
      </div>
    </Element>
  )
}

export default Skills