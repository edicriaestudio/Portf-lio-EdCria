import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  className?: string;
};

type CursorState = { visible: boolean; x: number; y: number };

const imageBase = 'auto=format&fit=crop&q=88';
const videoSource = '/media/portfolio-reference.mp4';
const images = {
  hero: `https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?${imageBase}&w=1800`,
  city: `https://images.unsplash.com/photo-1531058020387-3be344556be6?${imageBase}&w=1200`,
  fashion: `https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?${imageBase}&w=1200`,
  editorial: `https://images.unsplash.com/photo-1483985988355-763728e1935b?${imageBase}&w=1200`,
  object: `https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?${imageBase}&w=1200`,
  studio: `https://images.unsplash.com/photo-1497366811353-6870744d04b2?${imageBase}&w=1400`,
  portrait: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?${imageBase}&w=1000`,
  architecture: `https://images.unsplash.com/photo-1497366754035-f200968a6e72?${imageBase}&w=1400`,
  cafe: `https://images.unsplash.com/photo-1556740749-887f6717d7e4?${imageBase}&w=1200`,
  texture: `https://images.unsplash.com/photo-1500534623283-312aade485b7?${imageBase}&w=1200`,
};

const projects: Project[] = [
  { title: 'Padaria Sonho Doce', category: 'Identidade / Embalagem', year: '2025', image: images.object, className: 'project--tall' },
  { title: 'Notch Hamburgueria', category: 'Direção de arte / Digital', year: '2025', image: images.cafe },
  { title: 'Óticas Rothmans', category: 'Campanha / Editorial', year: '2024', image: images.fashion, className: 'project--wide' },
  { title: 'Aurora Monteiro', category: 'Marca pessoal / Fotografia', year: '2024', image: images.portrait, className: 'project--tall' },
  { title: 'Lado B Studio', category: 'Branding / Motion', year: '2023', image: images.city },
  { title: 'Casa Térrea', category: 'Digital / Direção visual', year: '2023', image: images.architecture, className: 'project--wide' },
];

const services = [
  ['01', 'Direção de Arte', 'Construímos uma linguagem visual que faz a marca ser reconhecida antes mesmo de ser lida.'],
  ['02', 'Identidade da Marca', 'Sistemas flexíveis, vivos e consistentes para marcas que não querem parecer com todas as outras.'],
  ['03', 'Direção do Movimento', 'Do primeiro frame ao microinteraction: ritmo, intenção e movimento para dar pulso ao digital.'],
  ['04', 'Design Digital', 'Sites e experiências que organizam a atenção e deixam uma sensação boa de continuar explorando.'],
  ['05', 'Campanhas', 'Conceitos visuais que atravessam formatos, canais e timelines sem perder força.'],
  ['06', 'Conteúdo Visual', 'Fotografia, composição e direção para transformar o cotidiano em material de marca.'],
];

const history = [
  ['Clavmen Studio', 'Diretor de arte', 'São Paulo / BR', '2024 — agora'],
  ['Modular Eight', 'Designer digital', 'Berlin / DE', '2022 — 2024'],
  ['Casa Sabiá', 'Designer de marca', 'Osaka / JP', '2020 — 2022'],
  ['Freelance', 'Direção visual', 'Tokyo / JP', '2018 — 2020'],
];

const testimonials = [
  ['Nanda Félix', 'Psicóloga infantil', '“O perfil transmite confiança, acolhimento e profissionalismo. Finalmente encontrei uma identidade que parece comigo.”'],
  ['Lipe Torres', 'Fundador da Barbearia Edge', '“Trabalhar com o EdCria foi um divisor de águas. A marca ganhou presença digital e ficou exatamente como eu queria ser percebido.”'],
  ['Aline Castro', 'Fundadora, Casa Térrea', '“Cada detalhe tem intenção. O projeto fez a gente enxergar o próprio negócio com muito mais clareza.”'],
];

