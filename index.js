document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');
            const answer = faq.querySelector('.faq-answer');
            if (faq.classList.contains('open')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
