import React, { useMemo, useRef, useState } from "react";
import test from ".././test.png";
function Practice(props) {
  const [test, setTest] = useState(10);
  const [value, setValue] = useState("");

  //     //console.log(a);
  //     console.log(b,"---old b");
  //     //console.log(c);
  //     let a=10;
  //     var b=20;
  //     const c=20;
  // console.log(b,"-----new b")
  //     func1();
  //     console.log(func2)

  //     function func1(){
  //         console.log("fun1 is called")
  //     }

  // var func2=function(){
  //         console.log("fun2 is called")
  //     }

  // console.log("script start");
  // setTimeout(function(){console.log("setTimeout")});
  // Promise.resolve().then(()=>console.log("promise"))
  // console.log("script end")

  var x = 5;

  let obj = {
    x: 2,
    // getX: function () {
    //   console.log(this);
    //   console.log(this.x, "--x value");
    // },
    getX: () => {
      console.log(this.x, "---y");
    },
  };

  //obj.getX();
  //   obj.getY();
  //   obj.getX.call({ x: 10 });

  let resp = [
    { fname: "ranjan", lname: "bhat" },
    { fname: "cpu", lname: "bhat" },
  ];

  let newresp = resp.map((item) => {
    return { name: `${item.fname} ${item.lname}` };
  });
  //console.log(newresp);

  //   let multiply=function(x,y){
  //     return x*y;
  //   }

  let multiply = function (a) {
    return function (b) {
      if (b) return multiply(a, b);
      return a;
    };
  };
  //console.log(multiply(1)(2)(3)());

  let test1 = [
    [1, 2],
    [4, 5, 6],
    [2, 6, 9],
    [4, 6, [6, 7, 8, [9, 4]]],
  ];

  const flatten = (array) => {
    let result = [];
    if (array.length > 0) {
      array.forEach((item) => {
        if (Array.isArray(item)) {
          result.push(...flatten(item));
        } else result.push(item);
      });
    }
    return result?.length > 0 ? [...new Set(result)] : result;
  };

  //console.log(flatten(test1));

  const debounce = (cb) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, 2000);
    };
  };

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
  }

  const p1 = new Person("rb", 10);
  //console.log(p1)

  Employee.prototype.getSalary = function () {
    return this.salary;
  };
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.getSalary = function () {
    return this.salary;
  };
  Employee.prototype.constructor = Employee;
  const e1 = new Employee("msd", 40, 12);
  //console.log(e1.getSalary());

  //console.log(Person.prototype);
  //console.log(Employee.prototype)

  // const onChange=debounce((e)=>{console.log(e.target.value)
  // })

  const calculateFunction1 = () => {
    console.log("called with usememo");
    for (let i = 0; i < 700000000; i++) {}
    return 10 * 20;
  };

  const calculateFunction2 = () => {
    console.log("called without usememo");
    for (let i = 0; i < 700000000; i++) {}
    return 10 * 20;
  };
  const newData = useMemo(calculateFunction1, []);

  //console.log(newData,"Usememo---1")

  //const withOutUsememo=calculateFunction2()
  //console.log(withOutUsememo,"Usememo---2")
  const newData2 = useRef({ a: 10 });
  console.log(newData2);
  const onValuechange = (e) => {
    setValue(e.target.value);
  };

  function showText(text, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, time);
    });
  }

  function mypromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
      promises.forEach((item, index) => {
        item
          .then((resp) => {
            result.push(resp);
            if (index === promises.length - 1) {
              resolve(result);
            }
          })
          .catch((err) => reject("errorrr"));
      });
    });
  }

  mypromiseAll([
    showText("hello", 100),
    Promise.resolve("hii"),
    Promise.resolve("hiii33"),
  ])
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "700px",
        //boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <button onClick={() => setTest(test + 10)}>test</button> */}
      {/* <img
        src="https://cdn.flashtalking.com/xre/421/4214935/3785876/image/3785876.gif?817512172"
        alt="image"
        //style={{ alignSelf: "center", justifySelf: "center" }}
      />
      <div>Testtttt</div>
      <input  onChange={onChange}/> */}
      <div
        style={{
          alignSelf: "flex-start",
          justifySelf: "flex-start",
          width: "300px",
          height: "500px",
          border: "2px solid black",
        }}
      >
        box
      </div>
      {/* <h1>{newData===10?"with usememo":"with usememo"}</h1>
      <h1>{newData===10?"without usememo":"without usememo"}</h1> */}
      {/* <input onChange={(e) => onValuechange(e)} type="text" /> */}
    </div>
  );
}

export default Practice;
