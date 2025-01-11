import { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from './styles'
import { TbExternalLink } from 'react-icons/tb'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function LinkButton({ children, ...rest }: LinkButtonProps) {
  return (
    <Link target="_blank" {...rest}>
      <span>{children}</span>
      <TbExternalLink size={18} />
    </Link>
  )
}
