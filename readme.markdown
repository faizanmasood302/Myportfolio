# ═══════════════════════════════════════════════════════
# MASTER PROMPT — PERSONAL PORTFOLIO CLI TOOL
# Advanced styling · Smooth scroll animations · Recruiter UX
# ═══════════════════════════════════════════════════════

ROLE: Elite full-stack developer & creative technologist
AUDIENCE: Senior recruiters, CTOs, hiring managers at tier-1 companies
GOAL: Memorable first impression within 8 seconds of landing
AESTHETIC: Dark editorial × cyber-refined × motion-forward

═══════════════════════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════════════════════
PALETTE:
  --bg:       #0a0a0f   /* deep void */
  --surface:  #12121a   /* raised cards */
  --accent1:  #6ee7b7   /* electric mint */
  --accent2:  #a78bfa   /* violet pulse */
  --accent3:  #fb923c   /* amber spark */
  --text:     #f0f0f5
  --muted:    #6b7280

TYPOGRAPHY:
  DISPLAY:  'Syne' 800w — headlines, letter-spacing: -2px
  BODY:     'DM Mono' 400w — code + UI text
  ACCENT:   'Fraunces' italic — pull-quotes, taglines

═══════════════════════════════════════════════════════
ANIMATION STACK
═══════════════════════════════════════════════════════
1. PAGE LOAD — staggered fadeUp sequence:
   @keyframes fadeUp {
     from { opacity: 0; transform: translateY(32px); }
     to   { opacity: 1; transform: translateY(0); }
   }
   .hero     { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 0ms both; }
   .nav      { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 100ms both; }
   .skills   { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 250ms both; }
   .projects { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 400ms both; }
   .contact  { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) 600ms both; }

2. SMOOTH SCROLL:
   html { scroll-behavior: smooth; scroll-padding-top: 80px; }

3. SCROLL-TRIGGERED REVEALS (IntersectionObserver):
   const observer = new IntersectionObserver(
     (entries) => entries.forEach(
       e => e.target.classList.toggle('visible', e.isIntersecting)
     ), { threshold: 0.15, rootMargin: '-60px 0px' }
   );
   document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

   .reveal { opacity: 0; transform: translateY(40px); transition: all 0.7s cubic-bezier(.22,1,.36,1); }
   .reveal.visible { opacity: 1; transform: translateY(0); }

4. SCROLL PROGRESS BAR:
   window.addEventListener('scroll', () => {
     const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
     document.getElementById('progress').style.width = (pct * 100) + '%';
   });

═══════════════════════════════════════════════════════
HERO SECTION
═══════════════════════════════════════════════════════
LAYOUT: 100vh · centered · two-column (text left, visual right)
BACKGROUND: animated mesh gradients — 3 radial points drifting 8s loop
PARTICLE CANVAS: 60 nodes · connected edges at <150px · mouse repel
NAME TYPEWRITER: letter-by-letter · 60ms delay · cursor blink after
ROLE CYCLING: 3 roles crossfade every 2.5s — Frontend Architect / Creative Technologist / Open Source Builder
CTA BUTTON: shimmer sweep left→right on hover · magnetic on mouseover
SCROLL ARROW: bounce animation 2s loop · fades out after first scroll

═══════════════════════════════════════════════════════
NAVIGATION
═══════════════════════════════════════════════════════
TYPE: sticky top · glassmorphism (backdrop-filter: blur(20px)) on scroll
ACTIVE LINK: sliding underline pill follows scroll spy
PROGRESS: 2px bar at very top · accent1 fill · scroll-driven width
MOBILE: hamburger → full-screen overlay · stagger link reveals 50ms apart

═══════════════════════════════════════════════════════
PROJECTS SECTION
═══════════════════════════════════════════════════════
LAYOUT: masonry 3-col desktop · 2-col tablet · 1-col mobile
FILTER TABS: category pills · sliding indicator · instant filter
CARD HOVER: translateY(-8px) · border glow accent1 · 300ms ease
IMAGE ZOOM: scale(1.05) clip-hidden · 400ms ease
OVERLAY: tech-stack chips slide up · dark glass background
REVEAL: cards stagger 80ms apart · translateY(40px→0) on scroll enter

