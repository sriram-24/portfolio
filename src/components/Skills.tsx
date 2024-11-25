import React from 'react'
import {user} from '@/constants/user'
import { motion } from "motion/react"

interface Skill {
	name : string,
	icon:string
}

function Skills() {
  return (
	<motion.div className='mt-6'
		initial={{ opacity: 0, y:-10 }}
		animate={{ opacity: 1, y:0 }}
		transition={{
		duration: 0.5,
		delay: 0.25,
		ease: 'easeIn'
		}}
	>
		<h4 className='mb-4'>Skills</h4>
		<div className='flex flex-wrap'>
			{
			user.skills? user.skills.map((skill) => <Skill key={skill.name} name={skill.name} icon={skill.icon} />) :<></>
			}
		</div>
	</motion.div>
  )
}

const Skill = ({name, icon} : Skill) => {
	return (
		<span className='pl-6 pr-6 pt-2 pb-2 m-2 bg-primary text-primary-foreground rounded-full'>{name}</span>
	)
}

export default Skills