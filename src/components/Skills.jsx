import SectionHeading from './SectionHeading'
import { IconChart, IconShield, IconCode } from './Icons'

const CORE = [
  {
    title: 'Análise & Dados',
    icon: IconChart,
    color: 'blue',
    items: ['Power BI', 'Excel avançado', 'Estatística e Probabilidade', 'Visualização de dados', 'KPI e reporting'],
  },
  {
    title: 'Risco & Controlo',
    icon: IconShield,
    color: 'brand',
    items: ['Gestão de risco', 'Controlo interno', 'Auditoria informática', 'Compliance', 'Segurança da informação'],
  },
  {
    title: 'Tecnologia',
    icon: IconCode,
    color: 'indigo',
    items: ['Desenvolvimento web', 'Bases de dados', 'Programação', 'Automatização de processos', 'Microsoft 365'],
  },
]

const coreTopBar = {
  blue: 'bg-blue',
  brand: 'bg-brand',
  indigo: 'bg-indigo',
}

const coreIconBg = {
  blue: 'bg-blue-light text-blue',
  brand: 'bg-brand-light text-brand',
  indigo: 'bg-indigo-light text-indigo',
}

const coreDot = {
  blue: 'bg-blue',
  brand: 'bg-brand',
  indigo: 'bg-indigo',
}

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
    <section id="competencias" className="py-24 md:py-32 border-t border-border-light">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="05" kicker="Competências" title="Áreas de conhecimento" />

        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {CORE.map((group) => (
            <div key={group.title} className="relative border border-border rounded-card bg-surface-sub overflow-hidden">
              <div className={`absolute top-0 inset-x-0 h-1 ${coreTopBar[group.color]}`} />
              <div className="p-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${coreIconBg[group.color]}`}>
                  <group.icon />
                </div>
                <h3 className="text-text-primary font-medium mb-4">{group.title}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-text-secondary flex items-start gap-2.5">
                      <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${coreDot[group.color]}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-16 mb-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-6">Habilidades técnicas</h3>
            <ul className="space-y-3.5">
              {TECHNICAL.map((t) => (
                <li key={t} className="text-sm text-text-secondary leading-relaxed pl-4 border-l border-border-light">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-6">
              Habilidades comportamentais
            </h3>
            <ul className="space-y-3.5">
              {BEHAVIOURAL.map((t) => (
                <li key={t} className="text-sm text-text-secondary leading-relaxed pl-4 border-l border-border-light">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-16">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-6">Idiomas</h3>
            <div className="space-y-5">
              {LANGUAGES.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-text-primary">{l.lang}</span>
                    <span className="text-text-muted font-mono text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 bg-border-light rounded-full overflow-hidden">
                    <div className="h-full bg-brand rounded-full" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-6">Áreas de interesse</h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-sm text-text-secondary border border-border rounded-full hover:border-brand-border hover:text-brand-hover hover:bg-brand-light transition-colors"
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
