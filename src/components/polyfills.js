import React from 'react';

function polyfills(props) {

    //1. Map
    //Takes three args.
    //array.map(arrayItem,index,actualArray)

    //Reduce -- array.reduce((acc,curr,index,array))


    //Polyfill for map.

    Array.prototype.myMap = function (cb) {
        let temp = [];
        //Here we are using this because, this points to the array we are referring
        for (let i = 0; i < this.length; i++) {
            temp.push(cb(this[i], i, this))
        }
        return temp;

    }

    Array.prototype.myFilter = function (cb) {
        let temp = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) temp.push(this[i])
        }
        return temp
    }

    Array.prototype.myReduce = function (cb, initialValue) {
        var accumulator = initialValue;
        for (let i = 0; i < this.length; i++) {
            //If the user does not give the accumulator value, 
            //initial value of the array is taken as accumulator
            accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
        }
        return accumulator
    }

    //map and forEach difference.
    //Map will not update original array. Foreach will not return anything.
    //We can chain map since it returns the array.
    const arr = [1, 2, 3, 4, 5];
    arr.map((ar) => ar + 2)

    let students = [{ name: "piyush", rNumber: 2, marks: 50 }, { name: "piya", rNumber: 3, marks: 70 }]
    let names = students.map((obj) => obj.name?.toUpperCase());
    let greaterthanSixty = students.filter((obj) => obj.marks > 60).map((filteredObj) => filteredObj.name)
    let sumOfMarks = students.reduce((acc, current) => acc + current.marks, 0)

    let reduceChain = students.map((student) => {
        if (student.marks < 60) {
            student.marks += 20;
        }
        return student
    }).filter((filteredList) => filteredList.marks > 60).reduce((acc, curr) => acc + curr.marks, 0);
    console.log(reduceChain)
    return (
        <div>
            Polyfill
        </div>
    );
}

export default polyfills;