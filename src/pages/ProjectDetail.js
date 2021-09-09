import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

const projects = {
    '42': {
        title: 'Greatest Project in the World',
        description: 'This is not the greatest project in the world'
    },
    '1000': {
        title: 'Project number 2: React Boogaloo',
        description: 'The sequel to the best project of all time'
    }
}

function ProjectDetail() {
    const { id } = useParams()

    const project = projects[id];

    if (!project) {
        return <Redirect to="/projects" />
    }
    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectDetail
