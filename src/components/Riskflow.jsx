import SectionHeading from './SectionHeading'
import RiskMatrix from './RiskMatrix'
import { IconArrowUpRight } from './Icons'

const STACK = [
  'Next.js 16',
  'FastAPI 0.136',
  'Python 3.13',
  'PostgreSQL 17',
  'Redis (TLS)',
  'GitHub Actions CI/CD',
]

const BULLETS = [
  'Responsável por todo o ciclo: levantamento de requisitos, modelação de dados, desenvolvimento, testes e publicação em produção.',
  'Regista ocorrências, atribui níveis de probabilidade e impacto, gera a matriz de risco e alerta automaticamente em casos de risco cambial (VaR), risco de liquidez (CFaR) e vencimentos.',
  'Solução acessível em linha e apresentada em defesa pública, com a classificação de 18 valores.',
]

export default function Riskflow() {
  return (
    <section id="riskflow" className="relative py-24 md:py-32 border-t border-line-soft bg-canvas-raised bg-grid">
      <div className="pointer-events-none absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="03" kicker="Projecto em destaque" title="RISKFLOW" />

        <div className="grid md:grid-cols-[1fr_320px] gap-14 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-ink-faint mb-2">
              Trabalho de fim de curso &middot; 2026 &middot; 18 valores
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug">
              Plataforma de gestão e monitorização de risco corporativo
            </h3>

            <p className="mt-6 text-ink-dim leading-relaxed text-[1.05rem] max-w-2xl">
              Aplicação web que centraliza o registo, a classificação e o acompanhamento de riscos
              organizacionais, substituindo o controlo disperso em folhas de cálculo por um repositório único
              com histórico e indicadores. Concebida, desenvolvida e implementada integralmente por mim.
            </p>

            <ul className="mt-8 space-y-4 max-w-2xl">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex gap-4 text-ink-dim leading-relaxed">
                  <span className="num text-xs text-gold-dim mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-mono text-ink-dim border border-line rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href="https://riskflow-clean.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-canvas text-sm font-medium rounded-full hover:bg-gold-bright transition-colors"
            >
              Ver demonstração
              <IconArrowUpRight />
            </a>
          </div>

          <div className="bg-surface border border-line p-6 md:p-8 rounded-sm">
            <RiskMatrix />
            <p className="mt-6 text-xs text-ink-faint leading-relaxed text-center">
              Matriz de risco: classificação automática por probabilidade &times; impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
