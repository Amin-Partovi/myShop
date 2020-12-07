import React from 'react';
import {connect} from 'react-redux';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './swipper.module.scss';
 
class Swipper extends React.Component {

    renderSlide=()=>{
        return(
            this.props.products.map((product,index)=>{
                return(
                    <Slide index={index} className={styles.slide}><img key={product.id} src={product.image} /></Slide>
                )
            })
        )
    }
        

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={45}
        totalSlides={this.props.products.length}
        className={styles.carousel}
      >
        <Slider className={styles.slider}>
          {this.renderSlide()}
        </Slider>
        <div className={styles.navBtn}>
            <ButtonBack className={styles.backBtn}><i className="chevron left icon"/></ButtonBack>
            <ButtonNext className={styles.nextBtn}><i className="chevron right icon"/></ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}

const mapStateToProps=(state)=>{
    return {products:Object.values(state.products)}
}
export default connect(mapStateToProps)(Swipper);