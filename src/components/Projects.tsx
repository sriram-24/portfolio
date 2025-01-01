import React from 'react'
import { motion } from "motion/react"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

import { user } from "@/constants/user"
import Skills from './Skills'
import { GithubLogo, Play } from '@phosphor-icons/react'

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
						<Card key={`project-` + index} className=' lg:max-w-80 mb-4 hover:drop-shadow-card filter hover:transition-all duration-500'>
							<CardHeader className='flex flex-row justify-between'>
								<CardTitle className='text-lg'>{project.name}</CardTitle>
								<div className='flex flex-row gap-2'>
									{project.source &&
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger><a href={project.source} target='_blank'><GithubLogo size={28} /></a></TooltipTrigger>
												<TooltipContent>
													<p className='font-bold'>View source code</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									}
									{
										project.demo &&
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger><a href={project.demo} target='_blank'><Play size={28} /></a></TooltipTrigger>
												<TooltipContent>
													<p className='font-bold'>View demo</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>

									}
								</div>
							</CardHeader>
							<CardContent>
								<p >{project.description}</p>
							</CardContent>
							<CardFooter className='flex flex-row items-end'>
								<Skills skills={project.techUsed} />
							</CardFooter>
						</Card>)
				}
			</div>
		</motion.div>
	)
}

export default Projects