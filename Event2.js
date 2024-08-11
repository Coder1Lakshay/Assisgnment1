// Function to change the button color when clicked
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show the message when the mouse is over the button
function showMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    document.getElementById(messageId).style.display = 'block';
}

// Function to hide the message when the mouse is out of the button
function hideMessage(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    document.getElementById(messageId).style.display = 'none';
}

// Function to hide the button when double-clicked
function hideButton(event) {
    event.target.style.display = 'none';
}

// Add event listeners to each button
document.getElementById('button1').addEventListener('click', changeColor);
document.getElementById('button1').addEventListener('mouseover', showMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeColor);
document.getElementById('button2').addEventListener('mouseover', showMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeColor);
document.getElementById('button3').addEventListener('mouseover', showMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);
