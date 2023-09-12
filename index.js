"use strict";

// Each time the page loads a random GIF about burgers will be inserted into the page.
window.addEventListener("load", () => {
    let burgerGIF = document.getElementById("burgerGIF");
    const url = "https://api.giphy.com/v1/gifs/random";
    const key = "bqEbKc1NxbQMF2fFBv5mEH5vC0LYk8NE";

    fetch(`${url}?api_key=${key}&tag=${"burger"}&limit=1&rating=pg`)
         .then(response => response.json())
         .then(obj => {
            let newImg = document.createElement("img");
            newImg.src = obj.data.images.fixed_height.url;
            burgerGIF.appendChild(newImg);
         })
})