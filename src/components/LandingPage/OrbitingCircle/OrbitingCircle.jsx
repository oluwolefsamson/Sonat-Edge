import { OrbitingCircles } from "../../components/magicui/orbiting-circles";
import Sign1Icon from "../../assets/images/sign1.jpg";
import Sign2Icon from "../../assets/images/sign2.jpg";
import Sign3Icon from "../../assets/images/sign3.jpg";
import Sign4Icon from "../../assets/images/sign4.jpg";
import OrbitAvatarFive from "../../assets/images/header-bg.png";
import OrbitAvatarSix from "../../assets/images/hero-bg.png";
import OrbitAvatarSeven from "../../assets/images/siteHeader-img.png";
import OrbitAvatarEight from "../../assets/images/mask.png";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px]  w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        <img
          src={Sign1Icon}
          alt="farmer 1"
          className="w-10 h-10 rounded-full"
        />
        <img
          src={Sign2Icon}
          alt="farmer 2"
          className="w-10 h-10 rounded-full"
        />
        <img
          src={Sign3Icon}
          alt="farmer 3"
          className="w-10 h-10 rounded-full"
        />
        <img
          src={Sign4Icon}
          alt="farmer 4"
          className="w-10 h-10 rounded-full"
        />
      </OrbitingCircles>

      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <img
          src={OrbitAvatarFive}
          alt="farmer 5"
          className="w-8 h-8 rounded-full"
        />
        <img
          src={OrbitAvatarSix}
          alt="farmer 6"
          className="w-8 h-8 rounded-full"
        />
        <img
          src={OrbitAvatarSeven}
          alt="farmer 7"
          className="w-8 h-8 rounded-full"
        />
        <img
          src={OrbitAvatarEight}
          alt="farmer 8"
          className="w-8 h-8 rounded-full"
        />
      </OrbitingCircles>
    </div>
  );
}
