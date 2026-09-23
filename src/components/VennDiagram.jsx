export default function VennDiagram() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 240 160" width="100%" className="max-w-[280px]">
        <circle cx="95" cy="80" r="62" fill="var(--color-blue)" opacity="0.18" stroke="var(--color-blue)" strokeWidth="1.5" />
        <circle cx="145" cy="80" r="62" fill="var(--color-brand)" opacity="0.18" stroke="var(--color-brand)" strokeWidth="1.5" />
        <text x="62" y="52" textAnchor="middle" className="fill-blue" style={{ font: '600 11px var(--font-body)' }}>
          Finanças
        </text>
        <text x="178" y="52" textAnchor="middle" className="fill-brand-hover" style={{ font: '600 11px var(--font-body)' }}>
          Tecnologia
        </text>
        <text
          x="120"
          y="83"
          textAnchor="middle"
          className="fill-text-primary"
          style={{ font: '700 11px var(--font-mono)' }}
        >
          RISCO &amp;
        </text>
        <text
          x="120"
          y="97"
          textAnchor="middle"
          className="fill-text-primary"
          style={{ font: '700 11px var(--font-mono)' }}
        >
          DADOS
        </text>
      </svg>
      <p className="text-xs text-text-muted mt-2 text-center max-w-[220px]">
        Perfil na intersecção entre as duas áreas
      </p>
    </div>
  )
}
