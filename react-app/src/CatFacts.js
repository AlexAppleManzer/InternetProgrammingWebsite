import React from 'react'
import axios from 'axios';

export default class CatFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    axios.get('https://catfact.ninja/facts', {params: {limit: "10"}})
      .then(
        (res) => {
          console.log(res.data.data);
          this.setState({
            isLoaded: true,
            items: res.data.data
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="card-body">
          <h2>Facts</h2>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fact</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    {index}
                  </th>
                  <td>
                    {item.fact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
