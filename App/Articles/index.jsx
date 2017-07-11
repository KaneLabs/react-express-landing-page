import React from 'react';
import './index.css';

class Articles extends React.Component {
  render() {
    return (
      <section className='Articles'>
        {this.props.articles.map((article, i) => {
          return (
            <article key={article.articleId}>
              <h2>{article.title}</h2>
              <p>{article.text}</p>
            </article>
          )
        })}
      </section>
    )
  }
}

export default Articles;
