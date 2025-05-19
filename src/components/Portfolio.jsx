import React from 'react'
import brit from "../assets/brit.png"
import chat from "../assets/chat.jpg"
import lang from "../assets/yorlang.jpg"
import food from "../assets/food.png"
import omCr from "../assets/omCr.png"

export const Portfolio = () => {

  const works = [
    { img: food, header : "Online Foodstore (Still Developing..⚒️)", description: "An online web platform for users to make food orders", stacks: ["ReactJS", " || TailwindCSS", ],link: "https://github.com/ohsars/foodsstore", github: "https://github.com/ohsars/foodsstore" } ,
    
    {img: omCr,  header : "OM Craft Atelier", description: "With a focus on innovation, sustainability, and exceptional quality, OM Craft Atelier redefines the construction process, ensuring every project is managed with precision and creativity.", stacks: ["PHP ", " || Boostrap CSS"], link: "https://www.omcraftatelier.com", github: ""} , 

    {img: brit,  header : "Britannia Europe Group ⚖️", description: "Britannia Europe Education Group, a distinguished subsidiary of Britannia Europe Consulting UK Ltd, in partnership with Christ College, London.We are your path to a world of knowledge, practical experience, and boundless career possibilities.", stacks: ["ReactJs ", "|| Tailwind"], link: "https://www.britanniaeuropegroup.com", github: ""} ,

    { img: chat, header : "ai in nlp", description: "A 500lvl group class project: An interactive chatbot application for a coffee business. It responds to users requests and give the required response", stacks: ["Anaconda ", " || Python ",  "|| HTML ", "|| CSS ", " || JavaScript"],link: "", github: "" } ,

    { img: lang, header : "Yorlang - Language Identifier", description: "A solution that identifies yoruba Language, and returns the language score ", stacks: ["React ", "|| Tailwind", " || Google Language API"], link: "", github: "" } ,
  ]

  return (
    <section id='Projects' className='my-32 h-full'>
      <div className='md:w-[70vw] w-[80vw] mx-auto p-2 md:p-0 h-full'>
        <div className='mx-auto mb-6 leading-loose'>
          <h6 className='text-sm mb-2 text-red-500'>Portfolio</h6>
          <h3 className='font-bold text-xl pb-4'>Each is a unique piece of development </h3>
        </div>


          {works.map((index) => (
            <div className='leading-loose  md:w-[70vw] md:h-[40vh] flex flex-wrap  md:flex-nowrap justify-center mx-auto gap-12 mb-16 odd:flex-row-reverse'>
              <div key={index.img} className='md:w-[90%] w-full rounded-md'>
                <img src={index.img}  className='w-full md:w-[70vw] md:h-[30vh] border p-1 rounded-xl shadow-sm dark:shadow-white  shadow-black object-cover duration-500 hover:translate-y-6 ring-offset-4'/>
              </div>

              <div className='md:w-full text-justify transition-all ease-linear duration-500'>
                <h4 className='uppercase font-bold text-sm md:text-md'>{index.header}</h4>
                <p className='text-sm leading-loose my-2'>{index.description}</p>

                {index.stacks.map ((list) => (
                  <p key={list} className='text-xs font-bold inline dark:text-white text-black'>{list}</p>
                ))}

                {(index.link === "" && index.github === "") ? <p className='text-red-500 text-sm my-auto rounded italic'>Private Project</p> : <p className='text-md cursor-pointer'><a target='_blank' href={`${index.link}`}>Live Demo <i className='fa fa-link text-red-500' /></a></p>}
              </div>
            </div>
          ))}
            
      </div>
    </section>
  )
}