const articles = [
  { date: '18.09.25', title: 'O que uma boa identidade faz antes de dizer qualquer coisa', tag: 'Ponto de vista', image: images.editorial },
  { date: '04.08.25', title: 'Marcas não precisam gritar para serem lembradas', tag: 'Notas de estúdio', image: images.texture },
  { date: '22.05.25', title: 'Entre forma e função, existe uma sensação', tag: 'Processo', image: images.studio },
];

const faqs = [
  ['Quanto tempo leva um projeto?', 'Cada projeto tem seu ritmo, mas um sistema de marca costuma levar de 4 a 8 semanas. O calendário final aparece no escopo e considera as rodadas de feedback.'],
  ['Como funciona o pagamento?', 'Trabalhamos com 50% na reserva da agenda e 50% na entrega final. Para projetos contínuos, montamos uma mensalidade com escopo vivo.'],
  ['Vocês atendem fora do Brasil?', 'Sim. O estúdio trabalha de forma remota e já colaborou com times em diferentes fusos, idiomas e contextos culturais.'],
  ['Posso contratar só o site?', 'Pode. A experiência digital pode nascer de uma identidade existente ou ser construída junto, dependendo do momento da marca.'],
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as CSSProperties}>{children}</div>;
}

function Marquee({ reverse = false, children }: { reverse?: boolean; children: ReactNode }) {
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        <span>{children}</span><span>{children}</span><span>{children}</span><span>{children}</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, onHover }: { project: Project; onHover: (state: CursorState) => void }) {
  return (
    <article
      className={`project-card ${project.className ?? ''}`}
      onPointerMove={(event) => onHover({ visible: true, x: event.clientX, y: event.clientY })}
      onPointerEnter={(event) => onHover({ visible: true, x: event.clientX, y: event.clientY })}
      onPointerLeave={() => onHover({ visible: false, x: 0, y: 0 })}
    >
      <a href="#contato" className="project-card__link" aria-label={`Ver projeto ${project.title}`}>
        <div className="project-card__image-wrap project-card__image-wrap--stack">
          <img src={project.image} alt="" className="project-card__image" loading="lazy" />
          <span className="project-card__view">VIEW</span>
        </div>
        <div className="project-card__meta">
          <h3>{project.title}</h3>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </a>
    </article>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cursor, setCursor] = useState<CursorState>({ visible: false, x: 0, y: 0 });

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      const progress = Math.min(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1);
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
      document.querySelectorAll<HTMLElement>('.project-card__image-wrap--stack').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const bounded = Math.max(-1, Math.min(1, distance));
        element.style.setProperty('--stack-y', `${bounded * -18}px`);
        element.style.setProperty('--stack-scale', `${1 - Math.abs(bounded) * 0.035}`);
        element.style.setProperty('--stack-rotate', `${bounded * 1.5}deg`);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className={`cursor-view ${cursor.visible ? 'cursor-view--visible' : ''}`} style={{ left: cursor.x, top: cursor.y }}>VIEW</div>
      <header className="site-header">
        <a className="header-mark" href="#começo">EdCria<span>®</span></a>
        <div className="header-links">
          <span>Links rápidos</span>
          <nav aria-label="Links rápidos">
            <a href="#começo">Começo</a><a href="#galeria">Galeria</a><a href="#trabalhos">Trabalhos</a><a href="#contato">Contato</a>
          </nav>
        </div>
        <span className="header-index">01—12</span>
      </header>

      <main>
        <section id="começo" className="hero section-shell">
          <Reveal className="hero__topline">
            <span>ESTÚDIO CRIATIVO VISUAL</span><span>DESIGNER DIGITAL ↗</span>
          </Reveal>
          <Reveal className="hero__wordmark" delay={70}><h1>EdCria<sup>™</sup></h1></Reveal>
          <Reveal className="hero__media" delay={140}>
            <img src={images.hero} alt="Retrato editorial em uma cidade iluminada" />
            <a className="hero__view" href="#galeria"><span>VIEW</span><span className="hero__view-arrow">↘</span></a>
          </Reveal>
          <Reveal className="hero__caption" delay={210}>
            <span>© 2025 / ESTÚDIO EDCRIA</span><span>FORMA, RITMO E PRESENÇA</span>
          </Reveal>
        </section>

        <section className="intro section-shell section-shell--spacious">
          <Reveal className="section-kicker"><span>01 / COMEÇO</span><span>MANIFESTO</span></Reveal>
          <Reveal className="intro__statement" delay={80}>
            <p>Mais de <em>3 anos</em> de formato digital, interações nítidas e disciplina para fazer marcas que ficam.</p>
            <a href="#contato" className="outline-button">CONTATO <span>↗</span></a>
          </Reveal>
        </section>

        <section className="services section-shell section-shell--spacious">
          <Reveal className="section-heading">
            <span className="section-kicker">© CAPACIDADES — SERVIÇOS</span>
            <h2>Serviços<sup>(6)</sup></h2>
          </Reveal>
          <div className="service-list">
            {services.map(([index, title, description], itemIndex) => (
              <Reveal className="service-row" delay={itemIndex * 45} key={title}>
                <span className="service-row__index">{index}</span><h3>{title}</h3><p>{description}</p><span className="service-row__arrow">↘</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="preview-strip section-shell">
          <Reveal className="section-kicker"><span>02 / SELEÇÃO</span><span>TRABALHOS RECENTES</span></Reveal>
          <div className="preview-strip__grid">
            {projects.slice(0, 3).map((project, index) => <Reveal key={project.title} delay={index * 80}><ProjectCard project={project} onHover={setCursor} /></Reveal>)}
          </div>
        </section>

        <section className="manifesto section-shell section-shell--spacious">
          <Reveal className="manifesto__label"><span>(03)</span><span>PASS THE BATON</span></Reveal>
          <Reveal className="manifesto__copy" delay={80}>
            <p>O EdCria Estúdio Criativo nasceu da visão de transformar <strong>ideias em identidades marcantes.</strong> Somos especialistas em design, branding e experiências digitais que unem arte, intenção e clareza.</p>
          </Reveal>
          <Reveal className="manifesto__note" delay={140}><span>PARA QUEM QUER</span><span>FAZER DIFERENTE ↘</span></Reveal>
        </section>

        <section className="marquee-section" aria-label="Palavras-chave do estúdio">
          <Marquee>OFÍCIO ✳ POSSE ✳ IDEIA ✳ PRESENÇA ✳ OFÍCIO ✳ POSSE ✳</Marquee>
          <Marquee reverse>MARCA / MOVIMENTO / MATÉRIA / MARCA / MOVIMENTO / MATÉRIA /</Marquee>
        </section>

        <section className="experience section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">04 / EXPERIÊNCIA</span><h2>Histórico<sup>(04)</sup></h2></Reveal>
          <div className="history-list">
            {history.map(([company, role, place, years], index) => (
              <Reveal className="history-row" delay={index * 55} key={company}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{company}</strong><span>{role}</span><span>{place}</span><span>{years}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="testimonials section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">05 / PROVA SOCIAL</span><h2>Depoimentos<sup>(03)</sup></h2></Reveal>
          <div className="testimonial-grid">
            {testimonials.map(([name, role, quote], index) => (
              <Reveal className="testimonial-card" delay={index * 80} key={name}>
                <span className="testimonial-card__quote">“</span><p>{quote}</p><div><strong>{name}</strong><span>{role}</span></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="galeria" className="projects section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">06 / GALERIA</span><h2>Projetos<sup>(06)</sup></h2></Reveal>
          <div className="projects-grid">
            {projects.map((project, index) => <Reveal key={project.title} delay={(index % 2) * 60}><ProjectCard project={project} onHover={setCursor} /></Reveal>)}
          </div>
        </section>

        <section className="video-showcase section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">06.5 / MOVIMENTO</span><h2>Em vídeo<sup>(01)</sup></h2></Reveal>
          <Reveal className="video-showcase__frame" delay={100}>
            <video src={videoSource} poster={images.hero} controls playsInline preload="metadata" />
            <div className="video-showcase__caption"><span>EDIÇÃO / PROCESSO / REFERÊNCIA</span><span>PLAY ↗</span></div>
          </Reveal>
        </section>

        <section className="clients section-shell section-shell--spacious">
          <Reveal className="clients__image"><img src={images.architecture} alt="Interior de um espaço de marca" loading="lazy" /></Reveal>
          <Reveal className="clients__copy" delay={80}><span className="section-kicker">07 / CLIENTES</span><p>Marcas de comida, moda, cuidado e espaço. Lugares que entendem que o detalhe também é uma forma de dizer quem são.</p><a href="#contato" className="text-link">VER CLIENTES <span>↗</span></a></Reveal>
        </section>

        <section className="pricing section-shell">
          <Reveal className="pricing__line"><span>PREÇO MENOR.</span><span>INICIAL.</span></Reveal>
          <Reveal className="pricing__line pricing__line--accent" delay={60}><span>ESCOLHA</span><span>OS PLANOS.</span></Reveal>
          <Reveal className="pricing__bottom" delay={120}><span>PARA CADA MOMENTO DA MARCA</span><a href="#contato" className="outline-button">CONVERSAR <span>↗</span></a></Reveal>
        </section>

        <section id="trabalhos" className="journal section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">08 / DIÁRIO VISUAL</span><h2>Artigo em destaque<sup>(03)</sup></h2></Reveal>
          <div className="article-grid">
            {articles.map((article, index) => <Reveal className="article-card" delay={index * 70} key={article.title}><img src={article.image} alt="" loading="lazy" /><div className="article-card__meta"><span>{article.date}</span><span>{article.tag}</span></div><h3>{article.title}</h3><a href="#contato" aria-label={`Ler ${article.title}`}>Ler artigo ↗</a></Reveal>)}
          </div>
        </section>

        <section className="faq section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">09 / FAQ</span><h2>Perguntas<sup>(04)</sup></h2></Reveal>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => {
              const isOpen = openFaq === index;
              return <Reveal className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} delay={index * 45} key={question}><button className="faq-item__button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{String(index + 1).padStart(2, '0')}</span><strong>{question}</strong><b>{isOpen ? '×' : '+'}</b></button>{isOpen && <p className="faq-item__answer">{answer}</p>}</Reveal>;
            })}
          </div>
        </section>

        <section className="process section-shell section-shell--spacious">
          <Reveal className="section-heading"><span className="section-kicker">10 / COMO ACONTECE</span><h2>Etapas<sup>(05)</sup></h2></Reveal>
          <div className="process-list">
            {['Briefing & Conexão', 'Pesquisa & Conceito', 'Desenvolvimento & Criação', 'Apresentação & Feedback', 'Entrega Final'].map((step, index) => <Reveal className="process-row" delay={index * 55} key={step}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step}</h3><span className="process-row__arrow">↘</span></Reveal>)}
          </div>
        </section>

        <section id="contato" className="contact section-shell section-shell--spacious">
          <Reveal className="section-kicker"><span>11 / CONTATO</span><span>VAMOS COMEÇAR?</span></Reveal>
          <Reveal className="contact__heading" delay={70}><h2>Uma ideia boa merece uma forma impossível de ignorar.</h2><a href="mailto:oi@edicria.studio" className="contact__email">oi@edicria.studio ↗</a></Reveal>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-top"><span>EDCRIA / 2025</span><a href="#começo">BACK TO TOP ↑</a><span>FEITO COM INTENÇÃO</span></div>
        <div className="footer-links"><a href="#começo">Começo</a><a href="#galeria">Galeria</a><a href="#trabalhos">Trabalhos</a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <div className="footer-mark">EdCria<sup>™</sup></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
