import { contactUrl, faqs } from '../data/site'
import { ActionLink } from './ActionLink'
import { Icon } from './Icon'

export function FaqSection() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-introduction">
          <span className="eyebrow">Business Utilities</span>
          <h2 id="faq-title">
            Everything you need <span>to know</span>
          </h2>
          <p>
            Our experienced team is available to answer your questions, explain your options and
            help you choose a suitable business utilities solution for your company.
          </p>
          <p>
            From electricity and gas to utility contracts and switching options, we help businesses
            across the UK find practical solutions designed around their needs, usage and budget.
          </p>
          <p>
            Our experienced team is available to answer your questions, explain your options and
            help you choose a suitable business utilities solution for your company.
          </p>
          <ActionLink variant="blue">Talk To Our Team</ActionLink>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-item__toggle">
                  <Icon name="plus" />
                </span>
              </summary>
              <div className="faq-item__answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
          <div className="faq-contact">
            <div>
              <p className="faq-contact__label">Need more information?</p>
              <p>We're here to keep your business connected.</p>
            </div>
            <a href={contactUrl}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
