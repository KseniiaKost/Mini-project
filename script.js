const contentElement = document.querySelector('.content')
const userElement = document.querySelector('.user')
const userDetailsLinkElement = document.querySelector('.userDetailsLink')
const userDetailsBtn = document.querySelector('.userDetails-btn')


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {
    // contentElement.innerHTML=''
    userElement.innerHTML=''
    for (const user of users) {
        console.log(users);
        userElement.innerHTML += `<div> user id: ${user.id}, user name: ${user.name} </div>`
        userDetailsLinkElement.id = `${user.id}`
        console.log(userDetailsLinkElement.id);
        userElement.appendChild(userDetailsLinkElement)
         
    }
})

userDetailsLinkElement.addEventListener('click', () => {
    let userID = userDetailsLinkElement.id
    console.log(userID);

})

