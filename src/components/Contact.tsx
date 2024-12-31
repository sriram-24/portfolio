import React from 'react'
import { motion } from "motion/react"

function Contact() {
	return (
		<motion.div id='contact' className='mt-6'
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
				ease: 'easeIn'
			}}
		>
			<h4 className='mb-4'>Contact</h4>
			<div className='flex flex-wrap gap-4 justify-normal'>
				{

				}
				hello
			</div>
		</motion.div>
	)
}

export default Contact