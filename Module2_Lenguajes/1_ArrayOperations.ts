const arrayValuesExample = ['First', 'Second', 'Third']

// 1. ARRAY OPERATIONS 
const head = (arr) => {
    const [first, ...tail] = arr;
    return "The first element of the given array is " + first;
}

const tail = (arr) => {
    const [first, ...tail] = arr;
    return "The tail element(s) of the given array is " + tail;
}

const init = (arr) => {
    const result = arr.slice(0, arr.length - 1);
    return "All elements but the last are " + result;
}

const last = (arr) => {
    const last = arr.slice(arr.lastIndexOf(arr));
    return "The tail element(s) of the given array is " + last;
}

console.log(head(arrayValuesExample));
console.log(tail(arrayValuesExample));
console.log(init(arrayValuesExample));
console.log(last(arrayValuesExample));

// 2. Concat 
const concat = (a, b,) => {
    const result = [...a, ...b];
    return "The concatenation of the 2 elements is " + result
}

const concatExtra = (a, b, ...c) => {
    const result = [...a, ...b, ...c];
    return "The concatenation of the multiple elements is " + result
}

console.log(concat(arrayValuesExample, arrayValuesExample));
console.log(concatExtra(arrayValuesExample, arrayValuesExample, arrayValuesExample, arrayValuesExample));

// 3. Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function clone(source) {
    // const cloneResult = JSON.parse(JSON.stringify(source));
    const cloneResult = { ...source };
    return cloneResult;
}

function merge(source, target) {
    const cloneSourceResult = clone(source);
    const cloneTargetResult = clone(target);
    const mergeResult = {
        ...cloneTargetResult,
        ...cloneSourceResult,
    };
    return mergeResult;
}

console.log(clone(a));
console.log(merge(a, b));

//4. Read Books (TypeScript is not working)

// interface Book {
//     title: string;
//     isRead: boolean;
// };

// const books : Book[] = [
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

// function isBookRead(books : Book[], titleToSearch : string)  {
function isBookRead(books, titleToSearch)  {
    const found = books.find( ({title}) => title === titleToSearch);
    return (found === undefined) ? false : found.isRead;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
