import SectionHeading from './SectionHeading'
import VennDiagram from './VennDiagram'
import { IconCap, IconGrid, IconTag } from './Icons'

const FACTS = [
  {
    icon: IconCap,
    color: 'blue',
    title: 'Formação',
    text: 'Licenciado em Informática de Gestão Financeira pelo ISAF — perfil na intersecção entre finanças e tecnologia.',
  },
  {
    icon: IconGrid,
    color: 'brand',
    title: 'RISKFLOW',
    text: 'Plataforma de gestão de risco que desenvolvi e implementei como trabalho de fim de curso, com 18 valores.',
  },
  {
    icon: IconTag,
    color: 'green',
    title: 'Objectivo',
    text: 'Contribuir para organizações do sector financeiro e tecnológico com rigor analítico e decisão apoiada em dados.',
  },
]

const colorClasses = {
  blue: 'bg-blue-light text-blue',
  brand: 'bg-brand-light text-brand',
  green: 'bg-green-light text-green',
}

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border-light">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="01" kicker="Perfil" title="Resumo profissional" />

        <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-10 md:gap-16 items-start">
          <p className="font-display text-2xl md:text-3xl text-text-secondary leading-snug italic">
            &ldquo;Rigor analítico, responsabilidade e decisão apoiada em dados.&rdquo;
          </p>

          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {FACTS.map((f) => (
              <div
                key={f.title}
                className={`bg-surface border border-border rounded-card p-5 ${f.title === 'Objectivo' ? 'sm:col-span-2' : ''}`}
              >
                <span className={`w-9 h-9 rounded-full flex items-center justify-center mb-3 ${colorClasses[f.color]}`}>
                  <f.icon width="16" height="16" />
                </span>
                <h3 className="text-text-primary font-medium mb-1.5">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <VennDiagram />
        </div>
      </div>
    </section>
  )
}
