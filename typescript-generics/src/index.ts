/*
& From: https://www.youtube.com/watch?v=nViEqpgwxHE
*/

type numArray = Array<number>; // number[]

// Generics Function

const last = (arr: Array<number>) => {
    return arr[arr.length - 1];
};

const l = last([1,2,3]);
/*
const l2 = last(['a','b','c']); 
*Doesn't work, need to use generics
*/
const last2 = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1];
};
const l2 = last2(['a','b','c']);
const l3 = last2<string>(['a','b','c']);

//* that was basic generics
//^ --------------------------------------------------------
//^ --------------------------------------------------------

/*
* Now we'll take an array, and return an array
*/

const makeArr = <T>(x: T) => {
    return [x];
};

const v = makeArr(5);
const v2 = makeArr("a");

//& Can also have two types <T, Y>(x: T, y: Y)...

// The following, with two values, will infer that it is returning an array...

const makeArr2 = <T, Y>(x: T, y: Y) => {
    return [x, y];
};

// Hover over the function, it shows that it's returning (T | Y)[] a union array
//^ this is more like a tuple so we can define that:

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
};

// This takes two params, and returns the two params as a tuple, which is basically an array with defined types
// You can inter or write the types -> two types any combo, or defined

let a = makeTuple(5, 6);
let b = makeTuple<string | null, number>("a",2)
b = makeTuple("b", 3);
b = makeTuple(null, 2);
/*
b = makeTuple(3, 2);
! Cannot do this, because the type has been defined, either explicitly or inferred at the instantiation/ first assignment to variable 'b'
*/