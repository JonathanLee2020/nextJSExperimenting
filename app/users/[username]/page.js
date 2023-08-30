'use client'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function Page() {
  // const router = useRouter();
  // let {username} = router.query;
  const router = useParams();
  let {username} = router;

  
  return (
    <p>posts: {username}</p>
  )
}





