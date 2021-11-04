const form = document.querySelector("form");

const table = document.querySelector("table");

form.addEventListener('submit', addBook);

function addBook(event){
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const isbnInput = document.querySelector('#isbn').value;

    const tr = document.createElement("tr");

    const tableTitle = document.createElement("td");
    const tableAuthor = document.createElement("td");
    const tableIsbn = document.createElement("td");

    tableTitle.appendChild(document.createTextNode(titleInput));
    tableAuthor.appendChild(document.createTextNode(authorInput));
    tableIsbn.appendChild(document.createTextNode(isbnInput));

    tr.appendChild(tableTitle);
    tr.appendChild(tableAuthor);
    tr.appendChild(tableIsbn);

    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);

    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#isbn').value = "";

    event.preventDefault()
}