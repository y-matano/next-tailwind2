import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const TopPage = () => {
  const [testValue, setTestValue] = useState('')
  useEffect(() => {
    setTestValue(localStorage.getItem('testKey'))
  }, [])

  return (
    <div>
        <ul>
            <li>
                <Link href="/todo">TODOアプリ</Link>
            </li>
            
        </ul>
        
    </div>
  )
}

export default TopPage