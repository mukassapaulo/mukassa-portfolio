import profile from '../assets/profile.jpg'
import GaugeRing from './GaugeRing'
import { IconMail, IconPhone, IconLinkedIn, IconPin, IconArrowDown, IconGrid, IconTag } from './Icons'

export default function Hero() {
  return (
    <section id="topo" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-brand-light blur-[120px]" />
      <div className="pointer-events-none absolute top-[20%] left-[-8%] w-[380px] h-[380px] rounded-full bg-blue-light blur-[110px] opacity-70" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[15%] w-[300px] h-[300px] rounded-full bg-green-light blur-[100px] opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-10 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-7">
            <span className="w-8 h-px bg-brand-border" />
            Luanda, Angola &middot; Disponível para novos desafios
          </div>

          <h1 className="font-display text-[13vw] leading-[0.95] md:text-[4.6rem] md:leading-[0.95] text-text-primary tracking-tight">
            Mukassa
            <br />
            <span className="italic text-text-secondary">Daniel Paulo</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg text-text-secondary leading-relaxed">
            <span className="text-text-primary font-medium">Licenciado em Informática de Gestão Financeira</span>{' '}
            &mdash; actuo na intersecção entre finanças e tecnologia: análise financeira, gestão de risco,
            controlo interno e decisão apoiada em dados.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#riskflow"
              className="px-5 py-2.5 bg-brand text-surface text-sm font-medium rounded-full hover:bg-brand-hover transition-colors"
            >
              Ver o RISKFLOW
            </a>
            <a
              href="#contacto"
              className="px-5 py-2.5 border border-border text-text-primary text-sm rounded-full hover:border-brand-border hover:text-brand-hover transition-colors"
            >
              Contactar
            </a>
          </div>

          <div className="mt-11 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            <div className="flex items-center gap-2.5 bg-surface border border-border rounded-card p-3">
              <GaugeRing value={18} max={20} size={44} stroke={4} label="18" sublabel="/20" />
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted leading-tight">
                Nota
                <br />
                final
              </div>
            </div>
            <div className="bg-surface border border-border rounded-card p-3 flex flex-col justify-center">
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted mb-1.5">Idiomas</div>
              <div className="text-sm text-text-primary">PT &middot; EN</div>
              <div className="mt-1.5 flex gap-1">
                <span className="h-1 flex-1 rounded-full bg-brand" />
                <span className="h-1 flex-1 rounded-full bg-brand/50" />
              </div>
            </div>
            <div className="bg-surface border border-border rounded-card p-3 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-blue-light flex items-center justify-center text-blue shrink-0">
                <IconTag width="13" height="13" />
              </span>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Foco</div>
                <div className="text-sm text-text-primary mt-0.5">Risco &amp; BI</div>
              </div>
            </div>
            <a
              href="#riskflow"
              className="bg-surface border border-border rounded-card p-3 flex items-center gap-2.5 hover:border-brand-border transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-green-light flex items-center justify-center text-green shrink-0">
                <IconGrid width="13" height="13" />
              </span>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Projecto</div>
                <div className="text-sm text-text-primary mt-0.5">RISKFLOW</div>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal [animation-delay:150ms] flex md:justify-end">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute -inset-3 border border-border rounded-[2px]" />
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-brand" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-brand" />
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-alt">
              <img
                src={profile}
                alt="Retrato de Mukassa Daniel Paulo"
                className="w-full h-full object-cover duotone-portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/10 via-transparent to-brand/10 mix-blend-multiply" />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-text-muted">
              <span>MDP &mdash; 01</span>
              <span>Gestão de Risco</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 mt-16 md:mt-20">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border-light pt-6 text-sm text-text-secondary">
          <a href="mailto:mukassapaulo@gmail.com" className="flex items-center gap-2 hover:text-brand-hover transition-colors">
            <IconMail className="text-brand-border" /> mukassapaulo@gmail.com
          </a>
          <a href="tel:+244949836556" className="flex items-center gap-2 hover:text-brand-hover transition-colors">
            <IconPhone className="text-brand-border" /> +244 949 836 556
          </a>
          <span className="flex items-center gap-2">
            <IconLinkedIn className="text-brand-border" /> linkedin.com/in/mukassa
          </span>
          <span className="flex items-center gap-2">
            <IconPin className="text-brand-border" /> Luanda, Angola
          </span>
        </div>
      </div>

      <a
        href="#sobre"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted hover:text-brand-hover transition-colors"
        aria-label="Descer para a secção Sobre"
      >
        <IconArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}
