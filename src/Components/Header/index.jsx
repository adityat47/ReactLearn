import React from "react";
// Import navigation menu components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        padding: '8px 16px',
        backgroundColor: '#fff', // Change to your desired background color
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        width: '100vw', // Full viewport width
        margin: 0,
        left: 0,
        top: 0,
        right: 0,
        boxSizing: 'border-box',
        position: 'fixed', // Now always visible and flush to top/left
        zIndex: 1000
      }}
    >
      {/* Logo section - always visible, links to home */}
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="../../Assets/SESPL_Logo.png" alt="Logo" className="logo" style={{ height: 40 }} />
      </a>
      {/* Navigation menu section */}
      <NavigationMenu>
        <NavigationMenuList>
          {/* First navigation item with submenu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link1</NavigationMenuLink>
              <NavigationMenuLink>Link2</NavigationMenuLink>
              <NavigationMenuLink>Link3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Second navigation item, simple link */}
          <NavigationMenuItem>
            <NavigationMenuLink href="/item-two">
              Item Two
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
