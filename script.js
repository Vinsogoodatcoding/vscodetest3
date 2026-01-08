//create an empty array here
let yo = []


function getfood() {
    
    //take whatever the user selected and add it to the array
    let x = document.getElementBydId('foods').value
    yo.push(x)
    //get localstorage key and add it to the empty arrya
    let y = localStorage.getItem('food')
    yo.push(y)
    //save array. it is ok to ovberwrite the key
    localStorage.setItem('food',yo)
    //go to page 2
    








    //directly save the value into local storage
    //localStorage.setItem('food',document.getElementBydId('foods').value)
    location.href = "page2.html"
}

function clearlocal() {
    localStorage.clear()
}
