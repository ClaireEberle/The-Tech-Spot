document.querySelector("#loginForm").addEventListener("submit", e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#loginEmail").value,
        password:document.querySelector("#loginPassword").value,
    }
    fetch("/api/users/login",{
method:"POST",
body:JSON.stringify(loginObj),
headers:{
    "content-Type":"application/json"
}
    }).then((res)=>{
        if(res.ok){
            alert("sign in sucessful")
            location.href="/"
        }else{
            alert("wrong email or password")
        }
    })
})