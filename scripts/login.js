let token;

window.onload = function(){
document.querySelector("#loginBtn").addEventListener("click",  function(){
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    login(username, password)

})}

async function login(username, password){
    const login_cred ={
        username: username,
        password: password
    }
    //send login post request to the backend
    const responce = await fetch("http://localhost:3000/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login_cred)
    })

    if(responce.ok){
        const tokenResponse = await responce.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth
        console.log(token)


        localStorage.setItem("token", token)
        localStorage.setItem("uname", uname)
        localStorage.setItem("auth", auth)
        window.location.href = "index.html"
    }
    else{
        document.querySelector("#errormsg").inner = "bad username and password"
    }
}