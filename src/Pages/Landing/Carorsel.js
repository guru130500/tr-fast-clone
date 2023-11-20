import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './Carousel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/48d2fefe879c42b79c75d2ad12f6bb23.jpg'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/332bead8d69449bd8c325afa9264f225.jpg'/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img src='https://trfastenings.blob.core.windows.net/sitecontent/5642de1a9dd54689b65fe418ceabe9ac.png'/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;