import profile from '../assets/profile.jpg'
import { IconMail, IconPhone, IconLinkedIn, IconPin, IconArrowDown } from './Icons'

export default function Hero() {
  return (
    <section id="topo" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-grid bg-noise">
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-ink-faint mb-7">
            <span className="w-8 h-px bg-gold-dim" />
            Luanda, Angola &middot; Disponível para novos desafios
          </div>

          <h1 className="font-display text-[13vw] leading-[0.95] md:text-[4.6rem] md:leading-[0.95] text-ink tracking-tight">
            Mukassa
            <br />
            <span className="italic text-ink-dim">Daniel Paulo</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg text-ink-dim leading-relaxed">
            <span className="text-ink font-medium">Licenciado em Informática de Gestão Financeira</span> &mdash;
            actuo na intersecção entre finanças e tecnologia: análise financeira, gestão de risco, controlo
            interno e decisão apoiada em dados.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#riskflow"
              className="px-5 py-2.5 bg-gold text-canvas text-sm font-medium rounded-full hover:bg-gold-bright transition-colors"
            >
              Ver o RISKFLOW
            </a>
            <a
              href="#contacto"
              className="px-5 py-2.5 border border-line text-ink text-sm rounded-full hover:border-gold-dim hover:text-gold-bright transition-colors"
            >
              Contactar
            </a>
          </div>

          <dl className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl border-t border-line-soft pt-6">
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">TFC</dt>
              <dd className="num text-2xl text-gold-bright mt-1">18<span className="text-ink-faint text-sm">/20</span></dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">Idiomas</dt>
              <dd className="text-sm text-ink mt-1.5">PT &middot; EN</dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">Foco</dt>
              <dd className="text-sm text-ink mt-1.5">Risco &amp; BI</dd>
            </div>
            <div>
              <dt className="text-[11px] font-mono uppercase tracking-wider text-ink-faint">Projecto</dt>
              <dd className="text-sm text-ink mt-1.5">RISKFLOW</dd>
            </div>
          </dl>
        </div>

        <div className="reveal [animation-delay:150ms] flex md:justify-end">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute -inset-3 border border-line rounded-[2px]" />
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-gold" />
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={profile}
                alt="Retrato de Mukassa Daniel Paulo"
                className="w-full h-full object-cover duotone-portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-gold/10 mix-blend-multiply" />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              <span>MDP &mdash; 01</span>
              <span>Gestão de Risco</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 mt-16 md:mt-20">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line-soft pt-6 text-sm text-ink-dim">
          <a href="mailto:mukassapaulo@gmail.com" className="flex items-center gap-2 hover:text-gold-bright transition-colors">
            <IconMail className="text-gold-dim" /> mukassapaulo@gmail.com
          </a>
          <a href="tel:+244949836556" className="flex items-center gap-2 hover:text-gold-bright transition-colors">
            <IconPhone className="text-gold-dim" /> +244 949 836 556
          </a>
          <span className="flex items-center gap-2">
            <IconLinkedIn className="text-gold-dim" /> linkedin.com/in/mukassa
          </span>
          <span className="flex items-center gap-2">
            <IconPin className="text-gold-dim" /> Luanda, Angola
          </span>
        </div>
      </div>

      <a
        href="#sobre"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-gold-bright transition-colors"
        aria-label="Descer para a secção Sobre"
      >
        <IconArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}
