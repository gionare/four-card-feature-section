// Get all hr from container
const hrElements = document.querySelectorAll('.container hr'); 
const colors = [' #44D3D2', '#EA5454', ' #FCAE4A', '#549EF2'];


// Loop hrElements with forEach method with two parameters, hr and index.
hrElements.forEach((hr, index) => {
// Calculate the color index based on the position in the array
  const colorIndex = index % colors.length;
// Apply selected color as the background color for the current <hr> in the iteration.
  hr.style.backgroundColor = colors[colorIndex];
});