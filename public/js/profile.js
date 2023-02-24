document.querySelectorAll(".del-btn").forEach(section => {
    section.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e)
    const postId = e.target.parentElement.getAttribute('id')
    console.log(postId)
    fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (res.ok) {
            location.href=`/profile` 
            
        }else{
            alert('something went wrong')
        }
    })
    ;
})
})