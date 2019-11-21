import React from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

export default class CatFacts extends React.Component {
  notify = () => toast("You are now unsub.... Just kidding you can never escape!", {
    position: "bottom-center",
    className: 'black-background',
    bodyClassName: "grow-font-size",
  });
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: null
    };
  }
  componentDidMount() {
    axios.get('https://catfact.ninja/fact')
      .then(
        (res) => {
          console.log(res);
          this.setState({
            isLoaded: true,
            item: res.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (err) => {
          this.setState({
            isLoaded: true,
            err
          });
        }
      )
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="card-body">
          <h2>Welcome to Cat Facts!</h2>
        
          <p>
              Random Fact: <br></br>
                {item.fact}
          </p>

          <button className="btn btn-danger" onClick={this.notify}>Click Here to Unsubscribe!</button>
        </div>
      );
    }
  }
}
