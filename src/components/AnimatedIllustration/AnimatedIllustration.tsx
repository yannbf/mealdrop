import { useState, useEffect } from 'react';
import Lottie from 'react-lottie-player'

enum LOTTIE_ANIMATIONS {
  NotFound = 'NotFound',
  Error = 'Error',
}

export type AnimatedIllustrationProps = {
  animation: keyof typeof LOTTIE_ANIMATIONS
}

export const AnimatedIllustration = ({
  animation,
}: AnimatedIllustrationProps) => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    // Lazy load animations for better performance
    import(`../../assets/animations/${LOTTIE_ANIMATIONS[animation]}.json`).then(
      setAnimationData
    )
  }, [animation])

  return <Lottie style={{ minHeight: 450, maxWidth: 450 }} play loop animationData={animationData} />
}
