import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { ModeToggle } from './ModeToggle'

function Navigation() {
  return (
    <div className='w-full p-2 flex items-center justify-center'>
        <NavigationMenu className='w-full'>
            <NavigationMenuList className='flex'>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/' className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='/about' className={navigationMenuTriggerStyle()}>
                        Career
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='#projects' className={navigationMenuTriggerStyle()}>
                        Projects
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href='#contact' className={navigationMenuTriggerStyle()}>
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className=''>
                 <ModeToggle  />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default Navigation