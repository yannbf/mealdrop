import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'

enum LottieAnimations {
  NotFound = 'NotFound',
  Error = 'Error',
}

type AnimatedIllustrationProps = {
  animation: keyof typeof LottieAnimations
}

export const AnimatedIllustration = ({ animation }: AnimatedIllustrationProps) => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    // Lazy load animations for better performance
    import(`../../assets/animations/${LottieAnimations[animation]}.json`).then(setAnimationData)
  }, [animation])

  return (
    <span className="chromatic-ignore">
      <Lottie style={{ minHeight: 450, maxWidth: 450 }} play loop animationData={animationData} />
    </span>
  )
}
