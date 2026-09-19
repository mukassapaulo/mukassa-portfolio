import SectionHeading from './SectionHeading'
import { IconMail, IconPhone, IconLinkedIn, IconPin, IconArrowUpRight } from './Icons'

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 border-t border-border-light bg-surface-sub bg-grid overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-light blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading num="06" kicker="Contacto" title="Vamos conversar" />

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-start">
          <div>
            <p className="font-display text-2xl md:text-3xl text-text-secondary leading-snug max-w-xl">
              Aberto a oportunidades em <span className="text-text-primary">análise financeira</span>,{' '}
              <span className="text-text-primary">gestão de risco</span> e{' '}
              <span className="text-text-primary">business intelligence</span> &mdash; em Angola ou remoto.
            </p>

            <a
              href="mailto:mukassapaulo@gmail.com"
              className="mt-9 inline-flex items-center gap-3 group"
            >
              <span className="font-display text-2xl md:text-3xl text-brand-hover group-hover:text-brand transition-colors">
                mukassapaulo@gmail.com
              </span>
              <IconArrowUpRight className="text-brand-hover group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+244949836556"
              className="flex items-center gap-3 p-4 bg-surface border border-border rounded-card hover:border-brand-border transition-colors"
            >
              <IconPhone className="text-brand shrink-0" />
              <div>
                <div className="text-sm text-text-primary">+244 949 836 556</div>
                <div className="text-xs text-text-muted">+244 951 560 522</div>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-card">
              <IconLinkedIn className="text-brand shrink-0" />
              <span className="text-sm text-text-secondary">linkedin.com/in/mukassa</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-card">
              <IconPin className="text-brand shrink-0" />
              <span className="text-sm text-text-secondary">Luanda, Angola</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
