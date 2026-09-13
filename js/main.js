/* María & Nacho · 27.02.2027
   Cuenta atrás + animaciones al hacer scroll */

(function () {
    'use strict';

    // ---------- CUENTA ATRÁS ----------
    // Fecha de la boda: 27 de febrero de 2027, 12:00 h (hora de Barcelona)
    var target = new Date('2027-02-27T12:00:00+01:00').getTime();

    var els = {
        days:    document.querySelector('[data-unit="days"]'),
        hours:   document.querySelector('[data-unit="hours"]'),
        minutes: document.querySelector('[data-unit="minutes"]'),
        seconds: document.querySelector('[data-unit="seconds"]')
    };

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function tick() {
        var now = Date.now();
        var diff = target - now;

        if (diff <= 0) {
            els.days.textContent = '00';
            els.hours.textContent = '00';
            els.minutes.textContent = '00';
            els.seconds.textContent = '00';
            return false;
        }

        var s = Math.floor(diff / 1000);
        var d = Math.floor(s / 86400);
        var h = Math.floor((s % 86400) / 3600);
        var m = Math.floor((s % 3600) / 60);
        var sec = s % 60;

        els.days.textContent = pad(d);
        els.hours.textContent = pad(h);
        els.minutes.textContent = pad(m);
        els.seconds.textContent = pad(sec);
        return true;
    }

    if (els.days && els.hours && els.minutes && els.seconds) {
        tick();
        var timer = setInterval(function () {
            if (!tick()) clearInterval(timer);
        }, 1000);
    }

    // ---------- REVEAL ON SCROLL ----------
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window && reveals.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        // Fallback: mostrar todo
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }
})();
