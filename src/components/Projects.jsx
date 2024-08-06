import React, {useEffect} from 'react'
import textEditorImg from '/assets/projects/text-editor.png'
import forumImg from '/assets/projects/forum.png'
import countryImg from '/assets/projects/countries.png'
import gameImg from '/assets/projects/game.png'

const projects = [
    {
      "id": 1,
      "hoster": "Github",
      "name": "Text Editor",
      "hoster_url": "https://github.com/MeParas325/text_editor",
      "thumbnail_url": textEditorImg
    },
    {
      "id": 2,
      "hoster": "Github",
      "name": "Coding Forum",
      "hoster_url": "https://github.com/MeParas325/forum",
      "thumbnail_url": forumImg
    },
    {
      "id": 3,
      "hoster": "Github",
      "name": "Countries APIs",
      "hoster_url": "https://github.com/MeParas325/React-CountriesAPIs",
      "thumbnail_url": countryImg
    },
    {
      "id": 4,
      "name": "Ball Breaker",
      "hoster": "Github",
      "hoster_url": "https://github.com/MeParas325/JavascriptPrograms/tree/main/JavaScriptGameDevelopment/Game4/Version1",
      "thumbnail_url": gameImg
    },
  ]

const Projects = () => {
    
  return <section id="projects">
  <div className="container">
    <h2>My Projects</h2>
    <div className="contents">
        {
            projects.map((project) => (
                <div className="product">
           <img src={project.thumbnail_url} alt={project.name} />
           <div className="text">
            <h3>${project.name}</h3>
            <a target="blank" href={project.hoster_url} >View code on ${project.hoster}</a>
           </div>
          </div>
            ))
        }
    </div>
  </div>
</section>
}

export default Projects