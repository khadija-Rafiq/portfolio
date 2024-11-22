import Navbar from './Navbar'
import Projects from './Projects'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='#hero'>
      <Navbar />
      
      {/* Centered Image */}
      <div className="relative flex items-center justify-center h-[calc(100vh-60px)]">
        <Image 
          src="/profile_bg.png" 
          alt="my-pick" 
          width={300} 
          height={300} 
          className="object-cover "
        />
        
        {/* Text Section */}
        <div className=" text-white text-center z-10 ">
          <div className="text-[80px] sm:text-[100px] font-bold leading-tight">
            <p data-aos="zoom-in-up">I'am</p>
            <p data-aos="zoom-in-up">Khadija</p>
            <p data-aos="zoom-in-up">Rafiq</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
