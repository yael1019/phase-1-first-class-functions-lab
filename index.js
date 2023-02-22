// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    const result = [arr[0], arr[1]];
    return result
}
// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(arr) {
    const result = [];
    result.push(arr[arr.length - 2], arr[arr.length - 1]);
    return result;
}
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = num => (fare) => num * fare;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, cb) => {
    return cb(arr);
}

// console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));