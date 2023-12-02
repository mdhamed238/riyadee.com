export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const tiers = [
  {
    id: 'architectural-design',
    title: 'Architectural designs',
    description: 'Empower your vision with our comprehensive design services.',
    features: [
      'Tailor-made designs to suit your needs',
      'Leading design offices',
      'Interactive 3D Models',
      'Diverse Plan Models',
    ],
  },

  {
    id: 'construction-materials',
    title: 'Construction Materials',
    description:
      'Build with confidence using top-quality construction materials.',
    features: [
      'Basic Materials: Cement, iron and formwork',
      'Finishing Materials: Paint, plumbing, electricity and more',
      'Hardware Selection: Everything from electrical outlets to pipes.',
    ],
  },
  {
    id: 'execution-and-monitoring',
    title: 'Execution and Monitoring',
    description:
      'Bring your vision to life with expert execution and seamless monitoring.',
    features: ['Renovation', 'Rehabilitation', 'Site Monitoring'],
  },
  {
    id: 'equipment-rental',
    title: 'Equipment Rental',
    description: 'Power your project with the right equipment.',
    features: [
      'Excavation Equipment: Dig deep with powerful excavators and bulldozers',
      'Unloading Equipment',
      'Handling Equipment: cranes and versatile forklifts',
    ],
  },
]

export const smartHomePricing = {
  title: 'Smart home',
  description:
    'Tailor your smart home experience with seamless control and personalized living through our innovative IntelliLiving Hub solutions.',
  price: '4900',
}
export const greenHomePricing = {
  title: 'Green home',
  description:
    'Tailor your smart home experience with seamless control and personalized living through our innovative IntelliLiving Hub solutions.',
  price: '4900',
}
