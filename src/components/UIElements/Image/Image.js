

import defaultImage from '../../../img/nomed.jpg';


const Image = ({image, style, classname}) => {
    return(
    <div className={classname}>
        <img  src={image}  alt="Imagine text"  />
      </div>)
}

Image.defaultProps= {
    image: defaultImage,
    style: {}
}


// default image daca nu gasesc poza asa
// sa setez height la div sau cv

export default Image;