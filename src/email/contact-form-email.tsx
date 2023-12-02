'use client'
import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Column,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  senderName: string
  senderEmail: string
  senderPhone: string
  message: string
  services: string[]
}

export default function ContactFormEmail({
  senderName,
  senderEmail,
  senderPhone,
  message,
  services,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New customer from Riyada Website Contact Form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the customer
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender’s name is: {senderName}</Text>
              <Text>The sender’s email is: {senderEmail}</Text>
              <Text>The sender’s phone is: {senderPhone}</Text>
              <Hr />
              <Text className="text-lg font-semibold">Services: </Text>
              <Column className="py-3">
                {services.map((service) => (
                  <Text key={service} className="pl-2 ">
                    {service}
                  </Text>
                ))}
              </Column>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
