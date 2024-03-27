const contentElement = document.querySelector('.content')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((response) => response.json())
.then((users) => {
    displayEach(users)
})

function displayEach(users) {
    contentElement.innerHTML = ''
    for (const user of users) {
        let userElement = document.createElement('div')
        userElement.classList.add('userElement')
        userElement.innerHTML += `<div> User ID: ${user.id}, User Name: ${user.name} </div>`

        let button = document.createElement('button')
        button.innerText = 'User Details'
        button.classList.add('userDetails-btn')
        button.id = `${user.id}`
        userElement.appendChild(button)

        button.addEventListener('click', () => {
            location.href = 'user-details.html'
            localStorage.setItem('user-id', button.id);
        })

        contentElement.append(userElement)
    }
}



