import { EnergyServices } from './components/EnergyServices'
import { FaqSection } from './components/FaqSection'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <EnergyServices />
        <FaqSection />
      </main>
    </div>
  )
}
