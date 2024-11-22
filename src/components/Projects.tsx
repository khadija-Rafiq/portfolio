import Heading from "./Heading"
import Card from "./Card"
import image from "next/image"

const data= [
    {
    id: 0,
    tittle:"Static Interactive Resume",
    desc:"A Typescript-based interactive resume built with HTML and CSS",
    img:"/project1.JPG", 
    tags:["HTML", "Node" ,"CSS" ,"Typescript"],
},
]
const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading  title=' My Project'/>
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center"> 
        {data.map((el)=>(<Card 
        key={el.id}
        title={el.tittle}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
