let slideContainer = document.querySelector(".slideContainer");
let indicator = document.querySelector(".indicator");
let slideIndex = 0;
let timer; 
const arrows = ["leftArrow", "rightArrow"];

const myImages = [
    {
        "img" : "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        "caption" : "Rampart Lakes by Sergei Akulich"
    },
    {
        "img" : "https://images.unsplash.com/photo-1549633759-7536f8924eac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1495&q=80",
        "caption" : "Yukon, Canada by Leonard Laub"
    },
    {
        "img" : "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1325&q=80",
        "caption" : "Lago di Braies by Luca Bravo"
    },
    {
        "img" : "https://images.unsplash.com/photo-1440557653082-e8e186733eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "caption" : "Glacier Point, Yosemite Valley by Jordan McQueen"
    },
    {
        "img" : "https://images.unsplash.com/photo-1505409797165-622936b6af4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        "caption" : "Snoqualmie Pass by Kelly Bork"
    }
];

builder();
function builder(){
    for (let i = 0; i < myImages.length; i++){
        let slide = document.createElement("div");
        slide.setAttribute("class","slide"); 
        
        let img = document.createElement("img");
        img.setAttribute("src", myImages[i].img);

        let caption = document.createElement("div");
        caption.classList.add("caption");
        caption.innerText = myImages[i].caption;

        arrows.forEach(function(ar) {
            let arrow = document.createElement("div");
            arrow.classList.add("arrow");
            if (ar === "leftArrow") {
                arrow.innerText = "<";
                arrow.classList.add("left");
            } else {
                arrow.innerText = ">";
                arrow.classList.add("right");
            }
            slide.append(arrow);
            arrow.addEventListener("click", arrowClick);
        })

        slide.appendChild(img);
        slide.appendChild(caption);
        slideContainer.appendChild(slide);

        let span = document.createElement("span");
        span.classList.add("dot");
        span.addEventListener("click", function (e){
            moveSlide(i);
        })
        indicator.appendChild(span);
    }
    playSlides();
}

function playSlides(){
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const active = document.querySelector(".active");

    if (active !== null){ //if not null, remove active, to ensure only one element is active at a time
        active.classList.remove("active");
    }
    if (slideIndex + 1 > slides.length){
        slideIndex = 0;
    }
    slides.forEach(function (element){
        element.style.display = "none";
    })
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    slideIndex++;
    timer = setTimeout(playSlides, 5000);
}

function moveSlide(num){ 
    slideIndex = num;
    clearTimeout(timer);
    playSlides();
}

function arrowClick(e){
    if(e.target.innerText === ">"){
        slideIndex++;
        moveSlide(slideIndex-1);
    } 
    if(e.target.innerText === "<"){
        if(slideIndex == 1){
            moveSlide(myImages.length-1);
        } 
        else {
            moveSlide(slideIndex-2);
        }
    }
}