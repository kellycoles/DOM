const header =document.querySelector(".article__header")
header.textContent = "Welcome to Kelly's blog"

const el = document.querySelectorAll('.article__header');
 for(let i = 0; i < el.length; i++){
  el[i].classList.add("important");
}

 const dashed = document.getElementsByTagName('aside')[0];
 dashed.classList.remove("dashed");


const footerColor = document.querySelector(".article__footer");
footerColor.classList.add("goldenrod");




//  Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

// Obtain a reference the element with a class of dashed and remove it.

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
