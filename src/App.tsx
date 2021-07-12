import React from 'react';
import { TopNavigation } from './components/TopNavigation';
import { CardComponent } from './components/CardComponent';
import { HeadingComponent } from './components/HeadingComponent';

const App = () => {
  return (
    <>
      <TopNavigation />
      <main className="main-container">
        <CardComponent>
          <HeadingComponent size="h1"> React Typescript</HeadingComponent>
        </CardComponent>
      </main>
      <footer className="footer-main">
        Footer component
      </footer>
    </>
  );
}

export default App;
