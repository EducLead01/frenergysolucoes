document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');

            if (entry.target.querySelector('.counter')) {
                startCounters(entry.target);
            }

            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));

    function startCounters(parentEl) {
        const counters = parentEl.querySelectorAll('.counter');

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const increment = target / (duration / 16);

            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }

    const form = document.getElementById('leadForm');
    const successMsg = document.getElementById('formSuccess');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Calculadora de economia solar
    const slider = document.getElementById('calc-slider');
    const calcInput = document.getElementById('calc-input');

    if (slider && calcInput) {
        function formatNum(n) {
            return Math.round(n).toLocaleString('pt-BR');
        }

        function updateCalc(value) {
            const bill = Math.max(100, Math.min(5000, Number(value)));
            const savingsRate = 0.90;
            const monthly = bill * savingsRate;
            const annual = monthly * 12;
            const remainder = bill - monthly;

            // Payback varia com o tamanho do sistema (economia de escala)
            const payback = bill < 300 ? 5.5 : bill < 700 ? 5.0 : bill < 1500 ? 4.5 : 4.0;
            const total25 = annual * 25;

            document.getElementById('result-mensal').textContent = 'R$ ' + formatNum(monthly);
            document.getElementById('result-anual').textContent = 'R$ ' + formatNum(annual);
            document.getElementById('result-payback').textContent = '~' + String(payback).replace('.', ',') + ' anos';
            document.getElementById('result-total').textContent = 'R$ ' + formatNum(total25);

            document.getElementById('label-sem-solar').textContent = 'R$ ' + formatNum(bill);
            document.getElementById('label-com-solar').textContent = 'R$ ' + formatNum(remainder);

            // Barra "com solar" = 10% da altura máxima (apenas a taxa mínima sobra)
            document.getElementById('bar-sem-solar').style.height = '100%';
            document.getElementById('bar-com-solar').style.height = ((1 - savingsRate) * 100) + '%';

            // Gradiente do slider
            const pct = ((bill - 100) / (5000 - 100)) * 100;
            slider.style.background = `linear-gradient(to right, #F5A623 ${pct}%, #e5e7eb ${pct}%)`;
        }

        slider.addEventListener('input', (e) => {
            calcInput.value = e.target.value;
            updateCalc(e.target.value);
        });

        calcInput.addEventListener('input', (e) => {
            const val = Math.max(100, Math.min(5000, Number(e.target.value) || 100));
            slider.value = val;
            updateCalc(val);
        });

        updateCalc(350);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

        setTimeout(() => {
            successMsg.classList.remove('hidden');
            form.reset();

            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');

            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
});
