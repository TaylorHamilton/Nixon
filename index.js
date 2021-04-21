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


let votes = () => {
    alert("Thank you for voting!");

    removeVotes();
}

let removeVotes = () => {
    document.getElementById("button").removeEventListener("click", votes);

    document.getElementById("button2").removeEventListener("click", votes);
}

function changeImage(img) {
    document.getElementById("button").addEventListener("click", votes);

    tag.src = img.src.replace("/pics/button.png", "/pics/Ebutton.png");
}


function changeImage2(img) {
    document.getElementById("button2").addEventListener("click", votes);

    tags.src = img.src.replace("/pics/button.png", "/pics/Ebutton.png");


}
