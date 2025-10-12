import { Link } from 'react-router-dom';
import Paragraph from '../components/common/Paragraph';
import Title from '../components/common/Title';
import React from 'react';

const About = () => {
  return (
    <section className="grid gap-5 max-md:gap-2.5">
      <Title>sobre.</Title>
      <Paragraph
        className="[&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold"
        text="c2"
      >
        O <Link to="/">raterate.</Link> é um site de avaliação de filmes e
        séries com o objetivo de tornar a experiência do amante de
        entretenimento mais lúdica, completa e marcante. Utilizando da API do{' '}
        <a href="https://www.themoviedb.org/" target="_blank">
          TMDB (The Movie Database)
        </a>{' '}
        e do{' '}
        <a href="https://ai.google.dev/gemini-api/docs" target="_blank">
          Google Gemini
        </a>
        , o foco aqui é fazer com que o espectador possa avaliar e descobrir
        diversas obras de forma simples.
      </Paragraph>
    </section>
  );
};

export default About;
