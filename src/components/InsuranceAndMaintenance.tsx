import { type Metadata } from 'next'
import { insurancePricingPlans, services } from '@/lib/utils'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/utils'
import { useMemo } from 'react'

export const metadata: Metadata = {
  title: 'Insurance and Maintenance',
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<{ name: string; included: boolean }>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-primary-600 py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {services.map((service) => (
          <div key={service}>
            <span className="font-semibold capitalize text-white">
              {service}
            </span>

            <Features
              featured={featured}
              features={features.filter((ft) =>
                ft.name
                  .toLocaleLowerCase()
                  .includes(service.toLocaleLowerCase()),
              )}
            />
          </div>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </section>
  )
}

function Features({
  features,
  featured,
}: {
  featured: boolean
  features: Array<{
    name: string
    included: boolean
  }>
}) {
  return (
    <article className="mt-2 flex flex-col gap-y-3">
      {features.map((ft) => (
        <li className="flex" key={ft.name}>
          {ft.included ? (
            <CheckIcon
              className={'h-6 w-5 flex-none text-green-500'}
              aria-hidden="true"
            />
          ) : (
            <XMarkIcon
              className={classNames(
                'h-6 w-5 flex-none text-red-600',
                // featured ? 'text-white' : 'text-slate-400',
              )}
              aria-hidden="true"
            />
          )}
          <span className="ml-4">{ft.name}</span>
        </li>
      ))}
    </article>
  )
}

export default function InsuranceAndMaintenance() {
  return (
    <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
      {insurancePricingPlans.map((plan) => (
        <Plan
          key={plan.name}
          name={plan.name}
          price={`${plan.price}MRU`}
          description={plan.description}
          href="/contact-us"
          features={plan.features}
          featured={plan.featured}
        />
      ))}
    </div>
  )
}
