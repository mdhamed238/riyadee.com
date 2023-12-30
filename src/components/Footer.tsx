import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { BsFacebook, BsTiktok } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              {/* <NavLink href="#testimonials">Testimonials</NavLink> */}
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://web.facebook.com/Riyadaaa"
              className="group"
              aria-label="Riyada on Facebook"
              target="_blank"
            >
              <span className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <BsFacebook />
              </span>
            </Link>
            <Link
              href="https://www.tiktok.com/@riyadaentreprise"
              className="group"
              aria-label="Riyada on Tiktok"
              target="_blank"
            >
              <span className="h-6 w-6 fill-red-500 group-hover:fill-red-700">
                <BsTiktok />
              </span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Riyada. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
