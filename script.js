/**
 * AI & DATA SCIENCE: CONCEPTS, SKILLS & SOCIETY
 * Bharata Mata College (Autonomous) · AICTE-VAANI Scheme
 * script.js — Interactive Client Logic
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 01: SMOOTH SCROLL WITH HEADER OFFSET <<<<< */
  /* ========================================================================== */
  // Navigation Anchor Links with Header Offset and Instant Hardware-Accelerated Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const topBar = document.getElementById('topBar');
      const offset = topBar ? topBar.offsetHeight + 10 : 80;

      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 01: SMOOTH SCROLL WITH HEADER OFFSET <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 02: SPEAKER IMAGE ERROR FALLBACK <<<<< */
  /* ========================================================================== */
  document.querySelectorAll('.speaker-photo').forEach(photo => {
    photo.addEventListener('error', function () {
      this.style.display = 'none';
      const fallback = this.nextElementSibling;
      if (fallback) fallback.style.display = 'flex';
    });
    // Check if image already failed
    if (photo.complete && photo.naturalWidth === 0) {
      photo.dispatchEvent(new Event('error'));
    }
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 02: SPEAKER IMAGE ERROR FALLBACK <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 03: BUTTONS MOUSE-FOLLOWING EFFECT <<<<< */
  /* ========================================================================== */
  document.querySelectorAll('.nav-gold-btn').forEach(btn => {
    let rafId = null;

    const updatePosition = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);

      // Subtle magnetic follow
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) * 0.16;
      const deltaY = (y - centerY) * 0.16;
      btn.style.transform = `translate(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px)`;
    };

    btn.addEventListener('mouseenter', (e) => {
      btn.classList.remove('is-leaving');
      btn.classList.add('is-hovered');
      updatePosition(e);
    });

    btn.addEventListener('mousemove', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updatePosition(e));
    });

    btn.addEventListener('mouseleave', (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);

      btn.classList.remove('is-hovered');
      btn.classList.add('is-leaving');
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 03: BUTTONS MOUSE-FOLLOWING EFFECT <<<<< */
  /* ========================================================================== */


  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 04: SCROLL ANIMATIONS (PARTICIPATE & CONTACT) <<<<< */
  /* ========================================================================== */
  // Minimal Asynchronous IntersectionObserver for sections with explicit entrance effects
  const animatedSections = [
    'participate',
    'committee',
    'contact'
  ];

  animatedSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('is-in-view');
            obs.unobserve(el);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      });
      observer.observe(el);
    } else {
      el.classList.add('is-in-view');
    }
  });
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 04: SCROLL ANIMATIONS (PARTICIPATE & CONTACT) <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 05: HERO PIXEL SQUARE FLIP WAVE (CANVAS) <<<<< */
  /* ========================================================================== */
  const initPixelWave = () => {
    const canvas = document.getElementById('heroPixelCanvas');
    const frame = document.getElementById('heroParallelogramFrame');
    if (!canvas || !frame) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let isAnimationComplete = false;
    const img = new Image();
    img.src = 'assets/college/bmc.jpg'; // <-- changed from .jpeg to match YOUR file

    const renderSolidImage = (width, height, dpr, sx, sy, sw, sh) => {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
      ctx.restore();
    };

    const runEngine = (replayAnimation = true) => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = frame.clientWidth;
      const height = frame.clientHeight;

      if (width <= 0 || height <= 0) {
        setTimeout(() => runEngine(replayAnimation), 60);
        return;
      }

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const imgW = img.naturalWidth || 1920;
      const imgH = img.naturalHeight || 1080;
      const imgRatio = imgW / imgH;
      const frameRatio = width / height;

      let sx, sy, sw, sh;
      if (frameRatio > imgRatio) {
        sw = imgW;
        sh = imgW / frameRatio;
        sx = 0;
        sy = (imgH - sh) * 0.35;
      } else {
        sw = imgH * frameRatio;
        sh = imgH;
        sx = Math.max(0, Math.min(imgW - sw, (imgW - sw) * 0.24));
        sy = 0;
      }

      if (isAnimationComplete && !replayAnimation) {
        renderSolidImage(width, height, dpr, sx, sy, sw, sh);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targetSize = width <= 600 ? 34 : (width <= 1024 ? 40 : 44);
      const cols = Math.max(6, Math.ceil(width / targetSize));
      const rows = Math.max(6, Math.ceil(height / targetSize));

      const tileW = width / cols;
      const tileH = height / rows;

      const tiles = [];
      let maxDelay = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const delay = (c * 26) + (r * 18) + 200;
          const duration = 380;
          if (delay + duration > maxDelay) {
            maxDelay = delay + duration;
          }

          const dx = c * tileW;
          const dy = r * tileH;
          const dw = tileW + 0.6;
          const dh = tileH + 0.6;

          const tsx = sx + (dx / width) * sw;
          const tsy = sy + (dy / height) * sh;
          const tsw = (dw / width) * sw;
          const tsh = (dh / height) * sh;

          tiles.push({
            dx, dy, dw, dh,
            tsx, tsy, tsw, tsh,
            centerX: dx + tileW / 2,
            centerY: dy + tileH / 2,
            delay,
            duration
          });
        }
      }

      let startTime = null;

      const render = (now) => {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        if (elapsed >= maxDelay + 40) {
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
          ctx.restore();
          isAnimationComplete = true;
          animId = null;
          return;
        }

        for (let i = 0; i < tiles.length; i++) {
          const t = tiles[i];

          if (elapsed < t.delay) continue;

          if (elapsed >= t.delay + t.duration) {
            ctx.drawImage(img, t.tsx, t.tsy, t.tsw, t.tsh, t.dx, t.dy, t.dw, t.dh);
            continue;
          }

          const progress = (elapsed - t.delay) / t.duration;
          const ease = 1 - Math.pow(1 - progress, 3);
          const angle = (1 - ease) * (Math.PI / 2);
          const scaleX = Math.max(0.01, Math.cos(angle));

          ctx.save();
          ctx.translate(t.centerX, t.centerY);
          ctx.scale(scaleX, 1);
          ctx.drawImage(
            img,
            t.tsx, t.tsy, t.tsw, t.tsh,
            -t.dw / 2, -t.dh / 2, t.dw, t.dh
          );
          ctx.restore();
        }

        ctx.restore();
        animId = requestAnimationFrame(render);
      };

      animId = requestAnimationFrame(render);
    };

    if (img.complete && img.naturalWidth > 0) {
      runEngine(true);
    } else {
      img.onload = () => runEngine(true);
    }

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (img.complete && img.naturalWidth > 0) {
          runEngine(false);
        }
      }, 200);
    });
  };

  if (document.readyState === 'complete') {
    initPixelWave();
  } else {
    window.addEventListener('load', initPixelWave);
  }
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 05: HERO PIXEL SQUARE FLIP WAVE (CANVAS) <<<<< */
  /* ========================================================================== */

  /* ========================================================================== */
  /* >>>>> START SCRIPT PART 06: COUNTDOWN TIMER TO DEC 8 2026 09:30 IST <<<<< */
  /* ========================================================================== */
  (() => {
    // Target: December 8, 2026 at 09:30:00 IST (UTC+5:30)
    const TARGET = new Date('2026-12-08T09:30:00+05:30').getTime();

    const elDays    = document.getElementById('cd-days');
    const elHours   = document.getElementById('cd-hours');
    const elMinutes = document.getElementById('cd-minutes');
    const elSeconds = document.getElementById('cd-seconds');

    if (!elDays || !elHours || !elMinutes || !elSeconds) return;

    // Animate digit change with flip class
    const setDigit = (el, value) => {
      const padded = String(value).padStart(2, '0');

      if (el.textContent === padded) return;

      el.classList.remove('cd-flip');
      void el.offsetWidth; // force reflow to restart animation
      el.textContent = padded;
      el.classList.add('cd-flip');
    };

    const tick = () => {
      const now  = Date.now();
      const diff = TARGET - now;

      if (diff <= 0) {
        // Conference has started
        setDigit(elDays,    0);
        setDigit(elHours,   0);
        setDigit(elMinutes, 0);
        setDigit(elSeconds, 0);
        clearInterval(timerInterval);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days    = Math.floor(totalSeconds / 86400);
      const hours   = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600)  / 60);
      const seconds = totalSeconds % 60;

      setDigit(elDays,    days);
      setDigit(elHours,   hours);
      setDigit(elMinutes, minutes);
      setDigit(elSeconds, seconds);
    };

    tick(); // run immediately
    const timerInterval = setInterval(tick, 1000);
  })();
  /* ========================================================================== */
  /* >>>>> END SCRIPT PART 06: COUNTDOWN TIMER TO DEC 8 2026 09:30 IST <<<<< */
  /* ========================================================================== */

});   // <-- this is your existing closing line, keep only ONE of these
