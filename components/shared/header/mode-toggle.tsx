'use client'

import { DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {useTheme } from 'next-themes';
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useState, useEffect } from "react";

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    
    console.log('Theme before mount check:', theme);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            {theme === 'system' ? (
              <SunMoon />
            ) : theme === 'dark' ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem 
            checked={theme === "system"}
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem 
            checked={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem 
            checked={theme === "light"}
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
 
export default ModeToggle;