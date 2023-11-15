const firstQuestion = document.querySelectorAll(".question")[0]
const secondQuestion = document.querySelectorAll(".question")[1]
const thirdQuestion = document.querySelectorAll(".question")[2]
const fourthQuestion = document.querySelectorAll(".question")[3]
const fifthQuestion = document.querySelectorAll(".question")[4]

firstQuestion.addEventListener("click", () => {

    if (document.querySelector(".first-answer").style.display === "block") {
        document.querySelector(".first-answer").style.display = "none";
 
    } else {
        document.querySelector(".first-answer").style.display = "block";
        document.querySelector(".second-answer").style.display = "none";
        document.querySelector(".third-answer").style.display = "none";
        document.querySelector(".fourth-answer").style.display = "none";
        document.querySelector(".fifth-answer").style.display = "none";

    };
})
secondQuestion.addEventListener("click", () => {

    if (document.querySelector(".second-answer").style.display === "block") {
        document.querySelector(".second-answer").style.display = "none";

    } else {
        document.querySelector(".second-answer").style.display = "block";
        document.querySelector(".first-answer").style.display = "none";
        document.querySelector(".third-answer").style.display = "none";
        document.querySelector(".fourth-answer").style.display = "none";
        document.querySelector(".fifth-answer").style.display = "none";

    };
})
thirdQuestion.addEventListener("click", () => {

    if (document.querySelector(".third-answer").style.display === "block") {
        document.querySelector(".third-answer").style.display = "none";

    } else {
        document.querySelector(".third-answer").style.display = "block";
        document.querySelector(".first-answer").style.display = "none";
        document.querySelector(".second-answer").style.display = "none";
        document.querySelector(".fourth-answer").style.display = "none";
        document.querySelector(".fifth-answer").style.display = "none";


    };
})
fourthQuestion.addEventListener("click", () => {

    if (document.querySelector(".fourth-answer").style.display === "block") {
        document.querySelector(".fourth-answer").style.display = "none";

    } else {
        document.querySelector(".fourth-answer").style.display = "block";
        document.querySelector(".first-answer").style.display = "none";
        document.querySelector(".second-answer").style.display = "none";
        document.querySelector(".third-answer").style.display = "none";
        document.querySelector(".fifth-answer").style.display = "none";


    };
})
fifthQuestion.addEventListener("click", () => {

    if (document.querySelector(".fifth-answer").style.display === "block") {
        document.querySelector(".fifth-answer").style.display = "none";

    } else {
        document.querySelector(".fifth-answer").style.display = "block";
        document.querySelector(".first-answer").style.display = "none";
        document.querySelector(".second-answer").style.display = "none";
        document.querySelector(".fourth-answer").style.display = "none";
        document.querySelector(".third-answer").style.display = "none";


    };
})
