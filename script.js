let myLibrary = [
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
    }
];

class Book {
    constructor(title, author, pages, lang, year, readStatus) {
        this.Title = title;
        this.Author = author;
        this.Pages = pages;
        this.Language = lang;
        this.Year = year;
        this['read status'] = readStatus;
    }
}

function addBookToLibrary(bookDetail) {
    const newBook = new Book(bookDetail[0], bookDetail[1], bookDetail[2], bookDetail[3], bookDetail[4], bookDetail[5]);
    console.log(newBook);
    myLibrary.push(newBook);

    let latestIndex = myLibrary.length - 1;
    callShowBooks(latestIndex);
}

let removeButtons;
const cardBoxDiv = document.querySelector('.card-box');
const bookAddButton = document.querySelector('#add-book');
const formCloseButton = document.querySelector('.close-button');
const formContainerDiv = document.querySelector('.form-container');
const formContainerDivStyle = formContainerDiv.style;
const formSubmitButton = document.querySelector('.form-submit');
const myForm = document.querySelector('.book-form');

//run a loop to display books from myLibrary array
function showBook(firstBookPosition) {
    let title = '',
        author = '',
        pages = '',
        readStatus = '',
        year = '',
        language = '';

    for (let i = firstBookPosition; i < myLibrary.length; i++) {
        title = myLibrary[i]['Title'];
        author = myLibrary[i]['Author'];
        pages = myLibrary[i]['Pages'];
        readStatus = myLibrary[i]['read status'];
        year = myLibrary[i]['Year'];
        language = myLibrary[i]['Language'];

        const card = document.createElement('div');
        card.classList.add('card')
        card.setAttribute('data-index-number', i);
        cardBoxDiv.appendChild(card);

        //create corresponding divs and append it to card

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

        //put value in divs

        for (let j = 0; j < 6; j++) {
            titleDivSpanOne.textContent = 'Title :';
            titleDivSpanTwo.textContent = title;

            authorDivSpanOne.textContent = 'Author :';
            authorDivSpanTwo.textContent = author;

            pageDivSpanOne.textContent = 'Pages :';
            pageDivSpanTwo.textContent = pages;

            readDivSpanOne.textContent = 'Read Status:';
            readDivSpanTwo.textContent = readStatus;
            toggleReadButton.textContent = 'Change';

            yearDivSpanOne.textContent = 'Year :';
            yearDivSpanTwo.textContent = year;

            langDivSpanOne.textContent = 'Language :';
            langDivSpanTwo.textContent = language;
        }
    }
}

function callShowBooks(bookPosition) {
    showBook(bookPosition);
}

//reset form after submission

function clearAndResetForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#lang').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('input[name="read-status"]:checked').checked = false;

    //toggle the popup form visibility
    formContainerDivStyle.display = 'none';
}

function rearrangeMyLibrary(indexPosition) {
    //create new array excluding the deleted index
    myLibrary = myLibrary.filter((element, index) => indexPosition != index);
}

bookAddButton.addEventListener('click', () => {
    formContainerDivStyle.display = 'block';
});

formCloseButton.addEventListener('click', () => {
    formContainerDivStyle.display = 'none';
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents default behavior of resetting page after submission
    const formDetail = [];
    const title = document.querySelector('#title').value;
    formDetail.push(title);
    const author = document.querySelector('#author').value;
    formDetail.push(author);
    const pages = document.querySelector('#pages').value;
    formDetail.push(pages);
    const lang = document.querySelector('#lang').value;
    formDetail.push(lang);
    const year = document.querySelector('#year').value;
    formDetail.push(year);
    const readStatus = document.querySelector('input[name="read-status"]:checked').value;
    if (readStatus === 'Yes') formDetail.push('READ');
    if (readStatus === 'No') formDetail.push('NOT READ');

    //call the function to add book object
    addBookToLibrary(formDetail);
    clearAndResetForm();
});

//initial call to display books
callShowBooks(0);

function deleteBook(event) {
    if (event.target['id'] === 'delete-icon') {

        let dataIndexNumber = 0;
        dataIndexNumber = +event.target.parentNode.getAttribute('data-index-number');

        rearrangeMyLibrary(dataIndexNumber);

        while (cardBoxDiv.lastElementChild) {
            cardBoxDiv.removeChild(cardBoxDiv.lastElementChild);
        }

        callShowBooks(0);
    } else if (event.target.className === 'toggle-read') {
        let readToggle = event.target.previousSibling;
        let readToggleText = readToggle.textContent;

        if (readToggleText === 'READ') readToggle.textContent = 'NOT READ';
        if (readToggleText === 'NOT READ') readToggle.textContent = 'READ';
    }
}

cardBoxDiv.addEventListener('click', deleteBook);