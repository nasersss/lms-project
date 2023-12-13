import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-700">
        protected page
        <UserButton afterSignOutUrl="/" />
      </p>
    </div>
  )
}
