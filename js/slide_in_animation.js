const targetElement = document.querySelectorAll(".contents__menu");
const targetSentence = document.querySelectorAll(".sentence");
const targetPlan = document.querySelectorAll(".plan");
const targetAnnounce = document.querySelectorAll(".announce__wrapper");
const targetAccess = document.querySelectorAll(".access__wrapper__address");
const targetMap = document.querySelectorAll(".access__wrapper__address__map");

// console.log(targetElement);

document.addEventListener("scroll", function(){
    for(let i = 0; i < targetElement.length; i++){
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
});


document.addEventListener("scroll", function(){
    for(let i = 0; i < targetSentence.length; i++){
        const getSentenceDistance = targetSentence[i].getBoundingClientRect().top + targetSentence[i].clientHeight * .6;
        if(window.innerHeight > getSentenceDistance){
            targetSentence[i].classList.add("show");
        }
    }
    });


document.addEventListener("scroll", function(){
    for(let i = 0; i < targetPlan.length; i++){
        const getPlanDistance = targetPlan[i].getBoundingClientRect().top + targetPlan[i].clientHeight * .6;
        if(window.innerHeight > getPlanDistance){
            targetPlan[i].classList.add("show");
        }
    }
    });



    document.addEventListener("scroll", function(){
        for(let i = 0; i < targetAnnounce.length; i++){
            const getAnnounceDistance = targetAnnounce[i].getBoundingClientRect().top + targetAnnounce[i].clientHeight * .6;
            if(window.innerHeight > getAnnounceDistance){
                targetAnnounce[i].classList.add("show");
            }
        }
        });



    document.addEventListener("scroll", function(){
        for(let i = 0; i < targetAccess.length; i++){
            const getAccessDistance = targetAccess[i].getBoundingClientRect().top + targetAccess[i].clientHeight * .6;
            if(window.innerHeight > getAccessDistance){
                targetAccess[i].classList.add("show");
            }
        }
        });

        document.addEventListener("scroll", function(){
            for(let i = 0; i < targetMap.length; i++){
                const getMapDistance = targetMap[i].getBoundingClientRect().top + targetMap[i].clientHeight * .6;
                if(window.innerHeight > getMapDistance){
                    targetMap[i].classList.add("show");
                }
            }
            });