import { classNames } from '@/utils'
import clsx from 'clsx'
import { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm'

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  name,
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
  label: string
  name: string
}) {
  let id = useId()
  const { control, register } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {label && <Label id={id}>{label}</Label>}
          <input
            {...register(name)}
            {...field}
            id={id}
            type={type}
            {...props}
            className={classNames(
              formClasses,
              error
                ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                : '',
            )}
          />
          {/* {error?.message && (
            <span className="mt-1 text-sm font-medium text-red-500">
              {error?.message}
            </span>
          )} */}
        </div>
      )}
    />
  )
}

export function TextAreaField({
  name,
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'textarea'>, 'id'> & {
  label: string
  name: string
}) {
  let id = useId()
  const { control, register } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {label && <Label id={id}>{label}</Label>}
          <textarea
            {...register(name)}
            {...field}
            {...props}
            id={id}
            className={classNames(
              formClasses,
              error
                ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                : '',
            )}
          />
          {/* {error?.message && (
            <span className="mt-1 text-sm font-medium text-red-500">
              {error?.message}
            </span>
          )} */}
        </div>
      )}
    />
  )
}

export function SelectField({
  name,
  label,
  className,
  options,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & {
  label: string
  name: string
  options: Array<string>
}) {
  let id = useId()
  const { control, register } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0]}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {label && <Label id={id}>{label}</Label>}
          <select
            {...register(name)}
            {...field}
            id={id}
            {...props}
            className={clsx(
              formClasses,
              'pr-8',
              error
                ? 'border-red-500 focus:border-red-600 focus:ring-red-600'
                : '',
            )}
          >
            {options.map((opt) => (
              <option value={opt}>{opt}</option>
            ))}
          </select>
          {/* {error?.message && (
            <span className="mt-1 text-sm font-medium text-red-500">
              {error?.message}
            </span>
          )} */}
        </div>
      )}
    />
  )
}
