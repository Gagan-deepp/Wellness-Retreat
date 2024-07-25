import React from 'react'

const Hero = () => {
  return (
    <section className='p-3 rounded-md bg-bg hidden sm:flex'>
        <div className='p-3 rounded-sm flex justify-center flex-col gap-3 flex-1' >
            <div className='bg-red-500 w-full h-72 rounded-md' >
              <img src="/assests/yoga.jpg" alt="yoga_bg" className='w-full h-full object-cover rounded-md' />
            </div>

            <div>
              <h3 className='font-semibold text-xl' > Discover Your Inner Peace </h3>
              <p className='text-base' > Join us for a series of wellness retreats to help you finding tranquility </p>
            </div>
        </div>
    </section>
  )
}

export default Hero