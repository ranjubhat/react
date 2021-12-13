import React, { useEffect, useState } from "react";
import axios from "axios";
function Functionalfetch(props) {
  const [localData, setLocaldata] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchUsingAsync = async () => {
    try {
      setLoading(true);
      let data = await fetch("https://api.sampleapis.com/futurama/info");
      let jsonresponse = await data.json();
      setLocaldata(jsonresponse[0]?.creators || []);
      // setLoading(false)
      //console.log(jsonresponse);
    } catch (error) {
      setError(error.message);
      //console.log(error);
    } finally {
      setLoading(false);
      //console.log("finally");
    }
  };

  const fetchUsingAxios = () => {
    axios
      .get("https://api.sampleapis.com/futurama/info")
      .then((response) => setLocaldata(response.data[0]?.creators || [] || []))
      .catch((error) => setError(error.message));
  };

  const fetchUsingThen = () => {
    fetch("https://api.sampleapis.com/futurama/info")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsingAsync();
  }, []);

  return (
    <div>
      {isLoading ? (
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

export default Functionalfetch;
