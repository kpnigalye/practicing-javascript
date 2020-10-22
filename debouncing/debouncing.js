let counter = 0;
const fetchData = () => {
    console.log('fetching data..', counter++);
}

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