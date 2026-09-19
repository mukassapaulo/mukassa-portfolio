import SectionHeading from './SectionHeading'
import { IconMail, IconPhone, IconLinkedIn, IconPin, IconArrowUpRight } from './Icons'

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-line-soft bg-canvas-raised bg-grid overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="06" kicker="Contacto" title="Vamos conversar" />

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
          <div>
            <p className="font-display text-2xl md:text-3xl text-ink-dim leading-snug max-w-xl">
              Aberto a oportunidades em <span className="text-ink">análise financeira</span>,{' '}
              <span className="text-ink">gestão de risco</span> e{' '}
              <span className="text-ink">business intelligence</span> &mdash; em Angola ou remoto.
            </p>

            <a
              href="mailto:mukassapaulo@gmail.com"
              className="mt-9 inline-flex items-center gap-3 group"
            >
              <span className="font-display text-2xl md:text-3xl text-gold-bright group-hover:text-gold transition-colors">
                mukassapaulo@gmail.com
              </span>
              <IconArrowUpRight className="text-gold-bright group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+244949836556"
              className="flex items-center gap-3 p-4 border border-line rounded-sm hover:border-gold-dim transition-colors"
            >
              <IconPhone className="text-gold shrink-0" />
              <div>
                <div className="text-sm text-ink">+244 949 836 556</div>
                <div className="text-xs text-ink-faint">+244 951 560 522</div>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 border border-line rounded-sm">
              <IconLinkedIn className="text-gold shrink-0" />
              <span className="text-sm text-ink-dim">linkedin.com/in/mukassa</span>
            </div>
            <div className="flex items-center gap-3 p-4 border border-line rounded-sm">
              <IconPin className="text-gold shrink-0" />
              <span className="text-sm text-ink-dim">Luanda, Angola</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
