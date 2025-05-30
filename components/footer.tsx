import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return ( 
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0">JHOEL</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#ABOUT ME">SOBRE MI</Link>
                    <Link href="#SKILLS">SKILLS</Link>
                    <Link href="#SERVICES">SERVICIOS</Link>
                    <Link href="#PORTFOLIO">MI PORTAFOLIO</Link>
                    <Link href="#CONTACT">CONTACTO</Link>
                </div>
            </div>
            <Separator className="my-4"/>
            <div className="text-center">&copy; 2025 LA PAGINA DE MI PORTAFOLIO</div>
        </footer>
     );
}
 
export default Footer;