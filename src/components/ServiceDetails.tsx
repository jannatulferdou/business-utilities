import { serviceLinks } from '../data/site'
import { ActionLink } from './ActionLink'
import { Icon } from './Icon'

const features = [
  {
    icon: 'energy',
    title: 'Reliable Energy Supply',
    description: 'Keep your business operating with dependable electricity and gas services.',
  },
  {
    icon: 'solutions',
    title: 'Flexible Solutions',
    description:
      'Explore practical telephone and broadband options suited to your business requirements.',
  },
  {
    icon: 'support',
    title: 'Personalised Support',
    description:
      'Get dedicated guidance and support throughout your business connectivity journey.',
  },
] as const

export function ServiceDetails() {
  return (
    <section
      className="service-details section-space"
      id="utilities-details"
      aria-labelledby="utilities-title"
    >
      <div className="container service-details__layout">
        <article className="service-details__article">
          <img
            className="service-details__cover"
            src="/images/utilities-service.webp"
            alt="Business professionals discussing their services in a meeting"
            loading="lazy"
          />
          <h2 id="utilities-title">
            Reliable business utilities services keep your business operating efficiently
          </h2>
          <p>
            A reliable utilities connection is essential for modern businesses. From powering your
            office operations to managing everyday expenses, your business needs dependable utility
            services.
          </p>
          <p>
            At D&amp;A Business Solutions, we help businesses find suitable utilities solutions
            based on their requirements. We can help you explore flexible options designed to
            provide reliable services while keeping your business costs manageable and efficient.
          </p>
          <h3>Business Utilities</h3>
          <p>
            Whether you are starting a new business, moving premises or reviewing your existing
            communication services, we can help you understand your options and request a quote
            based on your business requirements.
          </p>
          <ul className="service-details__checklist">
            <li>
              <Icon name="check" />
              <span>Get reliable utilities solutions designed around your business needs</span>
            </li>
            <li>
              <Icon name="check" />
              <span>
                Speak with our support team on WhatsApp{' '}
                <a href="https://wa.me/447359112364" target="_blank" rel="noopener noreferrer">
                  +44 7359 112364
                </a>
              </span>
            </li>
            <li>
              <Icon name="check" />
              <span>
                Alternatively, email us at{' '}
                <a href="mailto:contactus@dabusinesssolutions.com">
                  contactus@dabusinesssolutions.com
                </a>
              </span>
            </li>
            <li>
              <Icon name="check" />
              <span>
                For updates and offers, follow us on our{' '}
                <a
                  className="service-details__facebook"
                  href="https://www.facebook.com/dabusiness2019"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                >
                  <Icon name="facebook" />
                </a>{' '}
                page
              </span>
            </li>
          </ul>
          <div className="service-details__gallery">
            <img
              src="/images/business-electricity.jpg"
              alt="Electricity transmission pylons and power lines supplying business premises"
              width="1200"
              height="801"
              loading="lazy"
            />
            <img
              src="/images/business-gas.jpg"
              alt="Blue natural gas flames burning on a gas hob"
              width="640"
              height="480"
              loading="lazy"
            />
          </div>
          <div className="service-features">
            {features.map((feature) => (
              <section className="service-feature" key={feature.title}>
                <Icon name={feature.icon} />
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </section>
            ))}
          </div>
        </article>
        <aside className="service-sidebar" aria-label="Services and support">
          <nav aria-label="Our services">
            <ul className="service-navigation">
              {serviceLinks.map((service) => (
                <li key={service.title}>
                  <a href={service.href} aria-current={service.current ? 'page' : undefined}>
                    <span>{service.title}</span>
                    <Icon name="chevron" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="support-card-frame">
            <section className="support-card" aria-labelledby="support-title">
              <img
                className="support-card__image"
                src="/images/business-support.jpg"
                alt="Business energy support"
                loading="lazy"
              />
              <h3 id="support-title">
                Need help?
                <br />
                Feel free to contact us
              </h3>
              <p>
                Our mission is to empower businesses of all sizes with practical and reliable
                business solutions.
              </p>
              <div className="support-card__action">
                <ActionLink variant="white">Get in Touch</ActionLink>
                <img src="/images/contact-arrow.png" alt="" width="62" height="72" loading="lazy" />
              </div>
            </section>
          </div>
        </aside>
      </div>
    </section>
  )
}
