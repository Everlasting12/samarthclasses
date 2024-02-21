import { Button } from "@/components/ui/button";
import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Headset } from "lucide-react";

type NavbarPropsTypes = {};
const Navbar: FC<NavbarPropsTypes> = ({}: NavbarPropsTypes) => {
  return (
    <div className="container py-2 border-b">
      <NavigationMenu className="bg-">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button variant="">Home</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost">
              <Headset size={18} className="mr-2" />
              Contact Us
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
