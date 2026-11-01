import type { ReactNode } from 'react'
import { contactUrl } from '../data/site'
import { Icon } from './Icon'

interface ActionLinkProps {
  children: ReactNode
  href?: string
  variant?: 'dark' | 'blue'
  className?: string
}

export function ActionLink({
  children,
  href = contactUrl,
  variant = 'dark',
  className = '',
}: ActionLinkProps) {
  return (
    <a href={href} className={`action-link action-link--${variant} ${className}`}>
      <span className="action-link__icon">
        <Icon name="arrow" />
      </span>
      <span>{children}</span>
    </a>
  )
}
