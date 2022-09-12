let myLibrary = [
    {
        Title: 'Bidagdha Chintamnai',
        Author: 'A Samantsinghar',
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

    }

    // {
    //     Title: 'Sridhari Tika',
    //     Author: 'Sridhar Swami',
    //     Pages: 435,
    //     'read status': 'NOT READ',
    //     Year: 1245,
    //     Language: 'Sanskrut'

    // },

    // {
    //     Title: 'Ramcharit Manas',
    //     Author: 'Tulsi Das',
    //     Pages: 1020,
    //     'read status': 'NOT READ',
    //     Year: 1578,
    //     Language: 'Abadhi'
    // },

    // {
    //     Title: 'Kishore Champu',
    //     Author: 'Baldeb Rath',
    //     Pages: 235,
    //     'read status': 'READ',
    //     Year: 1812,
    //     Language: 'Odia'
    // }
];

function Book(title, author, pages, lang, year, readStatus) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this['read status'] = readStatus;
    this.Year = year;
    this.Language = lang;
}

function addBookToLibrary(bookDetail) {
    const newBook = new Book(bookDetail[0], bookDetail[1], bookDetail[2], bookDetail[3], bookDetail[4], bookDetail[5]);
    myLibrary.push(newBook);

    let latestIndex = myLibrary.length - 1;
    callShowBooks(latestIndex);
}

const cardBoxDiv = document.querySelector('.card-box');
const bookAddButton = document.querySelector('#add-book');
const formCloseButton = document.querySelector('.close-button');
const formContainerDiv = document.querySelector('.form-container');
const formContainerDivStyle = formContainerDiv.style;
const formSubmitButton = document.querySelector('.form-submit');

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

function clearAndResetForm() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#lang').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('input[name="read-status"]:checked').checked = false;

    //toggle the popup form visibility
    // formContainerDivStyle.display = 'none';
}

bookAddButton.addEventListener('click', () => {
    formContainerDivStyle.display = 'block';
});

formCloseButton.addEventListener('click', () => {
    formContainerDivStyle.display = 'none';
});

formSubmitButton.addEventListener('click', () => {
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
    formDetail.push(readStatus);

    console.table(formDetail);
    //call the function to add book object
    addBookToLibrary(formDetail);
    clearAndResetForm();
});

callShowBooks(0);