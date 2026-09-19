const SIZE = 5

function cellColor(row, col) {
  const score = (row + 1) * (col + 1)
  if (score <= 6) return 'bg-risk-low/70'
  if (score <= 15) return 'bg-risk-mid/70'
  return 'bg-risk-high/75'
}

export default function RiskMatrix() {
  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-1.5 w-full max-w-[280px] mx-auto">
        {Array.from({ length: SIZE }).map((_, row) =>
          Array.from({ length: SIZE }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`aspect-square rounded-[2px] ${cellColor(SIZE - 1 - row, col)} transition-transform hover:scale-110`}
              style={{ animationDelay: `${(row * SIZE + col) * 22}ms` }}
            />
          )),
        )}
      </div>
      <div className="flex justify-between max-w-[280px] mx-auto mt-3 font-mono text-[9px] uppercase tracking-wider text-ink-faint">
        <span>Probabilidade &rarr;</span>
        <span>Impacto &uarr;</span>
      </div>
    </div>
  )
}
