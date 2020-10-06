const activitiesImages = [
    'ciespal',
    'innovasoft3',
    'stackbuilders',
    'techdays',
    'lead',
    'singer',
    'coro'
];

var currentIndexActivities = [0,1,2,3,4,5,6];

// 1 -- 2 -- 3 -- 4 -- 5 -- 6 --7

// window.addEventListener("DOMContentLoaded", pageFullyLoaded, false);

// function pageFullyLoaded(e) {

//     // Use this to create a dinamic gallery
//     const original = document.getElementById('original-1');
//     const tablet = document.getElementById('tablet-1');
//     const mobile = document.getElementById('mobile-1');
    
//     original.srcset = "img/activities/techdays-original.jpg";
//     tablet.srcset = "img/activities/techdays-tablet.jpg"
//     mobile.src = "img/activities/techdays-mobile.jpg"
// }

const updateActivityImageCard = (idCard, name) => {
    //Charge html picture elements
    const original = document.getElementById(`original-${idCard}`);
    const tablet = document.getElementById(`tablet-${idCard}`);
    const mobile = document.getElementById(`mobile-${idCard}`);

    // Update source of images
    original.srcset = `img/activities/${name}-original.jpg`;
    tablet.srcset = `img/activities/${name}-tablet.jpg`;
    mobile.src = `img/activities/${name}-mobile.jpg`;
}

const moveActivityToRight = (currentIndex) => 
        currentIndex - 1 < 0  ?  
            activitiesImages.length - 1 :
            currentIndex-1;

const moveActivityToLeft = (currentIndex) => 
        currentIndex + 1 === activitiesImages.length  ?  
            0 :
            currentIndex+1;

const moveActivitiesToLeft = () => {
    const newCurrentIndexActivities = 
        currentIndexActivities.map(index => moveActivityToLeft(index));
    
    newCurrentIndexActivities.slice(0,4).forEach((activityIndex, index) =>
        updateActivityImageCard(index + 1, activitiesImages[activityIndex])  
    );
    
    currentIndexActivities = newCurrentIndexActivities;
}

const moveActivitiesToRight = () => {
    const newCurrentIndexActivities = 
        currentIndexActivities.map(index => moveActivityToRight(index) );

    newCurrentIndexActivities.slice(0,4).forEach((activityIndex, index) =>
      updateActivityImageCard(index + 1, activitiesImages[activityIndex])  
    );

    currentIndexActivities = newCurrentIndexActivities;
}
    