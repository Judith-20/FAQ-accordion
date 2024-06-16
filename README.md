# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](.assets/images/Faq_accordion desktop image.png)
![](.assets/images/Faq_accordion mobile image.png)

### Links

- Live Site URL: (https://github.com/Judith-20/FAQ-accordion.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Vanilla JS

### What I learned
Learnt new and amazing things with this project. For example assigning a particular class with styles that you can use over and over in different parts of your codes. See below for others

```html
<h1>Some HTML code I'm discovered during this project: tabindex="0"</h1>
```
```css
.row {
    display: flex;
    align-items: center;
}
```
```js
headers.forEach((header, index) => {
        const icon = icons[index];
        const paragraph = paragraphs[index];

    if (header && icon && paragraph) {
        const toggleParagraph = () => {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
        icon.src = './assets/images/icon-minus.svg';
        icon.style.background = 'invert(35%) sepia(84%) saturate(635%) hue-rotate(90deg) brightness(92%) contrast(89%)'; // change color
                    } 
        else {
        paragraph.style.display = 'none';
        icon.src = './assets/images/icon-plus.svg';
        icon.style.filter = ''; // reset filter
             }
            };
    };
});
```

### Continued development
 For future projects, I would focus more on navigating different parts of the code with the keyboard and adding event listeners also to the keys  


### Useful resources

- [Example resource 1](https://freecodecamp.com) - This website helped me to assign event listeners keys which displays the paragraph when i press the space or enter button on either the h6 om image. I really liked this pattern and will use it going forward.

## Author

- Website - Ochuba Judith
- Frontend Mentor - (https://www.frontendmentor.io/profile/Judith-20)
- Twitter - [@ochuba_judith](https://x.com/ochuba_judith)
