import React, { Component } from "react";
import axios from "axios";
class ClassComponentFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: [],
      error: "",
      loading: false,
    };
  }
  fetchUsingAxios = () => {
    axios
      .get("https://api.sampleapis.com/futurama/info")
      .then((response) =>
      {
      console.log(response)
        this.setState({ localData: response.data[0]?.creators||[], loading: false })
      }
      )
    
      .catch((error) =>
        this.setState({ loading: false, error: error.message })
      );
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchUsingAxios();
  }
  render() {
    const { localData, loading, error } = this.state;
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {localData.map((item, index) => {
                return (
                  <tr key={`${index}${item.name}`}>
                    <td>{item.name}</td>
                    <td>{item.url}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ClassComponentFetch;
