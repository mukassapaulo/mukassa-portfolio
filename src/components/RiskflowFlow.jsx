import { IconDocument, IconTag, IconGrid, IconBell, IconArrowRight } from './Icons'

const STEPS = [
  { icon: IconDocument, label: 'Registo', desc: 'Ocorrências de risco' },
  { icon: IconTag, label: 'Classificação', desc: 'Probabilidade & impacto' },
  { icon: IconGrid, label: 'Matriz', desc: 'Visualização consolidada' },
  { icon: IconBell, label: 'Alertas', desc: 'VaR, CFaR & vencimentos' },
]

export default function RiskflowFlow() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-0 py-2">
      {STEPS.map((step, i) => (
        <div key={step.label} className="flex sm:flex-1 items-center gap-3">
          <div className="flex-1 sm:flex-none sm:w-full flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2 bg-surface border border-border rounded-card p-4">
            <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center text-brand shrink-0">
              <step.icon width="16" height="16" />
            </div>
            <div>
              <div className="text-sm font-medium text-text-primary">{step.label}</div>
              <div className="text-xs text-text-muted mt-0.5">{step.desc}</div>
            </div>
          </div>
          {i < STEPS.length - 1 && (
            <IconArrowRight className="hidden sm:block text-border shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}
