'use client'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'

const NavbarRoutes = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isTeacher = pathname?.startsWith('/teacher')
  const isPlayer = pathname?.includes('chapter')

  return (
    <div className="flex  gap-x-2 ml-auto">
      {isPlayer || isTeacher ? (
        <Link href="/">
          <Button
            size="sm"
            variant="ghost"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button
            size="sm"
            variant="ghost"
          >
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default NavbarRoutes
