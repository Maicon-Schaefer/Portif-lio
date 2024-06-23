document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2 + targetElement.offsetHeight / 2;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const copyIcons = document.querySelectorAll('.copy-icon');

    copyIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-text');
            copyToClipboard(textToCopy);
        });
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Copiado: ${text}`);
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    }
});