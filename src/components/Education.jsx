import SectionHeading from './SectionHeading'

const ACADEMIC = [
  {
    degree: 'Licenciatura em Informática de Gestão Financeira',
    place: 'Instituto Superior de Administração e Finanças (ISAF) | Academia BAI · Luanda, Angola',
    years: '2022 – 2026',
    note: 'Grau de licenciado concluído. Trabalho de fim de curso: RISKFLOW — plataforma de gestão de risco (18 valores).',
  },
  {
    degree: 'Técnico de Informática',
    place: 'Instituto Politécnico Privado Elsamina · Luanda, Angola',
    years: null,
    note: null,
  },
]

const COMPLEMENTARY = [
  { title: 'Microsoft Power BI to Business Intelligence and Data Science', org: 'Data Science Academy' },
  { title: 'Fundamentos de Data Science e Inteligência Artificial', org: 'Data Science Academy' },
  { title: 'Data-Driven Decision Making', org: 'Coursera (PwC)' },
  { title: 'Gestão Ágil de Projectos', org: 'HP LIFE (HP Foundation)' },
  { title: 'Oficina de Oratória', org: 'LIDERA' },
  { title: 'Programa de Navegadores BAI 2025 (28h)', org: 'ISAF / Banco BAI' },
]

export default function Education() {
  return (
    <section id="formacao" className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="04" kicker="Formação" title="Académica &amp; complementar" />

        <div className="grid md:grid-cols-2 gap-14 md:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Formação académica</h3>
            <div className="space-y-8">
              {ACADEMIC.map((item) => (
                <div key={item.degree} className="border-l border-line pl-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-ink font-medium">{item.degree}</h4>
                  </div>
                  {item.years && <p className="num text-xs text-gold-dim mt-1">{item.years}</p>}
                  <p className="text-sm text-ink-faint italic mt-1.5">{item.place}</p>
                  {item.note && <p className="text-sm text-ink-dim mt-2.5 leading-relaxed">{item.note}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">
              Formação complementar
            </h3>
            <ul className="divide-y divide-line-soft border-t border-b border-line-soft">
              {COMPLEMENTARY.map((c) => (
                <li key={c.title} className="py-3.5 flex items-baseline justify-between gap-4">
                  <span className="text-ink-dim text-sm leading-snug">{c.title}</span>
                  <span className="text-ink-faint text-xs font-mono shrink-0 text-right">{c.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
