import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
                name="rate1"
                starCount={10}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default StarRating;