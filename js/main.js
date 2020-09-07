// JQUERY
$(document).ready(function() {
    // alert("hello world!")


    // hero_img_slider
    $(".hero_img_slider").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });
})




// VANILLA JS

// toggle sidenav on mobile
var page_sidenav = document.getElementById("page_sidenav");
// var sidenav_toggler = document.getElementById("sidenav_toggler");
function openSidenav() {
    if (page_sidenav.classList.contains("hide")) {
        page_sidenav.classList.remove("hide")
    }
}

function closeSidenav() {
    if (!page_sidenav.classList.contains("hide")) {
        page_sidenav.classList.add("hide")
    }
}



// BMI CALCUlATion FOR ADULT
var adultBMIFormBtn = document.getElementById("adultBMIFormBtn");
var adultWeight = document.querySelector("#adultWeight");
var adultHeight = document.querySelector("#adultHeight");
var adultAge = document.querySelector("#adultAge");
var adultGender = document.querySelector("#adultGender");
// 
var resultAge = document.getElementById("resultAge");
var resultGender = document.getElementById("resultGender");
var resultBMICalc = document.getElementById("resultBMICalc");
// 
function calcAdultBMI() {
    if (adultHeight.value && adultWeight.value && adultGender.value && adultAge.value) {
        var bmi_adult_result_wrapper = document.getElementById("bmi_adult_result_wrapper");
        if (bmi_adult_result_wrapper.classList.contains("d-none")) {
            bmi_adult_result_wrapper.classList.remove("d-none");
        }
        adultHeight.value *= adultHeight.value
        let result = adultWeight.value / adultHeight.value;
        resultAge.innerHTML = adultAge.value
        resultGender.innerHTML = adultGender.value
        resultBMICalc.innerHTML = Math.ceil(result)
        $('#exampleModalCenter').modal('show')
    } else {
        return;
    }
};

function resetAdultForm() {
    document.getElementById("adultBMIForm").reset();
}


// BMI CALCUlATION FOR CHILD
var childBMIFormBtn = document.querySelector("#childBMIFormBtn");
var childWeight = document.querySelector("#childWeight");
var childHeight = document.querySelector("#childHeight");
var childBirthDay = document.querySelector("#childBirthDay");
var childBirthMonth = document.querySelector("#childBirthMonth");
var childBirthYear = document.querySelector("#childBirthYear");
var childGender = document.querySelector("#childGender");
// 
var childResultAge = document.getElementById("childResultAge");
var childResultGender = document.getElementById("childResultGender");
var childResultBMICalc = document.getElementById("childResultBMICalc");
//

function calcChildBMI() {
    if (childWeight.value && childHeight.value && childBirthDay.value && childBirthMonth.value && childBirthYear.value && childGender.value) {
        var bmi_child_result_wrapper = document.getElementById("bmi_child_result_wrapper");
        if (bmi_child_result_wrapper.classList.contains("d-none")) {
            bmi_child_result_wrapper.classList.remove("d-none");
        }
        childHeight.value *= childHeight.value
        let result = childWeight.value / childHeight.value;
        childResultGender.innerHTML = childGender.value;
        childResultAge.innerHTML = `${childBirthDay.value}/${childBirthMonth.value}/${childBirthYear.value}`;
        childResultBMICalc.innerHTML = Math.ceil(result)
        $('#exampleModalCenter').modal('show')
    } else {
        return;
    }
}

function resetChildForm() {
    document.getElementById("childBMIForm").reset();
}


// PREGNANCY DUE DATE TEST
var calculationMethod = document.getElementById("calculationMethod");
var pregnancyFormDateLabel = document.getElementById("pregnancyFormDateLabel");

function populateQuestion() {
    pregnancyFormDateLabel.value = calculationMethod.value;
    var pregnancyFormDate = document.getElementById("pregnancyFormDate")


    if (pregnancyFormDate.value != "") {
        let x = new Date(pregnancyFormDate.value)
        let y = new Date()

        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = x;
        const secondDate = y;
        var pregnancy_test_result_wrapper = document.getElementById("pregnancy_test_result_wrapper");
        var pregnancyDueDate;

        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        console.log(Math.floor(diffDays / 7))
        let z = Math.floor(diffDays / 7);
        if (pregnancyFormDateLabel.value === "When did you have your last period start?") {
            console.log(40 - z);
            pregnancyDueDate = 40 - z;
            pregnancy_test_result_wrapper.innerHTML = pregnancyDueDate * 7 * 24;
        }
        if (pregnancyFormDateLabel.value === "When did you conceive?") {
            console.log(38 - z);
            pregnancyDueDate = 38 - z;
            pregnancy_test_result_wrapper.innerHTML = pregnancyDueDate * 7 * 24;
        }

        $('#pregnancyDueDateResultPopup').modal('show')
    } else {
        return;
    }
}

function calcPregnancyDueDate() {
    populateQuestion()
}