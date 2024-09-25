const main = document.querySelector('.main')

const fetchData = async ()=> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/?limit=56');
        const data = await response.json();
        data.forEach( (person) => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `<h5 class="title"> ${person.title} </h5>
                              <p class="body-text">${person.body} </p>
                              <img class="photo" src="../img/hermiona.jpeg" alt="">`;
            main.append(card)
        })
    }catch(error){
        console.log('error')
    }
}
fetchData()