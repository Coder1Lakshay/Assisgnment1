const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'DOM Manipulation Practice';

const textContentParagraphs = document.getElementsByClassName('text-content');
for (let i = 0; i < textContentParagraphs.length; i++) {
    textContentParagraphs[i].style.color = 'blue';
}

const mainImage = document.getElementById('main-image');
mainImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt89nu5HcX65UCAUlQG6ZRP6UDiqelNSnTJg&s"; 


const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'pink';


const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph ${index + 1} inside the container.`;
});
