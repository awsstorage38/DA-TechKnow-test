/**
 * Scroll with offset on links with a class name .scrollto
 */
on('click', '.scrollto', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId) {
      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(targetId);
    }
  }, true);
  