document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. TYPING EFFECT (DENGAN KALIMAT KHUSUS)
       ========================================= */
    const textElement = document.querySelector('.typing-text');
    
    if (textElement) {
        // ARRAY KALIMAT ANDA
        const words = [
            "Welcome to the Dark Hour", 
            "Don't trust a person, even if they close to you", 
            "Corporate mistakes, or, our mistakes?"
        ];
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Menghapus huruf
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Lebih cepat pas hapus
            } else {
                // Mengetik huruf
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal pas ngetik
            }

            // Logika ganti kata
            if (!isDeleting && charIndex === currentWord.length) {
                // Selesai ngetik satu kalimat, tunggu sebentar
                isDeleting = true;
                typeSpeed = 2000; // Jeda 2 detik biar user sempat baca
            } else if (isDeleting && charIndex === 0) {
                // Selesai menghapus, pindah ke kalimat berikutnya
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        
        // Jalankan fungsi
        type();
    }

    /* =========================================
       2. SCROLL ANIMATION (REVEAL ON SCROLL)
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Muncul saat 10% elemen terlihat

    // Targetkan semua elemen yang punya class 'reveal-text'
    const hiddenElements = document.querySelectorAll('.reveal-text');
    hiddenElements.forEach((el) => observer.observe(el));


    /* =========================================
       3. MOBILE NAVBAR
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});