═══════════════════════════════════════════════════════
SKILLS SECTION
═══════════════════════════════════════════════════════
STYLE: orbiting tech logos + radial progress rings
BARS: width animates 0→N% · 0.8s ease · 150ms stagger
ORBIT: CSS @keyframes rotate 20s linear infinite · pause on hover
COUNTERS: number count-up from 0 to value on scroll-enter · requestAnimationFrame

═══════════════════════════════════════════════════════
MICRO-INTERACTIONS
═══════════════════════════════════════════════════════
✓ Custom cursor: 8px dot + 32px trailing ring · lag follow (lerp 0.15) · scale(2) on links
✓ Magnetic buttons: repel/attract on mousemove · max ±10px offset
✓ 3D tilt cards: VanillaTilt.js · glare effect · perspective 1000px
✓ Link underlines: scaleX(0→1) from left · 0.3s ease · accent color
✓ Click ripple: radial expand circle · opacity 0.3→0 · 600ms
✓ Page transitions: View Transitions API · crossfade 200ms

═══════════════════════════════════════════════════════
PERFORMANCE CONSTRAINTS
═══════════════════════════════════════════════════════
→ Lighthouse all categories ≥ 95
→ FCP ≤ 1.2s · LCP ≤ 2.5s · CLS = 0
→ JS bundle ≤ 80kb gzipped (no heavy animation libs unless CDN)
→ Images: WebP · lazy load · aspect-ratio reserved
→ prefers-reduced-motion: all animations disabled when set
→ Animations: transform/opacity only (no layout-triggering props)

═══════════════════════════════════════════════════════
CLI TOOL STRUCTURE
═══════════════════════════════════════════════════════
portfolio/
├── src/
│   ├── components/   Hero · Navbar · Projects · Skills · Contact
│   ├── animations/   gsap.ts · scroll.ts · particles.ts · cursor.ts
│   ├── styles/       tokens.css · animations.css · layout.css · utils.css
│   └── data/         projects.json · skills.json · meta.json
├── cli/
│   ├── init.ts       scaffold  --name  --theme  --stack
│   ├── build.ts      vite bundle · asset optimize · sitemap gen
│   └── deploy.ts     vercel / netlify / gh-pages one-command
└── portfolio.config.ts  personalInfo · theme · projects · skills

CLI COMMANDS:
  npx create-portfolio --name "Your Name" --theme dark-cyber
  portfolio dev              # hot reload at localhost:3000
  portfolio add project      # interactive prompts → projects.json
  portfolio add skill        # append to skills.json
  portfolio build            # vite + optimize + generate sitemap
  portfolio deploy --to vercel  # one-command publish
  portfolio audit            # Lighthouse CI report

═══════════════════════════════════════════════════════
RECRUITER ATTRACTION CHECKLIST
═══════════════════════════════════════════════════════
[✓] Above-fold impact: name + role + CTA visible without scrolling
[✓] Social proof strip: GitHub stats · commit count · open source
[✓] Live project demos: clickable + repo links, not just screenshots
[✓] Resume PDF download: tracked · one-click · auto-date updated
[✓] Contact form: serverless backend · instant confirm email
[✓] SEO + Open Graph: proper title/desc/image for LinkedIn shares
[✓] Analytics: track recruiter visits, project clicks, dwell time
[✓] Mobile perfect: 320px to 4K — every breakpoint tested

═══════════════════════════════════════════════════════
END OF MASTER PROMPT
═══════════════════════════════════════════════════════



PERSON INFORMATION:
Muhammad Faizan
AI / Machine Learning Engineer  |  Final-Year BSAI Student
Faizanmasood009@gmail.com  •  +92 324 3495748  •  Karachi, Pakistan  •  github.com/faizanmasood302
_____________________________________________________________________________________________________
PROFESSIONAL SUMMARY
_____________________________________________________________________________________________________
Final-year Bachelor of Science in Artificial Intelligence student (GPA 3.33/4.0) with hands-on experience in machine learning model development, NLP, and computer vision. Completed an applied ML internship, contributed to two hackathons involving RAG-based chatbots and AI tooling, and built production-grade knowledge systems using Python and modern ML frameworks. Seeking a Junior ML or ML Intern role to apply and deepen expertise in model training, evaluation, and deployment.
TECHNICAL SKILLS
_____________________________________________________________________________________________________
ML / AI	PyTorch, TensorFlow, scikit-learn, Hugging Face Transformers, RAG pipelines
Data Science	NumPy, Pandas, Matplotlib, Seaborn, Jupyter Notebook, Google Colab
NLP / CV	Text classification, named entity recognition, image preprocessing, CNNs
Programming	Python (primary), SQL, TypeScript, C
Web / Infra	Next.js, Tailwind CSS, BetterAuth
Tools	Git, GitHub, VS Code, Linux
EDUCATION
_____________________________________________________________________________________________________
BS Artificial Intelligence  |  Sindh Madressatul Islam University, Karachi	Feb 2023 – Expected Feb 2027
GPA: 3.33 / 4.0  |  Currently enrolled in 7th semester
•	Relevant Coursework: Machine Learning, Natural Language Processing, Computer Vision, Data Mining, Artificial Intelligence, Advanced Statistics

