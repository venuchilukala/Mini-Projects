let counterElement = document.getElementById("countValue")


function onIncrement(){
    let previousCount = counterElement.textContent
    let updatedCount = parseInt(previousCount) + 1 

    if(updatedCount > 0){
        counterElement.style.color = "green"
    }
    else if(updatedCount < 0){
        counterElement.style.color = "red"
    }
    else{
        counterElement.style.color = "black"
    }

    counterElement.textContent = updatedCount
}

function onReset(){
    let updatedCount = counterElement.textContent 
    counterElement.style.color = "black"
    counterElement.textContent = 0

}

function onDecrement(){
    let previousCount = counterElement.textContent
    let updatedCount = parseInt(previousCount) - 1

    if(updatedCount > 0){
        counterElement.style.color = "green"
    }
    else if(updatedCount < 0){
        counterElement.style.color = "red"
    }
    else{
        counterElement.style.color = "black"
    }

    counterElement.textContent = updatedCount
} 