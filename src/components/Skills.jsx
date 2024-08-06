import React from 'react'
import SkillCard from './SkillCard'
import cImg from '/assets/skills/c.svg'
import javaImg from '/assets/skills/java.svg'
import htmlImg from '/assets/skills/html.svg'
import cssImg from '/assets/skills/css.svg'
import javascriptImg from '/assets/skills/javascript.svg'
import reactImgm from "/assets/skills/react.svg"
import nodeImg from '/assets/skills/nodejs.svg'
import flutterImg from '/assets/skills/flutter.svg'
import mongoImg from '/assets/skills/mongodb.svg'
import sqlImg from '/assets/skills/mysql.svg'

const programming = [
    {
        name: "C",
        icon: `url(${cImg})`
    },
    {
        name: "Java",
        icon: `url(${javaImg})`
    }

]
const scripting = [
    {
        name: "HTML",
        icon: `url(${htmlImg})`
    },
    {
        name: "CSS",
        icon: `url(${cssImg})`
    }, {
        name: "JavaScript",
        icon: `url(${javascriptImg})`
    },
]
const framework = [
    {
        name: "ReactJS",
        icon: `url(${reactImgm})`
    },
    {
        name: "NodeJS",
        icon: `url(${nodeImg})`
    },
    {
        name: "Flutter",
        icon: `url(${flutterImg})`
    },
]


const databases = [
    {
        name: "MongoDB",
        icon: `url(${mongoImg})`
    },
    {
        name: "MY-SQL",
        icon: `url(${sqlImg})`
    },
]

const Skills = () => {
    return <>
        <div id="skills" className="skills-block">
            <h2>My-Stack</h2>
            <div className="skills-body">
                <SkillCard name="Programming Languages" data={programming} />
                <SkillCard name="Scripting Languages" data={scripting} />
                <SkillCard name="Frameworks" data={framework} />
                <SkillCard name="Databases" data={databases} />
            </div>
        </div>
    </>
}

export default Skills