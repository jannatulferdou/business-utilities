import { energyServices } from '../data/site'

export function EnergyServices() {
  return (
    <section
      className="energy-services section-space"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <h2 id="services-title">Business Energy Services</h2>
        <div className="energy-services__grid">
          {energyServices.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__image">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width="800"
                  height="360"
                  loading="lazy"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
