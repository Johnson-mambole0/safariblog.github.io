/* shared.js — injects nav, footer, and scroll behaviour into every page */

(function () {
  /* ── active page detection ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';

  /* ── NAV ── */
  const navHTML = `
<nav id="nav" class="${['safari.html','climbing.html','national-parks.html','about.html','contact.html','tour-detail.html'].includes(page) ? 'solid' : ''}">
  <a href="index.html" class="nav-logo">Savanna <span>&</span> Summit</a>
  <ul class="nav-links">
    <li><a href="safari.html" ${page==='safari.html'?'class="active"':''}>Safari</a></li>
    <li><a href="climbing.html" ${page==='climbing.html'?'class="active"':''}>Climbing</a></li>
    <li><a href="national-parks.html" ${page==='national-parks.html'?'class="active"':''}>National Parks</a></li>
    <li><a href="about.html" ${page==='about.html'?'class="active"':''}>About Us</a></li>
    <li><a href="contact.html" class="nav-cta" ${page==='contact.html'?'class="nav-cta active"':''}>Plan My Trip</a></li>
  </ul>
  <div class="hamburger" id="ham"><span></span><span></span><span></span></div>
</nav>
<div class="mobile-nav" id="mob-nav">
  <div class="mobile-nav-close" id="mob-close">✕</div>
  <a href="index.html" onclick="closeMob()">Home</a>
  <a href="safari.html" onclick="closeMob()">Safari</a>
  <a href="climbing.html" onclick="closeMob()">Climbing</a>
  <a href="national-parks.html" onclick="closeMob()">National Parks</a>
  <a href="about.html" onclick="closeMob()">About Us</a>
  <a href="contact.html" onclick="closeMob()">Plan My Trip</a>
</div>`;

  /* ── FOOTER ── */
  const footerHTML = `
<div class="contact-strip">
  <p class="contact-strip-copy"><strong>Ready to talk?</strong> Our team is available 7 days a week.</p>
  <div class="contact-chips">
    <a href="mailto:hello@savannaandsummit.co.tz" class="chip">✉ hello@savannaandsummit.co.tz</a>
    <a href="tel:+255000000000" class="chip">✆ +255 000 000 000</a>
    <a href="https://wa.me/255000000000" class="chip">WhatsApp</a>
  </div>
</div>
<footer>
  <div class="footer-top">
    <div>
      <a href="index.html" class="footer-logo">Savanna <em style="font-style:italic;">&</em> Summit</a>
      <p class="footer-about">Tanzania's trusted operator for national park safaris and mountain expeditions. Based in Arusha, guided by passion, committed to the land we love.</p>
      <div class="footer-socials">
        <a href="#" class="soc">in</a>
        <a href="#" class="soc">fb</a>
        <a href="#" class="soc">ig</a>
        <a href="#" class="soc">yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Safari</h5>
      <ul>
        <li><a href="safari.html">Safari Overview</a></li>
        <li><a href="national-parks.html">National Parks</a></li>
        <li><a href="safari.html#private">Private Safari</a></li>
        <li><a href="safari.html#group">Group Safari</a></li>
        <li><a href="safari.html#migration">Great Migration</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Climbing</h5>
      <ul>
        <li><a href="climbing.html">Climbing Overview</a></li>
        <li><a href="climbing.html#lemosho">Lemosho Route</a></li>
        <li><a href="climbing.html#machame">Machame Route</a></li>
        <li><a href="climbing.html#meru">Mount Meru</a></li>
        <li><a href="climbing.html#faq">Climbing FAQ</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#team">Our Guides</a></li>
        <li><a href="about.html#conservation">Conservation</a></li>
        <li><a href="about.html#reviews">Reviews</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Savanna & Summit. All rights reserved. · Arusha, Tanzania</span>
    <div class="footer-certs">
      <span class="cert">Licensed Tour Operator</span>
      <span class="cert">Tanzania Tourism Board</span>
    </div>
  </div>
</footer>`;

  /* ── INJECT ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── SCROLL BEHAVIOUR ── */
  const nav = document.getElementById('nav');
  const isSolid = nav.classList.contains('solid');
  if (!isSolid) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  /* ── HAMBURGER ── */
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob-nav');
  const close = document.getElementById('mob-close');
  if (ham) ham.addEventListener('click', () => mob.classList.add('open'));
  if (close) close.addEventListener('click', () => mob.classList.remove('open'));

  window.closeMob = () => mob.classList.remove('open');
})();
