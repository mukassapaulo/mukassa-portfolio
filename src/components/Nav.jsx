import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#sobre', label: 'Sobre', num: '01' },
  { href: '#experiencia', label: 'Experiência', num: '02' },
  { href: '#riskflow', label: 'RISKFLOW', num: '03' },
  { href: '#formacao', label: 'Formação', num: '04' },
  { href: '#competencias', label: 'Competências', num: '05' },
  { href: '#contacto', label: 'Contacto', num: '06' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#topo" className="font-display text-lg tracking-tight text-ink flex items-baseline gap-2">
          <span className="text-gold">M</span>DP
          <span className="hidden sm:inline text-[11px] font-mono text-ink-faint tracking-wider uppercase ml-2">
            Gestão de Risco
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group px-3 py-2 text-sm text-ink-dim hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <span className="font-mono text-[10px] text-gold-dim group-hover:text-gold transition-colors">
                {l.num}
              </span>
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-3 px-4 py-1.5 text-sm border border-gold-dim text-gold-bright rounded-full hover:bg-gold hover:text-canvas hover:border-gold transition-colors"
          >
            Falar comigo
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ink w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Abrir menu"
        >
          <span className={`block h-px w-5 bg-current transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-current transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-canvas border-b border-line px-6 pb-6 pt-2 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-ink-dim hover:text-ink flex items-center gap-2 border-b border-line-soft last:border-0"
            >
              <span className="font-mono text-[10px] text-gold-dim">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
