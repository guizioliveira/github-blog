import { AnchorHTMLAttributes } from 'react'
import { Link } from './styles'

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function LinkButton(props: LinkButtonProps) {
  return <Link {...props} />
}
