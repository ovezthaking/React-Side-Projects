import { LinkedinIcon, Mail } from "lucide-react";

export default function Header() {
    return(
        <header>
            <div className="photo">
                <img src="/images/image2.png" alt="Face Photo" />
            </div>

            <nav>
                <div>
                    <h1>Oliwer Urbaniak</h1>
                    <p>Fullstack Developer</p>
                    <small>addipi.vercel.app</small>
                </div>
                <div className="links">
                    <a id="mail-link" href="mailto:oliwerx12@gmail.com"><Mail /> Email</a>
                    <a id="din-link" href="https://www.linkedin.com/in/ovez/"><LinkedinIcon /> LinkedIn</a>
                </div>
            </nav>
        </header>
    )
}