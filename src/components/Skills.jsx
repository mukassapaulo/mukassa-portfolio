import SectionHeading from './SectionHeading'

const CORE = [
  {
    title: 'Análise & Dados',
    items: ['Power BI', 'Excel avançado', 'Estatística e Probabilidade', 'Visualização de dados', 'KPI e reporting'],
  },
  {
    title: 'Risco & Controlo',
    items: ['Gestão de risco', 'Controlo interno', 'Auditoria informática', 'Compliance', 'Segurança da informação'],
  },
  {
    title: 'Tecnologia',
    items: ['Desenvolvimento web', 'Bases de dados', 'Programação', 'Automatização de processos', 'Microsoft 365'],
  },
]

const TECHNICAL = [
  'Power BI — Business Intelligence, modelação e visualização de dados',
  'Microsoft 365 — Excel (avançado), Word, PowerPoint, Outlook, Teams, SharePoint, Forms',
  'Estatística e Probabilidade aplicadas à análise financeira',
  'Gestão de risco, controlo interno e auditoria informática',
  'Ferramentas de IA aplicadas à produtividade — Microsoft Copilot, Gemini, NotebookLM',
]

const BEHAVIOURAL = [
  'Comunicação clara e profissional',
  'Trabalho em equipa multidisciplinar',
  'Ética profissional e confidencialidade',
  'Elevada atenção ao detalhe',
  'Organização e gestão rigorosa de prazos',
  'Aprendizagem contínua e adaptação a novos contextos',
]

const LANGUAGES = [
  { lang: 'Português', level: 'Fluente', pct: 100 },
  { lang: 'Inglês', level: 'Intermédio', pct: 60 },
]

const INTERESTS = [
  'Desenvolvimento Tecnológico',
  'Audit & Assurance',
  'Risk Advisory',
  'Technology Consulting',
  'Financial Advisory',
  'Banca Comercial',
]

export default function Skills() {
  return (
    <section id="competencias" className="py-24 md:py-32 border-t border-line-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="05" kicker="Competências" title="Áreas de conhecimento" />

        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {CORE.map((group) => (
            <div key={group.title} className="border border-line p-6 rounded-sm bg-surface/50">
              <h3 className="text-ink font-medium mb-4">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-dim flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-16 mb-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Habilidades técnicas</h3>
            <ul className="space-y-3.5">
              {TECHNICAL.map((t) => (
                <li key={t} className="text-sm text-ink-dim leading-relaxed pl-4 border-l border-line-soft">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">
              Habilidades comportamentais
            </h3>
            <ul className="space-y-3.5">
              {BEHAVIOURAL.map((t) => (
                <li key={t} className="text-sm text-ink-dim leading-relaxed pl-4 border-l border-line-soft">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Idiomas</h3>
            <div className="space-y-5">
              {LANGUAGES.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-ink">{l.lang}</span>
                    <span className="text-ink-faint font-mono text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 bg-line-soft rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Áreas de interesse</h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-sm text-ink-dim border border-line rounded-full hover:border-gold-dim hover:text-gold-bright transition-colors"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
