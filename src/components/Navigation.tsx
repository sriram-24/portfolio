import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { ModeToggle } from './ModeToggle'
import { AddressBook, Briefcase, Code, House } from '@phosphor-icons/react'

function Navigation() {
	return (
		<div className='w-full p-2 flex items-center justify-center'>
			<NavigationMenu className='w-full'>
				<NavigationMenuList className='flex flex-wrap'>
					<NavigationMenuItem>
						<NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
							<House size={18} className='mr-1' />
							<span>Home</span>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href='#career' className={navigationMenuTriggerStyle()}>
							<Briefcase size={18} className='mr-1' />
							<span>Career</span>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href='#projects' className={navigationMenuTriggerStyle()}>
							<Code size={18} className='mr-1' />
							<span>Projects</span>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink href='#contact' className={navigationMenuTriggerStyle()}>
							<AddressBook size={18} className='mr-1' />
							<span>Contact</span>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem className=''>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

export default Navigation