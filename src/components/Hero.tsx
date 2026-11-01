import { ActionLink } from './ActionLink'
import { Icon } from './Icon'

const benefits = [
  'Cost-effective utilities solutions',
  'Flexible payment options',
  'Dedicated support team available 24/7',
]

export function Hero() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="brand-tag">
            <span>D</span> &amp; <span>A</span> Business
          </span>
          <h1 id="page-title">Business Utilities</h1>
          <p className="hero__description">
            Keep your business running with reliable electricity and gas. D&amp;A Business Solutions
            helps you compare flexible energy plans and find options that fit your business needs.
          </p>
          <ul className="hero__benefits">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <Icon name="check" />
                {benefit}
              </li>
            ))}
          </ul>
          <ActionLink>Get a Free Quote</ActionLink>
        </div>
        <div className="hero__image">
          <img
            src="/images/business-utilities.jpg"
            alt="A hand holding a glowing light bulb with green sustainable energy symbols"
            width="678"
            height="452"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
