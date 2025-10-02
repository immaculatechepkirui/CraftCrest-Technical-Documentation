document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href').replace('#', '');
        const targetSection = document.getElementById(targetId);

        document.querySelectorAll('.section.active').forEach(activeSection => {
            activeSection.classList.remove('active');
            activeSection.classList.add('back-section');
            setTimeout(() => {
                activeSection.classList.remove('back-section');
            }, 500);
        });

        targetSection.classList.add('active');
        window.scrollTo({top:0, behavior:'smooth'});
    });
});
