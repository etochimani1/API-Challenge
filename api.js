



let baseURL = 'https://cat-fact.herokuapp.com';
fetch(baseURL)
.then(res => res.json())
.then(json => console.log(json))

logo.addEventListener('click', fetchQuote)

async function fetchQuote(){
    const response = await fetch(baseURL);
    console.log(response);
    const json = await response.json();
    displayQuote(json)
}