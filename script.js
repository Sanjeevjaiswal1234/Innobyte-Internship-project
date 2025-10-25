 AOS.init();

        function toggleMenu() {
            const navlist = document.querySelector('.navlist');
            const hamburger = document.querySelector('.hamburger');
            navlist.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        function closeMenu() {
            const navlist = document.querySelector('.navlist');
            const hamburger = document.querySelector('.hamburger');
            navlist.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const navlist = document.querySelector('.navlist');
            const hamburger = document.querySelector('.hamburger');
            const isClickInside = navlist.contains(event.target) || hamburger.contains(event.target);
            
            if (!isClickInside && navlist.classList.contains('active')) {
                closeMenu();
            }
        });