# ⚔️ Portfólio de Engenharia de Software — Bruno Henrique

> Portfólio técnico pessoal com arquitetura Jamstack em Astro 5, TypeScript e Tailwind CSS

[![Astro](https://img.shields.io/badge/Astro-5.0-bc52ee?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy with Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

---

## 🌐 Demonstração ao Vivo
O projeto foi desenvolvido para deploy contínuo na Vercel:
👉 **[Acessar Portfólio Online](https://brunohfmelo.vercel.app)** *(substitua pela sua URL final da Vercel)*

---

## 🎯 Conceito & Decisões de Engenharia

O objetivo deste portfólio é unir **rigor técnico de engenharia de software** a uma **experiência interativa e memorável**. Em vez de um currículo estático em HTML, a aplicação funciona como um hub consolidado de estudos de caso, pipelines concorrentes, pesquisa científica e sistemas corporativos.

### Destaques da Arquitetura:
* **Zero JS por padrão (Islands Architecture):** Renderização estática com Astro 5, garantindo pontuação máxima de performance no Lighthouse e carregamento instantâneo.
* **Web Audio API Procedural:** Efeitos sonoros retrô sintetizados em tempo real via JavaScript nativo (sem requisições externas de áudio nem peso de arquivos MP3/WAV).
* **Internacionalização (i18n) Dinâmica:** Suporte completo e reativo para Português (PT) e Inglês (EN) com persistência em `localStorage`.
* **Dark / Light Mode Temático:** Paleta de alto contraste inspirada em arte conceitual em aquarela (Amano Light) e cristais de fantasia (Crystal Dark).

---

## 📂 Projetos & Estudos de Caso em Destaque

| Projeto | Stack Principal | Destaque de Engenharia / Impacto |
| :--- | :--- | :--- |
| **Plataforma de Gestão Corporativa** *(Motorola / UFAC)* | Java (Spring Boot), Angular 19, MySQL | RBAC contextual por projeto com JWT, modelagem de 6 entidades e 30+ endpoints REST. |
| **Operação Queimadas: Pipeline Concorrente** *(BrasNAM/SBC)* | Python, Concorrência, spaCy, LDA | Mineração resiliente de +136k posts do Bluesky com taxa zero de falhas. **Artigo publicado na SBC**. |
| **RefAgent-Py: Refatoração com Multi-Agentes** *(PPGCC/UFAC)* | Python, Ollama, LLMs, RefactorBench | Orquestração de 4 agentes especializados (Planejador, Gerador, Compilador e Testador) em GPU local (RTX 5080) com +62% em testes. |
| **API REST de Gestão Patrimonial** *(INSS)* | Python, Django REST Framework, ORM | Modelagem de 9 entidades relacionais, auditoria de manutenções e automação de exportação em CSV. |
| **Anima Ultima — Companion App** | TypeScript, Ionic 8, Angular 20, Dexie.js | Arquitetura offline-first com autosave em IndexedDB. **[Live Demo na Vercel](https://anima-ultima-aplica-o-mobile-para-f.vercel.app/home)**. |
| **Deck & Dice — App Android Nativo** | Java (SDK 34), Canvas 2D, Room Database | Motor de avaliação de expressões de dados e renderização gráfica 2D customizada. |
| **Mini-CRM Orientado a Eventos** | PHP, Laravel 10, Reverb WebSockets | Filas assíncronas desacopladas (Jobs), Observers e atualizações live via WebSockets. |
| **Inferência Fuzzy para Temperatura de Postagens** | Python, Scikit-Fuzzy, NLTK, TextBlob | Sistema Mamdani de 27 regras com superfície de decisão contínua não-linear. |

---

## 🛠️ Tecnologias Utilizadas

* **Framework Principal:** [Astro 5](https://astro.build/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização & Design System:** [Tailwind CSS](https://tailwindcss.com/)
* **Áudio:** Web Audio API nativa do navegador
* **Deploy & CDN:** [Vercel](https://vercel.com/)

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm, pnpm ou yarn

### Instalação e Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/I-Am-BrunoHFMelo/BHFM-Portifolio-XXV.git
cd BHFM-Portifolio-XXV

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev

# 4. Gerar build de produção otimizado
npm run build

# 5. Visualizar o build de produção localmente
npm run preview
```

---

## 📬 Contato & Conexões

* **Bruno Henrique Freitas de Melo** — *Engenheiro de Software Backend & Fullstack*
* **E-mail:** [brunohf131@gmail.com](mailto:brunohf131@gmail.com)
* **LinkedIn:** [linkedin.com/in/brunohfmelo](https://linkedin.com/in/brunohfmelo)
* **GitHub:** [@I-Am-BrunoHFMelo](https://github.com/I-Am-BrunoHFMelo)
