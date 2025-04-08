import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'

enum LottieAnimations {
  NotFound = 'NotFound',
  Error = 'Error',
}

type AnimatedIllustrationProps = {
  animation: 'NotFound' | 'Error'
}

export const AnimatedIllustration = ({ animation }: AnimatedIllustrationProps) => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    // Flag to check if component is still mounted
    let isMounted = true

    // Lazy load animations for better performance
    import(`../../assets/animations/${LottieAnimations[animation]}.json`).then((data) => {
      // Only update state if component is still mounted
      if (isMounted) setAnimationData(data)
    })

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false
    }
  }, [animation]) // Make sure to add animation as a dependency

  return (
    <span className="chromatic-ignore">
      <Lottie style={{ minHeight: 450, maxWidth: 450 }} play loop animationData={animationData} />
    </span>
  )
}
