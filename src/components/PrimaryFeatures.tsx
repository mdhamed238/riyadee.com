'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

const features = [
  {
    title: 'Architectural designs',
    description: 'Empower your vision with our comprehensive design services.',
    utils: [
      { title: 'Custom Design', desc: 'Tailor-made plans to suit your needs' },
      {
        title: 'Leading Design Offices',
        desc: 'Choose from renowned design offices',
      },
      {
        title: 'Interactive 3D Models',
        desc: 'Visualize your project with detailed 3D models.',
      },
      {
        title: 'Diverse Plan Models',
        desc: 'Find the perfect plan that matches your vision.',
      },
    ],
  },
  {
    title: 'Construction Materials',
    description:
      'Build with confidence using top-quality construction materials.',
    utils: [
      {
        title: 'Basic Materials',
        desc: 'From bricks and cement to iron and formwork.',
      },
      {
        title: 'Finishing Touches',
        desc: 'Paint, plumbing, electricity, and carpentry essentials.',
      },
      {
        title: 'Hardware Selection',
        desc: 'Everything from electrical outlets to pipes.',
      },
    ],
  },
  {
    title: 'Execution and Monitoring',
    description:
      'Bring your vision to life with expert execution and seamless monitoring.',
    utils: [
      {
        title: 'Renovation and Rehabilitation',
        desc: 'Breathe new life into existing structures.',
      },
      {
        title: 'Site Monitoring',
        desc: 'Efficient coordination for smooth construction processes.',
      },
    ],
  },
  {
    title: 'Equipment Rental',
    description: 'Power your project with the right equipment.',
    utils: [
      {
        title: 'Excavation Equipment',
        desc: 'Dig deep with powerful excavators and bulldozers for efficient earth-moving.',
      },
      {
        title: 'Unloading Equipment',
        desc: 'Swift transport made easy with reliable dump trucks and loaders.',
      },
      {
        title: 'Handling Equipment',
        desc: 'Elevate projects safely using cranes and versatile forklifts for efficiency.',
      },
    ],
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="bg-primary-600 relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to construct your house.
          </h2>
          <p className="text-primary-100 mt-6 text-lg tracking-tight">
            Unlock a world of possibilities with our comprehensive services.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-primary-600 lg:text-white'
                              : 'text-primary-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-primary-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 h-[24rem] rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0">
                      <ul className="flex flex-col items-start gap-8 p-8">
                        {feature.utils.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4">
                            <div className="text-primary-600 flex h-12 w-12 items-center justify-center rounded-lg border">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800">
                                {item.title}
                              </h4>
                              <p>{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      /> */}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
