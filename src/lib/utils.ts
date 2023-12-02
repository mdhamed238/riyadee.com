export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false
  }

  return true
}

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}

const electricity = [
  'Regular inspections for electricity',
  'Minor repairs for electricity',
  'Priority service scheduling for electricity',
]
const plumbing = [
  'Regular inspections for plumbing',
  'Minor repairs for plumbing',
  'Priority service scheduling for plumbing',
]

const hvac = [
  'Comprehensive HVAC care',
  'Bi-monthly inspections for HVAC',
  'Priority scheduling for HVAC',
]

const carpentry = [
  'Carpentry services included',
  'Unlimited service calls for carpentry',
  'Priority scheduling and discounted rates for carpentry',
]

export const services = ['electricity', 'plumbing', 'HVAC', 'carpentry']

export const insurancePricingPlans = [
  {
    name: 'Bronze',
    description: 'Essential home care for electricity and plumbing essentials.',
    price: '990',
    features: electricity
      .concat(plumbing)
      .map((el) => ({ name: el, included: true }))
      .concat(
        hvac.concat(carpentry).map((el) => ({ name: el, included: false })),
      ),

    featured: false,
  },
  {
    name: 'Silver',
    description:
      'Enhanced coverage for a comfortable and well-maintained living space.',
    price: '1490',
    features: electricity
      .concat(plumbing)
      .concat(hvac)
      .map((el) => ({ name: el, included: true }))
      .concat(carpentry.map((el) => ({ name: el, included: false }))),

    featured: true,
  },
  {
    name: 'Gold',
    description:
      'Complete home assurance, covering all aspects for total peace of mind.',
    price: '1990',
    features: electricity
      .concat(plumbing)
      .concat(hvac)
      .concat(carpentry)
      .map((el) => ({ name: el, included: true })),

    featured: false,
  },
]
