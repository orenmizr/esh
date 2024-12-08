import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function InternalLink({ to }: { to: string }) {
  return (
    <RouterLink to={to}>Link</RouterLink>
  )
}