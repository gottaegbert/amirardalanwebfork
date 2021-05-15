import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useLoader = () => {
    
    const router = useRouter()
    const [loader, setLoader] = useState(null)
    useEffect(() => {
      let handleRouteStart = () => setLoader(true)
      const handleRouteChange = () => {
        setLoader(false)
      }
      router.events.on('routeChangeStart', handleRouteStart)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events, loader])

  return loader
}