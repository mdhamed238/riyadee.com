'use server'

import React from 'react'
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'
import { FormValues } from '../../type'

function setupResend() {
  const apiKey = process.env.RESEND_API_KEY

  // Check if the API key is present
  if (!apiKey) {
    throw new Error(
      'Missing RESEND_API_KEY. Please set the API key in your environment.',
    )
  }

  const resend = new Resend(apiKey)
  return resend
}

export const sendEmail = async (formData: FormValues) => {
  const { name, email, message, referral_source } = formData
  const resend = setupResend()

  let data
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'contact@riyadee.com',
      subject: 'Message from Riyada website contact form',
      reply_to: email,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderName: name,
        senderEmail: email,
        referralSource: referral_source,
      }),
    })
  } catch (error: unknown) {
    console.error(error)
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
