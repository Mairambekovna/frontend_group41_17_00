
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

gmailButton.addEventListener("click", function() {
    const gmail = gmailInput.value;
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailPattern.test(gmail)) {
        gmailResult.textContent = "Valid gmail address!";
        gmailResult.style.color = "green";
    } else {
        gmailResult.textContent = "Invalid gmail address!";
        gmailResult.style.color = "red";
    }
});



// MOVE BLOCK

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0;
let positionY=0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionY >= offsetHeight && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()



// Stopwatch

let counter = 0;
let intervalId;
let isRunning = false;

const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const updateCounterDisplay = () => {
    secondsDisplay.textContent = counter;
};

const startCounter = () => {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(() => {
            counter++;
            updateCounterDisplay();
        }, 1000);
    }
};

const stopCounter = () => {
    clearInterval(intervalId);
    isRunning = false;
};

const resetCounter = () => {
    stopCounter();
    counter = 0;
    updateCounterDisplay();
};

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);



// data json
const catalog = document.querySelector(".catalog")
const xhr = new XMLHttpRequest()
xhr.open("GET" , "../data/data.json")
xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){
        let data = JSON.parse(xhr.response)
        data.map((item)=>{
            const div = document.createElement("div")
            div.setAttribute("class" , "card")
            div.innerHTML=`<h3>${item.name}</h3>
                    <p>${item.history}</p>
                    <img src="${item.img}" alt="${item.img}">
                `

            catalog.append(div)
        })
    }
}
xhr.send()




// users 2 task
const request = new XMLHttpRequest();
request.open('GET', "../data/user.json");
request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
    } else {
        console.error('Ошибка загрузки JSON файла:', request.status);
    }
};

request.onerror = function() {
    console.error('Запрос не удался');
};

request.send();


