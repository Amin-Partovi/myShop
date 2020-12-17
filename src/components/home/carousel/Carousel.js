import React, {useState} from 'react';
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './carousel.scss';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const renderSlide=()=>{
        return(
            props.products.map((product)=>{
                return(
                    <Carousel.Item key={product.id}><img  src={product.image}  /></Carousel.Item>
                )
            })
        )
    }
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {renderSlide()}
      </Carousel>
    );
  }
  
const mapStateToProps=(state)=>{
    return {products:Object.values(state.products)}
}
export default connect(mapStateToProps)(ControlledCarousel);