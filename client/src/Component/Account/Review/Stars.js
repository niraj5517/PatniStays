import React from 'react'
import './Stars.css';
import StarRatingComponent from 'react-star-rating-component';

class Stars extends React.Component {
    constructor() {
    super();

    this.state = {
        rating: 0,
        field:''
    };
  }

    onStarClick(nextValue, prevValue, name) {
        console.log('selected ' + this.props.field);

        this.setState({ rating: nextValue, field: this.props.field }, () => {
            console.log(this.state.rating + 'sfsff' + this.props.field);
            this.props.triggerParentUpdate(this.state.rating);
        });
            
        
        
    }
    
    
    render() {
        const { rating } = this.state;
        return (
            <div>
                <h1>{this.props.field}</h1>
                <div  style={{fontSize:'45px',}}>
                    {/* <StarRating /> */}
                    
                {/* <p>Rating from state: {rating}</p> */}
                        <StarRatingComponent 
                                starCount={5}
                                value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                        
                        />
                </div>
            </div>
        )
    }
}
export default Stars;
