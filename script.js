const appArchCards = [
  {
    title: "Backend Layer",
    image: "images/backend-layer.jpg?raw=true",
    content: `<ul>
      <li>Django Framework</li>
      <li>RESTful API Design</li>
      <li>PostgreSQL Database</li>
      <li>PBKDF2 Password Hashing</li>
      <li>Session Management</li>
    </ul>`
  },
  {
    title: "External APIs",
    image: "images/security.jpg?raw=true",
    content: `<ul>
      <li>M-Pesa Daraja API</li>
      <li>LocationIQ API</li>
      <li>GPS Location Services</li>
      <li>Real-time Notifications</li>
    </ul>`
  },
  {
    title: "Security Layer",
    image: "images/1759388059722.jpg?raw=true",
    content: `<ul>
      <li>Payment Escrow System</li>
      <li>User Authentication</li>
      <li>Data Encryption</li>
      <li>Privacy Protection</li>
      <li>Input Validation</li>
    </ul>`
  }
];

const dataFlowCards = [
  {
    title: "Artisan Flow",
    image: "images/artisan-flow.png",
    content: `<ul>
      <li>Registration &amp; Verification</li>
      <li>Portfolio Upload &amp; Storage</li>
      <li>Order Management</li>
      <li>Payment Processing</li>
    </ul>`
  },
  {
    title: "Buyer Flow",
    image: "images/buyer-flow.png",
    content: `<ul>
      <li>Location-based Discovery</li>
      <li>Product Browsing</li>
      <li>Order Placement</li>
      <li>Payment &amp; Delivery</li>
    </ul>`
  }
];

function renderTechCards(cards) {
  const container = document.getElementById('tech-cards');
  container.innerHTML = '';
  cards.forEach(card => {
    const wrap = document.createElement('div');
    wrap.className = 'card-wrap';
    wrap.innerHTML = `
      <div class="card">
        <div class="card-bg" style="background-image:url('${card.image}')"></div>
        <div class="card-info">
          <h3>${card.title}</h3>
          <p>${card.content}</p>
        </div>
      </div>
    `;
    wrap.addEventListener('mouseenter', () => {
      wrap.querySelector('.card-info p').style.opacity = 1;
    });
    wrap.addEventListener('mouseleave', () => {
      wrap.querySelector('.card-info p').style.opacity = 0;
    });
    container.appendChild(wrap);
  });
}

const appArchBtn = document.getElementById('app-arch-btn');
const dataFlowBtn = document.getElementById('data-flow-btn');
appArchBtn.addEventListener('click', () => {
  appArchBtn.classList.add('active');
  dataFlowBtn.classList.remove('active');
  renderTechCards(appArchCards);
});
dataFlowBtn.addEventListener('click', () => {
  dataFlowBtn.classList.add('active');
  appArchBtn.classList.remove('active');
  renderTechCards(dataFlowCards);
});
// Initial render
renderTechCards(appArchCards);

// ---- USER GUIDES SECTION ----
const artisanGuideContent = `
  <div>
    <div>Choose 'Artisan' during initial onboarding</div>
    <div>Provide full name, phone number, email, and password</div>
    <div>Allow location permissions for GPS storage</div>
    <div>Enter personal details: full name, gender, national ID, and address</div>
    <div>Review and accept the terms and conditions</div>
    <div>Note: Payment is released within 24 hours after delivery</div>
    <br>
    <div>Upload a minimum of 10 high-quality portfolio images</div>
    <div>Showcase various products and techniques</div>
    <div>Include detailed descriptions of your work</div>
    <br>
    <div>Access the inventory page to upload ready-made products</div>
    <div>Display portfolio items alongside new products</div>
    <div>Update product availability and pricing</div>
    <br>
    <div>Communicate with buyers for clarifications</div>
    <div>Mark orders as completed when ready</div>
    <div>Coordinate delivery outside the app</div>
  </div>
`;

const customerGuideContent = `
  <div>
    <div>Choose 'Buyer' during initial onboarding</div>
    <div>Provide full name, phone number, email, and password</div>
    <div>Verify email address for account security</div>
    <div>Set up location preferences</div>
    <div>Allow location access for proximity features</div>
    <br>
    <div>Grant location permissions when prompted</div>
    <div>GPS coordinates are automatically collected</div>
    <div>Used to find artisans near your location</div>
    <br>
    <div>Browse all products or filter by category</div>
    <div>Available categories: pottery, basketry, tailoring</div>
    <div>View artisans near you using location services</div>
  </div>
`;

