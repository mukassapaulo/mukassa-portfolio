import SectionHeading from './SectionHeading'
import { IconChart, IconShield, IconGrid } from './Icons'

const PILLARS = [
  { icon: IconChart, label: 'Rigor analítico' },
  { icon: IconShield, label: 'Responsabilidade' },
  { icon: IconGrid, label: 'Decisão em dados' },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border-light">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="01" kicker="Perfil" title="Resumo profissional" />

        <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16">
          <div>
            <p className="font-display text-2xl md:text-3xl text-text-secondary leading-snug italic">
              &ldquo;Rigor analítico, responsabilidade e decisão apoiada em dados.&rdquo;
            </p>

            <div className="mt-8 space-y-3">
              {PILLARS.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand shrink-0">
                    <p.icon width="14" height="14" />
                  </span>
                  <span className="text-sm text-text-secondary">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-text-secondary leading-relaxed text-[1.05rem]">
            <p>
              Licenciado em <span className="text-text-primary">Informática de Gestão Financeira</span> pelo
              Instituto Superior de Administração e Finanças (ISAF), com perfil na intersecção entre finanças e
              tecnologia. Combino formação em análise financeira, gestão de risco e controlo interno com
              competências práticas em Business Intelligence e desenvolvimento de soluções digitais.
            </p>
            <p>
              Desenvolvi e implementei o <span className="text-brand-hover">RISKFLOW</span>, plataforma de
              gestão e monitorização de risco defendida como trabalho de fim de curso com a classificação de{' '}
              <span className="text-text-primary">18 valores</span>.
            </p>
            <p>
              Procuro contribuir para organizações do sector financeiro e tecnológico em funções que exijam
              rigor analítico, responsabilidade e decisão apoiada em dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
