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





// converter
const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement1, targetElement2) => {
    element.oninput =() => {
        const request = new XMLHttpRequest()
        request.open ('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            const usdRate = data.usd; // Курс USD к сому
            const eurRate = data.eur; // Курс EUR к сому


            if(element.id === 'som') {
                targetElement1.value = (element.value / usdRate).toFixed(2)
                targetElement2.value = (element.value / eurRate).toFixed(2)
            }
            if(element.id === 'usd') {
                targetElement1.value = (element.value * usdRate).toFixed(2)
                targetElement2.value = (element.value * usdRate / eurRate).toFixed(2)
            }
            if(element.id === 'eur') {
                targetElement1.value = (element.value * eurRate).toFixed(2)
                targetElement2.value = (element.value * eurRate / usdRate).toFixed(2)
            }
            if(targetElement1.value === '' || targetElement2.value === '') {
                targetElement1.value = '';
                targetElement2.value = '';

            }
        }
    }
}

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);