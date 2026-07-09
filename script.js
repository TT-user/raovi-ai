(() => {
  'use strict';

  /* ===================== I18N DICTIONARY ===================== */
  const i18n = {
    pt: {
      'meta.title': 'RaoviAI — Criação de Sites Profissionais e Automações com IA',
      'meta.description': 'A RaoviAI cria sites, landing pages e automações com inteligência artificial que geram resultado de verdade: mais leads e mais vendas.',

      'nav.home': 'Home', 'nav.about': 'Quem somos', 'nav.services': 'Serviços',
      'nav.portfolio': 'Portfólio', 'nav.contact': 'Contato', 'nav.cta': 'Quero um orçamento',

      'hero.badge': '• SOLUÇÕES DIGITAIS COM INTELIGÊNCIA ARTIFICIAL •',
      'hero.title.line1': 'Criação de sites profissionais',
      'hero.title.line2': 'e automações com IA',
      'hero.subtitle': 'Na <strong>RaoviAI</strong> não criamos apenas sites bonitos… criamos <strong>máquinas de gerar oportunidades</strong> no mundo digital.',
      'hero.cta': 'Entre em contato',
      'hero.scroll': 'EXPLORE NOSSO PORTFÓLIO • EXPLORE NOSSO PORTFÓLIO •',

      'trust.label': 'Empresas que confiam na RaoviAI',

      'portfolio.bgword': 'Portfólio',
      'portfolio.title.a': 'Nosso', 'portfolio.title.b': 'portfólio',
      'portfolio.text': 'Selecionamos alguns projetos da equipe RaoviAI para você dar uma espiada.',
      'portfolio.item1': 'Landing Page para Advogado',
      'portfolio.item2': 'Site para Imobiliária',
      'portfolio.item3': 'Site para Clínica',
      'portfolio.item4': 'E-commerce de Cosméticos',
      'portfolio.item5': 'Automação com IA para Atendimento',
      'portfolio.item6': 'Landing Page para Lançamentos',

      'categories.text': 'LANDING PAGES ✦ SITES INSTITUCIONAIS ✦ AUTOMAÇÕES COM IA ✦ BLOGS ✦ PLATAFORMAS ✦ HOSPEDAGEM ✦ UI/UX ✦',

      'solutions.title.a': 'Tipos', 'solutions.title.b': 'de soluções',
      'solutions.text': 'Com a RaoviAI sua presença digital será marcada por grandes resultados. Não fazemos sites "só bonitos" — fazemos sites para gerar + vendas!',
      'solutions.item1.title': 'Sites Institucionais',
      'solutions.item1.text': 'Apresente sua empresa ao mundo e comunique seus valores e serviços.',
      'solutions.item2.title': 'Páginas de Captura',
      'solutions.item2.text': 'Transforme visitantes em leads com páginas de alta performance.',
      'solutions.item3.title': 'Landing Pages',
      'solutions.item3.text': 'Otimize suas campanhas com páginas focadas em resultados.',
      'solutions.item4.title': 'Automações com IA',
      'solutions.item4.text': 'Atendimento, mensagens e rotinas funcionando no automático.',
      'solutions.item5.title': 'Blogs',
      'solutions.item5.text': 'Construa autoridade e fidelize clientes com conteúdo de valor.',
      'solutions.item6.title': 'Sites Dinâmicos',
      'solutions.item6.text': 'Gerencie seu conteúdo de forma fácil e independente.',

      'ctaMid.title': 'Precisando de um site que traga resultados no digital?',
      'ctaMid.text': 'Fale diretamente conosco pelo WhatsApp e faça seu orçamento em apenas <strong>10 minutos</strong>!',
      'ctaMid.button': 'Quero um orçamento',

      'different.title.a': 'O que fazemos', 'different.title.b': 'de diferente?',
      'different.text': 'Vamos direto ao ponto: nosso trabalho é fazer seu site trazer resultados. Não é sobre tecnologia complicada — é sobre soluções de verdade.',
      'different.item1.title': 'Aparecer no Google naturalmente',
      'different.item1.text': 'SEO técnico: estrutura limpa, velocidade e conteúdo organizado → tráfego orgânico.',
      'different.item2.title': 'Capturar mais clientes',
      'different.item2.text': 'Formulários estratégicos, botões de WhatsApp e ofertas no lugar certo → conversão.',
      'different.item3.title': 'Economizar seu tempo com IA',
      'different.item3.text': 'Agentes de IA, automações de atendimento, planilhas e mensagens automáticas.',
      'different.item4.title': 'Design que guia o cliente (UI/UX)',
      'different.item4.text': 'Cada cor, botão e texto posicionado para levar o visitante à ação.',
      'different.item5.title': 'Carregar rápido de verdade',
      'different.item5.text': 'Sites em menos de 2 segundos; performance que retém e melhora ranking.',

      'stats.item1': 'Projetos entregues',
      'stats.item2': 'Clientes atendidos',
      'stats.item3': 'Tempo de carregamento',
      'stats.item4': 'Foco em resultado',

      'services.title.a': 'Nossos', 'services.title.b': 'serviços',
      'services.text': 'Na RaoviAI oferecemos pacotes de soluções que vão muito além da criação de sites.',
      'services.item1.title1': 'Implantação de', 'services.item1.title2': 'SEO',
      'services.item1.text': 'SEO local: apareça nas buscas orgânicas.',
      'services.item2.title1': 'Automações com', 'services.item2.title2': 'IA',
      'services.item2.text': 'Agentes e fluxos inteligentes para seu negócio.',
      'services.item3.title1': 'Hospedagem &', 'services.item3.title2': 'Manutenção',
      'services.item3.text': 'Hospedagem segura e manutenções pontuais ou mensais.',
      'services.item4.title1': 'Copywriting', 'services.item4.title2': 'Conversivo',
      'services.item4.text': 'Escrita persuasiva para aumentar a conversão.',
      'services.ctaText': 'Clique no botão para falar conosco sobre nossos serviços.',
      'services.ctaButton': 'Preciso de um serviço',

      'team.title.a': 'Conheça o', 'team.title.b': 'time RaoviAI',
      'team.text': 'A RaoviAI nasceu com um objetivo: superar as expectativas do mercado, entregando soluções digitais que não apenas funcionam, mas encantam e convertem.',
      'team.role1': 'Fundador & Estrategista Digital',
      'team.bio1': 'Une design, tecnologia e IA para transformar presença digital em resultado real.',

      'testimonials.bgword': 'Depoimentos',
      'testimonials.title.a': 'Nossos', 'testimonials.title.b': 'clientes',
      'testimonials.text': 'O feedback de nossos clientes é o nosso maior tesouro.',
      'testimonials.item1.quote': '"O site novo triplicou os pedidos de orçamento em dois meses. A equipe da RaoviAI entendeu exatamente o que eu precisava."',
      'testimonials.item1.role': 'Advogada',
      'testimonials.item2.quote': '"A automação de atendimento tirou um peso enorme das minhas costas. Hoje respondo clientes até enquanto durmo."',
      'testimonials.item2.role': 'Corretor de Imóveis',
      'testimonials.item3.quote': '"Processo rápido, direto e sem enrolação. Em duas semanas eu já tinha um site que realmente vendia."',
      'testimonials.item3.role': 'Esteticista',

      'contact.bgword': 'Contato',
      'contact.title.a': 'Fale', 'contact.title.b': 'conosco',
      'contact.text': 'Aqui você é quem escolhe como quer ser atendido: e-mail, WhatsApp ou vídeo chamada!',
      'contact.form.name': 'Nome', 'contact.form.namePh': 'Seu nome completo',
      'contact.form.whatsapp': 'WhatsApp', 'contact.form.whatsappPh': '(00) 00000-0000',
      'contact.form.email': 'E-mail', 'contact.form.emailPh': 'voce@email.com',
      'contact.form.message': 'Mensagem', 'contact.form.messagePh': 'Conte um pouco sobre seu projeto',
      'contact.form.submit': 'ENVIAR AGORA',
      'contact.form.success': 'Mensagem enviada! Vamos te responder em breve.',
      'contact.whatsapp.title': 'Nos chame no Whats!',
      'contact.call.title': 'Agende sua call!',
      'contact.socialProof': 'Junte-se aos +300 clientes atendidos pela equipe RaoviAI!',

      'finalBanner.title.a': 'Inteligência real,', 'finalBanner.title.b': 'resultados reais',
      'finalBanner.text': 'Plante sua presença digital com a RaoviAI!',
      'finalBanner.cta': 'CLIQUE E COMECE AGORA!',

      'footer.sitemap': 'Mapa do site', 'footer.contact': 'Contato',
      'footer.copyright': '© 2026 Todos os direitos reservados à RaoviAI — Soluções Digitais.',
      'footer.terms': 'Termos de Uso', 'footer.privacy': 'Política de Privacidade',
      'footer.cookiePolicy': 'Política de Cookies',
      'footer.madeWith': 'Desenvolvido com ♥ por nós mesmos.',

      'cookies.text': 'Ao clicar em <strong>"Aceitar"</strong>, você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação, analisar o uso do site e apoiar nossas ações de marketing. Veja nossa <a href="#" id="cookiePrefsLink">Política de Privacidade</a>.',
      'cookies.preferences': 'Preferências', 'cookies.reject': 'Recusar', 'cookies.accept': 'Aceitar',
      'cookies.modalTitle': 'Preferências de cookies',
      'cookies.essential': 'Essenciais', 'cookies.analytics': 'Analytics', 'cookies.marketing': 'Marketing',
      'cookies.savePrefs': 'Salvar preferências',
    },

    en: {
      'meta.title': 'RaoviAI — Professional Website Creation and AI Automation',
      'meta.description': 'RaoviAI builds websites, landing pages and AI automation that deliver real results: more leads and more sales.',

      'nav.home': 'Home', 'nav.about': 'About us', 'nav.services': 'Services',
      'nav.portfolio': 'Portfolio', 'nav.contact': 'Contact', 'nav.cta': 'Get a quote',

      'hero.badge': '• DIGITAL SOLUTIONS POWERED BY AI •',
      'hero.title.line1': 'Professional website creation',
      'hero.title.line2': 'and AI-powered automation',
      'hero.subtitle': 'At <strong>RaoviAI</strong> we don’t just build beautiful websites… we build <strong>opportunity-generating machines</strong> for the digital world.',
      'hero.cta': 'Get in touch',
      'hero.scroll': 'EXPLORE OUR WORK • EXPLORE OUR WORK •',

      'trust.label': 'Companies that trust RaoviAI',

      'portfolio.bgword': 'Work',
      'portfolio.title.a': 'Our', 'portfolio.title.b': 'work',
      'portfolio.text': 'A hand-picked selection of RaoviAI projects for you to explore.',
      'portfolio.item1': 'Landing Page for a Law Firm',
      'portfolio.item2': 'Real Estate Website',
      'portfolio.item3': 'Clinic Website',
      'portfolio.item4': 'Cosmetics E-commerce',
      'portfolio.item5': 'AI Customer Service Automation',
      'portfolio.item6': 'Product Launch Landing Page',

      'categories.text': 'LANDING PAGES ✦ BUSINESS WEBSITES ✦ AI AUTOMATION ✦ BLOGS ✦ PLATFORMS ✦ HOSTING ✦ UI/UX ✦',

      'solutions.title.a': 'Types', 'solutions.title.b': 'of solutions',
      'solutions.text': 'With RaoviAI your digital presence will be marked by great results. We don’t build "just pretty" websites — we build websites to generate + sales!',
      'solutions.item1.title': 'Business Websites',
      'solutions.item1.text': 'Introduce your company to the world and communicate your values and services.',
      'solutions.item2.title': 'Lead Capture Pages',
      'solutions.item2.text': 'Turn visitors into leads with high-performance pages.',
      'solutions.item3.title': 'Landing Pages',
      'solutions.item3.text': 'Optimize your campaigns with results-focused pages.',
      'solutions.item4.title': 'AI Automation',
      'solutions.item4.text': 'Customer service, messages and routines running on autopilot.',
      'solutions.item5.title': 'Blogs',
      'solutions.item5.text': 'Build authority and retain clients with valuable content.',
      'solutions.item6.title': 'Dynamic Websites',
      'solutions.item6.text': 'Manage your content easily and independently.',

      'ctaMid.title': 'Need a website that actually delivers results?',
      'ctaMid.text': 'Talk to us on WhatsApp and get your quote in just <strong>10 minutes</strong>!',
      'ctaMid.button': 'Get a quote',

      'different.title.a': 'What do we do', 'different.title.b': 'differently?',
      'different.text': 'Let’s get straight to the point: our job is to make your website deliver results. It’s not about complicated technology — it’s about real solutions.',
      'different.item1.title': 'Rank on Google organically',
      'different.item1.text': 'Technical SEO: clean structure, speed and organized content → organic traffic.',
      'different.item2.title': 'Capture more clients',
      'different.item2.text': 'Strategic forms, WhatsApp buttons and offers in the right place → conversion.',
      'different.item3.title': 'Save time with AI',
      'different.item3.text': 'AI agents, customer service automation, spreadsheets and automatic messages.',
      'different.item4.title': 'Design that guides the client (UI/UX)',
      'different.item4.text': 'Every color, button and text placed to drive the visitor to action.',
      'different.item5.title': 'Truly fast loading',
      'different.item5.text': 'Websites in under 2 seconds; performance that retains and improves ranking.',

      'stats.item1': 'Projects delivered',
      'stats.item2': 'Clients served',
      'stats.item3': 'Load time',
      'stats.item4': 'Focus on results',

      'services.title.a': 'Our', 'services.title.b': 'services',
      'services.text': 'At RaoviAI we offer solution packages that go far beyond building websites.',
      'services.item1.title1': 'SEO', 'services.item1.title2': 'Implementation',
      'services.item1.text': 'Local SEO: show up in organic search.',
      'services.item2.title1': 'AI', 'services.item2.title2': 'Automation',
      'services.item2.text': 'Smart agents and workflows for your business.',
      'services.item3.title1': 'Hosting &', 'services.item3.title2': 'Maintenance',
      'services.item3.text': 'Secure hosting and one-off or monthly maintenance.',
      'services.item4.title1': 'Conversion', 'services.item4.title2': 'Copywriting',
      'services.item4.text': 'Persuasive writing to increase conversion.',
      'services.ctaText': 'Click the button to talk to us about our services.',
      'services.ctaButton': 'I need a service',

      'team.title.a': 'Meet the', 'team.title.b': 'RaoviAI team',
      'team.text': 'RaoviAI was born with one goal: to exceed market expectations by delivering digital solutions that don’t just work, but delight and convert.',
      'team.role1': 'Founder & Digital Strategist',
      'team.bio1': 'Combines design, technology and AI to turn digital presence into real results.',

      'testimonials.bgword': 'Testimonials',
      'testimonials.title.a': 'Our', 'testimonials.title.b': 'clients',
      'testimonials.text': 'Our clients’ feedback is our greatest treasure.',
      'testimonials.item1.quote': '"The new website tripled quote requests in two months. The RaoviAI team understood exactly what I needed."',
      'testimonials.item1.role': 'Lawyer',
      'testimonials.item2.quote': '"The service automation took a huge weight off my shoulders. Now I respond to clients even while I sleep."',
      'testimonials.item2.role': 'Real Estate Agent',
      'testimonials.item3.quote': '"Fast, straightforward process, no fuss. In two weeks I already had a website that actually sold."',
      'testimonials.item3.role': 'Esthetician',

      'contact.bgword': 'Contact',
      'contact.title.a': 'Get in', 'contact.title.b': 'touch',
      'contact.text': 'Here you choose how you want to be helped: email, WhatsApp or video call!',
      'contact.form.name': 'Name', 'contact.form.namePh': 'Your full name',
      'contact.form.whatsapp': 'WhatsApp', 'contact.form.whatsappPh': '(00) 00000-0000',
      'contact.form.email': 'Email', 'contact.form.emailPh': 'you@email.com',
      'contact.form.message': 'Message', 'contact.form.messagePh': 'Tell us a bit about your project',
      'contact.form.submit': 'SEND NOW',
      'contact.form.success': 'Message sent! We’ll get back to you shortly.',
      'contact.whatsapp.title': 'Chat with us on WhatsApp!',
      'contact.call.title': 'Book your call!',
      'contact.socialProof': 'Join the +300 clients served by the RaoviAI team!',

      'finalBanner.title.a': 'Real intelligence,', 'finalBanner.title.b': 'real results',
      'finalBanner.text': 'Grow your digital presence with RaoviAI!',
      'finalBanner.cta': 'CLICK AND START NOW!',

      'footer.sitemap': 'Sitemap', 'footer.contact': 'Contact',
      'footer.copyright': '© 2026 All rights reserved to RaoviAI — Digital Solutions.',
      'footer.terms': 'Terms of Use', 'footer.privacy': 'Privacy Policy',
      'footer.cookiePolicy': 'Cookie Policy',
      'footer.madeWith': 'Built with ♥ by ourselves.',

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
        opt.classList.toggle('is-active', opt.getAttribute('data-lang') === lang);
      });
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = dict['meta.title'];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);

    localStorage.setItem('raoviai-lang', lang);
  }

  function initLang() {
    const saved = localStorage.getItem('raoviai-lang');
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

  /* ===================== NAVBAR SCROLL ===================== */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section[id], main section[id] , section[id]');
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

  /* ===================== ACCORDION ===================== */
  document.querySelectorAll('.accordion__row').forEach(row => {
    const head = row.querySelector('.accordion__head');
    head.addEventListener('click', () => {
      const wasOpen = row.classList.contains('is-open');
      row.parentElement.querySelectorAll('.accordion__row').forEach(r => r.classList.remove('is-open'));
      if (!wasOpen) row.classList.add('is-open');
    });
  });

  /* ===================== ANIMATED STAT COUNTERS ===================== */
  const statEls = document.querySelectorAll('.stat__number');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${prefix}${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = `${prefix}${target}${suffix}`;
      }
      requestAnimationFrame(tick);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statObserver.observe(el));

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

  const cookieChoice = localStorage.getItem('raoviai-cookies');
  if (!cookieChoice) {
    setTimeout(() => cookieBanner.classList.add('is-visible'), 1000);
  }

  function hideCookieBanner() {
    cookieBanner.classList.remove('is-visible');
  }

  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('raoviai-cookies', 'accepted');
    hideCookieBanner();
  });
  cookieReject.addEventListener('click', () => {
    localStorage.setItem('raoviai-cookies', 'rejected');
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
    localStorage.setItem('raoviai-cookies', 'custom');
    localStorage.setItem('raoviai-cookie-prefs', JSON.stringify(prefs));
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
