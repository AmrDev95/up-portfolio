// slide in out for what i do section
const whatIDo = document.getElementById('whatIDo');
const landingContainer = document.getElementById('landingContainer');
const appsWrapper = document.getElementById('appsWrapper');
const splashScreen = document.getElementById('splashScreen');
const menuButton = document.getElementById('menuButton');
const thresholdArr = [];

let isMenuToggled = false;

for (let i = 0; i < 100; i ++) {
    thresholdArr.push(i*0.01);
}

window.onload = () => {
    document.body.classList.remove('overflow-hidden');
    splashScreen.classList.add('hidden');
};

function toggleMenu(){
    isMenuToggled = !isMenuToggled;
    console.log(isMenuToggled);
    if(isMenuToggled){
        $('#responsiveMenu').removeClass('-translate-y-full').addClass('-translate-y-0')
    } else{
        $('#responsiveMenu').removeClass('-translate-y-0').addClass('-translate-y-full')
    }
}


function navigateToSection(sectionName){
    const section = document.getElementById(sectionName);
    isMenuToggled = false;
    $('#responsiveMenu').removeClass('-translate-y-0').addClass('-translate-y-full');
    setTimeout(() => {
        section.scrollIntoView({
            behavior:'smooth',
            block:'nearest'
        })
    }, 350);
}


// image slider
Fancybox.bind("[data-fancybox='gallery']", {
    // Optional settings
    loop: true,  // Allows looping through images after reaching the last one
    infobar: true, // Shows image info (index of total)
    buttons: ["zoom", "slideShow", "fullScreen", "close"], // Buttons that appear in the viewer
    thumbs: {
      autoStart: true // Show thumbnail previews
    }
});



Fancybox.bind("[data-fancybox='landing']", {
    // Optional settings
    loop: true,  // Allows looping through images after reaching the last one
    infobar: true, // Shows image info (index of total)
    buttons: ["zoom", "slideShow", "fullScreen", "close"], // Buttons that appear in the viewer
    thumbs: {
      autoStart: true // Show thumbnail previews
    }
});
// image slider


// slide in
// $(document).ready(function () {
//     $("#showButton").click(function () {
//         $("#myElement")
//             .removeClass("opacity-0 top-[120px]")
//             .addClass("opacity-100 top-[50px]")
//     });
// });

        // Create Intersection Observer
const whatIDoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
// Calculate and print the threshold percentage
        const visibilityPercentage = Math.floor(entry.intersectionRatio * 100);
        if(entry.isIntersecting) {
            if(visibilityPercentage > 50) {
                $("#whatIDoTitle").css({ opacity: 1 });
                $("#whatIDoSpan").css({ opacity: 1, transform: "translateY(0)" });
            } else{
                $("#whatIDoTitle").css({ opacity: 0.6 });
                $("#whatIDoSpan").css({ opacity: 0, transform: "translateY(100%)" });
            }
            $("#whatIDoTitle").css({transform: "translateY(0)" });
        } else{
            $("#whatIDoSpan").css({ opacity: 0, transform: "translateY(100%)" });
            $("#whatIDoTitle").css({ opacity: 0.6, transform: "translateY(100%)" });
        }
        $("#whatIDoLeftHand").css({ opacity: (visibilityPercentage/50), top: `${120 - visibilityPercentage}px` });
        $("#whatIDoRightHand").css({ opacity: (visibilityPercentage/50), top: `${120 - visibilityPercentage}px` });
    });
}, {
    root: null,
    threshold: thresholdArr
});

// Observe each box
whatIDoObserver.observe(whatIDo);





const landingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
// Calculate and print the threshold percentage
        const visibilityPercentage = entry.intersectionRatio;
        const percentage = Math.floor(visibilityPercentage*100);;
        if(percentage >= 55){
            $("#landingPageContent").css({display:'block'});
        } else{
            $("#landingPageContent").css({display:'none'});
        }
        $("#landingContent").css({ transform:`scale(${2 - (1.2 * visibilityPercentage)})`});
        if(entry.isIntersecting) {
            
        } else{
            
        }
    });
}, {
    root: null,
    threshold: thresholdArr
});

landingObserver.observe(landingContainer);





const appsOverver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
// Calculate and print the threshold percentage
        const visibilityPercentage = entry.intersectionRatio;
        const percentage = Math.floor(visibilityPercentage*100);
        $("#bottomAppsWrapper").css({transform:`translateX(${-0.1*percentage}%)`});
        $('#topAppsWrapper').css({transform:`translateX(${-0.1*percentage}%)`});
        $('#middleAppsWrapper').css({transform:`translateX(${0.1*percentage - 30}%)`});
        if(percentage <= 50){
            
            // if(window.innerWidth > 768){
                
            // } else{
            //     $('#topAppsWrapper').css({transform:'translateX(0)'})
            // }
        }
    });
}, {
    root: null,
    threshold: thresholdArr
});

appsOverver.observe(appsWrapper);