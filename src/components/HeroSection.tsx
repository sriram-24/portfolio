import { user } from '@/constants/user'
import React from 'react'
import { motion } from "motion/react"

function HeroSection() {
	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
					ease: 'easeIn'
				}}
			>
				<h1 className="text-[32px] font-bold mt-6">{user.fullName}</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
					ease: 'easeIn'
				}}
			>
				<p>{user.profileDescription}</p>
			</motion.div>
		</section>
	)
}

export default HeroSection