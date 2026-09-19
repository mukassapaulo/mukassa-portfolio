const SIZE = 5

function cellColor(row, col) {
  const score = (row + 1) * (col + 1)
  if (score <= 6) return 'bg-green'
  if (score <= 15) return 'bg-yellow'
  return 'bg-red'
}

export default function RiskMatrix() {
  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-1.5 w-full max-w-[280px] mx-auto">
        {Array.from({ length: SIZE }).map((_, row) =>
          Array.from({ length: SIZE }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`aspect-square rounded-[3px] opacity-80 hover:opacity-100 ${cellColor(SIZE - 1 - row, col)} transition-transform hover:scale-110`}
              style={{ animationDelay: `${(row * SIZE + col) * 22}ms` }}
            />
          )),
        )}
      </div>
      <div className="flex justify-between max-w-[280px] mx-auto mt-3 font-mono text-[9px] uppercase tracking-wider text-text-muted">
        <span>Probabilidade &rarr;</span>
        <span>Impacto &uarr;</span>
      </div>
    </div>
  )
}
