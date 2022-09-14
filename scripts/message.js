const tbody = document.querySelector('tbody');
const url = "./CONTACT-DB/getmessages.php";

fetch(url)
    .then(response => response.json())
    .then(data => {
        let message = data.message;
        message.forEach(message => {
            let email = message.email;
            let msg = message.message;
    // create a table row
    const tr = document.createElement('tr');
    // create table cell
    const tdEmail = document.createElement('td');
    // append email to cell
    tdEmail.textContent = email; 
    tdEmail.classList.add("emailTd");
    // append cell to row
    tr.appendChild(tdEmail);

    const tdMessage = document.createElement('td');
    tdMessage.textContent = msg;
    tr.appendChild(tdMessage);
    // append row to table body
    tbody.appendChild(tr);
        })
    })
