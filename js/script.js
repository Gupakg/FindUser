// const a = document.querySelector('a')

// a.addEventListener('click', (event) => {

//     console.log(event)
//     event.preventDefault()          //Отмена дефолтных действий
// })

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
// })


//======================================

const API = 'https://api.github.com/users/'
const header=document.getElementById('header')
const form = document.querySelector('form')
const input = document.getElementById('input')
const output = document.getElementById('output')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    findUsers(input.value)

})

const findUsers = async (userName) => {
    let url = API + userName
    let request = await fetch(url)
    let response = await request.json()
    console.log(response)
    renderUser(response)
}
let img1 = document.createElement('img')
img1.style =`
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 5;
    background-color: white;
    margin-left: 25px;
    border-radius: 50%;
`

img1.src='./images/github-icon-png-8.png'
header.append(img1)

const renderUser = (data) => {
  output.innerHTML = ''
  const div = document.createElement('div')
  
 

  let img = document.createElement('img')
  let h2 = document.createElement('h2')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')
  let textp = document.createElement('p')


  img.src = data.avatar_url
  img.style.cssText = 'width:200px; height:200px;'
  img.addEventListener('click', () => {
      window.location.href = data.html_url
  })
  h2.innerHTML = data.name
  h3.innerHTML = data.location
  h4.innerHTML = data.company
  textp.innerHTML = data.bio
  
  
  div.append(img, h2, h3, h4, textp)

  output.append(div)

}









