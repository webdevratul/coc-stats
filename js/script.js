    // get ID navlinks
    let navLinks = document.getElementById("navlist");
     
    navLinks.style.right = "-100%";
     // Toggle menu
     function toggleMenu() {
        if (navLinks.style.right == "-100%") {
            navLinks.style.right = "0";
        } else {
            navLinks.style.right = "-100%";
        }
     }

    // scrollreveal

    const sr = ScrollReveal ({
        distance : "65px",
        duration: 2600,
        delay: 450,
        reset: true
    });

    sr.reveal('.hero_text', {delay:200, origin: 'top'});
    sr.reveal('.hero_img', {delay:450, origin: 'top'});
    sr.reveal('.icons', {delay:500, origin: 'left'});
    sr.reveal('.scrool_bar', {delay:500, origin: 'right'});
    

