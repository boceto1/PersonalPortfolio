const galleryRoutes = [
    {
        original: "img/activities/ciespal-original.png",
        tablet: "img/activities/ciespal-tablet.png",
        mobile:  "img/activities/ciespal-mobile.png",
    },
    {
        original: "img/activities/innovasoft3-original.png",
        tablet: "img/activities/innovasoft3-tablet.png",
        mobile:  "img/activities/innovasoft3-mobile.png",
    },
    {
        original: "img/activities/stackbuilders-original.png",
        tablet: "img/activities/stackbuilders-tablet.png",
        mobile:  "img/activities/stackbuilders-mobile.png",
    },
    {
        original: "img/activities/techdays-original.png",
        tablet: "img/activities/techdays-tablet.png",
        mobile:  "img/activities/techdays-mobile.png",
    },
];

window.addEventListener("DOMContentLoaded", pageFullyLoaded, false);

function pageFullyLoaded(e) {

    // Use this to create a dinamic gallery
    const original = document.getElementById('original-1');
    const tablet = document.getElementById('tablet-1');
    const mobile = document.getElementById('mobile-1');
    
    original.srcset = "img/activities/techdays-original.jpg";
    tablet.srcset = "img/activities/techdays-tablet.jpg"
    mobile.src = "img/activities/techdays-mobile.jpg"

}