const artisansArrow = document.getElementById('artisans-arrow');
const customersArrow = document.getElementById('customers-arrow');
const guidesRight = document.getElementById('guides-right');

function showGuide(which) {
  if (which === 'artisans') {
    artisansArrow.classList.add('down');
    customersArrow.classList.remove('down');
    guidesRight.innerHTML = artisanGuideContent;
  } else if (which === 'customers') {
    customersArrow.classList.add('down');
    artisansArrow.classList.remove('down');
    guidesRight.innerHTML = customerGuideContent;
  }
}

function hideGuides() {
  artisansArrow.classList.remove('down');
  customersArrow.classList.remove('down');
  guidesRight.innerHTML = '';
}

artisansArrow.addEventListener('click', () => {
  if (!artisansArrow.classList.contains('down')) {
    showGuide('artisans');
  } else {
    hideGuides();
  }
});
customersArrow.addEventListener('click', () => {
  if (!customersArrow.classList.contains('down')) {
    showGuide('customers');
  } else {
    hideGuides();
  }
});

const teamMembers = [
  {
    name: "Immaculate Chepkirui",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T08BR1M9D6V-U08GQ6GKG84-8faac0398f49-512"
  },
  {
    name: "Hani Azanaw",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T08BR1M9D6V-U08FVFZAMNE-37697b6ded26-512"
  },
  {
    name: "Dorothy Mbakaya",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T08BR1M9D6V-U08CS378D24-5a54bde48fb7-192"
  },
  {
    name: "Jecinta Muhia",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T08BR1M9D6V-U08G4FL7L9J-c8e363d90ebb-512"
  },
  {
    name: "Daniella Mutuku",
    role: "Software Engineer",
    image: "https://ca.slack-edge.com/T08BR1M9D6V-U08C0DF80S1-3653aa026291-512"
  }
];

const carouselTrack = document.getElementById('carousel-track');
const teamDots = document.getElementById('team-dots');
const memberName = document.querySelector('.member-name');
const memberRole = document.querySelector('.member-role');
const leftArrow = document.getElementById('team-left');
const rightArrow = document.getElementById('team-right');
let currentIndex = 0;
let isAnimating = false;

function renderTeamCards() {
  carouselTrack.innerHTML = '';
  teamMembers.forEach((member, i) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.dataset.index = i;
    card.innerHTML = `<img src="${member.image}" alt="${member.name}"/>`;
    carouselTrack.appendChild(card);
  });
  teamDots.innerHTML = '';
  teamMembers.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    teamDots.appendChild(dot);
  });
}
renderTeamCards();

function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;
  const cards = document.querySelectorAll('.team-card');
  const dots = document.querySelectorAll('.dot');
  currentIndex = (newIndex + teamMembers.length) % teamMembers.length;
  cards.forEach((card, i) => {
    card.classList.remove('center', 'left-1', 'left-2', 'right-1', 'right-2', 'hidden');
    const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
    if (offset === 0) card.classList.add('center');
    else if (offset === 1) card.classList.add('right-1');
    else if (offset === 2) card.classList.add('right-2');
    else if (offset === teamMembers.length - 1) card.classList.add('left-1');
    else if (offset === teamMembers.length - 2) card.classList.add('left-2');
    else card.classList.add('hidden');
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";
  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
  }, 300);
  setTimeout(() => { isAnimating = false; }, 800);
}
leftArrow.addEventListener('click', () => updateCarousel(currentIndex - 1));
rightArrow.addEventListener('click', () => updateCarousel(currentIndex + 1));
teamDots.addEventListener('click', e => {
  if (e.target.classList.contains('dot')) {
    updateCarousel(Number(e.target.dataset.index));
  }
});
carouselTrack.addEventListener('click', e => {
  if (e.target.closest('.team-card')) {
    updateCarousel(Number(e.target.closest('.team-card').dataset.index));
  }
});
document.addEventListener('keydown', e => {
  if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
  else if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
});
let touchStartX = 0, touchEndX = 0;
carouselTrack.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; });
carouselTrack.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) updateCarousel(currentIndex + 1);
    else updateCarousel(currentIndex - 1);
  }
});
updateCarousel(0);

document.querySelectorAll('.nav-link, .footer-nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#','');
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 60, behavior: 'smooth' });
    }
  });
});
