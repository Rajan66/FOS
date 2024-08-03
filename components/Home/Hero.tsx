import Image from 'next/image'
import hero from '@/public/assets/hero.jpg'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${hero.src})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
                    <p className="mt-4 text-lg">This is a hero section with a background image.</p>
                    <Button className="mt-8 px-6 py-3 text-black rounded-full">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
