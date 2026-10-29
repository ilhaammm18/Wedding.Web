/**
 * AZZAHRA WEDDING ORGANIZER - INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initActiveNavLink();
  initMobileMenu();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger initial state
}

/* ==========================================================================
   2. ACTIVE NAV LINK ON SCROLL
   ========================================================================== */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link, .mobile-links .mobile-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   3. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function closeMobileMenu() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  if (mobileDrawer) mobileDrawer.classList.remove('open');
  if (drawerBackdrop) drawerBackdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   4. CONSULTATION MODAL
   ========================================================================== */
function openConsultModal(originTitle = 'Konsultasi Gratis') {
  const modal = document.getElementById('consultModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeConsultModal() {
  const modal = document.getElementById('consultModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleConsultSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('consultName').value;
  const phone = document.getElementById('consultPhone').value;
  const pkg = document.getElementById('consultPackage').value;
  const date = document.getElementById('consultDate').value || 'Akan dikonfirmasi kemudian';
  const notes = document.getElementById('consultNotes').value || 'Tidak ada catatan tambahan';

  // Format WhatsApp message
  const waText = encodeURIComponent(
    `Halo Azzahra Wedding Organizer,\n\nSaya ingin berkonsultasi mengenai rencana pernikahan kami:\n` +
    `• Nama Pasangan: ${name}\n` +
    `• No. WhatsApp: ${phone}\n` +
    `• Peminatan Paket: ${pkg}\n` +
    `• Perkiraan Tanggal/Bulan: ${date}\n` +
    `• Konsep / Catatan: ${notes}\n\n` +
    `Mohon info ketersediaan tanggal dan proposal rinciannya. Terima kasih!`
  );

  closeConsultModal();
  showToast('Permintaan konsultasi berhasil disiapkan! Mengalihkan ke WhatsApp...');

  setTimeout(() => {
    window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
  }, 1200);

  document.getElementById('consultForm').reset();
}

/* ==========================================================================
   5. PACKAGE DETAILS MODAL
   ========================================================================== */
const packageData = {
  hemat: {
    name: 'Paket Hemat',
    badge: 'Mulai dari Rp 25.000.000',
    subtitle: 'Solusi Intimate Wedding Penuh Kehangatan (100–150 Tamu)',
    image: 'assets/images/pkg_hemat.jpg',
    inclusions: [
      'Konsultasi Perencanaan & Penyusunan Konsep Pernikahan Intim',
      'Tim Wedding Organizer Hari-H (4 Kru Berpengalaman)',
      'Dekorasi Pelaminan Minimalis Modern & Backdrop Akad (Lebar s/d 6m)',
      'Hand Bouquet Pengantin Segar + Boutonniere Pria',
      'Sound System Standar & Mic Wireless',
      'Buku Panduan Rundown Acara & Koordinasi Keluarga',
      'Pendampingan Gladi Resik H-1'
    ],
    note: 'Sangat cocok untuk perayaan di restoran, kafe privat, aula mungil, atau halaman rumah.'
  },
  silver: {
    name: 'Paket Silver',
    badge: 'Mulai dari Rp 45.000.000',
    subtitle: 'Sentuhan Anggun Modern & Garden Ceremony (250–350 Tamu)',
    image: 'assets/images/pkg_silver.jpg',
    inclusions: [
      'Perencanaan Menyeluruh (Vendor Sourcing & Budgeting Timeline)',
      'Tim Wedding Organizer Hari-H (6 Kru Profesional Berseragam)',
      'Dekorasi Pelaminan Eksklusif Modern/Adat Modifikasi (Lebar s/d 8m)',
      'Dekorasi Lorong Masuk (Aisle Walkway) & Gazebo Akad Cantik',
      'Master of Ceremony (MC) Profesional Akad & Resepsi',
      'Dokumentasi Foto & Video Cinematic (1 Fotografer + 1 Videografer)',
      'Sound System 5.000 Watt & Background Lighting System',
      'Technical Meeting Seluruh Vendor & Keluarga'
    ],
    note: 'Favorit untuk outdoor venue, gedung serbaguna, dan intimate ballroom.'
  },
  gold: {
    name: 'Paket Gold',
    badge: 'Mulai dari Rp 85.000.000',
    subtitle: 'Kemewahan Grand Ballroom Tanpa Khawatir (500–800 Tamu)',
    image: 'assets/images/pkg_gold.jpg',
    inclusions: [
      'Full Wedding Planning dari 6 Bulan Sebelum Hari-H',
      'Tim Wedding Organizer Lengkap (8 Kru Senior + Koordinator VIP)',
      'Dekorasi Grand Ballroom Pelaminan Mewah (Lebar s/d 14m) Full Fresh Flowers',
      'Lighting Stage Show & Fairy Light Ambiance Spektakuler',
      'Entertaiment Akustik / Chamber Orchestra + MC Ternama',
      'Tim Dokumentasi Komplit (2 Fotografer, 2 Videografer, Drone, Teaser 1 Menit)',
      'MUA & Busana Akad + Resepsi Pengantin & Kedua Orang Tua',
      'Mobil Pengantin Mewah (Alphard/Mercedes-Benz) include Dekorasi & Driver'
    ],
    note: 'Paket paling populer untuk pesta ballroom hotel berbintang dan auditorium prestisius.'
  },
  platinum: {
    name: 'Paket Platinum',
    badge: 'Mulai dari Rp 150.000.000',
    subtitle: 'Royal Bespoke Masterpiece (1000+ Tamu / VIP Gala)',
    image: 'assets/images/pkg_platinum.jpg',
    inclusions: [
      'Layanan VIP Concierge & Perencana Pernikahan Pribadi Terdedikasi',
      'Tim Wedding Organizer Penuh (12 Kru Berpengalaman + Protocol Officer)',
      'Dekorasi Kustom Karya Desainer (Instalasi Bunga Kristal & Struktur Megah)',
      'Lighting Designer Show & Special Effects (Pyro Indoor, Dry Ice, Snow Machine)',
      'Orkestra Musik Lengkap / Live Band Selebriti + MC Terkenal',
      'Tim Dokumentasi Eksekutif (Foto/Video Cinema, Same Day Edit Video, Live Streaming)',
      'Wardrobe Styling & Make Up Artist Senior Indonesia',
      'Akomodasi Kamar Suite Pengantin di Hotel Bintang 5',
      'Pendampingan Katering VIP & Layanan Souvenir Eksklusif'
    ],
    note: 'Pengalaman pernikahan maha-karya dengan kebebasan kustomisasi 100% tanpa batas.'
  }
};

function openPackageDetail(pkgKey) {
  const data = packageData[pkgKey];
  if (!data) return;

  const modal = document.getElementById('packageDetailModal');
  const body = document.getElementById('pkgModalBody');

  const inclusionsHtml = data.inclusions.map(item => `
    <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px; font-size:0.92rem; color:#38332D;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" style="flex-shrink:0; margin-top:2px;">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${item}</span>
    </li>
  `).join('');

  body.innerHTML = `
    <div style="margin-bottom:20px; border-radius:12px; overflow:hidden; max-height:240px;">
      <img src="${data.image}" alt="${data.name}" style="width:100%; height:240px; object-fit:cover;">
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
      <h3 style="font-family: var(--font-serif); font-size:1.6rem; color:#1E1B18; margin:0;">${data.name}</h3>
      <span style="background:var(--gold-gradient); color:#121008; font-weight:700; font-size:0.85rem; padding:4px 14px; border-radius:20px;">
        ${data.badge}
      </span>
    </div>
    <p style="font-size:0.95rem; color:#856B19; font-weight:600; margin-bottom:18px;">${data.subtitle}</p>
    
    <div style="background:#FAF7F2; padding:20px; border-radius:12px; border:1px solid #ECE7DE; margin-bottom:20px;">
      <h4 style="font-size:0.9rem; font-weight:700; color:#1E1B18; text-transform:uppercase; letter-spacing:1px; margin-bottom:14px;">
        Cakupan &amp; Fasilitas Termasuk:
      </h4>
      <ul style="list-style:none; padding:0; margin:0;">
        ${inclusionsHtml}
      </ul>
    </div>

    <p style="font-size:0.85rem; color:#68625B; font-style:italic; margin-bottom:24px;">
      * ${data.note}
    </p>

    <div style="display:flex; gap:14px; flex-wrap:wrap;">
      <button type="button" class="btn-submit-modal" style="flex:1;" onclick="closePackageModal(); openConsultWithPackage('${data.name}');">
        Pilih &amp; Konsultasikan Paket Ini
      </button>
      <a href="https://wa.me/6281234567890?text=Halo%20Azzahra%20Wedding,%20saya%20tertarik%20dengan%20${encodeURIComponent(data.name)}%20(${encodeURIComponent(data.badge)}).%20Boleh%20minta%20pricelist%20lengkapnya?" 
         target="_blank" 
         rel="noopener" 
         class="btn-package-outline" 
         style="flex:1; display:flex; align-items:center; justify-content:center;">
        Tanya via WhatsApp
      </a>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePackageModal() {
  const modal = document.getElementById('packageDetailModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openConsultWithPackage(packageName) {
  openConsultModal();
  const select = document.getElementById('consultPackage');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(packageName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

/* ==========================================================================
   6. OFFICE VISIT MODAL
   ========================================================================== */
function openOfficeModal() {
  const modal = document.getElementById('officeModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOfficeModal() {
  const modal = document.getElementById('officeModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   7. GALLERY LIGHTBOX
   ========================================================================== */
function openLightbox(imgSrc, title, desc) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');

  if (!modal) return;

  img.src = imgSrc;
  titleEl.textContent = title;
  descEl.textContent = desc;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event && event.target && event.target.tagName === 'IMG') {
    return; // Don't close if clicking directly on image
  }
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

/* ==========================================================================
   8. NEWSLETTER & ABOUT DETAIL HANDLERS
   ========================================================================== */
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (!input || !input.value) return;

  const email = input.value;
  showToast(`Terima kasih! Email (${email}) telah terdaftar untuk promo eksklusif kami.`);
  input.value = '';
}

function showAboutDetails(event) {
  event.preventDefault();
  const target = document.getElementById('paket');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   9. TOAST NOTIFICATION
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   10. DETAIL PAGE BOOKING FORM HANDLER
   ========================================================================== */
function handlePackageBookingSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('bookingName').value;
  const phone = document.getElementById('bookingPhone').value;
  const date = document.getElementById('bookingDate').value;
  const venue = document.getElementById('bookingVenue').value || '-';
  const notes = document.getElementById('bookingNotes').value || '-';

  // Format nice date string if possible
  let formattedDate = date;
  if (date) {
    try {
      const d = new Date(date);
      formattedDate = d.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch(e) {
      formattedDate = date;
    }
  }

  const pkgInput = document.getElementById('bookingPackageName');
  const targetPkg = pkgInput ? pkgInput.value : 'Paket Pernikahan';

  const waText = encodeURIComponent(
    `Halo Weddingdreams / Azzahra Wedding Organizer,\n\n` +
    `Saya tertarik untuk konsultasi dan booking *${targetPkg}*:\n` +
    `• Nama Lengkap: ${name}\n` +
    `• No. WhatsApp: ${phone}\n` +
    `• Rencana Tanggal: ${formattedDate}\n` +
    `• Lokasi / Venue: ${venue}\n` +
    `• Catatan / Pertanyaan: ${notes}\n\n` +
    `Mohon info ketersediaan tanggal dan jadwal konsultasi lebih lanjut. Terima kasih!`
  );

  showToast('Permintaan booking disiapkan! Mengalihkan ke WhatsApp...');

  setTimeout(() => {
    window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
  }, 1200);

  document.getElementById('packageBookingForm').reset();
}

// Close modals with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeConsultModal();
    closePackageModal();
    closeOfficeModal();
    closeLightbox();
  }
});
