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
import { FormValues } from '../../../type'
import { classNames } from '@/utils'

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
            options={['Online Search', 'Facebook', 'Tiktok', 'Friend']}
          />

          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className={classNames(
                'flex w-full gap-2',
                methods.formState.isSubmitting ? 'opacity-60' : '',
              )}
              onClick={methods.handleSubmit(onSubmit)}
              disabled={methods.formState.isSubmitting}
            >
              <span>Submit </span>
              <>
                {methods.formState.isSubmitting ? (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 animate-spin fill-gray-200 text-gray-200"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <span aria-hidden="true">&rarr;</span>
                )}
              </>
            </Button>
          </div>
        </div>
      </FormProvider>
    </ContactLayout>
  )
}
