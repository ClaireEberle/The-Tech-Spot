document.querySelector("#loginForm").addEventListener("submit", e=>{
    e.preventDefault();
    const loginObj = {
        email:document.querySelector("#loginEmail").value,
        password:document.querySelector("loginPassword").value,
    }
})