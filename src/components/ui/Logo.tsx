import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
        <Sparkles className='w-8 h-8 text-primary' stroke='white' strokeWidth={1.5} />
        <span className='text-lg font-semibold'>Editopia AI</span>
    </Link>
  )
}

export default Logo