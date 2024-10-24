import Link from 'next/link'
import { headers } from 'next/headers'
import { ShootingStars } from '@/components/effect-ui/shooting-starts'
import { Button } from '@/components/ui/button'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    <div className='relative h-screen w-screen bg-neutral-900 text-white text-center'>
      <ShootingStars />
      <div className='fixed top-0 z-10 h-screen w-screen '>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          View <Link href="/"><Button >Home</Button></Link>
        </p>
      </div>
    </div>
  )
}