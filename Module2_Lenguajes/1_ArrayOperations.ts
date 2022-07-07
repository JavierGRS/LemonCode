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

//4. Read Books (npm run )
interface Book {
    title: string
    isRead: boolean
}

const books : Book[] = [
// const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books : Book[], titleToSearch : string)  {
// function isBookRead(books, titleToSearch)  {
    const found = books.find( (b) => b.title === titleToSearch && b.isRead);
    return Boolean(true);
}

console.log("Devastacion: " + isBookRead(books, "Devastación")); // true
console.log("Cancion de hielo y fuego: " + isBookRead(books, "Canción de hielo y fuego")); // false
console.log("Los pilares de la tierra: " + isBookRead(books, "Los Pilares de la Tierra")); // false
class SlothMachine {
    counter = 0;
    play() {
        this.counter += 1;
        var rand_number1 = Math.random();
        var rand_number2 = Math.random();
        var rand_number3 = Math.random();
        var random_boolean_value = rand_number1 < 0.5 && rand_number2 < 0.5 && rand_number3 < 0.5;
        console.log(random_boolean_value);

        if (random_boolean_value) {
            console.log("Congratulations!!!. You won " + this.counter + "coins!!")
            this.counter = 0;
        } else {
            console.log("Good luck next time!!")
        }
    }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

// Extra: Califications Summary

interface Student {
    name: String
    califications: Array<number>
}

interface StudentResult {
    name: String
    highestCalification: number
    averageCalifications: number
}

const students : Student [] = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
  ];

  const summarizeClassRoom = (studentList : Student[])=> {
    const result = [];
    studentList.forEach((student : Student) => {
        result.push(
            {
                name: student.name, 
                highestCalification: Math.max(...student.califications), 
                averageCalifications: Number((student.califications.reduce((a : number, b: number) => a + b,0) / student.califications.length).toPrecision(3))
            }
        )
    });
    return result;
  };
  
  console.log(summarizeClassRoom(students));

  //Extra: Curry setter
interface Person {
    name: string
    surname: string
    age: number
}

const julia = { name: "Julia", surname: "Álvarez", age: 19 };

const set = (person : Person, field: string, value : string | number ) => {
    return field === "name" ? { ...person, name: value}  
        : field === "surname" ? { ...person, surname: value}
        : field === "age" ? { ...person, age: value}
        : {...person}
}

const setName = (person : Person, value : string) => {
    return { ...person, name: value} 
}

const setSurName = (person : Person, value : string) => {
    return { ...person, surname: value} 
}

const setAge = (person : Person, value : number ) => {
    return { ...person, age: value}  
}

const updatedJulia = set(julia, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurName(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
