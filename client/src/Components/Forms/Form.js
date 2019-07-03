import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        // axios.get('http://localhost:4000/users', {
        //     value:'0',
        //             // value:'dfghjk',
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   console.log('A name was submitted: ' + this.state.value);
    //   axios.post('http://localhost:4000/users', {
    //     value:'0',
    //             // value:'dfghjk',
    //   })
      axios.get('/users', {
        params: {
          value: this.state.value
        }
      })
      .then(function (response) {
          
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Form;