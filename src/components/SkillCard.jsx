import React from 'react'

const SkillCard = ({ name, data }) => {
    return (
        <div className='skill-card'>
            <h3>{name}</h3>
            <div className='skill-items'>
                {
                    data.map((v, i) => {
                        return (
                            <div key={i} className='item'>
                                <i style={{ backgroundImage: v.icon }}></i>
                                <h5>{v.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillCard