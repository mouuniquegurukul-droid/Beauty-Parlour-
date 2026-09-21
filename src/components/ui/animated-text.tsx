import * as React from "react"
import { motion, Variants, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface AnimatedTextProps {
  text: string
  className?: string
  as?: any
  duration?: number
  stagger?: number
  delay?: number
  underline?: boolean
  underlineClassName?: string
  viewportAmount?: number
  once?: boolean
}

/**
 * AnimatedText Component
 *
 * Designed specifically for Bengali typography with Intl.Segmenter grapheme clustering.
 * Preserves conjuncts and combining vowel signs (hasanta, kar, etc.) without broken glyphs.
 * Uses Framer Motion viewport triggers to replay smoothly when scrolling away and returning.
 * Inherits all font-size, weight, line-height, and Hind Siliguri font styling from the caller.
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  as: Component = "span",
  duration = 0.4,
  stagger = 0.03,
  delay = 0,
  underline = false,
  underlineClassName,
  viewportAmount = 0.2,
  once = false,
}) => {
  const shouldReduceMotion = useReducedMotion()

  // Failsafe: if reduced motion is requested, render static text immediately
  if (shouldReduceMotion) {
    return (
      <Component className={cn("font-['Hind_Siliguri',sans-serif]", className)}>
        {text}
        {underline && (
          <span
            className={cn(
              "block h-[2px] w-full mt-1 bg-gradient-to-r from-[#541C28] via-[#B89B68] to-[#541C28]/40",
              underlineClassName
            )}
          />
        )}
      </Component>
    )
  }

  // Bengali-safe grapheme segmentation: keeps vowel signs and conjuncts bound to base letters
  const segmenter =
    typeof Intl !== "undefined" && "Segmenter" in Intl
      ? new Intl.Segmenter("bn", { granularity: "grapheme" })
      : null

  const getGraphemes = (str: string): string[] => {
    if (segmenter) {
      try {
        return Array.from(segmenter.segment(str), (item) => item.segment)
      } catch {
        return Array.from(str)
      }
    }
    return Array.from(str)
  }

  // Split text into words to prevent awkward mid-word breaks on mobile
  const words = text.split(" ").filter(Boolean)

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const characterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const underlineVariants: Variants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay + 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={containerVariants}
      className={cn(
        "inline-block font-['Hind_Siliguri',sans-serif]",
        className
      )}
    >
      {words.map((word, wordIdx) => {
        const graphemes = getGraphemes(word)
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {graphemes.map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={characterVariants}
                  className="inline-block"
                  style={{ willChange: "opacity, transform" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </React.Fragment>
        )
      })}

      {underline && (
        <motion.span
          variants={underlineVariants}
          style={{ originX: 0 }}
          className={cn(
            "block h-[2px] w-full mt-1 bg-gradient-to-r from-[#541C28] via-[#B89B68] to-[#541C28]/40",
            underlineClassName
          )}
        />
      )}
    </motion.span>
  )
}

/**
 * AnimatedParagraph Component
 *
 * Lightweight Framer Motion wrapper for body copy and descriptions.
 * Uses a gentle opacity: 0 -> 1 and y: 8px -> 0 reveal rather than character-by-character staggering.
 */
export interface AnimatedParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: any
  viewportAmount?: number
  once?: boolean
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  children,
  className,
  delay = 0,
  as: Component = "p",
  viewportAmount = 0.2,
  once = false,
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <Component className={cn("font-['Hind_Siliguri',sans-serif]", className)}>
        {children}
      </Component>
    )
  }

  const MotionComponent = motion(Component)

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewportAmount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("font-['Hind_Siliguri',sans-serif]", className)}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </MotionComponent>
  )
}

export default AnimatedText
