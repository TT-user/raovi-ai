(() => {
  'use strict';

  /* ===================== I18N DICTIONARY ===================== */
  const i18n = {
    pt: {
      'meta.title': 'Raovi Labs | Identidade Digital Profissional, Sites e SEO',
      'meta.description': 'A Raovi Labs cria identidades digitais profissionais: sites com design único, identidade visual forte e otimização SEO. Destaque sua marca no Google.',

      'nav.home': 'Home', 'nav.services': 'O que fazemos', 'nav.process': 'Processo',
      'nav.portfolio': 'Portfólio', 'nav.faq': 'FAQ', 'nav.contact': 'Contato',
      'nav.cta': 'Solicite uma proposta',

      'hero.badge': '• IDENTIDADE DIGITAL PROFISSIONAL •',
      'hero.title.line1': 'Sua marca merece mais do que',
      'hero.title.line2': 'um site genérico.',
      'hero.subtitle': 'A <strong>Raovi Labs</strong> desenvolve identidades digitais completas — design exclusivo, identidade visual forte e posicionamento estratégico no Google — para profissionais e empresas que querem ser levados a sério online.',
      'hero.cta.primary': 'Solicite uma proposta',
      'hero.cta.secondary': 'Conheça nosso processo',

      'pillars.title.a': 'O que', 'pillars.title.b': 'fazemos',
      'pillars.text': 'Três pilares que sustentam toda identidade digital que construímos.',
      'pillars.item1.title': 'Design Único',
      'pillars.item1.text': 'Nada de templates. Cada projeto nasce do zero, desenhado para a sua marca, seu público e seus objetivos. Um site que ninguém mais tem.',
      'pillars.item2.title': 'Identidade Visual',
      'pillars.item2.text': 'Cores, tipografia, logo e linguagem alinhados em todos os pontos de contato. Sua marca reconhecível do primeiro clique ao pós-venda.',
      'pillars.item3.title': 'SEO & Performance',
      'pillars.item3.text': 'Sites rápidos, estruturados para o Google desde a primeira linha de código. Não basta ser bonito — precisa ser encontrado.',

      'why.title.a': 'Por que', 'why.title.b': 'a Raovi',
      'why.text': 'O que nos diferencia de uma agência genérica.',
      'why.item1.title': 'Atenção aos detalhes',
      'why.item1.text': 'Cada pixel, cada texto e cada meta tag é pensado — nada vai para o ar por acaso.',
      'why.item2.title': 'Estratégia antes da estética',
      'why.item2.text': 'Entendemos seu negócio antes de desenhar qualquer tela.',
      'why.item3.title': 'Performance como padrão',
      'why.item3.text': 'Sites leves, com carregamento rápido e nota alta no Core Web Vitals.',
      'why.item4.title': 'Entrega completa',
      'why.item4.text': 'Você não recebe "um site", recebe uma identidade digital pronta para crescer.',

      'process.title.a': 'Nosso', 'process.title.b': 'processo',
      'process.text': 'Da primeira conversa ao site no ar, sem surpresas no caminho.',
      'process.item1.title': 'Diagnóstico',
      'process.item1.text': 'Entendemos sua marca, público e concorrência.',
      'process.item2.title': 'Design',
      'process.item2.text': 'Criamos a identidade visual e o layout exclusivo, com sua aprovação em cada etapa.',
      'process.item3.title': 'Desenvolvimento',
      'process.item3.text': 'Código limpo, responsivo e otimizado para velocidade.',
      'process.item4.title': 'Lançamento & SEO',
      'process.item4.text': 'Publicação, indexação no Google e configuração de métricas.',

      'portfolio.title.a': 'Nosso', 'portfolio.title.b': 'portfólio',
      'portfolio.text': 'Uma seleção de projetos pensados para os perfis que mais atendemos.',
      'portfolio.item1': 'Site para Nutricionista Infantil — Tia Lara',
      'portfolio.item1.link': 'Ver site ↗',
      'portfolio.item2': 'Site de Autoridade para Advogado',
      'portfolio.item3': 'Identidade Visual para Clínica Odontológica',
      'portfolio.item4': 'Site Institucional para Escritório de Arquitetura',
      'portfolio.item5': 'Identidade Visual para PME de Varejo',
      'portfolio.item6': 'Site de Marca Pessoal para Criador de Conteúdo',

      'ctaMid.title': 'Pronto pra ter uma identidade digital de verdade?',
      'ctaMid.text': 'Fale com a gente pelo WhatsApp e receba um diagnóstico <strong>gratuito</strong>.',
      'ctaMid.button': 'Solicite uma proposta',

      'faq.title.a': 'Perguntas', 'faq.title.b': 'frequentes',
      'faq.text': 'O que a gente mais escuta antes de fechar um projeto.',
      'faq.item1.q': 'O que é identidade digital?',
      'faq.item1.a': 'É o conjunto de tudo que representa sua marca online: site, identidade visual, presença no Google e redes. A Raovi cuida disso de forma integrada.',
      'faq.item2.q': 'Quanto custa um site profissional?',
      'faq.item2.a': 'Depende do escopo. Após o diagnóstico gratuito, enviamos uma proposta personalizada.',
      'faq.item3.q': 'Quanto tempo leva?',
      'faq.item3.a': 'Projetos típicos ficam prontos entre 2 e 6 semanas, conforme a complexidade.',
      'faq.item4.q': 'O site já vem otimizado para o Google?',
      'faq.item4.a': 'Sim. SEO técnico (velocidade, estrutura, meta tags, schema) faz parte de toda entrega.',
      'faq.item5.q': 'Vocês fazem manutenção depois do lançamento?',
      'faq.item5.a': 'Sim, oferecemos planos de acompanhamento e evolução contínua.',

      'contact.title.a': 'Fale', 'contact.title.b': 'conosco',
      'contact.text': 'Conta pra gente sobre sua marca e a gente te manda uma proposta.',
      'contact.form.name': 'Nome', 'contact.form.namePh': 'Seu nome completo',
      'contact.form.email': 'E-mail', 'contact.form.emailPh': 'voce@email.com',
      'contact.form.message': 'Mensagem', 'contact.form.messagePh': 'Conte um pouco sobre sua marca e seu projeto',
      'contact.form.submit': 'ENVIAR AGORA',
      'contact.form.success': 'Mensagem enviada! Vamos te responder em breve.',
      'contact.whatsapp.title': 'Fale no WhatsApp',
      'contact.email.title': 'Envie um e-mail',

      'footer.tagline': 'Identidade digital que posiciona.',
      'footer.sitemap': 'Mapa do site', 'footer.contact': 'Contato',
      'footer.copyright': '© 2026 Todos os direitos reservados à Raovi Labs.',
      'footer.terms': 'Termos de Uso', 'footer.privacy': 'Política de Privacidade',
      'footer.cookiePolicy': 'Política de Cookies',

      'cookies.text': 'Ao clicar em <strong>"Aceitar"</strong>, você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação, analisar o uso do site e apoiar nossas ações de marketing. Veja nossa <a href="#" id="cookiePrefsLink">Política de Privacidade</a>.',
      'cookies.preferences': 'Preferências', 'cookies.reject': 'Recusar', 'cookies.accept': 'Aceitar',
      'cookies.modalTitle': 'Preferências de cookies',
      'cookies.essential': 'Essenciais', 'cookies.analytics': 'Analytics', 'cookies.marketing': 'Marketing',
      'cookies.savePrefs': 'Salvar preferências',
    },

    en: {
      'meta.title': 'Raovi Labs | Professional Digital Identity, Websites & SEO',
      'meta.description': 'Raovi Labs builds professional digital identities: websites with unique design, strong visual identity and SEO optimization. Get your brand found on Google.',

      'nav.home': 'Home', 'nav.services': 'What we do', 'nav.process': 'Process',
      'nav.portfolio': 'Portfolio', 'nav.faq': 'FAQ', 'nav.contact': 'Contact',
      'nav.cta': 'Get a proposal',

      'hero.badge': '• PROFESSIONAL DIGITAL IDENTITY •',
      'hero.title.line1': 'Your brand deserves more than',
      'hero.title.line2': 'a generic website.',
      'hero.subtitle': '<strong>Raovi Labs</strong> builds complete digital identities — exclusive design, strong visual identity and strategic positioning on Google — for professionals and companies who want to be taken seriously online.',
      'hero.cta.primary': 'Get a proposal',
      'hero.cta.secondary': 'See our process',

      'pillars.title.a': 'What', 'pillars.title.b': 'we do',
      'pillars.text': 'Three pillars behind every digital identity we build.',
      'pillars.item1.title': 'Unique Design',
      'pillars.item1.text': 'No templates. Every project is built from scratch, designed for your brand, your audience and your goals. A website nobody else has.',
      'pillars.item2.title': 'Visual Identity',
      'pillars.item2.text': 'Colors, typography, logo and voice aligned across every touchpoint. Your brand recognizable from the first click to after-sales.',
      'pillars.item3.title': 'SEO & Performance',
      'pillars.item3.text': 'Fast websites, structured for Google from the very first line of code. Looking good isn\'t enough — you need to be found.',

      'why.title.a': 'Why', 'why.title.b': 'Raovi',
      'why.text': 'What sets us apart from a generic agency.',
      'why.item1.title': 'Attention to detail',
      'why.item1.text': 'Every pixel, every word and every meta tag is deliberate — nothing goes live by accident.',
      'why.item2.title': 'Strategy before aesthetics',
      'why.item2.text': 'We understand your business before designing a single screen.',
      'why.item3.title': 'Performance by default',
      'why.item3.text': 'Lightweight websites, fast loading and high Core Web Vitals scores.',
      'why.item4.title': 'Complete delivery',
      'why.item4.text': 'You don\'t get "a website" — you get a digital identity ready to grow.',

      'process.title.a': 'Our', 'process.title.b': 'process',
      'process.text': 'From the first conversation to launch, no surprises along the way.',
      'process.item1.title': 'Diagnosis',
      'process.item1.text': 'We understand your brand, audience and competition.',
      'process.item2.title': 'Design',
      'process.item2.text': 'We create the visual identity and exclusive layout, with your approval at every step.',
      'process.item3.title': 'Development',
      'process.item3.text': 'Clean code, responsive and optimized for speed.',
      'process.item4.title': 'Launch & SEO',
      'process.item4.text': 'Publishing, Google indexing and metrics setup.',

      'portfolio.title.a': 'Our', 'portfolio.title.b': 'portfolio',
      'portfolio.text': 'A selection of projects designed for the profiles we serve most.',
      'portfolio.item1': 'Children\'s Nutritionist Website — Tia Lara',
      'portfolio.item1.link': 'Visit site ↗',
      'portfolio.item2': 'Authority Website for a Lawyer',
      'portfolio.item3': 'Visual Identity for a Dental Clinic',
      'portfolio.item4': 'Business Website for an Architecture Firm',
      'portfolio.item5': 'Visual Identity for a Retail SMB',
      'portfolio.item6': 'Personal Brand Website for a Content Creator',

      'ctaMid.title': 'Ready for a real digital identity?',
      'ctaMid.text': 'Talk to us on WhatsApp and get a <strong>free</strong> diagnosis.',
      'ctaMid.button': 'Get a proposal',

      'faq.title.a': 'Frequently', 'faq.title.b': 'asked questions',
      'faq.text': 'What we hear most before closing a project.',
      'faq.item1.q': 'What is digital identity?',
      'faq.item1.a': 'It\'s everything that represents your brand online: website, visual identity, Google presence and social media. Raovi handles it all in an integrated way.',
      'faq.item2.q': 'How much does a professional website cost?',
      'faq.item2.a': 'It depends on scope. After a free diagnosis, we send a tailored proposal.',
      'faq.item3.q': 'How long does it take?',
      'faq.item3.a': 'Typical projects take 2 to 6 weeks, depending on complexity.',
      'faq.item4.q': 'Is the website already optimized for Google?',
      'faq.item4.a': 'Yes. Technical SEO (speed, structure, meta tags, schema) is part of every delivery.',
      'faq.item5.q': 'Do you offer maintenance after launch?',
      'faq.item5.a': 'Yes, we offer follow-up and continuous evolution plans.',

      'contact.title.a': 'Get in', 'contact.title.b': 'touch',
      'contact.text': 'Tell us about your brand and we\'ll send you a proposal.',
      'contact.form.name': 'Name', 'contact.form.namePh': 'Your full name',
      'contact.form.email': 'Email', 'contact.form.emailPh': 'you@email.com',
      'contact.form.message': 'Message', 'contact.form.messagePh': 'Tell us a bit about your brand and your project',
      'contact.form.submit': 'SEND NOW',
      'contact.form.success': 'Message sent! We\'ll get back to you shortly.',
      'contact.whatsapp.title': 'Chat on WhatsApp',
      'contact.email.title': 'Send an email',

      'footer.tagline': 'Digital identity that positions.',
      'footer.sitemap': 'Sitemap', 'footer.contact': 'Contact',
      'footer.copyright': '© 2026 All rights reserved to Raovi Labs.',
      'footer.terms': 'Terms of Use', 'footer.privacy': 'Privacy Policy',
      'footer.cookiePolicy': 'Cookie Policy',

      'cookies.text': 'By clicking <strong>"Accept"</strong>, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. See our <a href="#" id="cookiePrefsLink">Privacy Policy</a>.',
      'cookies.preferences': 'Preferences', 'cookies.reject': 'Reject', 'cookies.accept': 'Accept',
      'cookies.modalTitle': 'Cookie preferences',
      'cookies.essential': 'Essential', 'cookies.analytics': 'Analytics', 'cookies.marketing': 'Marketing',
      'cookies.savePrefs': 'Save preferences',
    },
  };

  /* ===================== I18N ENGINE ===================== */
  function setLang(lang) {
    const dict = i18n[lang] || i18n.pt;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });

    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      toggle.querySelectorAll('.lang-toggle__opt').forEach(opt => {
        const isActive = opt.getAttribute('data-lang') === lang;
        opt.classList.toggle('is-active', isActive);
        opt.setAttribute('aria-pressed', String(isActive));
      });
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = dict['meta.title'];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);

    localStorage.setItem('raovi-labs-lang', lang);
  }

  function initLang() {
    const saved = localStorage.getItem('raovi-labs-lang');
    if (saved) { setLang(saved); return; }
    const browserLang = (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
    setLang(browserLang);
  }

  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const opt = e.target.closest('.lang-toggle__opt');
      if (!opt) return;
      setLang(opt.getAttribute('data-lang'));
    });
  });

  initLang();

  /* ===================== PRELOADER ===================== */
  const preloader = document.getElementById('preloader');
  const PRELOADER_MIN_VISIBLE = 900;
  const preloaderStart = performance.now();
  document.body.classList.add('is-preloading');

  function hidePreloader() {
    if (!preloader || preloader.classList.contains('is-hidden')) return;
    const elapsed = performance.now() - preloaderStart;
    const wait = Math.max(0, PRELOADER_MIN_VISIBLE - elapsed);
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      document.body.classList.remove('is-preloading');
    }, wait);
  }

  if (document.readyState === 'complete') hidePreloader();
  else window.addEventListener('load', hidePreloader);
  setTimeout(hidePreloader, 2500);

  /* ===================== NAVBAR SCROLL ===================== */
  const navbar = document.getElementById('navbar');
  const navlinks = document.querySelectorAll('.navlink, .drawer__link');

  function onScroll() {
    navbar.classList.toggle('is-scrolled', window.scrollY > 20);

    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) current = section.id;
    });
    navlinks.forEach(link => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ===================== MOBILE MENU ===================== */
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');

  function closeDrawer() {
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));

  /* ===================== SMOOTH SCROLL (anchors) ===================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ===================== PORTFOLIO CAROUSEL ===================== */
  const track = document.getElementById('portfolioTrack');
  const prevBtn = document.getElementById('portfolioPrev');
  const nextBtn = document.getElementById('portfolioNext');

  function scrollCarousel(dir) {
    const card = track.querySelector('.p-card');
    if (!card) return;
    const amount = card.getBoundingClientRect().width + 24;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  prevBtn.addEventListener('click', () => scrollCarousel(-1));
  nextBtn.addEventListener('click', () => scrollCarousel(1));

  /* ===================== ACCORDION (FAQ) ===================== */
  document.querySelectorAll('.accordion__row').forEach(row => {
    const head = row.querySelector('.accordion__head');
    head.addEventListener('click', () => {
      const wasOpen = row.classList.contains('is-open');
      row.parentElement.querySelectorAll('.accordion__row').forEach(r => r.classList.remove('is-open'));
      if (!wasOpen) row.classList.add('is-open');
    });
  });

  /* ===================== ON-SCROLL REVEAL ===================== */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ===================== COOKIE BANNER ===================== */
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieModal = document.getElementById('cookieModal');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieReject = document.getElementById('cookieReject');
  const cookiePrefsBtn = document.getElementById('cookiePrefsBtn');
  const cookieSavePrefs = document.getElementById('cookieSavePrefs');

  const cookieChoice = localStorage.getItem('raovi-labs-cookies');
  if (!cookieChoice) {
    setTimeout(() => cookieBanner.classList.add('is-visible'), 1400);
  }

  function hideCookieBanner() {
    cookieBanner.classList.remove('is-visible');
  }

  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('raovi-labs-cookies', 'accepted');
    hideCookieBanner();
  });
  cookieReject.addEventListener('click', () => {
    localStorage.setItem('raovi-labs-cookies', 'rejected');
    hideCookieBanner();
  });
  cookiePrefsBtn.addEventListener('click', () => {
    cookieModal.classList.add('is-visible');
  });
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'cookiePrefsLink') {
      e.preventDefault();
      cookieModal.classList.add('is-visible');
    }
  });
  cookieModal.addEventListener('click', (e) => {
    if (e.target === cookieModal) cookieModal.classList.remove('is-visible');
  });
  cookieSavePrefs.addEventListener('click', () => {
    const prefs = {
      essential: true,
      analytics: document.getElementById('cookieAnalytics').checked,
      marketing: document.getElementById('cookieMarketing').checked,
    };
    localStorage.setItem('raovi-labs-cookies', 'custom');
    localStorage.setItem('raovi-labs-cookie-prefs', JSON.stringify(prefs));
    cookieModal.classList.remove('is-visible');
    hideCookieBanner();
  });

  /* ===================== CONTACT FORM ===================== */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    formSuccess.classList.add('is-visible');
    contactForm.reset();
  });
})();
