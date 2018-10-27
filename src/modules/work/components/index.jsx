import React from 'react';
import Helmet from 'react-helmet';
import Presentation from './cover-title';
import Projects from './projects';

const WorkPage = () => (
  <main>
    <Helmet>
      <title>Jacob Gonzalez</title>
      <meta name="description" content="Desarrollador javascript colombiano, jacob gonzalez" />
    </Helmet>
    <Presentation />
    <Projects />
  </main>
);

export default WorkPage;
