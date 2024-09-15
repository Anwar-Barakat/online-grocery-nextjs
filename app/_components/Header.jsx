import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, SearchIcon, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-md">
      <div className="flex items-center gap-8">
        <Image src="/images/logo.png" alt="logo" width={150} height={100} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex items-center border border-full p-2 px-10 gap-2 bg-slate-200 rounded-full cursor-pointer">
              <LayoutGrid size={24} />
              <span>Categories</span>
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="hidden md:flex gap-3 items-center border rounded-full p-2  px-5">
          <SearchIcon size={24} />
          <input type="text" placeholder="Search for products" className="bg-transparent outline-none" />

        </div>
      </div>
      <div className="flex gap-4 items-center">
        <span className="relative">
          <ShoppingBag size={24} />
          <span className="absolute -top-3 text-white -right-2 bg-red-400 rounded-full w-5 h-5 flex items-center justify-center">6</span>
        </span>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Header
