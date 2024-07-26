function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const sr = ScrollReveal ({
      distance: '65px',
      duration: 2600,
      delay: 450,
      reset: true
  })

sr.reveal('.section_text',{delay:200, origin:'top'});
sr.reveal('.profile-1',{delay:450, origin:'top'});
sr.reveal('.about-pic',{delay:450, origin:'top'});
sr.reveal('nav',{delay:450, origin:'top'});
sr.reveal('.nav-links',{delay:450, origin:'top'});
sr.reveal('.icon contact-icon',{delay:500, origin:'left'});
sr.reveal('.icon',{delay:450, origin:'top'});
sr.reveal('h3',{delay:450, origin:'top'});
sr.reveal('p',{delay:450, origin:'top'});
sr.reveal('.about-details-container',{delay:450, origin:'top'});
sr.reveal('.title',{delay:500, origin:'left'});
sr.reveal('.article-container',{delay:450, origin:'top'});
sr.reveal('.btn-container',{delay:450, origin:'top'});
sr.reveal('.title',{delay:500, origin:'left'});
sr.reveal('.article-container',{delay:450, origin:'top'});
sr.reveal('.project-img',{delay:500, origin:'top'});
sr.reveal('.about-containers',{delay:450, origin:'top'});
sr.reveal('.details-container color-container',{delay:500, origin:'left'});