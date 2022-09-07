let myLibrary = [
    {
        Title: 'Bidagdha Chintamnai',
        Author: 'Abhimanyu Samantsinghar',
        Pages: 655,
        'read status': 'NOT READ',
        Year: 1534,
        Language: 'Odia'
    },

    {
        Title: 'Baidehisa Bilasha',
        Author: 'Upendra Bhanja',
        Pages: 1325,
        'read status': 'READ',
        Year: 1645,
        Language: 'Odia'

    },

    {
        Title: 'Sridhari Tika',
        Author: 'Sridhar Swami',
        Pages: 435,
        'read status': 'NOT READ',
        Year: 1245,
        Language: 'Sanskrut'

    },

    {
        Title: 'Ramcharit Manas',
        Author: 'Tulsi Das',
        Pages: 1020,
        'read status': 'NOT READ',
        Year: 1578,
        Language: 'Abadhi'
    },

    {
        Title: 'Kishore Chandranand Champu',
        Author: 'Baldeb Rath',
        Pages: 235,
        'read status': 'READ',
        Year: 1812,
        Language: 'Odia'
    }
];

const cardBoxDiv = document.querySelector('.card-box');
console.log(cardBoxDiv);

// run a loop to display the books
for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card')
    cardBoxDiv.appendChild(card);

    const contentDivTitle = document.createElement('div');
    contentDivTitle.classList.add('content-div', 'title');

    const contentDivAuthor = document.createElement('div');
    contentDivAuthor.classList.add('content-div', 'author');

    const contentDivPages = document.createElement('div');
    contentDivPages.classList.add('content-div', 'pages');

    const contentDivRead = document.createElement('div');
    contentDivRead.classList.add('content-div', 'read');

    const contentDivYear = document.createElement('div');
    contentDivYear.classList.add('content-div', 'year');

    const contentDivLanguage = document.createElement('div');
    contentDivLanguage.classList.add('content-div', 'language');

    card.append(
        contentDivTitle, contentDivAuthor, contentDivPages,
        contentDivRead, contentDivYear, contentDivLanguage
    );

    // console.table(card.childNodes);

    const titleDivSpanOne = document.createElement('span');
    titleDivSpanOne.classList.add('one');
    const titleDivSpanTwo = document.createElement('span');
    titleDivSpanTwo.classList.add('two');
    contentDivTitle.append(titleDivSpanOne, titleDivSpanTwo);

    const authorDivSpanOne = document.createElement('span');
    authorDivSpanOne.classList.add('one');
    const authorDivSpanTwo = document.createElement('span');
    authorDivSpanTwo.classList.add('two');
    contentDivAuthor.append(authorDivSpanOne, authorDivSpanTwo);

    const pageDivSpanOne = document.createElement('span');
    pageDivSpanOne.classList.add('one');
    const pageDivSpanTwo = document.createElement('span');
    pageDivSpanTwo.classList.add('two');
    contentDivPages.append(pageDivSpanOne, pageDivSpanTwo);

    const readDivSpanOne = document.createElement('span');
    readDivSpanOne.classList.add('one');
    const readDivSpanTwo = document.createElement('span');
    readDivSpanTwo.classList.add('two');
    const toggleReadButton = document.createElement('button');
    toggleReadButton.classList.add('toggle-read')
    contentDivRead.append(readDivSpanOne, readDivSpanTwo, toggleReadButton);

    const yearDivSpanOne = document.createElement('span');
    yearDivSpanOne.classList.add('one');
    const yearDivSpanTwo = document.createElement('span');
    yearDivSpanTwo.classList.add('two');
    contentDivYear.append(yearDivSpanOne, yearDivSpanTwo);

    const langDivSpanOne = document.createElement('span');
    langDivSpanOne.classList.add('one');
    const langDivSpanTwo = document.createElement('span');
    langDivSpanTwo.classList.add('two');
    contentDivLanguage.append(langDivSpanOne, langDivSpanTwo);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-icon');
    card.appendChild(deleteButton);

    // add text to nodes
    titleDivSpanOne.textContent = 'Title :';
    titleDivSpanTwo.textContent = 'Harry Potter';

    authorDivSpanOne.textContent = 'Author :';
    authorDivSpanOne.textContent = 'J K Rowling';

    pageDivSpanOne.textContent = 'Pages :';
    pageDivSpanTwo.textContent = '935';

    readDivSpanOne.textContent = 'Read Status:';
    readDivSpanTwo.textContent = 'Read';
    toggleReadButton.textContent = 'Change';

    yearDivSpanOne.textContent = 'Year :';
    yearDivSpanTwo.textContent = '2001';

    langDivSpanOne.textContent = 'Language :';
    langDivSpanTwo.textContent = 'English';
}
