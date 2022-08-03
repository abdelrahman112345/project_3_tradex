// Up Down 
upDown = document.querySelector(".up-down");
console.log(nav)
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 380) {
        upDown.style.opacity = "1";
    }
    else {
        upDown.style.opacity = "0";
    }
    // console.log(document.documentElement.scrollTop)
})








// Form Validation
var myForm = document.getElementById("myForm")

function nameValidation(element){
    var inputValue = element.value.trim()
    if(inputValue.length < 3 )  showError(element , "at least 3 character")
    else removeError(element)
}
function emailValidation(element){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log( emailPattern.test(element.value))
    if(emailPattern.test(element.value) == false) showError(element , "invalid email")
    else removeError(element)

}
function passwordValidation(element){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(strongRegex.test(element.value) == false) showError(element , "enter at least 1 lowercase character , uppercase character , 1 number , 1 special character")
    else removeError(element)

}


function showError(ele , msg){
    ele.nextElementSibling.innerText = msg
}
function removeError(ele){
    ele.nextElementSibling.innerText = ""
}


myForm.addEventListener("input" , function(e){
    if(e.target.id == "userName"){
        nameValidation(e.target)
    }
    else if(e.target.id == "userEmail") {
        emailValidation(e.target)
    }
    else if(e.target.id == "userPassword"){
        passwordValidation(e.target)
    }
})


myForm.addEventListener("submit" , function(e){
    e.preventDefault();
})


// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 35,
        items: 2,
        loop: true,
        nav: true,
        navText : ['<i class="fa-solid fa-arrow-left-long bg-primary text-white pt-2 pb-2 ps-3 pe-3 rounded-end rounded-pill"></i>' , 
                    '<i class="fa-solid fa-arrow-right-long bg-primary text-white pt-2 pb-2 ps-3 pe-3 rounded-start rounded-pill"></i>' 
                ],
        dots: false,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1,
                
            },
            // breakpoint from 480 up
            767 : {
                items : 2,
                
            },
        },
    });
});
