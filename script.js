//we are going to make an event listener... it will trigger with the DOM is loaded (aka upon vistiting the page)
addEventListener('DOMContentLoaded', async function() {
    const responce = await fetch("https://localhost:3000/api/songs")
    const songs = await responce.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }
    this.document.querySelector("#addedsong").innerHTML=html
})