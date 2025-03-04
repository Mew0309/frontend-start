//we are going to make an event listener... it will trigger with the DOM is loaded (aka upon vistiting the page)
AudioListener("DOMContentLoaded", async function(){

Response = await fetch("http://localhost:8000/api/songs")
songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }
    this.document.querySelector("#list_of_songs").innerHTML=html
})