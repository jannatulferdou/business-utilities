import { ActionLink } from './ActionLink'

export function ConsultationBanner() {
  return (
    <section className="consultation-banner" aria-labelledby="consultation-title">
      <div className="container consultation-banner__inner">
        <h2 id="consultation-title">Get consultant now!</h2>
        <ActionLink variant="white">Let's talk now</ActionLink>
      </div>
    </section>
  )
}
