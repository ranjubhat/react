import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import ClassComponentExample from "./classComponentexample";
import About from "./About";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import ClassComponentFetch from "./classComponentFetch";
import Functionalfetch from "./functionalfetch";
import TreeView from "./TreeView";
import { TreeData } from "../data";
function Home(props) {
  const history = useHistory();
  const [localData, setLocaldata] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [header, setHeader] = useState("text");


  // let obj={op1:{op2:10}}
  // const {op1:{op2=20}}=obj;

  let array = [10, 20, 30, 20];
  console.log([...new Set(array)]);

  const [a,...rest]=array;
  console.log(rest)

  var arr1 = "john".split(''); //j o h n

  console.log("after 1", arr1)
  var arr2 = arr1.reverse(); //arr2 n h o j arr1
  console.log("after 2",arr1, arr2)

   var arr3 = "jones".split('');  // j o n e s
   console.log("array 3", arr3)
   arr2.push(arr3); // n h o j [ j o n e s]
   console.log("after push", arr1,arr2)
   //console.log(arr1.slice(-1),arr1.slice(-1).length)
  //  console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//4 n
  // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


varCheck=20;
console.log(varCheck);
var varCheck;



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
    //setHeader((prevState) =>{ return {prevState.header + "1"});
    setHeader(header+"hii")
  };

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


      
      {/* <ClassComponentExample name={header} />
      <About onButtonClick={() => handleButtonClick()} /> */}
      {/* <Counter /> */}
      {/* <ClassComponentFetch/> */}
      
      {/* <Functionalfetch /> */}

      <TreeView treeData={TreeData}/>
    </div>
  );
}

export default Home;
