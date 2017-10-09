import React, { Component } from 'react';

const Slide = (props) => (
  <div className='slide'>
    <div id='content' className='sectionContainer'>
      <h2>
        "{props.quote}"
      </h2>
      <p>
        - {props.name}, {props.business}
      </p>
    </div>
  </div>
)

class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      totalSlides: 4,
      slidePositionX: 0,
      browserWidth: window.innerWidth
    }
  };

  handleNext = () => {
    let nextSlide;
    // if reached the end of the slideshow
    if (this.state.activeSlide + 1 > this.state.totalSlides -1 ) {
      nextSlide = 0;
    } else {
      nextSlide = this.state.activeSlide + 1;
    }
    this.setState({
      activeSlide: nextSlide,
      slidePositionX: this.state.browserWidth * nextSlide
    });
    this.resetSlideTimer();
  };

  handlePrevious = () => {
    let nextSlide;
    // if reached the beginning of the slideshow
    if (this.state.activeSlide == 0) {
      nextSlide = this.state.totalSlides - 1;
    } else {
      nextSlide = this.state.activeSlide - 1;
    }
    this.setState({
      activeSlide: nextSlide,
      slidePositionX: this.state.browserWidth * nextSlide
    });
    this.resetSlideTimer();
  };

  goTo = (nextSlide) => {
    this.setState({
      activeSlide: nextSlide,
      slidePositionX: this.state.browserWidth * nextSlide
    });
    this.resetSlideTimer();
  };

  resetSlideTimer = () => {
    clearInterval(window.slideTimer);
    window.slideTimer = setInterval(this.handleNext, 5000);
  };

  updateBrowserWidth = () => {
    this.setState({
      browserWidth: window.innerWidth,
      slidePositionX: this.state.activeSlide * window.innerWidth
    });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateBrowserWidth);
    this.resetSlideTimer();
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateBrowserWidth);
    clearInterval(window.slideTimer);
  }

  render() {
    return (
      <div id='references'>

        <div id='slides' style={{transform: `translateX(-${this.state.slidePositionX}px)`}}>

          <Slide
            quote='vistawatt found a billing error we couldn’t have found without their platform – and saved us over $12,000!'
            name='Rob Lastname'
            business='Vignolo Farms'
            count={0}
          />

          <Slide
            quote="We're makin' a slideshow!"
            name='Chris Kirkinis'
            business='Developer'
            count={1}
          />

          <Slide
            quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            name='Chris Kirkinis'
            business='Developer'
            count={2}
          />

          <Slide
            quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            name='Chris Kirkinis'
            business='Developer'
            count={3}
          />

        </div>

        <div id='arrows' className='sectionContainer'>
          <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.handlePrevious} ></i>
          <i className="fa fa-chevron-right" aria-hidden="true" onClick={this.handleNext}></i>
        </div>

        <div id='dots'>
          <div className={'dot' + (this.state.activeSlide == 0 ? ' active' : '')} onMouseEnter={() => this.goTo(0)} ></div>
          <div className={'dot' + (this.state.activeSlide == 1 ? ' active' : '')} onMouseEnter={() => this.goTo(1)} ></div>
          <div className={'dot' + (this.state.activeSlide == 2 ? ' active' : '')} onMouseEnter={() => this.goTo(2)}></div>
          <div className={'dot' + (this.state.activeSlide == 3 ? ' active' : '')} onMouseEnter={() => this.goTo(3)}></div>
        </div>

      </div>
    );
  }
}

export default SlideShow;
