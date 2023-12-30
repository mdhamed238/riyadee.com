'use client'
import { Button } from '@/components/Button'
import { SelectField, TextAreaField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { ContactLayout } from '@/components/ContactLayout'
import { sendEmail } from '@/services/sendEmail'
import toast from 'react-hot-toast'
import * as yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormValues } from '../../../../type'

// export const metadata: Metadata = {
//   title: 'Contact Us',
// }

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email invalid').required('Email is required'),
  referral_source: yup.string().required('Referal source is required'),
  message: yup.string().required('Message is required'),
  // phone: yup
  //   .string()
  //   .required()
  //   .matches(/^[2,3,4]{1}\d{7}$/),
})

export default function ContactUs() {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    const { error } = await sendEmail(data)

    if (error) {
      toast.error(error)
      // process.env.NODE_ENV === 'development'
      //   ? toast.error(error)
      //   : toast.error('Could not send message!')

      return
    }

    toast.success('Email sent successfully!')
  }

  return (
    <ContactLayout>
      <div className="flex">
        <a href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </a>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Contact Us</h2>
      <p className="mt-2 text-sm text-gray-700">
        Please contact us directly at{' '}
        <a
          href="mailto:contact@riyadee.com"
          className="font-medium text-primary-600 hover:underline"
        >
          contact@riyadee.com
        </a>{' '}
        or through this form.
      </p>
      <FormProvider {...methods}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
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
          />
          <TextAreaField
            className="col-span-full"
            label="Message"
            name="message"
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
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
              onClick={methods.handleSubmit(onSubmit)}
            >
              <span>
                Submit <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </div>
      </FormProvider>
    </ContactLayout>
  )
}
