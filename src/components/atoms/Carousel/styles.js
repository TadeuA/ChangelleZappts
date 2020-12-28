import styled from 'styled-components'
import {Carousel} from 'react-responsive-carousel'

let Width;
let screenHeight
function sizeOfThings() {
  // eslint-disable-next-line no-restricted-globals
  const screenWidth = screen.width;
  // eslint-disable-next-line no-restricted-globals
  screenHeight = screen.height;

  Width = screenWidth/2
}

sizeOfThings();

window.addEventListener("resize", function () {
  sizeOfThings();
});
export const CustomCarousel = styled(Carousel)`

  .carousel-root {
      outline: none;
  }

  .carousel {
    position: relative;
    width:${Width};
    
    // only applying box sizing inside the plugin so it won't break any style
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    img {
        width: 100%;
        display: inline-block;
        pointer-events: none;
    }
    .carousel {
        position: relative;
    }
    .control-arrow,
    .thumbs-wrapper,
    .thumbs,
    .thumb {
      display: none;

    }
  }
  .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    @include transition(height, 0.15s, ease-in);
    &.axis-horizontal {
      .slider {
        -ms-box-orient: horizontal;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        .slide {
          flex-direction: column;
          flex-flow: column;
        }
      }
    }

  }
  .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
    &.animated {
      @include transition(all, 0.35s, ease-in-out);
      // activate hardware accelerated animations using translate property
      // @include enhanceAnimations();
    }
  }
  .slide {
    min-width: 100%;
    max-width:960px;
    margin: 0;
    position: relative;
    text-align: center;
    background: ${({theme})=>theme.colors['transparent']};
    padding-bottom:32px;
    padding-left:20%;
    padding-right:20%;
    padding-top:15%;
    img {
      width: 100%;
      vertical-align: top;
      border: 0;
    }
    h3{
      margin-top:31px;
      margin-bottom:20px;
      font:${({theme}) => theme.fonts['muli-regular-30']};
      color:${({theme}) => theme.colors['white']};
    }
    p{
      margin-bottom:30px;
      color:${({theme}) => theme.colors['white']};
      font:${({theme}) => theme.fonts['muli-regular-20']};

    }

  }
  .control-dots {
    position: relative;
    top:-30px;
    padding: 0;
    text-align: center;
    width: 100%;
    @include desktop {
      bottom: 0;
    }
    .dot {
      @include transition(opacity, 0.25s, ease-in);
      @include opacity(0.3);
      box-shadow: 1px 1px 2px ${({theme})=>theme.colors['shadow']};
      background: ${({theme})=>theme.colors['white']};
      border-radius: 50px;
      width: 11px;
      height: 11px;
      cursor: pointer;
      display: inline-block;
      margin: 0 8px;
      opacity:0.5;
      &.selected{
        width:26px;
      }
      &.selected,
      &:hover {
        opacity:1;
      }
    }
  }
`