export interface ProjectQuest {
  id: string;
  title: string;
  type: 'main' | 'side';
  organization: string;
  period: string;
  role: string;
  summary: string;
  description: string[];
  metrics: string[];
  stack: string[];
  repoUrl?: string;
  paperUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: string; description: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    romanizedTitle: string;
    tagline: string;
    prologue: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  character: {
    role: string;
    focus: string;
    metrics: { label: string; value: string }[];
    stats: { name: string; value: number; max: number }[];
    passives: { name: string; effect: string }[];
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    status: string;
    notes?: string;
  }[];
  mainQuests: ProjectQuest[];
  sideQuests: ProjectQuest[];
  arsenal: SkillCategory[];
  navigation: {
    projects: string;
    profile: string;
    skills: string;
    contact: string;
    config: string;
    startPrompt: string;
    downloadCv: string;
    copyEmail: string;
    copied: string;
  };
}

export const portfolioContent: Record<'pt' | 'en', PortfolioData> = {
  pt: {
    personal: {
      name: "Bruno Henrique Freitas de Melo",
      romanizedTitle: "BRUNO H. F. MELO",
      tagline: "Engenheiro de Software P&D | Backend, Fullstack & IA Aplicada",
      prologue: "Das coletas concorrentes de dados das queimadas amazônicas até arquiteturas backend corporativas com Spring Boot e Django. Onde regras de negócio complexas viram sistemas resilientes, testáveis e escaláveis.",
      location: "Rio Branco, AC - Brasil (Disponível 100% Remoto / Aberto a Realocação)",
      email: "brunohf131@gmail.com",
      phone: "+55 (68) 99930-9277",
      linkedin: "https://linkedin.com/in/brunohfmelo",
      github: "https://github.com/I-Am-BrunoHFMelo",
    },
    character: {
      role: "Engenheiro de Software P&D",
      focus: "Backend, Fullstack, Sistemas Distribuídos & IA Aplicada",
      metrics: [
        { label: "Publicações analisadas com NLP", value: "+136k" },
        { label: "Endpoints REST documentados", value: "30+" },
        { label: "Entidades relacionais em produção", value: "9" },
        { label: "Artigo publicado • SBC 2025", value: "BrasNAM" }
      ],
      stats: [
        { name: "Arquitetura Backend & APIs REST", value: 98, max: 100 },
        { name: "Processamento Concorrente & Threads", value: 94, max: 100 },
        { name: "Modelagem de Dados Relacional & ORM", value: 96, max: 100 },
        { name: "Engenharia de Dados, NLP & Lógica Fuzzy", value: 91, max: 100 },
        { name: "Integração Fullstack (Angular / TS)", value: 89, max: 100 },
        { name: "Engenharia de Testes com IA", value: 90, max: 100 },
      ],
      passives: [
        {
          name: "RBAC Contextual por Projeto",
          effect: "Implementação de autorização dinâmica granular além de roles fixas no Spring Security e JWT."
        },
        {
          name: "Processamento Concorrente com Threads",
          effect: "Mineração massiva paralela com ThreadPoolExecutor, renovação dinâmica de tokens e respeito a rate limits."
        },
        {
          name: "Arquitetura Orientada a Eventos",
          effect: "Desacoplamento de tarefas pesadas via filas assíncronas (Jobs), Observers e WebSockets em tempo real."
        },
        {
          name: "Rigor Científico na SBC",
          effect: "Artigo publicado no BrasNAM (SBC) e mestrado em andamento na UFAC com foco em modelagem computacional aplicada."
        }
      ]
    },
    education: [
      {
        degree: "Mestrado em Ciência da Computação (PPGCC)",
        institution: "Universidade Federal do Acre (UFAC)",
        period: "2026 – 2028",
        status: "Em andamento",
        notes: "Linha de pesquisa em Inteligência Artificial & Sistemas de Software, com foco em modelagem computacional e agentes inteligentes."
      },
      {
        degree: "Pós-Graduação Lato Sensu em Engenharia de Testes de Software com IA (IARTES)",
        institution: "Universidade Federal do Acre em parceria com Motorola Mobility",
        period: "2026 – 2027",
        status: "Em andamento (CR atual: 9,65)",
        notes: "Especialização com foco em testes inteligentes, automação e confiabilidade de sistemas. Coeficiente de Rendimento (CR) atual: 9,65."
      },
      {
        degree: "Bacharelado em Sistemas de Informação",
        institution: "Universidade Federal do Acre (UFAC)",
        period: "2019 – 2025",
        status: "Concluído",
        notes: "Formação sólida em algoritmos e engenharia de software. Trabalho de Conclusão de Curso (TCC) aprovado com Nota 10,0."
      },
      {
        degree: "Web Academy – Capacitação em Desenvolvimento Full-Stack (300h)",
        institution: "Universidade Federal do Acre em parceria com Motorola Mobility",
        period: "2025",
        status: "Concluído",
        notes: "Desenvolvimento corporativo intensivo com Spring Boot, Angular 19, Scrum e boas práticas."
      },
      {
        degree: "Núcleo de Apoio à Inclusão (NAI / UFAC) — Tecnologia Assistiva & Acessibilidade",
        institution: "Universidade Federal do Acre (UFAC)",
        period: "2022 – 2025",
        status: "Concluído (1.360h)",
        notes: "Bolsista com 1.360 horas dedicadas a tecnologia assistiva, acessibilidade computacional, suporte pedagógico-técnico e manutenção do portal CMS Plone do PPGCC/UFAC."
      },
      {
        degree: "N.A.V.E. Tech Acre – Empreendedorismo e Tecnologias Avançadas (230h)",
        institution: "Universidade Federal do Acre em parceria com Samsung",
        period: "2022",
        status: "Concluído",
        notes: "Imersão de 230h abrangendo Desenvolvimento Web/Mobile, IoT, Inteligência Artificial e Design Sprint."
      }
    ],
    mainQuests: [
      {
        id: "bluesky-pipeline",
        title: "Operação Queimadas: Pipeline Concorrente do Bluesky & Artigo BrasNAM",
        type: "main",
        organization: "Pesquisa Científica / Publicado na SBC (BrasNAM)",
        period: "2024 – 2025",
        role: "Engenheiro de Dados & Pesquisador Principal",
        summary: "Pipeline de coleta concorrente resiliente de mais de 136 mil posts da rede Bluesky durante a crise das queimadas de 2024, processado com spaCy, NLTK e LDA.",
        description: [
          "Arquitetei pipeline de mineração concorrente usando Python e ThreadPoolExecutor para absorver grandes fluxos de publicações sob restrições severas de rate limit.",
          "Implementei mecanismos de renovação automática de token de sessão JWT e tratamento robusto de erros com retries exponenciais sem perda de estado.",
          "Executei pré-processamento semântico com spaCy e NLTK e modelagem de tópicos não supervisionada via Latent Dirichlet Allocation (LDA) com a biblioteca Gensim.",
          "Conduzi a pesquisa até a publicação de artigo científico aceito no BrasNAM (Brazilian Workshop on Social Network Analysis and Mining) da Sociedade Brasileira de Computação (SBC)."
        ],
        metrics: [
          "+136.000 publicações mineradas e estruturadas",
          "Taxa de falha zero na ingestão concorrente",
          "Artigo indexado e publicado no portal sol.sbc.org.br"
        ],
        stack: ["Python", "ThreadPoolExecutor", "Gensim (LDA)", "spaCy", "NLTK", "Bluesky AT Protocol", "Pandas"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Leia-Bluesky-Queimadas-2024",
        paperUrl: "https://sol.sbc.org.br/index.php/brasnam/article/view/43247"
      },
      {
        id: "web-academy-motorola",
        title: "Plataforma de Gestão de Projetos e Evidências com RBAC Contextual",
        type: "main",
        organization: "Web Academy (Parceria Motorola / UFAC)",
        period: "Junho 2025 – Dezembro 2025",
        role: "Desenvolvedor Fullstack & Scrum Master",
        summary: "Sistema corporativo web estruturado com Spring Boot e Angular 19, com banco de dados MySQL, autorização contextual por projeto e documentação OpenAPI com mais de 30 endpoints.",
        description: [
          "Modelei o domínio relacional no MySQL contemplando 6 entidades de negócio interdependentes (usuários, projetos, convênios, atividades, tarefas e evidências de entrega).",
          "Implementei camada de segurança avançada com Spring Security e JWT, estruturando RBAC contextual (onde os privilégios do usuário mudam conforme o projeto acessado).",
          "Documentei e padronizei mais de 30 endpoints REST via Swagger/OpenAPI, além de queries JPA customizadas com paginação e filtros dinâmicos.",
          "Investiguei e solucionei incidente crítico de upload assíncrono de arquivos multipart gerado por inconsistência de parâmetros de requisição HTTP.",
          "Liderei a equipe técnica como Scrum Master: conduzi refinamentos de backlog, priorização de entregas e alinhamento com stakeholders."
        ],
        metrics: [
          "30+ endpoints REST documentados e validados",
          "6 entidades de negócio relacionais integradas",
          "Incidente de upload resolvido com zero downtime"
        ],
        stack: ["Java", "Spring Boot", "Angular 19", "Spring Security", "JWT", "MySQL", "JPA / Hibernate", "OpenAPI / Swagger", "TypeScript"]
      },
      {
        id: "inss-gestao-patrimonial",
        title: "API REST de Gestão Patrimonial e Manutenções",
        type: "main",
        organization: "Instituto Nacional do Seguro Social (INSS)",
        period: "Agosto 2024 – Novembro 2024",
        role: "Desenvolvedor Backend",
        summary: "API REST construída com Django REST Framework para gerenciamento e auditoria de 9 entidades de negócio (equipamentos, agências, manutenções e servidores).",
        description: [
          "Assumi desenvolvimento de ponta a ponta com alto nível de autonomia técnica, desde o levantamento dos requisitos operacionais até a entrega do protótipo homologado.",
          "Modelei via Django ORM uma malha relacional de 9 entidades com regras de integridade e auditoria de solicitações e manutenções.",
          "Implementei controle de autenticação baseado em JWT, protegendo endpoints sensíveis e garantindo contratos de dados consistentes.",
          "Desenvolvi rotinas de exportação massiva de dados em formato CSV para integração com planilhas de gestão interna."
        ],
        metrics: [
          "9 entidades de negócio integradas via ORM",
          "Autonomia total do levantamento ao protótipo",
          "Padronização 100% dos contratos de resposta REST"
        ],
        stack: ["Python", "Django REST Framework", "Django ORM", "JWT Auth", "SQLite / PostgreSQL", "CSV Automation"]
      },
      {
        id: "refagent-py",
        title: "RefAgent-Py: Refatoração Automática de Código com Sistemas Multi-Agente",
        type: "main",
        organization: "PPGCC / UFAC (Mestrado em Ciência da Computação)",
        period: "2026",
        role: "Pesquisador (Co-autor) & Engenheiro de Software",
        summary: "Framework multi-agente baseado em LLMs executado via Ollama com modelos open-weight locais para refatoração e verificação automática de software em Python.",
        description: [
          "Adaptei a arquitetura de quatro agentes especializados do framework RefAgent (Planejador, Gerador, Compilador e Testador) de Java para Python, substituindo compilação estática (javac) por gates dinâmicos desacoplados (py_compile, mypy e Pylint com baseline relativo).",
          "A orquestração multi-agente elevou a aprovação em testes funcionais em até 62% sobre baseline single-agent em arquivos de produção do Flask.",
          "Avaliou 16 tarefas do benchmark RefactorBench e 17 arquivos reais de código aberto sob infraestrutura GPU local dedicada (RTX 5080, PPGCC/UFAC)."
        ],
        metrics: [
          "+62% aprovação em testes funcionais",
          "4 agentes orquestrados (Planejador, Gerador, Compilador, Testador)",
          "Execução local via Ollama em GPU RTX 5080"
        ],
        stack: ["Python", "Multi-Agent Systems", "Ollama", "LLMs", "RefactorBench", "mypy", "Pylint", "PyTest"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/RefAgent-Python"
      }
    ],
    sideQuests: [
      {
        id: "fuzzy-tweet-temperature",
        title: "Sistema de Inferência Fuzzy para Temperatura de Postagens",
        type: "side",
        organization: "Projeto Open Source / Modelagem Matemática",
        period: "2026",
        role: "Autor & Engenheiro",
        summary: "Sistema Mamdani com 27 regras que correlaciona polaridade textual contínua (VADER) e subjetividade (TextBlob) com engajamento atenuado por logaritmo (Power Law).",
        description: [
          "Eliminou limiares rígidos (crisp thresholds) de if-else na classificação de discurso em redes sociais.",
          "Formulou funções de pertinência que respeitam a partição da unidade e desenhou superfície de decisão não-linear.",
          "Tratou a distribuição de cauda pesada de curtidas/retweets através de compressão logarítmica antes da escala Min-Max."
        ],
        metrics: ["27 regras de inferência Mamdani", "Partição da unidade comprovada", "Zero descontinuidades de limiar"],
        stack: ["Python", "scikit-fuzzy", "NLTK (VADER)", "TextBlob", "Jupyter Notebook"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/fuzzy-tweet-temperature"
      },
      {
        id: "laravel-mini-crm",
        title: "Mini-CRM Orientado a Eventos com Laravel Reverb",
        type: "side",
        organization: "Desafio Técnico / Boas Práticas de Backend",
        period: "2026",
        role: "Desenvolvedor Backend",
        summary: "API de CRM demonstrando arquitetura orientada a eventos, processamento em background com filas (Jobs), Observers e atualizações em tempo real com WebSockets.",
        description: [
          "Implementou desacoplamento de I/O pesado usando fila de Jobs assíncronos no Laravel 10.",
          "Utilizou Observers e Event-Listeners para disparar notificações automáticas e sincronização sem poluir os controllers.",
          "Configurou Laravel Reverb para broadcasting de eventos via WebSockets com baixa latência."
        ],
        metrics: ["WebSockets em tempo real", "Jobs desacoplados em fila", "Arquitetura limpa e testável"],
        stack: ["PHP", "Laravel 10", "Laravel Reverb (WebSockets)", "Queues & Jobs", "MySQL"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/laravel-mini-crm-contatos"
      },
      {
        id: "anima-ultima",
        title: "Anima Ultima — Companion App Offline-First (Ionic + Angular)",
        type: "side",
        organization: "Engenharia Frontend & Mobile",
        period: "2026",
        role: "Desenvolvedor Mobile / Web",
        summary: "Companion app responsivo e offline-first em Ionic 8 + Angular 20 + Capacitor, com autosave via Dexie.js (IndexedDB) e deploy contínuo na Vercel.",
        description: [
          "Construiu arquitetura offline-first com persistência local no IndexedDB e sincronização reativa com 600ms de debounce.",
          "Implementou domínio de RPG com cálculo automático de PV/PM/PI, bestiário por ranks, relógios de conflito e calculadora de rituais."
        ],
        metrics: ["Deploy ativo na Vercel", "Arquitetura Offline-First (Dexie.js)", "Ionic 8 + Angular 20"],
        stack: ["TypeScript", "Angular 20", "Ionic 8", "Capacitor", "Dexie.js (IndexedDB)", "Vercel"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Anima-Ultima-Aplicacao-Mobile-para-Fabula-Ultima",
        liveUrl: "https://anima-ultima-aplica-o-mobile-para-f.vercel.app/home"
      },
      {
        id: "deck-dice",
        title: "Deck & Dice — App Android Nativo com Canvas 2D & Room",
        type: "side",
        organization: "Android Nativo & POO",
        period: "2026",
        role: "Desenvolvedor Android",
        summary: "Aplicativo Android nativo em Java (SDK 34) com motor de avaliação de expressões de dados, física e renderização 2D em Canvas customizado e persistência com Room Database.",
        description: [
          "Desenvolveu motor de parsing e avaliação de expressões de dados (XdY, modificadores e regras de corte).",
          "Implementou Carteira de Cartas para combos de rolagens, notas de sessão e persistência com Room Database."
        ],
        metrics: ["Motor de avaliação em Java puro", "Persistência com Android Room Database"],
        stack: ["Java", "Android SDK 34", "Canvas 2D", "Room Database", "Material Design"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Deck-Dice"
      },
      {
        id: "bdd-biblioteca-cucumber",
        title: "BDD Biblioteca: Testes Automatizados com Cucumber & JUnit 5",
        type: "side",
        organization: "Pós-Graduação IARTES (Motorola / UFAC)",
        period: "2026",
        role: "Desenvolvedor Java & Engenheiro de QA",
        summary: "Modelagem de regras de negócio para empréstimos e multas em Java com testes unitários em JUnit 5 e testes de aceitação em BDD com Cucumber/Gherkin.",
        description: [
          "Implementou testes de aceitação orientados a comportamento (BDD) com Cucumber e especificações executáveis em Gherkin em português, estabelecendo documentação viva.",
          "Desenvolveu regras de negócio para cálculo de empréstimos e multas sob abordagem guiada por testes (TDD) com JUnit 5.",
          "Projeto desenvolvido no âmbito da especialização IARTES (Motorola/UFAC) com Coeficiente de Rendimento (CR) 9,65."
        ],
        metrics: ["Testes BDD em Gherkin", "TDD & JUnit 5", "Documentação viva da regra de negócio"],
        stack: ["Java", "Cucumber", "Gherkin", "JUnit 5", "TDD", "Maven"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/bdd-biblioteca-cucumber"
      }
    ],
    arsenal: [
      {
        category: "Backend & Arquitetura de APIs",
        iconName: "server",
        skills: [
          { name: "Java (Spring Boot)", level: "Avançado", description: "Spring Security, JPA/Hibernate, Maven, Injeção de Dependências" },
          { name: "Python (Django / DRF)", level: "Avançado", description: "APIs RESTful, Django ORM, Serializers, Autonomia em Arquitetura" },
          { name: "Segurança & Autenticação", level: "Avançado", description: "JWT, RBAC Contextual por Projeto, Sanitização de Parâmetros" },
          { name: "Contratos de API", level: "Avançado", description: "OpenAPI / Swagger (30+ endpoints), Padrão de Erros RFC 7807" }
        ]
      },
      {
        category: "Qualidade & Testes de Software",
        iconName: "check-circle",
        skills: [
          { name: "TDD & JUnit 5 / Mockito", level: "Avançado", description: "Test-Driven Development, testes unitários e de integração, mocks e asserções rigorosas" },
          { name: "BDD com Cucumber & Gherkin", level: "Avançado", description: "Especificações executáveis em linguagem ubíqua (Gherkin), documentação viva e testes de aceitação" },
          { name: "PyTest & Testes em Python", level: "Avançado", description: "Fixtures, testes parametrizados, cobertura de testes e validação funcional de código" },
          { name: "Análise Estática & AST / mypy", level: "Avançado", description: "mypy, Pylint, inspeção sintática via AST nativo em Python e gates dinâmicos de compilação" },
          { name: "Especialização IARTES (Motorola / UFAC)", level: "CR Atual: 9,65", description: "Pós-Graduação em Engenharia de Testes de Software com IA em parceria com a Motorola Mobility" }
        ]
      },
      {
        category: "Dados, Concorrência & IA",
        iconName: "cpu",
        skills: [
          { name: "Processamento Concorrente", level: "Avançado", description: "ThreadPoolExecutor, Controle de Rate Limit, Exponential Retries" },
          { name: "Processamento de Linguagem Natural", level: "Avançado", description: "spaCy, NLTK, VADER/LeIA, Gensim (LDA Topic Modeling)" },
          { name: "Lógica Difusa (Fuzzy Logic)", level: "Avançado", description: "Sistemas Mamdani, Funções de Pertinência, Scikit-Fuzzy" },
          { name: "Sistemas Multi-Agente & LLMs", level: "Avançado", description: "Ollama, Modelos Open-Weight Locais, RefactorBench, Orquestração com 4 Agentes" }
        ]
      },
      {
        category: "Frontend & Aplicações Web",
        iconName: "layout",
        skills: [
          { name: "Angular 19 & TypeScript", level: "Intermediário-Avançado", description: "Componentes Standalone, Guards de Rota, Interceptors, RxJS" },
          { name: "HTML5, CSS3 & Tailwind", level: "Avançado", description: "Design Responsivo, Animações Fluidas, Acessibilidade" },
          { name: "Tempo Real & WebSockets", level: "Intermediário", description: "Laravel Reverb, Event Broadcasting, Atualizações Live" }
        ]
      },
      {
        category: "Bancos de Dados, DevOps & Processos",
        iconName: "database",
        skills: [
          { name: "Bancos de Dados Relacionais", level: "Avançado", description: "MySQL, PostgreSQL, SQLite, Queries Customizadas, Paginação" },
          { name: "DevOps & Containers", level: "Intermediário", description: "Docker, CI/CD Pipelines, GitHub Actions, Deploy Cloud" },
          { name: "Metodologias Ágeis", level: "Praticante / SM", description: "Atuação como Scrum Master, Gestão de Backlog, Mediação com Cliente" },
          { name: "Git & Controle de Versão", level: "Avançado", description: "Branching workflows, Pull Requests, Code Review" }
        ]
      }
    ],
    navigation: {
      projects: "PROJETOS & ESTUDOS DE CASO",
      profile: "PERFIL & FORMAÇÃO",
      skills: "STACK & HABILIDADES",
      contact: "CONTATO & CURRÍCULO",
      config: "CONFIGURAÇÕES",
      startPrompt: "Clique para explorar os projetos",
      downloadCv: "Baixar Currículo (PDF)",
      copyEmail: "Copiar E-mail",
      copied: "E-mail copiado!"
    }
  },
  en: {
    personal: {
      name: "Bruno Henrique Freitas de Melo",
      romanizedTitle: "BRUNO H. F. MELO",
      tagline: "R&D Software Engineer | Backend-Heavy Fullstack & Applied AI",
      prologue: "From concurrent data harvesting during Amazonian wildfire crises to enterprise distributed backend architectures with Spring Boot and Django. Where complex business logic turns into resilient, testable, and scalable systems.",
      location: "Rio Branco, AC - Brazil (Available 100% Remote / Open to Relocation)",
      email: "brunohf131@gmail.com",
      phone: "+55 (68) 99930-9277",
      linkedin: "https://linkedin.com/in/brunohfmelo",
      github: "https://github.com/I-Am-BrunoHFMelo",
    },
    character: {
      role: "R&D Software Engineer",
      focus: "Backend-Heavy Fullstack, Distributed Systems & Applied AI",
      metrics: [
        { label: "Posts mined and analyzed with NLP", value: "+136k" },
        { label: "REST Endpoints documented", value: "30+" },
        { label: "Relational entities in production", value: "9" },
        { label: "Published paper • SBC 2025", value: "BrasNAM" }
      ],
      stats: [
        { name: "Backend Architecture & REST APIs", value: 98, max: 100 },
        { name: "Concurrent Processing & Threads", value: 94, max: 100 },
        { name: "Relational Data Modeling & ORM", value: 96, max: 100 },
        { name: "Data Engineering, NLP & Fuzzy Logic", value: 91, max: 100 },
        { name: "Fullstack Integration (Angular / TS)", value: 89, max: 100 },
        { name: "AI-Driven Test Engineering", value: 90, max: 100 },
      ],
      passives: [
        {
          name: "Contextual Project RBAC",
          effect: "Implementation of dynamic granular authorization beyond static roles with Spring Security and JWT."
        },
        {
          name: "Concurrent Thread Processing",
          effect: "Massive parallel I/O with ThreadPoolExecutor, dynamic session renewal, and rate limit throttling."
        },
        {
          name: "Event-Driven Architecture",
          effect: "Decoupling heavy tasks via asynchronous Jobs, Observers, and real-time WebSockets."
        },
        {
          name: "Scientific Rigor at SBC",
          effect: "Published research paper at BrasNAM (SBC) and ongoing Master's at UFAC focused on applied computational modeling."
        }
      ]
    },
    education: [
      {
        degree: "M.Sc. in Computer Science (PPGCC)",
        institution: "Federal University of Acre (UFAC)",
        period: "2026 – 2028",
        status: "In Progress",
        notes: "Research track in Artificial Intelligence & Software Systems, focusing on computational modeling and intelligent agents."
      },
      {
        degree: "Postgraduate Specialization in AI-Driven Software Testing (IARTES)",
        institution: "Federal University of Acre in partnership with Motorola Mobility",
        period: "2026 – 2027",
        status: "In Progress (Current GPA/CR: 9.65)",
        notes: "AI-assisted test automation, quality engineering, and system reliability. Current GPA (CR): 9.65."
      },
      {
        degree: "B.S. in Information Systems",
        institution: "Federal University of Acre (UFAC)",
        period: "2019 – 2025",
        status: "Completed",
        notes: "Solid foundation in computer science and software engineering. Bachelor's thesis (TCC) graded with maximum score (10.0 / 10.0)."
      },
      {
        degree: "Web Academy – Full-Stack Web Development Program (300h)",
        institution: "Federal University of Acre in partnership with Motorola Mobility",
        period: "2025",
        status: "Completed",
        notes: "Intensive corporate engineering with Spring Boot, Angular 19, Scrum, and enterprise best practices."
      },
      {
        degree: "Accessibility & Assistive Technology Fellowship (NAI / UFAC)",
        institution: "Federal University of Acre (UFAC)",
        period: "2022 – 2025",
        status: "Completed (1,360h)",
        notes: "Scholarship fellow completing 1,360 hours dedicated to assistive technology, digital accessibility, specialized student support, and Plone CMS maintenance for the PPGCC/UFAC portal."
      },
      {
        degree: "N.A.V.E. Tech Acre – Entrepreneurship and Advanced Technologies (230h)",
        institution: "Federal University of Acre in partnership with Samsung",
        period: "2022",
        status: "Completed",
        notes: "230-hour immersive program covering Web/Mobile Development, IoT, Artificial Intelligence, and Design Sprint."
      }
    ],
    mainQuests: [
      {
        id: "bluesky-pipeline",
        title: "Wildfire Crisis Operation: Concurrent Bluesky Pipeline & BrasNAM Paper",
        type: "main",
        organization: "Scientific Research / Published at SBC (BrasNAM)",
        period: "2024 – 2025",
        role: "Data Engineer & Lead Researcher",
        summary: "Resilient concurrent data extraction pipeline collecting 136k+ posts from Bluesky during the 2024 environmental wildfire crisis, analyzed via spaCy, NLTK, and LDA.",
        description: [
          "Architected concurrent mining pipeline with Python ThreadPoolExecutor to handle high-volume streaming data under strict rate limit constraints.",
          "Implemented automatic JWT session token renewal and failover handling with exponential retries and zero state loss.",
          "Conducted semantic preprocessing with spaCy and NLTK, combined with unsupervised Latent Dirichlet Allocation (LDA) topic modeling via Gensim.",
          "Led research that was peer-reviewed, accepted, and published at BrasNAM (Brazilian Workshop on Social Network Analysis and Mining) by the Brazilian Computer Society (SBC)."
        ],
        metrics: [
          "136,000+ posts mined and structured",
          "Zero failure rate across concurrent collection cycles",
          "Paper indexed and published on sol.sbc.org.br"
        ],
        stack: ["Python", "ThreadPoolExecutor", "Gensim (LDA)", "spaCy", "NLTK", "Bluesky AT Protocol", "Pandas"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Leia-Bluesky-Queimadas-2024",
        paperUrl: "https://sol.sbc.org.br/index.php/brasnam/article/view/43247"
      },
      {
        id: "web-academy-motorola",
        title: "Enterprise Project & Evidence Management with Contextual RBAC",
        type: "main",
        organization: "Web Academy (Motorola / UFAC Partnership)",
        period: "June 2025 – December 2025",
        role: "Fullstack Developer & Scrum Master",
        summary: "Enterprise web application built with Spring Boot and Angular 19, backed by MySQL, contextual project-level RBAC, and OpenAPI specs covering 30+ endpoints.",
        description: [
          "Modeled relational domain in MySQL across 6 core entities (users, projects, agreements, activities, tasks, deliverables).",
          "Engineered security layer using Spring Security & JWT featuring contextual RBAC (permissions dynamically adjust based on the selected project context).",
          "Documented and standardized 30+ REST endpoints via Swagger/OpenAPI, writing custom JPA queries with pagination and dynamic filters.",
          "Diagnosed and resolved critical multipart/HTTP file upload failure caused by parameter mismatches.",
          "Served as Scrum Master: facilitated ceremonies, managed sprint backlogs, and aligned deliverables with stakeholders."
        ],
        metrics: [
          "30+ documented and tested REST endpoints",
          "6 relational business entities mapped via JPA",
          "Critical upload outage resolved with zero downtime"
        ],
        stack: ["Java", "Spring Boot", "Angular 19", "Spring Security", "JWT", "MySQL", "JPA / Hibernate", "OpenAPI / Swagger", "TypeScript"]
      },
      {
        id: "inss-gestao-patrimonial",
        title: "Federal Asset Management & Maintenance REST API",
        type: "main",
        organization: "National Social Security Institute (INSS)",
        period: "August 2024 – November 2024",
        role: "Backend Developer",
        summary: "REST API built with Django REST Framework for monitoring, maintenance tracking, and auditing across 9 distinct business entities.",
        description: [
          "Delivered end-to-end backend system with high autonomy, from requirements gathering with civil servants to deploying functional prototype.",
          "Modeled 9 business entities via Django ORM with relational integrity constraints for equipment, agencies, and maintenance orders.",
          "Secured endpoints using JWT authentication, standardizing API responses and error contract formats.",
          "Implemented automated batch CSV exports for integration with government internal audit spreadsheets."
        ],
        metrics: [
          "9 business entities integrated via Django ORM",
          "Full autonomy from requirements to prototype",
          "100% standardized API contracts & error responses"
        ],
        stack: ["Python", "Django REST Framework", "Django ORM", "JWT Auth", "SQLite / PostgreSQL", "CSV Automation"]
      },
      {
        id: "refagent-py",
        title: "RefAgent-Py: Automated Code Refactoring via Multi-Agent Systems",
        type: "main",
        organization: "PPGCC / UFAC (M.Sc. in Computer Science)",
        period: "2026",
        role: "Researcher (Co-Author) & Software Engineer",
        summary: "Multi-agent LLM-based framework running locally via Ollama with open-weight models for automated Python software refactoring and dynamic verification.",
        description: [
          "Adapted the four specialized agents (Planner, Generator, Compiler, Tester) from Java to Python, replacing static compilation with decoupled dynamic gates (py_compile, mypy, and Pylint with relative baselines).",
          "Multi-agent orchestration boosted functional test pass rates by up to 62% over single-agent baselines on Flask production files across 16 RefactorBench tasks.",
          "Evaluated across 17 real open-source production files on local dedicated GPU infrastructure (RTX 5080, PPGCC/UFAC)."
        ],
        metrics: [
          "+62% functional test pass rate over single-agent",
          "4 orchestrated specialized agents (Planner, Generator, Compiler, Tester)",
          "100% local execution via Ollama on dedicated RTX 5080 GPU"
        ],
        stack: ["Python", "Multi-Agent Systems", "Ollama", "LLMs", "RefactorBench", "mypy", "Pylint", "PyTest"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/RefAgent-Python"
      }
    ],
    sideQuests: [
      {
        id: "fuzzy-tweet-temperature",
        title: "Fuzzy Inference System for Social Media Post Temperature",
        type: "side",
        organization: "Open Source / Mathematical Modeling",
        period: "2026",
        role: "Author & Software Engineer",
        summary: "Mamdani FIS with 27 rules correlating continuous sentiment polarity (VADER) and subjectivity (TextBlob) with logarithmically damped engagement (Power Law).",
        description: [
          "Eliminated crisp threshold anomalies from traditional if-else sentiment classifications.",
          "Formulated membership functions satisfying the partition of unity, mapping a smooth non-linear decision surface.",
          "Handled heavy-tailed social engagement metrics via logarithmic compression prior to Min-Max normalization."
        ],
        metrics: ["27 Mamdani inference rules", "Partition of unity verified", "Zero threshold boundary discontinuities"],
        stack: ["Python", "scikit-fuzzy", "NLTK (VADER)", "TextBlob", "Jupyter Notebook"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/fuzzy-tweet-temperature"
      },
      {
        id: "laravel-mini-crm",
        title: "Event-Driven Mini-CRM with Laravel Reverb",
        type: "side",
        organization: "Technical Challenge / Backend Architecture",
        period: "2026",
        role: "Backend Developer",
        summary: "CRM API showcasing event-driven architecture, asynchronous background queues (Jobs), Observers, and real-time WebSocket streaming.",
        description: [
          "Decoupled heavy I/O operations using asynchronous background Job queues in Laravel 10.",
          "Leveraged Observers and Event Listeners to trigger automated notifications without cluttering controllers.",
          "Configured Laravel Reverb for ultra-low latency real-time WebSocket event broadcasting."
        ],
        metrics: ["Real-time WebSockets", "Decoupled asynchronous Job queues", "Clean testable architecture"],
        stack: ["PHP", "Laravel 10", "Laravel Reverb (WebSockets)", "Queues & Jobs", "MySQL"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/laravel-mini-crm-contatos"
      },
      {
        id: "anima-ultima",
        title: "Anima Ultima — Offline-First Mobile Companion (Ionic + Angular)",
        type: "side",
        organization: "Frontend & Mobile Engineering",
        period: "2026",
        role: "Mobile & Web Developer",
        summary: "Responsive, offline-first companion app built with Ionic 8 + Angular 20 + Capacitor, featuring local Dexie.js (IndexedDB) autosave and live deployment on Vercel.",
        description: [
          "Engineered offline-first architecture with local IndexedDB persistence and reactive synchronization with 600ms debouncing.",
          "Modeled complex tabletop rules: automatic HP/MP/IP tracking, rank-based bestiary with elemental affinities, and conflict clocks."
        ],
        metrics: ["Live on Vercel", "Offline-First (Dexie.js IndexedDB)", "Ionic 8 + Angular 20"],
        stack: ["TypeScript", "Angular 20", "Ionic 8", "Capacitor", "Dexie.js (IndexedDB)", "Vercel"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Anima-Ultima-Aplicacao-Mobile-para-Fabula-Ultima",
        liveUrl: "https://anima-ultima-aplica-o-mobile-para-f.vercel.app/home"
      },
      {
        id: "deck-dice",
        title: "Deck & Dice — Native Android App with 2D Canvas & Room",
        type: "side",
        organization: "Native Android & OOP",
        period: "2026",
        role: "Android Developer",
        summary: "Native Android application in Java (SDK 34) featuring custom mathematical expression evaluation, 2D Canvas graphics, and Room Database persistence.",
        description: [
          "Engineered parsing engine evaluating complex dice and card expressions with modifiers and keep-highest rules.",
          "Implemented Card Deck wallet for roll combos, session notes, and persistent history using Android Room Database."
        ],
        metrics: ["Expression engine in pure Java", "Room Database persistence"],
        stack: ["Java", "Android SDK 34", "Canvas 2D", "Room Database", "Material Design"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/Deck-Dice"
      },
      {
        id: "bdd-biblioteca-cucumber",
        title: "BDD Library: Automated Acceptance Testing with Cucumber & JUnit 5",
        type: "side",
        organization: "IARTES Postgrad (Motorola / UFAC Partnership)",
        period: "2026",
        role: "Java Developer & QA Engineer",
        summary: "Business domain modeling for book loans and fines in Java, verified with JUnit 5 unit suites and behavior-driven acceptance tests via Cucumber & Gherkin.",
        description: [
          "Implemented behavior-driven development (BDD) acceptance tests using Cucumber and executable Gherkin specifications as living documentation.",
          "Engineered loan calculation and fine penalty business logic under rigorous test-driven development (TDD) practices with JUnit 5.",
          "Developed as part of the IARTES Postgraduate specialization (Motorola/UFAC) with current GPA / CR of 9.65."
        ],
        metrics: ["BDD Gherkin Acceptance Suites", "TDD & JUnit 5 Testing", "Living Documentation"],
        stack: ["Java", "Cucumber", "Gherkin", "JUnit 5", "TDD", "Maven"],
        repoUrl: "https://github.com/I-Am-BrunoHFMelo/bdd-biblioteca-cucumber"
      }
    ],
    arsenal: [
      {
        category: "Backend & API Architecture",
        iconName: "server",
        skills: [
          { name: "Java (Spring Boot)", level: "Advanced", description: "Spring Security, JPA/Hibernate, Maven, Dependency Injection" },
          { name: "Python (Django / DRF)", level: "Advanced", description: "RESTful APIs, Django ORM, Serializers, Architectural Autonomy" },
          { name: "Security & Auth", level: "Advanced", description: "JWT, Contextual Project RBAC, Parameter Sanitization" },
          { name: "API Contracts", level: "Advanced", description: "OpenAPI / Swagger (30+ endpoints), RFC 7807 Error Formatting" }
        ]
      },
      {
        category: "Software Quality & Testing",
        iconName: "check-circle",
        skills: [
          { name: "TDD & JUnit 5 / Mockito", level: "Advanced", description: "Test-Driven Development, unit and integration suites, mocking, and rigorous assertions" },
          { name: "BDD with Cucumber & Gherkin", level: "Advanced", description: "Executable specifications in ubiquitous language (Gherkin), living documentation, and acceptance tests" },
          { name: "PyTest & Python Testing", level: "Advanced", description: "Fixtures, parameterized tests, test coverage, and functional verification of code" },
          { name: "Static Analysis & AST / mypy", level: "Advanced", description: "mypy, Pylint, native Python AST syntax inspection, and dynamic compilation gates" },
          { name: "IARTES Specialization (Motorola / UFAC)", level: "Current GPA: 9.65", description: "Postgraduate degree in AI-Driven Software Test Engineering in partnership with Motorola Mobility" }
        ]
      },
      {
        category: "Data Engineering, Concurrency & AI",
        iconName: "cpu",
        skills: [
          { name: "Concurrent Processing", level: "Advanced", description: "ThreadPoolExecutor, Rate Limit Throttling, Exponential Retries" },
          { name: "Natural Language Processing", level: "Advanced", description: "spaCy, NLTK, VADER/LeIA, Gensim (LDA Topic Modeling)" },
          { name: "Fuzzy Logic Systems", level: "Advanced", description: "Mamdani Inference, Membership Functions, Scikit-Fuzzy" },
          { name: "Multi-Agent Systems & LLMs", level: "Advanced", description: "Ollama, Local Open-Weight Models, RefactorBench, 4-Agent Orchestration" }
        ]
      },
      {
        category: "Frontend & Web Applications",
        iconName: "layout",
        skills: [
          { name: "Angular 19 & TypeScript", level: "Intermediate-Advanced", description: "Standalone Components, Route Guards, Interceptors, RxJS" },
          { name: "HTML5, CSS3 & Tailwind", level: "Advanced", description: "Responsive Layouts, Fluid Animations, Web Accessibility" },
          { name: "Real-Time & WebSockets", level: "Intermediate", description: "Laravel Reverb, Event Broadcasting, Live Feeds" }
        ]
      },
      {
        category: "Databases, DevOps & Agile",
        iconName: "database",
        skills: [
          { name: "Relational Databases", level: "Advanced", description: "MySQL, PostgreSQL, SQLite, Custom Queries, Pagination" },
          { name: "DevOps & Containers", level: "Intermediate", description: "Docker, CI/CD Pipelines, GitHub Actions, Cloud Deployments" },
          { name: "Agile Practices", level: "Practitioner / SM", description: "Served as Scrum Master, Backlog Refinement, Stakeholder Alignment" },
          { name: "Git & Version Control", level: "Advanced", description: "Branching workflows, Pull Requests, Code Review" }
        ]
      }
    ],
    navigation: {
      projects: "PROJECTS & CASE STUDIES",
      profile: "PROFILE & EDUCATION",
      skills: "TECH STACK & SKILLS",
      contact: "CONTACT & RESUME",
      config: "CONFIG",
      startPrompt: "Click to explore featured projects",
      downloadCv: "Download Resume (PDF)",
      copyEmail: "Copy Email",
      copied: "Email copied!"
    }
  }
};
