/**
 * Blork Studios — Main Application Script
 * Features:
 * - Dynamic Theme Switcher with localStorage persistence
 * - Interactive Lightbox with keyboard navigation & counter
 * - Gallery category filtering
 * - Mobile responsive navigation menu
 * - Email copy-to-clipboard helper
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION MENU
  // ------------------------------------------------------------------------
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
        menuToggle.textContent = '☰';
      }
    });

    // Close menu when clicking a link inside nav
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', false);
          menuToggle.textContent = '☰';
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. DYNAMIC YEAR
  // ------------------------------------------------------------------------
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ------------------------------------------------------------------------
  // 4. INTERACTIVE LIGHTBOX FOR GALLERY
  // ------------------------------------------------------------------------
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-content img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption-text');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let visibleGalleryItems = [];
    let currentIndex = 0;

    function refreshVisibleItems() {
      visibleGalleryItems = Array.from(document.querySelectorAll('.gallery-item:not([style*="display: none"])'));
    }

    function openLightbox(index) {
      refreshVisibleItems();
      if (visibleGalleryItems.length === 0) return;

      currentIndex = (index + visibleGalleryItems.length) % visibleGalleryItems.length;
      const targetItem = visibleGalleryItems[currentIndex];
      const img = targetItem.querySelector('img');
      const caption = targetItem.querySelector('.gallery-caption span') || targetItem.querySelector('figcaption');

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Art of War screenshot';
      if (lightboxCaption) {
        lightboxCaption.textContent = caption ? caption.textContent.trim() : (img.alt || '');
      }
      if (lightboxCounter) {
        lightboxCounter.textContent = `${currentIndex + 1} / ${visibleGalleryItems.length}`;
      }

      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    // Delegate click on gallery items
    document.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (item) {
        refreshVisibleItems();
        const idx = visibleGalleryItems.indexOf(item);
        if (idx !== -1) {
          openLightbox(idx);
        }
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', () => openLightbox(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => openLightbox(currentIndex + 1));

    // Backdrop click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') openLightbox(currentIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(currentIndex + 1);
    });
  }

  // ------------------------------------------------------------------------
  // 5. GALLERY CATEGORY FILTER
  // ------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        const items = document.querySelectorAll('.gallery-item');

        items.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = '';
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.transition = 'opacity 0.3s ease';
              item.style.opacity = '1';
            }, 10);
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. EMAIL COPY-TO-CLIPBOARD HELPER
  // ------------------------------------------------------------------------
  const emailPills = document.querySelectorAll('.email-pill[data-copy]');
  emailPills.forEach(pill => {
    pill.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = pill.getAttribute('data-copy') || 'blorkstudios@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = pill.querySelector('strong').textContent;
        pill.querySelector('strong').textContent = 'Copied to clipboard!';
        setTimeout(() => {
          pill.querySelector('strong').textContent = originalText;
        }, 2200);
      } catch (err) {
        // Fallback to mailto
        window.location.href = `mailto:${email}`;
      }
    });
  });
});