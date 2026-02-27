import { LinkedinIcon, Mail } from "lucide-react";

export default function Header() {
    return(
        <header>
            <div className="photo">
                <img src="/images/image.png" alt="Face Photo" />
            </div>

            <nav>
                <div>
                    <h1>Laura Smith</h1>
                    <p>Frontend Developer</p>
                    <small>laruasmith.website</small>
                </div>
                <div className="links">
                    <a id="mail-link" href="mailto:laura@smith.com"><Mail /> Email</a>
                    <a id="din-link" href="https://www.linkedin.com/in/ovez/"><LinkedinIcon /> LinkedIn</a>
                </div>
            </nav>
        </header>
    )
}