import { nabatFacts } from "@/lib/site-data"

export function NabatFactsBand() {
  return (
    <section className="nabat-facts-band" aria-label="Nabat at a glance">
      <dl className="nabat-facts-band__inner container-shell">
        {nabatFacts.map((fact) => (
          <div className="nabat-fact" key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>
              <span>{fact.value}</span>
              {fact.note && <small>{fact.note}</small>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
