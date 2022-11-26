let categorySelect = document.querySelector('#category_select');
let jokeDiv = document.querySelector("#joke")
    ;(async() => {
        let response = await fetch('https://api.chucknorris.io/jokes/categories')
        let categories = await response.json();
        for(let category of categories){
            categorySelect.innerHTML += `<option value="${category}">${category}</option>`
        }
    })(); 

     async function loadJokes(selectedCategory) {
            let response = await fetch(`'https://api.chucknorris.io/jokes/random?category=${categorySelect.value}'`)
            let newArr = await response.json();
       
        jokeDiv.innerHTML += `${newArr.value}`
    
    }
    
    
    categorySelect,addEventListener("change",()=>
    {
        const selectedCategory = `${categorySelect.value}`;
        loadJokes(selectedCategory)
     }
        );

   