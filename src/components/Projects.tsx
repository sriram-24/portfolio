import React from 'react'
import { motion } from "motion/react"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { user } from "@/constants/user"
import Skills from './Skills'

function Projects() {
	return (
		<motion.div id='projects' className='mt-6'
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
				ease: 'easeIn'
			}}
		>
			<h4 className='mb-4'>Projects</h4>
			<div className='flex flex-wrap gap-4 justify-normal'>
				{
					user.projects.map((project, index) => 
					<Card className=' lg:max-w-80 mb-4' key={`project-`+index}>
						<CardHeader>
							<CardTitle className='text-lg'>{project.name}</CardTitle>
							
						</CardHeader>
						<CardContent>
							<p>{project.description}</p>
						</CardContent>
						<CardFooter>
							<Skills skills={project.techUsed} />
						</CardFooter>
					</Card>)
				}
			</div>
		</motion.div>
	)
}

export default Projects