const activitiesImages = [
    {file: 'ciespal', label:`First Place "Conecta Culturas" Hackatón sponsored by Unesco` },
    {file: 'innovasoft3', label: `First Place “Innovasoft 3” Challenge - UNACH University` },
    {file: 'stackbuilders', label: `Winner of Code Challenge sponsored by Stackbuilders` },
    {file: 'lead', label: `Software Club Leader - University of Army Forces (ESPE)`},
    {file: 'techdays', label: `Organizer of "Tech Mañanas" MeetUp` },
    {file: 'coro', label: `Member of ESPE Chorus for 3 years`},
    {file: 'singer', label: `Amateur Singer`},
];

var currentIndexActivities = [0,1,2,3,4,5,6];

const updateActivityImageCard = (idCard, activity) => {
    //Charge html picture elements
    const original = document.getElementById(`original-${idCard}`);
    const tablet = document.getElementById(`tablet-${idCard}`);
    const mobile = document.getElementById(`mobile-${idCard}`);
    const paragraph = document.getElementById(`paragraph-${idCard}`);

    // Update source of images
    original.srcset = `img/activities/${activity.file}-original.jpg`;
    tablet.srcset = `img/activities/${activity.file}-tablet.jpg`;
    mobile.src = `img/activities/${activity.file}-mobile.jpg`;
    paragraph.textContent = activity.label;
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
    