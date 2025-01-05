import React from 'react'
import { motion } from "motion/react"
import { ContactType, user, type IContact } from '@/constants/user'
import { EnvelopeOpen, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Contact() {
	return (
		<motion.div id='contact' className='mt-6 mb-6'
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
				ease: 'easeIn'
			}}
		>
			<h4 className='mb-4'>Contact</h4>
			<div className='flex flex-wrap gap-12 justify-center items-center  bg-contact text-contact-foreground h-64 p-6 rounded-lg'>
				{
					user.contacts.map((contact: IContact, index) =>
						<motion.div key={`contact-`+index}
							whileHover={{ scale: 1.2 }}
							className='sm:min-h-8 sm:min-w-8 md:min-h-16 md:min-w-16  p-2 flex flex-col  items-center rounded-lg '
						>
							{
								contact.type == ContactType.email ? <a href={contact.link} target='_blank' ><EnvelopeOpen size={32} alt={contact.type} /></a> :
									contact.type == ContactType.github ? <a href={contact.link} target='_blank' ><GithubLogo size={32} alt={contact.type} /></a> :
										contact.type == ContactType.linkedin ? <a href={contact.link} target='_blank' ><LinkedinLogo size={32} alt={contact.type} /></a> : <></>
							}
						</motion.div>
					)
				}
			</div>
		</motion.div>
	)
}

export default Contact