import { Hero, HeroCarousel } from '@/components/Hero'
import Link from 'next/link'

const slides = [
  {
    heroImg: 'slide1.jpg',
    heroTitle: 'Slide 1',
    heroSubtitle: 'Slide 1 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
  {
    heroImg: 'slide2.jpg',
    heroTitle: 'Slide 2',
    heroSubtitle: 'Slide 2 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
  {
    heroImg: 'slide3.jpg',
    heroTitle: 'Slide ',
    heroSubtitle: 'Slide 2 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
  {
    heroImg: 'slide4.jpg',
    heroTitle: 'Slide 2',
    heroSubtitle: 'Slide 2 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
  {
    heroImg: 'slide5.jpg',
    heroTitle: 'Slide 2',
    heroSubtitle: 'Slide 2 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
  {
    heroImg: 'slide6.jpg',
    heroTitle: 'Slide 2',
    heroSubtitle: 'Slide 2 subtitle',
    heroButton: 'Shop now',
    heroLink: '#',
  },
]

export default function Home() {
  return (
    <HeroCarousel>
      {slides.map((slide) => (
        <Hero
          key={slide.heroImg}
          heroTitle={slide.heroTitle}
          heroSubtitle={slide.heroSubtitle}
          heroButton={slide.heroButton}
          heroImg={slide.heroImg}
          heroLink={slide.heroLink}
        />
      ))}
    </HeroCarousel>
  )
}
