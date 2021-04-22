
const votes = () => {
    alert("Thank you for voting!");

    removeVote();
}
document.getElementById("button2").addEventListener("click", votes);
let removeVote = () => {
    document
        .getElementById("button2")
        .removeEventListener("click", votes);
}