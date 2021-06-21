let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let submitbutn = document.getElementById("submitBtn");
let resetBtns = document.getElementById("resetBtn");
let quoteInput = document.getElementById("quoteInput");
let speedTypingTest = document.getElementById("speedTypingTest");

let quoteDisplays = quoteDisplay;


let counter = 1;
let uniqueId = setInterval(function() {
    console.log(counter);
    timer.textContent = counter;
    counter = counter + 1;
}, 1000);

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
}
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
        quoteDisplays.textContent = jsonData.content;

    });

submitbutn.onclick = function() {
    console.log(quoteDisplays.textContent);
    console.log(quoteInput.value);

    let flag = 0;
    let z = 0;
    for (let xy of quoteDisplays.textContent) {
        if (xy === quoteInput.value[z]) {
            flag = 1;
            z = z + 1;
        } else {
            flag = 0;
        }
    }

    if (flag == 1) {
        console.log("you typed in ", counter, "seconds");
        let c = parseInt(counter - 1);
        result.textContent = "you typed in " + c + " seconds";
        clearInterval(uniqueId);

    } else {
        console.log("yot typed wrong")
        result.textContent = "you typed wrong";
        clearInterval(uniqueId);

    }

}

resetBtns.onclick = function() {
    quoteInput.value = "";
}

speedTypingTest.addEventListener("submit", function(event) {
    event.preventDefault();
});
