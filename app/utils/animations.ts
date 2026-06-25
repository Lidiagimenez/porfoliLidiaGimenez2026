import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

export const scaleOnHover = {
  whileHover: {
    scale: 1.03
  },
  transition: {
    duration: 0.2
  }
}

export const buttonPress = {
  whileHover: {
    scale: 1.02
  },
  whileTap: {
    scale: 0.98
  },
  transition: {
    duration: 0.15
  }
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const cardStagger = (index: number): Variants => ({
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})
