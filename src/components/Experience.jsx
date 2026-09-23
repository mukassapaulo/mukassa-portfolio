import SectionHeading from './SectionHeading'

const BULLETS = [
  'Integração em equipas bancárias em contexto real de operação, com exposição a atendimento e análise de informação de clientes.',
  'Contribuí para a redução do tempo médio de resposta, através da reorganização do fluxo de tratamento de pedidos e da priorização por criticidade.',
  'Apoiei a redução de reclamações de clientes, ao identificar as causas recorrentes das ocorrências e propor correcções no ponto de origem do processo.',
  'Certificado do curso de curta duração Programa de Navegadores BAI 2025 (28 horas), com módulos em Comunicação Institucional e Ética Profissional, Compliance, Qualidade de Serviço, Canais de Atendimento e Gestão de Senhas, Experiência do Cliente, Operações Bancárias Gerais e Expressão Oral e Escrita — ISAF, Novembro de 2025.',
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 border-t border-border-light">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="02" kicker="Percurso" title="Experiência profissional" />

        <div className="relative md:pl-10">
          <div className="hidden md:block absolute left-0 top-2 bottom-[-3rem] w-px bg-gradient-to-b from-brand via-border to-transparent" />
          <div className="hidden md:block absolute left-[-4.5px] top-[5px] w-[10px] h-[10px] rounded-full bg-brand ring-[4px] ring-brand-light" />

          <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16">
            <div className="flex md:flex-col gap-4 md:gap-1 items-baseline md:items-start">
              <span className="num text-brand-hover text-lg">2025&ndash;2026</span>
              <span className="text-text-muted text-sm">Luanda, Angola</span>
            </div>

            <div>
              <h3 className="font-display text-2xl text-text-primary">Navegador BAI</h3>
              <p className="text-sm text-text-muted mt-1 italic">
                Programa de Extensão Universitária &middot; Banco BAI, em parceria com o ISAF
              </p>

              <ul className="mt-7 space-y-4">
                {BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-4 text-text-secondary leading-relaxed">
                    <span className="num text-xs text-brand-border mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
