document.addEventListener('DOMContentLoaded', () => {
    // Rolagem suave para links internos
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Desconta a altura do header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mensagem de confirmação para o download do Google Drive
    const driveBtn = document.querySelector('.btn-drive');
    if (driveBtn) {
        driveBtn.addEventListener('click', () => {
            // Você pode adicionar lógica aqui, como um analytics ou um alerta
            console.log('Usuário clicou para baixar a versão PC do Google Drive.');
            // alert('Você será redirecionado para o Google Drive para baixar o jogo.');
        });
    }
});