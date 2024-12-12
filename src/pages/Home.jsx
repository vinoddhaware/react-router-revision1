import React from 'react'

const Home = () => {
  return (
    <div className='h-screen bg-[#000] text-white  lg:p-16 py-[420px] sm:py-[600px] flex justify-center items-center'>
      <div className=' p-10  flex flex-col-reverse lg:flex lg:flex-row justify-center items-center'>
        <div className='left lg:max-w-[50%] '>
                <div className='space-y-6 flex flex-col justify-center items-start py-10'>
                    <h1 className='text-5xl font-bold'> Headphones Wireless </h1>
                    <p className='leading-tight'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus sapiente rquo at molestias excepturi, suscipit laudantium. </p>
                    <button className='px-4 py-2 bg-red-500/80 rounded-md'> Buy and listen </button>
                </div>
                <div>
                    <div className='flex justify-start items-center gap-4 text-xs sm:text-sm font-semibold'>
                        <span className='w-[30%] border border-white/20'></span>
                        <span> TOP HEADPHONES FOR YOU </span>
                        <span className='w-[30%] border border-white/20'></span>
                    </div>
                    <div className='flex'>
                        <span className='flex flex-col justify-start items-center'>
                            <img src="https://img.pikbest.com/wp/202352/sleek-black-headphones-against-a-dark-background-in-3d-rendering_9790565.jpg!sw800" alt="img" className='h-28' />
                            <p> $150k </p>
                            <p> Modal Black </p>
                        </span>
                        <span className='flex flex-col justify-start items-center'>
                            <img src="https://img.pikbest.com/ai/illus_our/20230427/16017527327c337cf5890529ec60ca46.jpg!w700wp" alt="img" className='h-28' />
                            <p> $150k </p>
                            <p> Modal Gold </p>
                        </span>
                        <span className='flex flex-col justify-start items-center'>
                            <img src="https://png.pngtree.com/background/20230613/original/pngtree-headphones-on-a-black-background-with-bright-noteshaped-patterns-in-the-picture-image_3390198.jpg" alt="img" className='h-28' />
                            <p> $150k </p>
                            <p> Modal Black </p>
                        </span>
                    </div>
                </div>
        </div>

        <div className='right lg:max-w-[60%]   flex justify-center items-center'>
            <img src="https://img.pikbest.com/wp/202352/sleek-black-headphones-against-a-dark-background-in-3d-rendering_9790565.jpg!sw800" alt="" className='' />
        </div>

      </div>
    </div>
  )
}

export default Home
