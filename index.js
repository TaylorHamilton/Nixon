let tag = document.getElementById("button");
let tags = document.getElementById("button2");
if ($(".text-slider").length == 1) {

    var typed_strings =
        $(".text-slider-items").text();

    var typed = new Typed(".text-slider", {
        strings: typed_strings.split(", "),
        typeSpeed: 50,
        loop: true,
        backDelay: 2000,
        backSpeed: 30,
    });
};

const vote = () => {
    alert("Thank you for voting!");

    removeVotes();
}
document.getElementById("button").addEventListener("click", vote);
let removeVotes = () => {
    document
        .getElementById("button")
        .removeEventListener("click", vote);
}

