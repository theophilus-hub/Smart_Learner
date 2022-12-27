import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold '>Study <span className='text-indigo-900'>Smarter,</span>  Not <span className='text-indigo-900'>Harder</span></h2>
                <p className='text-3xl py-6 text-gray-500 m-4 p4'>Studying smarter means finding more effective ways to learn and retain information. 
                All these and more can be achieved with Smart Learner.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Functionality</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Availability</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Accountability</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About