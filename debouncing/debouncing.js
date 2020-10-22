let counter = 0;
const fetchData = () => {
    console.log('fetching data..', counter++);
}


// Debound function takes two arguments namely function_name and delay
// It allows function_name method to make calls if the difference between two keystrokes is more (by mentioned number)  
const debounceFetchData = (fn, delay) => {
    let timer;

    return function () {
        let context = this,
            args = arguments;

        clearTimeout(timer);        // clear the timer if any
        timer = setTimeout(() => {
            fetchData.apply(context, arguments)     // use apply to pass the context and arguments
        }, delay);
    }
}

const getDataFromAPI = debounceFetchData(fetchData, 500)