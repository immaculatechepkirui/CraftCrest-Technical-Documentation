// Sidebar navigation highlighting & section switching
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active from all
        document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Hide all sections
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        // Show the targeted section
        const target = this.getAttribute('href').replace('#', '');
        document.getElementById(target).classList.add('active');
        window.scrollTo({top:0, behavior:'smooth'});
    });
});
