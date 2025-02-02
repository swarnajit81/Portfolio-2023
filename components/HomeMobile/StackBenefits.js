import React from 'react'

const StackBenefits = () => {
  return (
    <div className='w-full flex flex-col' >
    <div className='px-5   pb-[3rem] border-b-[1px] border-white text-[1.2rem] font-light' >
          I usually work in vanilla javascript without frameworks for small
          projects, allowing me a complete freedom on the architecture, I prefer using convex or drizzle with postgres for my content management or backend, GSAP and framer-motion for animations
          with some glimpse of Three.js. For bigger works I usually Next.js and React.
    </div>
    <div className="flex flex-col font-light gap-[2rem] itmes-start">
          {skills?.map((el, i) => (
            <div key={i} className="w-full px-5  py-[3rem] border-[#fff]  last:border-[transparent] border-b-[1px]">
              <div className="flex font-normal items-end text-royal-orange gap-[10px]">
                <span className="text-[1rem]">0{i + 1}.</span>
                <p className="text-[1.2rem] font-normal text-white uppercase">{el.title}</p>
              </div>
              <p className="mt-[1.5rem] text-[1.2rem] ">{el.para}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default StackBenefits

const skills = [
  {
    title: "Interaction",
    para: "A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them to ensure a smooth and remarkable navigation.",
  },
  {
    title: "performance",
    para: "On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices of every tool I use.",
  },
  {
    title: "Teamwork",
    para: "I develop your new website by listening to your needs and desires and by giving you my point of view in order to get the best for your project.",
  },
];