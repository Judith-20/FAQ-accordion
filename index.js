document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.faq-header');
    const icons = document.querySelectorAll('.icon-toggle');
    const paragraphs = document.querySelectorAll('.faq-paragraph');

    headers.forEach((header, index) => {
        const icon = icons[index];
        const paragraph = paragraphs[index];
    // confirms the headers, icons and paragraphs before adding 
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

    header.addEventListener('click', toggleParagraph);
    icon.addEventListener('click', () => header.click());

    document.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter' || event.key === ' ') && (document.activeElement === header || document.activeElement === icon)) {
    event.preventDefault();
    header.click();
        };
     });
     };
    });
});
