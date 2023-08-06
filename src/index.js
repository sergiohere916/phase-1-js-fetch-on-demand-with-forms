const init = () => {
  const inputForm = document.querySelector("form");
  const targetUrl = "http://localhost:3000/movies";


  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputtedId = e.target[0].value; //This is grabbing our forms child the input of type text which currently holds the id we entered
    //const inputtedId = document.querySelector("form input[type=text").value   this would also have worked the same as how we currently have inputtedId 
    // in this case we are just directly grabbing the element we need
    console.log(inputtedId);
    fetch(`${targetUrl}/${inputtedId}`) //targeting specific object not the full array 
    .then(res => res.json())
    .then(movie => renderMovie(movie))
  })
}

function renderMovie(movie) {
        const h4Element = document.querySelector("section#movieDetails h4");
        h4Element.textContent = movie.title;
        const pElement = document.querySelector("section#movieDetails p");
        pElement.textContent = movie.summary; 
}
document.addEventListener('DOMContentLoaded', init);