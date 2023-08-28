'use client'
import { useParams } from 'next/navigation'

export default function Page() {
  let {username} = useParams();
  return (
    <p>posts: {username}</p>
  )
}





