import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {spans:0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
       this.imageRef.current.addEventListener('load',this.setSpansProp);
    }

    setSpansProp=()=>{
       const imgHeight = this.imageRef.current.clientHeight;

       console.log('imgHeight :' + imgHeight)
       const spanV = Math.ceil(imgHeight/10);
       console.log('span :' + spanV)
       this.setState({spans : spanV})
    }

    render(){

        const{description, urls} = this.props.image;

        return(
        <div style={{gridRowEnd: `span ${this.state.spans}`}}> 
            <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
        );
    }
    
}

export default ImageCard;