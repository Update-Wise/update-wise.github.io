export const languages = {
  es: "Español",
  en: "English",
  pt: "Português (Brasil)",
  zh: "简体中文",
} as const;

export const defaultLang = "es";

// Value for <html lang="..."> (BCP 47, may differ from the URL prefix)
export const htmlLang = {
  es: "es",
  en: "en",
  pt: "pt-BR",
  zh: "zh-CN",
} as const;

export const ui = {
  es: {
    "nav.about": "Sobre Nosotros",
    "nav.contact": "Contáctanos",
    "nav.download": "Descargar",
    "nav.pricing": "Precios",
    "theme.toLight": "Cambiar a tema claro",
    "theme.toDark": "Cambiar a tema oscuro",
    "theme.toggle": "Cambiar tema",
    "saver.toggle": "Modo ahorro de datos",
    "saver.enable": "Activar modo ahorro",
    "saver.disable": "Desactivar modo ahorro",
    "lang.label": "Idioma",

    "seo.title": "Update Wise — Analiza tu PC y mejora con confianza",
    "seo.description":
      "Conoce tu hardware, descubre qué puedes mejorar y encuentra opciones compatibles según tu uso y tu presupuesto.",
    "seo.ogAlt": "Vista previa de la aplicación Update Wise",

    "hero.eyebrow": "update wise",
    "hero.title1": "Tu mejor amigo para",
    "hero.title2": "mejorar tu PC.",
    "hero.subtitle":
      "Conoce tu hardware, descubre qué puedes mejorar y encuentra las opciones que mejor se adaptan a ti.",
    "hero.cta1": "Analiza mi PC",
    "hero.cta2": "Cómo funciona",
    "hero.badge": "Código abierto · Gratis",
    "hero.note": "Sin registro · Funciona en local",
    "hero.stat1": "3 plataformas",
    "hero.stat2": "4 idiomas",
    "hero.stat3": "100% gratis para empezar",

    "problem.eyebrow": "actualizar no es comprar",
    "problem.title": "¿Realmente sabes qué necesita tu PC?",
    "problem.text1":
      "No necesitas comprar el componente más caro ni seguir recomendaciones genéricas de internet.",
    "problem.text2": "Primero necesitas entender tu equipo.",

    "how.eyebrow": "Cómo funciona",
    "how.title1": "Detectamos. Analizamos.",
    "how.title2": "Mejoramos.",
    "how.step1.title": "Detectamos",
    "how.step1.desc":
      "Identificamos los componentes de tu PC para conocer exactamente con qué estás trabajando.",
    "how.step2.title": "Analizamos",
    "how.step2.desc":
      "Evaluamos tu configuración según tu hardware, tus necesidades y las posibilidades de mejora.",
    "how.step3.title": "Mejoramos",
    "how.step3.desc":
      "Encontramos opciones compatibles y te ayudamos a entender qué actualización tiene sentido para ti.",

    "features.eyebrow": "Capacidades clave",
    "features.title": "Todo lo que necesitas para actualizar con confianza",
    "features.detect.title": "Detección de hardware",
    "features.detect.desc":
      "Identificamos procesador, memoria, placa base, almacenamiento y gráficos para entender tu sistema real.",
    "features.recs.title": "Recomendaciones inteligentes",
    "features.recs.desc":
      "Te sugerimos actualizaciones compatibles según tu uso, presupuesto y el rendimiento que realmente necesitas.",
    "features.easy.title": "Actualizaciones fáciles",
    "features.easy.desc":
      "Priorizamos las mejoras más importantes y te guiamos paso a paso para que tomes decisiones claras.",

    "pricing.eyebrow": "Prueba gratuita",
    "pricing.title": "Elige cómo quieres empezar",
    "pricing.perMonth": "/ mes",
    "pricing.popular": "Más popular",

    "plan.free.name": "Gratis",
    "plan.free.desc": "Ideal para entender tu equipo",
    "plan.free.f1": "Detección de hardware",
    "plan.free.f2": "Informe básico de rendimiento",
    "plan.free.f3": "Recomendaciones iniciales",
    "plan.free.cta": "Empezar gratis",

    "plan.pro.name": "Pro",
    "plan.pro.desc": "Para quienes quieren optimizar con confianza",
    "plan.pro.f1": "Análisis detallado de rendimiento",
    "plan.pro.f2": "Recomendaciones priorizadas",
    "plan.pro.f3": "Guía de actualización paso a paso",
    "plan.pro.cta": "Elegir Pro",

    "plan.team.name": "Equipo",
    "plan.team.desc": "Para flujos de trabajo compartidos",
    "plan.team.f1": "Análisis para varios equipos",
    "plan.team.f2": "Comparativas de rendimiento",
    "plan.team.f3": "Soporte priorizado",
    "plan.team.cta": "Contactar ventas",

    "footer.tagline":
      "Una herramienta para entender tu PC, priorizar mejoras y tomar decisiones con confianza.",
    "footer.product": "Producto",
    "footer.product.how": "Cómo funciona",
    "footer.product.features": "Características",
    "footer.product.pricing": "Precios",
    "footer.product.download": "Descargar",
    "footer.company": "Empresa",
    "footer.company.about": "Sobre nosotros",
    "footer.company.contact": "Contáctanos",
    "footer.company.blog": "Blog",
    "footer.company.privacy": "Privacidad",
    "footer.support": "Soporte",
    "footer.support.help": "Centro de ayuda",
    "footer.support.faq": "FAQ",
    "footer.support.status": "Estado del servicio",
    "footer.support.contact": "Contactar soporte",
    "footer.rights": "© 2026 Update Wise. Todos los derechos reservados.",
    "footer.terms": "Términos",
    "footer.privacy": "Privacidad",
    "footer.cookies": "Cookies",

    "notfound.eyebrow": "Error 404",
    "notfound.title": "Parece que esta pieza no existe",
    "notfound.text":
      "La página que buscas no existe o fue movida. Volvamos a algo que sí funciona.",
    "notfound.back": "Volver al inicio",

    "doc.updated": "Actualizado",
    "doc.toc": "En esta página",

    "cookie.text":
      "Usamos cookies para que el sitio funcione y entender cómo se usa. Puedes aceptar o rechazar.",
    "cookie.accept": "Aceptar",
    "cookie.decline": "Rechazar",
    "cookie.policy": "Ver política de cookies",

    "download.eyebrow": "descarga",
    "download.title": "Descarga Update Wise para tu equipo",
    "download.subtitle":
      "Detectamos tu sistema y te mostramos la descarga recomendada. Los binarios finales aún no están publicados.",
    "download.recommended": "Recomendado para ti",
    "download.other": "Otras plataformas",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.macos": "macOS",
    "download.windowsDesc": "Windows 10 o posterior (64-bit) — .exe",
    "download.linuxDesc": "Distribuciones modernas (64-bit) — .AppImage",
    "download.macosDesc": "macOS 13 o posterior (Apple Silicon / Intel) — .dmg",
    "download.cta": "Descargar",
    "download.note":
      "Enlaces provisionales: los binarios se publicarán en GitHub Releases. Comprueba el hash antes de instalar.",
    "download.version": "v0.0.0 — próximamente",
    "download.detected": "Detectamos tu sistema:",
    "download.unknown":
      "No pudimos detectar tu sistema, elige tu plataforma abajo.",
    "download.soon": "Próximamente",

    "blog.eyebrow": "blog",
    "blog.title": "Blog de Update Wise",
    "blog.subtitle":
      "Guías, novedades y el camino del proyecto, contados por el equipo.",
    "blog.read": "Leer más",
    "blog.back": "Volver al blog",
    "blog.published": "Publicado",
    "blog.empty": "Aún no hay entradas. Vuelve pronto.",

    "notfound.suggestion": "Creemos que buscas la versión en:",
  },

  en: {
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.download": "Download",
    "nav.pricing": "Pricing",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "theme.toggle": "Toggle theme",
    "saver.toggle": "Data saver mode",
    "saver.enable": "Turn on saver mode",
    "saver.disable": "Turn off saver mode",
    "lang.label": "Language",

    "seo.title": "Update Wise — Analyze your PC and upgrade with confidence",
    "seo.description":
      "Get to know your hardware, discover what you can improve, and find compatible options for your use and budget.",
    "seo.ogAlt": "Update Wise app preview",

    "hero.eyebrow": "update wise",
    "hero.title1": "Your best friend for",
    "hero.title2": "upgrading your PC.",
    "hero.subtitle":
      "Get to know your hardware, discover what you can improve, and find the options that fit you best.",
    "hero.cta1": "Analyze my PC",
    "hero.cta2": "How it works",
    "hero.badge": "Open source · Free",
    "hero.note": "No sign-up · Works locally",
    "hero.stat1": "3 platforms",
    "hero.stat2": "4 languages",
    "hero.stat3": "100% free to start",

    "problem.eyebrow": "upgrading isn't buying",
    "problem.title": "Do you really know what your PC needs?",
    "problem.text1":
      "You don't need to buy the most expensive part or follow generic advice from the internet.",
    "problem.text2": "First, you need to understand your machine.",

    "how.eyebrow": "How it works",
    "how.title1": "We detect. We analyze.",
    "how.title2": "We improve.",
    "how.step1.title": "We detect",
    "how.step1.desc":
      "We identify your PC's components so you know exactly what you're working with.",
    "how.step2.title": "We analyze",
    "how.step2.desc":
      "We evaluate your setup based on your hardware, your needs, and the room for improvement.",
    "how.step3.title": "We improve",
    "how.step3.desc":
      "We find compatible options and help you understand which upgrade makes sense for you.",

    "features.eyebrow": "Key features",
    "features.title": "Everything you need to upgrade with confidence",
    "features.detect.title": "Hardware detection",
    "features.detect.desc":
      "We identify your processor, memory, motherboard, storage, and graphics to understand your real system.",
    "features.recs.title": "Smart recommendations",
    "features.recs.desc":
      "We suggest compatible upgrades based on how you use your PC, your budget, and the performance you actually need.",
    "features.easy.title": "Easy upgrades",
    "features.easy.desc":
      "We prioritize the most important improvements and guide you step by step so you can make clear decisions.",

    "pricing.eyebrow": "Free trial",
    "pricing.title": "Choose how you want to start",
    "pricing.perMonth": "/ month",
    "pricing.popular": "Most popular",

    "plan.free.name": "Free",
    "plan.free.desc": "Ideal for understanding your machine",
    "plan.free.f1": "Hardware detection",
    "plan.free.f2": "Basic performance report",
    "plan.free.f3": "Initial recommendations",
    "plan.free.cta": "Start for free",

    "plan.pro.name": "Pro",
    "plan.pro.desc": "For those who want to optimize with confidence",
    "plan.pro.f1": "Detailed performance analysis",
    "plan.pro.f2": "Prioritized recommendations",
    "plan.pro.f3": "Step-by-step upgrade guide",
    "plan.pro.cta": "Choose Pro",

    "plan.team.name": "Team",
    "plan.team.desc": "For shared workflows",
    "plan.team.f1": "Analysis for multiple machines",
    "plan.team.f2": "Performance comparisons",
    "plan.team.f3": "Priority support",
    "plan.team.cta": "Contact sales",

    "footer.tagline":
      "A tool to understand your PC, prioritize upgrades, and make decisions with confidence.",
    "footer.product": "Product",
    "footer.product.how": "How it works",
    "footer.product.features": "Features",
    "footer.product.pricing": "Pricing",
    "footer.product.download": "Download",
    "footer.company": "Company",
    "footer.company.about": "About us",
    "footer.company.contact": "Contact us",
    "footer.company.blog": "Blog",
    "footer.company.privacy": "Privacy",
    "footer.support": "Support",
    "footer.support.help": "Help center",
    "footer.support.faq": "FAQ",
    "footer.support.status": "Service status",
    "footer.support.contact": "Contact support",
    "footer.rights": "© 2026 Update Wise. All rights reserved.",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.cookies": "Cookies",

    "notfound.eyebrow": "Error 404",
    "notfound.title": "Looks like this part doesn't exist",
    "notfound.text":
      "The page you're looking for doesn't exist or was moved. Let's get back to something that works.",
    "notfound.back": "Back to home",

    "doc.updated": "Updated",
    "doc.toc": "On this page",

    "cookie.text":
      "We use cookies to keep the site working and understand usage. You can accept or decline.",
    "cookie.accept": "Accept",
    "cookie.decline": "Decline",
    "cookie.policy": "See cookie policy",

    "download.eyebrow": "download",
    "download.title": "Download Update Wise for your machine",
    "download.subtitle":
      "We detect your system and show the recommended download. Final binaries are not published yet.",
    "download.recommended": "Recommended for you",
    "download.other": "Other platforms",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.macos": "macOS",
    "download.windowsDesc": "Windows 10 or later (64-bit) — .exe",
    "download.linuxDesc": "Modern distros (64-bit) — .AppImage",
    "download.macosDesc": "macOS 13 or later (Apple Silicon / Intel) — .dmg",
    "download.cta": "Download",
    "download.note":
      "Placeholder links: binaries will be published on GitHub Releases. Verify the hash before installing.",
    "download.version": "v0.0.0 — coming soon",
    "download.detected": "We detected your system:",
    "download.unknown":
      "We couldn't detect your system, pick your platform below.",
    "download.soon": "Coming soon",

    "blog.eyebrow": "blog",
    "blog.title": "Update Wise blog",
    "blog.subtitle": "Guides, news and the road ahead, told by the team.",
    "blog.read": "Read more",
    "blog.back": "Back to the blog",
    "blog.published": "Published",
    "blog.empty": "No posts yet. Check back soon.",

    "notfound.suggestion": "We think you are looking for:",
  },

  pt: {
    "nav.about": "Sobre Nós",
    "nav.contact": "Fale Conosco",
    "nav.download": "Baixar",
    "nav.pricing": "Preços",
    "theme.toLight": "Mudar para o tema claro",
    "theme.toDark": "Mudar para o tema escuro",
    "theme.toggle": "Alternar tema",
    "saver.toggle": "Modo de economia de dados",
    "saver.enable": "Ativar modo econômico",
    "saver.disable": "Desativar modo econômico",
    "lang.label": "Idioma",

    "seo.title": "Update Wise — Analise seu PC e melhore com confiança",
    "seo.description":
      "Conheça seu hardware, descubra o que você pode melhorar e encontre opções compatíveis para seu uso e orçamento.",
    "seo.ogAlt": "Prévia do aplicativo Update Wise",

    "hero.eyebrow": "update wise",
    "hero.title1": "Seu melhor amigo para",
    "hero.title2": "melhorar seu PC.",
    "hero.subtitle":
      "Conheça seu hardware, descubra o que você pode melhorar e encontre as opções que mais combinam com você.",
    "hero.cta1": "Analisar meu PC",
    "hero.cta2": "Como funciona",
    "hero.badge": "Código aberto · Grátis",
    "hero.note": "Sem cadastro · Funciona localmente",
    "hero.stat1": "3 plataformas",
    "hero.stat2": "4 idiomas",
    "hero.stat3": "100% grátis para começar",

    "problem.eyebrow": "atualizar não é comprar",
    "problem.title": "Você realmente sabe do que o seu PC precisa?",
    "problem.text1":
      "Você não precisa comprar a peça mais cara nem seguir recomendações genéricas da internet.",
    "problem.text2": "Primeiro, você precisa entender o seu computador.",

    "how.eyebrow": "Como funciona",
    "how.title1": "Detectamos. Analisamos.",
    "how.title2": "Melhoramos.",
    "how.step1.title": "Detectamos",
    "how.step1.desc":
      "Identificamos os componentes do seu PC para saber exatamente com o que você está trabalhando.",
    "how.step2.title": "Analisamos",
    "how.step2.desc":
      "Avaliamos sua configuração de acordo com seu hardware, suas necessidades e as possibilidades de melhoria.",
    "how.step3.title": "Melhoramos",
    "how.step3.desc":
      "Encontramos opções compatíveis e ajudamos você a entender qual atualização faz sentido para você.",

    "features.eyebrow": "Principais recursos",
    "features.title": "Tudo o que você precisa para atualizar com confiança",
    "features.detect.title": "Detecção de hardware",
    "features.detect.desc":
      "Identificamos processador, memória, placa-mãe, armazenamento e placa de vídeo para entender seu sistema real.",
    "features.recs.title": "Recomendações inteligentes",
    "features.recs.desc":
      "Sugerimos atualizações compatíveis de acordo com seu uso, seu orçamento e o desempenho de que você realmente precisa.",
    "features.easy.title": "Atualizações fáceis",
    "features.easy.desc":
      "Priorizamos as melhorias mais importantes e guiamos você passo a passo para que tome decisões claras.",

    "pricing.eyebrow": "Teste gratuito",
    "pricing.title": "Escolha como quer começar",
    "pricing.perMonth": "/ mês",
    "pricing.popular": "Mais popular",

    "plan.free.name": "Grátis",
    "plan.free.desc": "Ideal para entender o seu computador",
    "plan.free.f1": "Detecção de hardware",
    "plan.free.f2": "Relatório básico de desempenho",
    "plan.free.f3": "Recomendações iniciais",
    "plan.free.cta": "Começar grátis",

    "plan.pro.name": "Pro",
    "plan.pro.desc": "Para quem quer otimizar com confiança",
    "plan.pro.f1": "Análise detalhada de desempenho",
    "plan.pro.f2": "Recomendações priorizadas",
    "plan.pro.f3": "Guia de atualização passo a passo",
    "plan.pro.cta": "Escolher Pro",

    "plan.team.name": "Equipe",
    "plan.team.desc": "Para fluxos de trabalho compartilhados",
    "plan.team.f1": "Análise para vários computadores",
    "plan.team.f2": "Comparativos de desempenho",
    "plan.team.f3": "Suporte prioritário",
    "plan.team.cta": "Falar com vendas",

    "footer.tagline":
      "Uma ferramenta para entender seu PC, priorizar melhorias e tomar decisões com confiança.",
    "footer.product": "Produto",
    "footer.product.how": "Como funciona",
    "footer.product.features": "Recursos",
    "footer.product.pricing": "Preços",
    "footer.product.download": "Baixar",
    "footer.company": "Empresa",
    "footer.company.about": "Sobre nós",
    "footer.company.contact": "Fale conosco",
    "footer.company.blog": "Blog",
    "footer.company.privacy": "Privacidade",
    "footer.support": "Suporte",
    "footer.support.help": "Central de ajuda",
    "footer.support.faq": "FAQ",
    "footer.support.status": "Status do serviço",
    "footer.support.contact": "Falar com o suporte",
    "footer.rights": "© 2026 Update Wise. Todos os direitos reservados.",
    "footer.terms": "Termos",
    "footer.privacy": "Privacidade",
    "footer.cookies": "Cookies",

    "notfound.eyebrow": "Erro 404",
    "notfound.title": "Parece que esta peça não existe",
    "notfound.text":
      "A página que você procura não existe ou foi movida. Vamos voltar a algo que funcione.",
    "notfound.back": "Voltar ao início",

    "doc.updated": "Atualizado",
    "doc.toc": "Nesta página",

    "cookie.text":
      "Usamos cookies para manter o site funcionando e entender o uso. Você pode aceitar ou recusar.",
    "cookie.accept": "Aceitar",
    "cookie.decline": "Recusar",
    "cookie.policy": "Ver política de cookies",

    "download.eyebrow": "download",
    "download.title": "Baixe o Update Wise para o seu computador",
    "download.subtitle":
      "Detectamos seu sistema e mostramos o download recomendado. Os binários finais ainda não foram publicados.",
    "download.recommended": "Recomendado para você",
    "download.other": "Outras plataformas",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.macos": "macOS",
    "download.windowsDesc": "Windows 10 ou posterior (64-bit) — .exe",
    "download.linuxDesc": "Distribuições modernas (64-bit) — .AppImage",
    "download.macosDesc":
      "macOS 13 ou posterior (Apple Silicon / Intel) — .dmg",
    "download.cta": "Baixar",
    "download.note":
      "Links provisórios: os binários serão publicados no GitHub Releases. Verifique o hash antes de instalar.",
    "download.version": "v0.0.0 — em breve",
    "download.detected": "Detectamos seu sistema:",
    "download.unknown":
      "Não conseguimos detectar seu sistema, escolha sua plataforma abaixo.",
    "download.soon": "Em breve",

    "blog.eyebrow": "blog",
    "blog.title": "Blog do Update Wise",
    "blog.subtitle":
      "Guias, novidades e os próximos passos do projeto, contados pela equipe.",
    "blog.read": "Ler mais",
    "blog.back": "Voltar ao blog",
    "blog.published": "Publicado",
    "blog.empty": "Ainda não há posts. Volte em breve.",

    "notfound.suggestion": "Achamos que você procura:",
  },

  zh: {
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.download": "下载",
    "nav.pricing": "价格",
    "theme.toLight": "切换到浅色主题",
    "theme.toDark": "切换到深色主题",
    "theme.toggle": "切换主题",
    "saver.toggle": "省流模式",
    "saver.enable": "开启省流模式",
    "saver.disable": "关闭省流模式",
    "lang.label": "语言",

    "seo.title": "Update Wise — 分析你的电脑，自信升级",
    "seo.description":
      "了解你的硬件，发现可以改进的地方，根据你的用途和预算找到兼容的升级方案。",
    "seo.ogAlt": "Update Wise 应用程序预览",

    "hero.eyebrow": "update wise",
    "hero.title1": "升级电脑的",
    "hero.title2": "最佳伙伴。",
    "hero.subtitle":
      "了解你的硬件，发现可以改进的地方，找到最适合你的升级方案。",
    "hero.cta1": "分析我的电脑",
    "hero.cta2": "工作原理",
    "hero.badge": "开源 · 免费",
    "hero.note": "无需注册 · 本地运行",
    "hero.stat1": "3 个平台",
    "hero.stat2": "4 种语言",
    "hero.stat3": "免费开始",

    "problem.eyebrow": "升级不等于购买",
    "problem.title": "你真的知道你的电脑需要什么吗？",
    "problem.text1": "你不必购买最贵的配件，也不必听从网上千篇一律的建议。",
    "problem.text2": "首先，你需要了解自己的电脑。",

    "how.eyebrow": "工作原理",
    "how.title1": "检测。分析。",
    "how.title2": "优化。",
    "how.step1.title": "检测",
    "how.step1.desc": "识别你电脑的各个组件，让你清楚了解自己的配置。",
    "how.step2.title": "分析",
    "how.step2.desc": "根据你的硬件、使用需求和升级空间，对你的配置进行评估。",
    "how.step3.title": "优化",
    "how.step3.desc": "为你找到兼容的升级选项，帮助你判断哪种升级最适合你。",

    "features.eyebrow": "核心功能",
    "features.title": "放心升级所需的一切",
    "features.detect.title": "硬件检测",
    "features.detect.desc":
      "识别处理器、内存、主板、存储和显卡，了解你的真实系统状况。",
    "features.recs.title": "智能推荐",
    "features.recs.desc":
      "根据你的使用方式、预算和实际所需性能，推荐兼容的升级方案。",
    "features.easy.title": "轻松升级",
    "features.easy.desc":
      "优先推荐最重要的改进，并一步步指导你，让你做出清晰的决定。",

    "pricing.eyebrow": "免费试用",
    "pricing.title": "选择你的开始方式",
    "pricing.perMonth": "/ 月",
    "pricing.popular": "最受欢迎",

    "plan.free.name": "免费版",
    "plan.free.desc": "适合了解你的电脑",
    "plan.free.f1": "硬件检测",
    "plan.free.f2": "基础性能报告",
    "plan.free.f3": "初步推荐",
    "plan.free.cta": "免费开始",

    "plan.pro.name": "专业版",
    "plan.pro.desc": "适合想要放心优化的用户",
    "plan.pro.f1": "详细性能分析",
    "plan.pro.f2": "优先级推荐",
    "plan.pro.f3": "分步升级指南",
    "plan.pro.cta": "选择专业版",

    "plan.team.name": "团队版",
    "plan.team.desc": "适合共享工作流程",
    "plan.team.f1": "多台设备分析",
    "plan.team.f2": "性能对比",
    "plan.team.f3": "优先支持",
    "plan.team.cta": "联系销售",

    "footer.tagline": "一款帮助你了解电脑、确定升级优先级并放心做决定的工具。",
    "footer.product": "产品",
    "footer.product.how": "工作原理",
    "footer.product.features": "功能特点",
    "footer.product.pricing": "价格",
    "footer.product.download": "下载",
    "footer.company": "公司",
    "footer.company.about": "关于我们",
    "footer.company.contact": "联系我们",
    "footer.company.blog": "博客",
    "footer.company.privacy": "隐私",
    "footer.support": "支持",
    "footer.support.help": "帮助中心",
    "footer.support.faq": "常见问题",
    "footer.support.status": "服务状态",
    "footer.support.contact": "联系支持",
    "footer.rights": "© 2026 Update Wise。保留所有权利。",
    "footer.terms": "条款",
    "footer.privacy": "隐私",
    "footer.cookies": "Cookie",

    "notfound.eyebrow": "404 错误",
    "notfound.title": "这个配件好像不存在",
    "notfound.text":
      "你要找的页面不存在或已被移动。让我们回到可以正常工作的页面吧。",
    "notfound.back": "返回首页",

    "doc.updated": "更新于",
    "doc.toc": "本页目录",

    "cookie.text":
      "我们使用 Cookie 来保证网站正常运行并了解使用情况。你可以选择接受或拒绝。",
    "cookie.accept": "接受",
    "cookie.decline": "拒绝",
    "cookie.policy": "查看 Cookie 政策",

    "download.eyebrow": "下载",
    "download.title": "为你的电脑下载 Update Wise",
    "download.subtitle":
      "我们会检测你的系统并显示推荐的下载。最终安装包尚未发布。",
    "download.recommended": "为你推荐",
    "download.other": "其他平台",
    "download.windows": "Windows",
    "download.linux": "Linux",
    "download.macos": "macOS",
    "download.windowsDesc": "Windows 10 或更高版本（64 位）— .exe",
    "download.linuxDesc": "主流发行版（64 位）— .AppImage",
    "download.macosDesc": "macOS 13 或更高版本（Apple Silicon / Intel）— .dmg",
    "download.cta": "下载",
    "download.note":
      "占位链接：安装包将在 GitHub Releases 发布。安装前请校验哈希。",
    "download.version": "v0.0.0 — 即将推出",
    "download.detected": "检测到你的系统：",
    "download.unknown": "未能检测到你的系统，请在下方选择你的平台。",
    "download.soon": "即将推出",

    "blog.eyebrow": "博客",
    "blog.title": "Update Wise 博客",
    "blog.subtitle": "指南、动态与项目进展，由团队为你带来。",
    "blog.read": "阅读更多",
    "blog.back": "返回博客",
    "blog.published": "发布于",
    "blog.empty": "还没有文章，敬请期待。",

    "notfound.suggestion": "你可能想找：",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["es"];
