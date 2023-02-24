document.querySelector("#signupForm").addEventListener("submit", e=>{
    e.preventDefault();
    const signupObj = {
        email:document.querySelector("#signupEmail").value,
        password:document.querySelector("#signupPassword").value,
    }
    fetch("/api/users/signup",{
method:"POST",
body:JSON.stringify(signupObj),
headers:{
    "content-Type":"application/json"
}
    }).then(res=>{
        if(res.ok){
            // alert("sign in sucessful")
            location.href="/"
        }else{
            alert("wrong email or password")
        }
    })
})