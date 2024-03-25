const contentElement = document.querySelector('.content')
const userElement = document.querySelector('.user')
const userDetailsLinkElement = document.querySelector('.userDetailsLink')


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => {
    // contentElement.innerHTML=''
    userElement.innerHTML=''
    for (const user of users) {
        console.log(users);
        userElement.innerHTML += `<div> user id: ${user.id}, user name: ${user.name} </div>`
        userDetailsLinkElement.classList.add()
        userElement.appendChild(userDetailsLinkElement)
        let get = localStorage.getItem('info') || [];
        localStorage.setItem('info', JSON.stringify(users))
     
        // contentElement.innerHTML += `<div> user id: ${user.id}, user name: ${user.name} </div>`
        // let button = document.createElement('button')
        // button.classList.add("userDetails-btn")
        // button.innerText = 'User Details'
        // contentElement.appendChild(button)
        
    }
})

// userDetailsLinkElement.addEventListener('click', () => {
//     let get = localStorage.getItem('user') || [];
//     console.log(get);
    
    // let div = document.createElement('div')
    // div.innerText = users
    


// })

