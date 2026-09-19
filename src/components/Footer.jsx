export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint font-mono">
        <span>&copy; {year} Mukassa Daniel Paulo</span>
        <span>Construído com React &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