Diploma in Information Technology  |  Pakistan Navy Polytechnic Institute (PNPI), Karachi	Graduated Jul 2021
Grade: A  (2195 / 3100)  |  
WORK EXPERIENCE
_____________________________________________________________________________________________________
Machine Learning Intern  |  Elevvo Pathway  (Remote)	Aug 2025 – Sep 2025
•	Trained and evaluated supervised learning models (classification & regression) using scikit-learn and Python on structured datasets, achieving baseline accuracy improvements of ~12% through feature engineering and hyperparameter tuning.
•	Performed end-to-end data preprocessing pipelines including handling missing values, encoding, normalization, and train/test splitting across 3 real-world datasets.
•	Documented model evaluation metrics (accuracy, F1-score) and presented findings in weekly project reviews, receiving feedback on model selection and overfitting mitigation.
PROJECTS
_____________________________________________________________________________________________________
Tomato Leaf Disease Detection |  Class Project  |github.com/faizanmasood302/vegetables_health_detection	
•	Built a multi-model computer vision system to classify tomato leaf diseases from images using the PlantVillage dataset (~54,000 images, 10 disease classes).
•	Trained a custom CNN (TensorFlow/Keras) as both a classifier and feature extractor, then used extracted CNN features to train and compare Random Forest, KNN, and XGBoost ensemble models — CNN achieved highest test accuracy among all four.
•	Developed an interactive Streamlit web app allowing users to upload a leaf image and receive side-by-side predictions from all four models with a comparative accuracy bar chart.
•	Designed a clean pipeline: CNN training → feature extraction → classical ML training → model serialization (joblib) → UI deployment; entire workflow triggered via a single CLI command.
Tech: Python, TensorFlow/Keras, scikit-learn, XGBoost, Streamlit, NumPy, Pandas, Matplotlib, Pillow
Hydroponics Nutrition Advisor System | Personal Project	Sep 2025 – Oct 2025
•	Built a rule-based expert system in Python for precision nutrient management across 6 crop types, delivering crop-specific recommendations without IoT dependency.
•	Designed the knowledge base with 80+ expert-defined rules, enabling reliable offline use in low-resource environments; validated system output against agronomist guidelines.
•	Architected for extensibility — new crop profiles can be added in under 30 minutes with zero code changes.
Tech: Python, expert system rules, knowledge engineering
AI Textbook Platform — GIAIC Hackathon 2 | Hackathon	Dec 2025
•	Created a full-stack educational platform for teaching Physical AI & Humanoid Robotics, featuring a RAG-powered chatbot that answered curriculum questions with source citations from the textbook.
•	Integrated Urdu/English translation layer reaching a bilingual student audience; implemented BetterAuth for secure access control.
•	Placed among top finalists out of 200+ teams. Stack: Next.js, TypeScript, SpeakIt Plus, BetterAuth, RAG chatbot (LLM + vector retrieval).
Tech: Next.js, TypeScript, RAG pipeline, BetterAuth, SpeakIt Plus
Q-Commerce Food Ordering Website — GIAIC Hackathon 1 | Hackathon	Sep 2023 – Dec 2023
•	Designed and developed a responsive front-end e-commerce website for a fast-food restaurant with product listing, cart, and checkout flow.
•	Delivered fully responsive UI across mobile and desktop using Tailwind CSS utility classes; achieved sub-2s page load using Next.js static generation.
Tech: Next.js, TypeScript, Tailwind CSS
CERTIFICATIONS & TRAINING
_____________________________________________________________________________________________________
•	Elevvo Pathway ML Internship Certificate | Applied Machine Learning, Aug–Sep 2025
LANGUAGES
_____________________________________________________________________________________________________
Urdu (Native) |  English (Professional working proficiency)


