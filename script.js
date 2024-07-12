
/*sleep*/

/* scripts.js */
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');

            contents.forEach(content => {
                if (content.id === target) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Show the content for the first tab by default
    if (contents.length > 0) {
        contents[0].style.display = 'block';
    }
});


// faq
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

            // Toggle current answer
            answer.style.display = isOpen ? 'none' : 'block';
        });
    });
});

