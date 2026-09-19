export default function SectionHeading({ num, title, kicker }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
      <div>
        {kicker && (
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-brand-hover mb-3">{kicker}</div>
        )}
        <h2 className="font-display text-3xl md:text-4xl text-text-primary tracking-tight">{title}</h2>
      </div>
      <span className="num text-5xl md:text-6xl text-border font-display select-none">{num}</span>
    </div>
  )
}
