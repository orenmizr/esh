import { type ReactNode } from "react";
import { Logo } from './Logo';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className='h-screen w-screen p-10 bg-gray-200'>
      <div className='container mx-auto p-3 max-w-screen-xl bg-white rounded-md shadow-md relative'>
        <Logo className='absolute left-4 -top-6' />
        <main className="flex-1 p-4">{children}</main>
        <footer className="p-4 text-center">
          <p> ESH &copy; 2024 </p>
        </footer>
      </div>
    </div>
  )
}