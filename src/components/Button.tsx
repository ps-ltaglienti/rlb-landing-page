import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded uppercase py-4 px-10 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
}

type ButtonProps =
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })

export function Button({ className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center rounded uppercase py-4 px-10 text-sm font-semibold bg-rlb-yellow text-rlb-black-default hover:bg-rlb-yellow/80 active:bg-rlb-yellow',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
