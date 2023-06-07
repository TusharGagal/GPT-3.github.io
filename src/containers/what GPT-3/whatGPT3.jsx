/* eslint-disable no-unused-vars */
import React from 'react'
import './whatGPT3.css';
import { Features } from '../../components';
const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section-padding' id='About'>
      <div className='gpt3__whatgpt3-features'>
      <Features className="whatgpt" title="What is GPT-3" text='Generative Pre-trained Transformers commonly known as GPT, are a family of neural network models that uses the transformer architecture and is a key advancement in artificial intelligence (AI) powering generative AI applications such as ChatGPT. GPT models give applications the ability to create human-like text and content (images, music, and more), and answer questions in a conversational manner.' />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Features title="Chatbots" text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'/>
        <Features title="Knowledgebase" text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'/>
        <Features title="Education" text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'/>
      </div>
    </div>
  )
}

export default whatGPT3