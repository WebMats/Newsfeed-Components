// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
const articlesElement = document.querySelector('.articles');
const maker = () =>  {
let articles = document.querySelectorAll('.article');
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle(this.expandButton))
    // STRETCH CLOSE BUTTON
    this.closeButton = this.domElement.querySelector('.closeBtn');
    this.closeButton.addEventListener('click', () => this.deleteArticle(this.domElement));
  }

  expandArticle(btn) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    btn.textContent === "Click to Close" ? btn.textContent = "Click to Expand" : btn.textContent = "Click to Close";
  }
  deleteArticle(article){
    // article.style.display = "none";
    articlesElement.removeChild(article)
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/
articles.forEach((article) => new Article(article));
}
maker()

//STRETCH ADD ARTICLE
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const form = document.querySelector('form');

form.addEventListener('submit' , (e) => {
  e.preventDefault();
  let wrappingDiv = document.createElement('div')
  wrappingDiv.classList.add('article');
  let headerTwo = document.createElement('h2');
  let dateParagraph = document.createElement('p');
  const date = new Date();
  dateParagraph.textContent =  `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  dateParagraph.classList.add('date')
  let paragraph = document.createElement('p');
  let span = document.createElement('span');
  let button = document.createElement('button');
  button.textContent = "X";
  button.classList.add('closeBtn');
  button.type = "button";
  span.classList.add('expandButton');
  headerTwo.textContent = e.target.title.value;
  paragraph.textContent = e.target.content.value;
  wrappingDiv.appendChild(headerTwo);
  wrappingDiv.appendChild(dateParagraph)
  wrappingDiv.appendChild(paragraph);
  wrappingDiv.appendChild(span);
  wrappingDiv.appendChild(button);
  articlesElement.appendChild(wrappingDiv);
  maker()
})