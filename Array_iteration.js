// tutorial https://www.youtube.com/watch?v=Urwzk6ILvPQ
// code type on visual studio code and runned with node

// for each -- it will go though every item of the array. item being the value, index being the position of the array. Example, first element has an item of 1 for an index of 0.
let array = [1,2,3];
array.forEach(function(item, index){
    //console.log(item, index)
})

// map -- it is to go through all element of the array, modify it and return the modified array
const DOUBLED = array.map(function(item){
    return item * 2;
});
// console.log(DOUBLED)

// filter -- it is to go through all element and compare item with a condition, if it is true the value is sent back inside the array.
const EVENTS = array.filter(function (item) {
    return item % 2 === 0;
})
// console.log(EVENTS)

// reduce -- take an array, and carry a result that will be based on an iteration on each elemets of that array, the number after the call back function is the starting value for the result
const SUM = array.reduce(function(result, item){
    return result + item;
}, 0)
//console.log(SUM)

// some -- check if any item match the call back function comparison, will returm true or false accordingly
const NEGATIVE = [1,2,-3,-4,5,-6].some(function (item){
    return item < 0;
})
// console.log(NEGATIVE)

// every -- same as some but condition need to be true for all item of the array

const POSITIVE = [1,2,-3,-4,5,-6].every(function (item){
    return item > 0;
})
// console.log(POSITIVE)

// find -- it look though the array and look for a specific item, if it is found it will be return
let objects = [{ id: 'a'}, { id: 'b'}, { id: 'c'}];
let found = objects.find(function (item) {
    return item.id === 'b';
})
//console.log(found)

// find index -- same as find, but it will return the index, the positin of the element in the array.
found = objects.findIndex(function (item) {
    return item.id === 'b';
})
console.log(found)