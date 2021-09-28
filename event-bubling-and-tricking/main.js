document.querySelector('#outer')
    .addEventListener('click', () => {
        console.log('outer div clicked')
    }, false)

document.querySelector('#middle')
    .addEventListener('click', () => {
        console.log('middle div clicked')
    }, true)

document.querySelector('#inner')
    .addEventListener('click', () => {
        console.log('inner div clicked')
    }, true)