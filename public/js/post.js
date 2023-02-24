document.querySelector("#comment-btn").addEventListener("submit", (e)=>{
    e.preventDefault();
    const commentObj = {
        comment:document.querySelector("add-comment").value,
    };
//     fetch("/api/comment", {
//         method:"POST",
//         body: JSON.stringify(commentObj),
//         headers: {
//             "Content-Type": "application/json",
//           },
//     }).then((res)=>{
//         if (res.ok) {
//             location.reload();
//           } else {
//             alert("something went wrong");
//           }
//     });
});