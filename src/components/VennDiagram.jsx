const FINANCE = [
  'Contabilidade Geral I & II',
  'Contabilidade Analítica',
  'Cálculo e Operações Financeiras',
  'Finanças Empresariais',
  'Introdução à Economia',
  'Fiscalidade',
  'Introdução às Organizações e à Gestão',
  'Gestão de Recursos Humanos',
]

const TECH = [
  'Programação I & II',
  'Base de Dados I & II',
  'Redes de Computadores',
  'Sistemas Operativos I & II',
  'Arquitetura de Computadores',
  'Desenvolvimento de Software',
  'Linguagens e Tecnologias Web',
  'Gestão de Redes Informáticas',
]

const OVERLAP = [
  'Probabilidades e Estatística',
  'Auditoria Informática',
  'Segurança Informática em Redes',
  'Direito Informático',
]

export default function VennDiagram() {
  return (
    <div className="relative bg-surface-sub border border-border rounded-card p-6 md:p-12 overflow-hidden">
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl text-text-primary">Finanças &times; Tecnologia</h3>
        <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
          Disciplinas do plano curricular &mdash; Licenciatura em Informática de Gestão Financeira, ISAF
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-blue-light" />
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-indigo-light" />

        <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-start">
          <div>
            <h4 className="text-blue font-mono text-xs uppercase tracking-[0.2em] mb-4 text-center md:text-left">
              Finanças
            </h4>
            <ul className="space-y-2.5">
              {FINANCE.map((item) => (
                <li key={item} className="text-sm text-text-secondary flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-blue mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-56 md:mt-10">
            <div className="bg-surface border-2 border-brand rounded-card p-5 shadow-sm">
              <h4 className="text-brand font-mono text-xs uppercase tracking-[0.2em] mb-4 text-center">
                Risco &amp; Dados
              </h4>
              <ul className="space-y-2.5">
                {OVERLAP.map((item) => (
                  <li key={item} className="text-sm text-text-primary flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-indigo font-mono text-xs uppercase tracking-[0.2em] mb-4 text-center md:text-right">
              Tecnologia
            </h4>
            <ul className="space-y-2.5">
              {TECH.map((item) => (
                <li key={item} className="text-sm text-text-secondary flex items-start md:justify-end gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo mt-2 shrink-0 md:order-2" />
                  <span className="md:text-right">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
