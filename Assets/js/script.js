// Mobile Navigation

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after selecting a page

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});

document.querySelectorAll('.project-links .btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var link = btn.dataset.link;

        // Real link given: open it normally
        if (link) {
            btn.href = link;
            btn.target = '_blank';
            btn.rel = 'noopener';
            return;
        }

        // No link yet: show "Ongoing" message
        e.preventDefault();
        var msg = btn.closest('.project-links').querySelector('.ongoing-msg');
        msg.textContent = 'Ongoing: link will be added soon';
        msg.classList.add('show');
        clearTimeout(msg._t);
        msg._t = setTimeout(function () {
            msg.classList.remove('show');
        }, 2500);
    });
});