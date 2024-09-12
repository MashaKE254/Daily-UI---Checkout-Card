document.addEventListener('DOMContentLoaded', () => {
    const methodBtns = document.querySelectorAll('.method-btn');
    const paymentForms = document.querySelectorAll('.payment-form');

    methodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const method = btn.dataset.method;
            
            // Update active button
            methodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show corresponding form
            paymentForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${method}-form`) {
                    form.classList.add('active');
                }
            });
        });
    });
});
