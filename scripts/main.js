/* Utilities */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Page init */
document.addEventListener('DOMContentLoaded', () => {
	// Year in footer
	const yearEl = $('[data-year]');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());

	// Mobile nav
	const toggle = $('.nav-toggle');
	const links = $('.nav-links');
	if (toggle && links) {
		toggle.addEventListener('click', () => {
			const isOpen = links.classList.toggle('open');
			toggle.setAttribute('aria-expanded', String(isOpen));
		});
	}

	// Smooth scroll indicator
	$$('[data-scroll]').forEach(btn => {
		btn.addEventListener('click', e => {
			const target = btn.getAttribute('data-scroll');
			if (target) {
				e.preventDefault();
				const el = document.querySelector(target);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// Scroll reveal (sections up + cards)
	const appearUp = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				appearUp.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
	$$('.reveal-up, .reveal').forEach(el => appearUp.observe(el));

	// Gallery filters (Life)
	const chips = $$('.gallery-tabs .chip');
	const masonry = $('#masonry');
	if (chips.length && masonry) {
		// If there's no "All" tab, default to the first chip's filter.
		const hasAll = chips.some(c => c.getAttribute('data-gallery-filter') === 'all');
		if (!hasAll) chips[0]?.click();

		chips.forEach(chip => {
			chip.addEventListener('click', () => {
				chips.forEach(c => c.classList.remove('active'));
				chip.classList.add('active');
				const filter = chip.getAttribute('data-gallery-filter');
				$$('.masonry-item', masonry).forEach(item => {
					const tags = item.getAttribute('data-tags') || '';
					const show = (filter === 'all') || (filter && tags.includes(filter));
					item.style.display = show ? 'inline-block' : 'none';
				});
			});
		});
	}

	// Modal viewer for images (Life)
	const modal = $('#image-modal');
	const modalImg = $('#modal-img');
	const modalCaption = $('#modal-caption');
	if (modal && modalImg && modalCaption) {
		$$('.masonry-item img').forEach(img => {
			img.addEventListener('click', () => {
				modal.classList.add('open');
				modalImg.src = img.src;
				modalImg.alt = img.alt || '';
				const caption = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
				modalCaption.textContent = caption;
			});
		});
		modal.addEventListener('click', (e) => {
			if (e.target === modal || e.target.hasAttribute('data-modal-close')) {
				modal.classList.remove('open');
			}
		});
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') modal.classList.remove('open');
		});
	}

	// Page transitions (intercept local nav links)
	document.body.classList.remove('is-loading');
	const localLinks = $$('a[data-nav]');
	localLinks.forEach(a => {
		a.addEventListener('click', (e) => {
			const url = new URL(a.href, window.location.href);
			const sameOrigin = url.origin === window.location.origin;
			if (!sameOrigin) return;
			const samePageAnchor = url.pathname === window.location.pathname && url.hash;
			if (samePageAnchor) return;
			e.preventDefault();
			document.body.classList.add('is-navigating');
			setTimeout(() => {
				window.location.href = a.href;
			}, 260); // quick fade
		});
	});
});

