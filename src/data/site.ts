interface EnergyService {
  title: string
  description: string
  image: string
  imageAlt: string
}
interface FrequentlyAskedQuestion {
  question: string
  answer: string
}

export const contactUrl = 'https://dabusinesssolutions.com/contact.html'

export const serviceLinks = [
  { title: 'Business Utilities', href: '#utilities-details', current: true },
  {
    title: 'Payment Service & PDQ Machine',
    href: 'https://dabusinesssolutions.com/payment-service-pdq-machine.html',
  },
  {
    title: 'Business Telephone & Broadband',
    href: 'https://dabusinesssolutions.com/business-telephone-and-broadband.html',
  },
  { title: 'Business Bank', href: 'https://dabusinesssolutions.com/business-bank.html' },
  { title: 'Business Insurance', href: 'https://dabusinesssolutions.com/business-insurance.html' },
  { title: 'IT Management', href: 'https://dabusinesssolutions.com/web-development.html' },
]

export const energyServices: readonly EnergyService[] = [
  {
    title: 'Business Electricity',
    description: 'Compare electricity plans for your premises and usage.',
    image: '/images/business-electricity.jpg',
    imageAlt: 'Isometric illustration of businesses and energy costs',
  },
  {
    title: 'Business Gas',
    description: 'Explore gas contracts that suit your business requirements.',
    image: '/images/business-gas.jpg',
    imageAlt: 'Connected business services on a blue digital platform',
  },
  {
    title: 'Energy Switching Support',
    description: 'Review your contract and compare available suppliers.',
    image: '/images/energy-switching.jpg',
    imageAlt: 'Illustration of connected business systems and cloud services',
  },
]

export const faqs: readonly FrequentlyAskedQuestion[] = [
  {
    question: 'What business utilities services do you provide?',
    answer:
      'We provide business utilities solutions including electricity, gas and related services designed to help businesses stay connected and operate efficiently.',
  },
  {
    question: 'Can you help me find a suitable utilities solution for my business?',
    answer:
      'Yes. We can discuss your business requirements and help you explore suitable utilities options based on your needs, location and expected usage.',
  },
  {
    question: 'Are your utilities solutions suitable for small businesses?',
    answer:
      'Absolutely. Our solutions can be tailored to businesses of different sizes, from small businesses and start-ups to established companies.',
  },
  {
    question: 'Can you help if my existing contract is coming to an end?',
    answer:
      'Yes. If your current utilities contract is approaching renewal, contact us and we can discuss your requirements and available options.',
  },
  {
    question: 'Do you provide support after I switch?',
    answer:
      'Yes. Our team remains available to answer questions and provide support whenever you need assistance with your business services.',
  },
  {
    question: 'How can I get a business utilities quote?',
    answer:
      'Simply contact our team and tell us about your business requirements. We will discuss your needs and help you explore suitable options.',
  },
]
