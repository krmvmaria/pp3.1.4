const url = 'http://localhost:8080/api/user'
let loggedInUser = document.querySelector('#User');
let loggedUserHeaderElem = document.querySelector('#nabBarUser')

fetch(url)
    .then(res => res.json())
    .then(data => {
        loggedUserHeaderElem.innerHTML = `<span class="align-middle font-weight-bold mr-1">${data.name}  </span></b>
                <span class="align-middle mr-1">with roles:  </span>
                <span>  ${data.roles.map(role => role.name === 'ROLE_USER' ? 'USER' : 'ADMIN')}</span>`;
        loggedInUser.innerHTML = `
                                <td>${data.id}</td>
                                <td>${data.name}</td>
                                <td>${data.lastName}</td>
                                <td>${data.age}</td>
                                <td>${data.roles.map(role => role.name === 'ROLE_USER' ? 'USER' : 'ADMIN')}</td>
                                `;
})






