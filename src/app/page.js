'use client'
import './globals.css'
import FramerBasics from '@/app/framer-basics'
import Variants from '@/app/variants'
import KeyFrameAnimations from '@/app/keyframe-animations'
import OpacityAnimation from '@/app/question-one'

export default function Home() {
  return (
    <div className="homepage">
      <FramerBasics />
      <Variants />
      <KeyFrameAnimations />
      <OpacityAnimation />
    </div>
  )
}
