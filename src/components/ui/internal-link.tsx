import { Link as RouterLink } from "react-router-dom"
import { ReactNode } from 'react'

export function InternalLink({ to, children, className }: { to: string, children: ReactNode, className?: string }) {
  return (
    <RouterLink to={to} className={className}>{children}</RouterLink>
  )
}