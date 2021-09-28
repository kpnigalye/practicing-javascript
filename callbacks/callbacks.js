let numbers = [1, 2, 4, 7, 3, 5, 6];

const isEvenNumber = (number) => number % 2 === 0;

// function passed as a callback to another function
const evenNumbers = numbers.filter(isEvenNumber);

// pass an anonymous function as a callback function
const oddNumbers = numbers.filter((number) => number % 2);

console.log(evenNumbers);
console.log(oddNumbers);


// --------------------

function download(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`);
    // process the picture once it is completed
    callback(url);

  }, 2000);
}

let url = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg';

// function to process
function process(picture) {
  console.log(`Processing ${picture}`);
}

download(url, process);

// or pass it as an anonymour function
// download(url, function(picture) {
//   console.log(`Processing ${picture}`);
// }); 