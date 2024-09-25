// PHONE BLOCK

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'Все правильно'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML = 'Номер указан не верно'
        phoneSpan.style.color = 'red'
    }
}



// TAP SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')
const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block'
    tabContentItems[id].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if(event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    function switchTab() {
        hideTabContent();
        showTabContent(currentIndex);

        currentIndex = (currentIndex + 1) % tabContentBlocks.length;
    }
    setInterval(switchTab, 3000);
});




//kiss - keep it short and simple

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch("../data/converter.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const convert = async (elem, target, target2)=> {
    elem.oninput = async () => {
        try {
            const response = await fetchData();
            target.forEach(e => {
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2);
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2);
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2);
                }
            });
            if (elem.value === '') {
                target.forEach(e => e.value = '');
                elem.value === '' && (target.forEach(e => e.value = ''));
            }
        } catch (error) {
            console.error("Conversion error:", error);
        }
    };
};

convert(som, [usd, eur]);
convert(usd, [som, eur]);
convert(eur, [som, usd]);


//CARD SWITCHER
const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let cardId = 1;

async function updateCard(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        if (!response.ok) {
            throw new Error('Ошибка сети или карточка не найдена');
        }
        const data = await response.json();
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        card.innerHTML = `<p style="color: red;">Произошла ошибка при загрузке карточки: ${error.message}</p>`;
        console.error('Ошибка:', error);
    }
}

updateCard(cardId);

btnNext.onclick = () => {
    cardId = (cardId >= 200) ? 1 : cardId + 1;
    updateCard(cardId);
};

btnPrev.onclick = () => {
    cardId = (cardId <= 1) ? 200 : cardId - 1;
    updateCard(cardId);
}


const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Ошибка при получении данных с сервера');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка:', error.message);
    }
};

fetchPosts();





//WEATHER

const searchInput=document.querySelector('.cityName')
const searchButton =  document.querySelector('#search')
const temp=document.querySelector('.temp')
const city = document.querySelector('.city')

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const API = 'http://api.openweathermap.org/data/2.5/weather'

searchInput.oninput = async () => {
    try {
        const response = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}`)
        const data = await response.json()
        city.innerHTML = data.name || 'Город не найден...'
        temp.innerHTML = data?.main?.temp ? Math.round(data.main.temp - 273) + '&deg;C' : '...'
    } catch(e) {
        console.log(e)
    }}




