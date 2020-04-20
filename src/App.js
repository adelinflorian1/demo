import React from 'react';
import logo from './logo.svg';
import throttle from 'lodash/throttle';
import './App.css';
import carImage from './car_topview.svg';

class App extends React.Component {
  state = {
    scrollingDown: true
  }

  componentDidMount () {
    window.addEventListener('scroll', throttle(this.handleScroll, 150));
  }

  handleScroll = event => {
    const {lastScrollTop} = this.state;

    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollOffset > lastScrollTop){
      this.setState({
        scrollingDown: true,
        lastScrollTop : scrollOffset <= 0 ? 0 : scrollOffset
      });
    } else {
      this.setState({
        scrollingDown: false,
        lastScrollTop : scrollOffset <= 0 ? 0 : scrollOffset
      });
    }
  }

  render () {
    const {scrollingDown} = this.state;
    const carImageClass = scrollingDown ? 'content__scroll_item' : 'content__scroll_item content__scroll_item__revert';

    return (
      <div className="app">
        <header className="app-banner">
          <img src={logo} className="app-logo" alt="logo" />
          <h1>
            Demo app header
          </h1>
        </header>
        <article className="content">
          <img src={carImage} className={carImageClass} alt="car image" />
          <section className="content__section">
            <h2 className="content__section--title">First section title</h2>
          </section>
          <section className="content__section">
            <h2 className="content__section--title">Second section title</h2>
          </section>
          <section className="content__section">
            <h2 className="content__section--title">Third section title</h2>
          </section>
          <section className="content__section">
            <h2 className="content__section--title">Fourth section title</h2>
          </section>
        </article>
        <article className="content">
          <section className="content__section__secondary">
            <h2>Secondary section title</h2>
          </section>
        </article>
        <footer className="app-banner">
          <p>Demo app footer</p>
        </footer>

      </div>
    );
  }
}

export default App;
