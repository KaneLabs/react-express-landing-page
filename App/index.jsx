import React from 'react';
import ReactDOM from 'react-dom'; // attaches react app to html5
import './index.css'; // styling for body

import Articles from './Articles';
import LandingImage from './LandingImage';
import Footer from './Footer';
import Nav from './Nav';

const client = {
  brandName: 'KaneLabs',
  brandPrimaryColor: '#4DB6AC',
  brandImageUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8000000%2FMountains-mountains-and-waterfalls-8031255-2560-1817.jpg&f=1',
  brandArticles: [
    {articleId: 1, title: 'Value Proposition Title', text: 'Value proposition paragraph'},
    {articleId: 2, title: 'Value Proposition Title', text: 'Value proposition paragraph'},
    {articleId: 3, title: 'Value Proposition Title', text: 'Value proposition paragraph'},
  ],
  brandCallToAction: 'Buy Now',
};

function App (props) {
  return (
    <main>
      <Nav client={props.client} />
      <LandingImage client={props.client} />
      <Articles articles={props.client.brandArticles} />
      <Footer brandName={props.client.brandName} />
    </main>
  )
}

ReactDOM.render (
  <App client={client} />,
  document.querySelector('.app')
);
