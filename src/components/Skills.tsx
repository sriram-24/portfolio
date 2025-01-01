import React from 'react'
import { type ISkill } from '@/constants/user'
import { motion } from "motion/react"

interface ISkillprops {
	title?: string,
	skills: Array<ISkill>,

}

function Skills({ skills, title }: ISkillprops) {
	return (
		<motion.div className='mt-6'
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
				ease: 'easeIn'
			}}
		>
			{title && <h4 className='mb-4'>{title}</h4>}
			<div className='flex flex-wrap'>
				{
					skills ? skills.map((skill: ISkill) => <Skill key={skill.name} name={skill.name} icon={skill.icon} />) : <></>
				}
			</div>
		</motion.div>
	)
}

const Skill = ({ name, icon }: ISkill) => {
	return (
		<span className='pl-4 pr-4 pt-1 pb-1 m-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold cursor-default'>{name}</span>
	)
}

export default Skills