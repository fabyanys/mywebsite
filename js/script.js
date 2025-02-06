const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Mengambil ID dari link
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Bisa menggunakan 'center', 'start', 'end', atau 'nearest'
            });
        });
    });