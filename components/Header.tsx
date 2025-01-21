"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { 
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  Menu,
  X
} from 'lucide-react'

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/About", label: "About", icon: User },
  { href: "/Skills", label: "Skills", icon: Code2 },
  { href: "/Projects", label: "Projects", icon: Briefcase },
  { href: "/Contact", label: "Contact", icon: Mail },
]

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-background/80 backdrop-blur-sm border-r transition-all duration-300",
        isCollapsed ? "w-0 sm:w-16" : "w-[200px]"
      )}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between mb-8">
            {!isCollapsed && (
              <Link href="/" className="text-xl font-bold">
                <Image
                 src="/Logo1.png"
                 alt="me"
                 width={1000}
                height={200}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
              </Link>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-9 w-9"
            >
              {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                    "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className={cn(
          "flex",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          <ModeToggle />
        </div>
      </div>
    </aside>
  )
}

export default Header