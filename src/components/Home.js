import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ClassComponentExample from "./classComponentexample";
import About from "./About";
import Counter from "./Counter";
import { useSelector } from "react-redux";
function Home(props) {
  const history = useHistory();
  const [localData, setLocaldata] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [header, setHeader] = useState("text");

  const useDebouncedEffect = (effect, dependency) => {
    const callback = useCallback(effect, dependency);
    useEffect(() => {
      const handler = setTimeout(() => {
        callback();
      }, 3000);
      return () => {
        clearTimeout(handler);
      };
    }, [callback]);
  };
  const fetchUsingAsync = async () => {
    try {
      setLoading(true);
      let data = await fetch("https://api.sampleapis.com/futurama/info");
      let jsonresponse = await data.json();
      setLocaldata(jsonresponse[0]?.creators || []);
      //console.log(jsonresponse);
    } catch (error) {
      setError(error.message);
      //console.log(error);
    } finally {
      setLoading(false);
      //console.log("finally");
    }
  };
  useDebouncedEffect(() => {
    //fetchUsingThen();
    //fetchUsingAsync();
  }, [header]);
  // useEffect(() => {
  //   fetchUsingAsync();
  // }, []);

  //console.log(history);
  const handleClick = () => {
    history.push(`/about/${123}`);
  };

  //Fetch using then
  const fetchUsingThen = () => {
    fetch("https://api.sampleapis.com/futurama/info")
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  };

  const fetchFunction = () => {
    let fetchoptions = {
      method: "POST",
      url: "endpoint",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        data1: "data1",
      }),
    };
    let axiosOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: "data1",
    };
  };
  //Fetch using async await

  const handleButtonClick = () => {
    setHeader((prevState) => prevState.header + "1");
    //setHeader("hiii")
  };

  return (
    <div>
      {/* {isLoading ? (
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
      )} */}
      <ClassComponentExample name={header} />
      <About onButtonClick={() => handleButtonClick()} /> 
      <Counter />
    </div>
  );
}

export default Home;
