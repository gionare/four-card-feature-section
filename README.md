# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![Design preview for the Four card feature section coding challenge](![Alt text](design/desktop-design.jpg))

### Links

- Live Site URL:(https://gionare.github.io/four-card-feature-section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- wanted to use css grid, but prefered display flex
- Mobile-first workflow
- haven't used [React](https://reactjs.org/) - JS library
- haven't used [Next.js](https://nextjs.org/) - React framework

### What I learned

To see how you can add code snippets, see below:

arranged HTML and CSS so well

```js
// Get all hr from container
const hrElements = document.querySelectorAll(".container hr");
const colors = [" #44D3D2", "#EA5454", " #FCAE4A", "#549EF2"];

// Loop hrElements with forEach method with two parameters, hr and index.
hrElements.forEach((hr, index) => {
  // Calculate the color index based on the position in the array
  const colorIndex = index % colors.length;
  // Apply selected color as the background color for the current <hr> in the iteration.
  hr.style.backgroundColor = colors[colorIndex];
});
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- Visual Studio Code
- VS Code Live Server Extension
- Github
- [google fonts](<url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,500;0,700;0,800;1,500;1,700;1,800&family=Poppins:wght@200;400;600&family=Red+Hat+Display:wght@300;500;700;900&display=swap");>) - This helped me for styles. I really liked this pattern and will use it going forward.
- [css styles](https://cssgenerator.org) - kinda outdated webpage for css styles.
- [css styles](https://www.cssportal.com/css-flexbox-generator/)

- [css styles](https://cssgenerator.org/border-radius-css-generator.html) - CSS Flexbox
  Generator

## Author

- Github - [George](https://gionare.github.io/four-card-feature-section/)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
