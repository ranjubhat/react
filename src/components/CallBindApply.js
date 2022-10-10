import React from 'react';
import { BinarySearch, BinarySearchRecursion } from '../Search/BinarySearch';
import { BubbleSort } from '../Sort/BubbleSort';
import { SelectionSort } from '../Sort/SelectionSort';

function CallBindApply(props) {

    var obj={name:"Ranjan"};
    function sayHi(...args){
        const [age,name]=args
        console.log(age,name)
        return 'Hello'+this.name+name+age
    }

    //Call
    // sayHi.call(obj,25);

    //Apply
    //Same as call but expects args in array;

    // sayHi.apply(obj,[26])

    //Bind chaining is not allowed.
    //A function cannot be rebound.

    var age=20;
    var person={
        name:"ranjan",
        age:25,
        getAgeArrow:()=>console.log(this),
        getAge:function(){
            console.log(this)
        }
    }

    var person2={age:24};
    // person.getAgeArrow.call(person2);
    // person.getAge.call(this)
    
    
    console.log(BinarySearchRecursion([3,6,9,10,67,90,345],345))

    console.log(SelectionSort([50,3,1,8,4,0]))
    return (
        <div>
            {/* { sayHi.apply(obj,[27,"ranjan","test"])} */}
        </div>
    );
}

export default CallBindApply;