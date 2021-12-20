import React from "react";
import MainLayout from "../components/MainLayout";

const AboutMe = () => {
  return (
    <MainLayout pageTitle="About Me">
      <h1 className="page-title">About Me</h1>
      <div className="page-content">
        <p>
          I am Arif Suganda, please call me ganda 😅. I am a software engineer
          based in Palu, Indonesia 🇮🇩.
        </p>
        <p>
          The first time I know/Learn about programming was when I was studying
          Informatic Engineering at Tadulako University. It's been few years
          since I graduated, but even now I am still studying about programming.
        </p>
        <p>
          I'm good with PHP, Python and Javascript, and want to learn about
          everyting that I can get, since I love learning. Thats is why I
          created this blog, it is mostly to record my journey as a Software
          Engineer.
        </p>
      </div>
    </MainLayout>
  );
};

export default AboutMe;
