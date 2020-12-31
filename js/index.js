let numbers = []
let operations = []
let currentOperation = ""
// actually, just add the last operation to the array when a number/equals is clicked

// need to handle multiple cases: when users accidentally input extra numbers/operations

// Visual nodes
let btn_1 = document.getElementById("one");
let btn_2 = document.getElementById("two");
let btn_3 = document.getElementById("three");
let btn_4 = document.getElementById("four");
let btn_5 = document.getElementById("five");
let btn_6 = document.getElementById("six");
let btn_7 = document.getElementById("seven");
let btn_8 = document.getElementById("eight");
let btn_9 = document.getElementById("nine");
let btn_0 = document.getElementById("zero");
let allNumberBtn = [btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9]

let btn_add = document.getElementById("add");
let btn_sub = document.getElementById("subtract");
let btn_mult = document.getElementById("multiply");
let btn_div = document.getElementById("divide");
let allOperationBtn = [btn_add, btn_sub, btn_mult, btn_div]

let btn_dec = document.getElementById("decimal");
let btn_equal = document.getElementById("equal");
let btn_clear = document.getElementById("clear")

let display = document.getElementById("display");

// adding functionality to each number button
for (let i = 0; i < allNumberBtn.length; i++) {
    let btn_i = allNumberBtn[i]
    btn_i.addEventListener("click", function () {
        addNumToDisplay(i)
    })
}

// Adds a number to the end of an existing number in the text area
// * Input: 0-9 or .
function addNumToDisplay(n) {
    display.textContent += n
}

// adding functionality to each operation button
for (let i = 0; i < allOperationBtn.length; i++) {
    let btn_i = allOperationBtn[i]
    btn_i.addEventListener("click", function () {
        storeOperation(btn_i.innerText)
    })
}

function storeOperation(strOperation) {
    let inputContent = parseFloat(display.textContent)

    if (inputContent) {
        numbers.push(inputContent)
        operations.push(strOperation)
        display.textContent = ""
    } 

    console.log(operations)
    
    
    // operations.push(strOperation)
    // display.textContent = ""
}

// Decimal functionality
btn_dec.addEventListener("click", function () {
    addNumToDisplay(".")
    btn_dec.style.opacity = "50%"
    btn_dec.disabled = true
})

// Clear textarea functionality
btn_clear.addEventListener("click", function () {
    display.textContent = ""
    btn_dec.disabled = false
    btn_dec.style.opacity = "100%"
    numbers = []
    operations = []
})

// Equals functionality
btn_equal.addEventListener("click", function () {

    numbers.push(parseFloat(display.textContent)) //adds current number to the numbers array

    if (numbers.length === 0) {
        display.textContent = "No input. Press CLEAR to try again."
    } else if (operations.length === 0) {
        display.textContent = numbers[0]
    } else if (numbers.length === 1) {
        display.textContent = numbers[0]
    } else {
        console.log(numbers)
        console.log(operations)
        // Calculator currently only supports two numbers.
        let answer = applyMath(numbers[0], numbers[1], operations[0])
        display.textContent = answer

        // after press equals, reset the held numbers
        numbers = []
        operations = []
    }
})


// function applyOperations(numbers, operations, currentNumber) {
//     if (numbers.length === 1) {
//         applyMath(currentNumber, numbers.shift(), operations.shift())
//     } else {
//         let firstNum = numbers.shift()
//         let firstOp = operations.shift()
//         return applyOperations(numbers, operations, applyMath(currentNumber, firstNum, firstOp))
//     }
// }

// applyMath: applies the math operation of strOperation to a and b
// Input: number, number, String (representing a math op.)
// Output: a (strOperation) b
function applyMath(a, b, strOperation) {
    if (strOperation === "+") {
        return a + b
    } else if (strOperation === "-") {
        return a - b
    } else if (strOperation === "*") {
        return a * b
    } else {
        return a / b
    }
}

console.log("Easter egg? 1 + 2 = " + applyMath(1, 2, "+"))
