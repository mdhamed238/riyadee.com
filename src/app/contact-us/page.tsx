import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { type Metadata } from 'next'
import { ContactLayout } from '@/components/ContactLayout'
import { sendEmail } from '@/services/sendEmail'
import toast from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactUs() {
  // const onSubmit = async (formData: FormData) => {
  //   // const { data, error } = await sendEmail(formData)
  //   // if (error) {
  //   //   process.env.NODE_ENV === 'development'
  //   //     ? toast.error(error)
  //   //     : toast.error('Could not send email!')
  //   //   return
  //   // }
  //   // toast.success('Email sent successfully!')
  //   return
  // }
  return (
    <ContactLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Contact Us</h2>
      <p className="mt-2 text-sm text-gray-700">
        Please contact us directly at{' '}
        <Link
          href="mailto:contact@riyadee.com"
          className="font-medium text-primary-600 hover:underline"
        >
          contact@riyadee.com
        </Link>{' '}
        or through this form.
      </p>
      <form
        action={''}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />

        <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>Online search</option>
          <option>Facebook</option>
          <option>Tiktok</option>
          <option>Friend</option>
        </SelectField>
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Submit <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </ContactLayout>
  )
}
