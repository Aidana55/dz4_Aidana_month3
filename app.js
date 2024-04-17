const date = document.querySelector('.date')
const json = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET','date.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.onload = () =>{
        const object = JSON.parse(xhr.response)
        object.forEach(card  => {
            const cards = document.createElement('div')
            cards. innerHTML = `
        
        <h2>${card.name}</h2>
        <span>${card.age}</span>
        <img src="${card.photo}" alt="photo">
       `
            date.append(cards)

        })

    }
}
json()


const resultJson = new XMLHttpRequest()
resultJson.open('GET','date.json')
resultJson.setRequestHeader('Content-type', 'application/json')
resultJson.send()
resultJson.onload = () =>{
    const result = JSON.parse(resultJson.response)
    console.log(result)
}