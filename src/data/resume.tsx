import {Icons} from "@/components/icons";
import {HomeIcon} from "lucide-react";

export const DATA = {
    name: "Anmol Rohilla",
    initials: "AR",
    url: "https://anmol-portfolio.vercel.app",
    location: "Mahem, Haryana",
    locationLink: "https://maps.app.goo.gl/yaWVnV9rtiMJJvzMA",
    description: "A web and mobile application developer based in India. Building useful apps and websites since 2023.",
    summary: "At the heart of my projects lies the fundamental principle of human centricity: a steadfast commitment to " +
        "understanding the individuals who will ultimately engage with my creations. Every step of the way, I meticulously" +
        " consider the needs, desires, and experiences of the people who will become users of my innovative solutions.",
    avatarUrl: "/me.png",
    skills: [
        "C",
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "TailwindCSS",
        "React",
        "NextJS"
    ],
    navbar: [
        {href: "/", icon: HomeIcon, label: "Home"}
    ],
    contact: {
        email: "rohillaanmol2411@gmail.com",
        tel: "+91 72066 52471",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/anmol2411",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anmol-rohilla-647785360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: Icons.linkedin,

                navbar: true,
            },
            Email: {
                name: "Send Email",
                url: "mailto:rohillaanmol2411@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    education: [
        {
            school: "Model School, Meham",
            href: "https://modelschoolmeham.com/",
            degree: "Xth",
            logoUrl: "/model_school.png",
            start: "",
            end: "",
        },
        {
            school: "HD Senior Secondary School, Mahem",
            href: "https://hdpskheri.com/",
            degree: "Matriculation",
            logoUrl: "/hd_school.png",
            start: "",
            end: "",
        },
    ],
    projects: [
        {
            title: "Weather App",
            href: "https://weather-anmol.vercel.app/",
            active: true,
            description:
                "A weather application build using ShadCN components. It fetches weather data from https://www.weatherapi.com/",
            technologies: [
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "ShadCN",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://weather-anmol.vercel.app/",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/anmol2411/PRODIGY_WD_05",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/weather_app_screenshot.png",
        },
        {
            title: "Stopwatch App",
            href: "https://stopwatch-anmol.vercel.app/",
            active: true,
            description:
                "A stopwatch app build using ShadCN components and NextJS framework.",
            technologies: [
                "Next.js",
                "Typescript",
                "TailwindCSS",
                "ShadCN",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://stopwatch-anmol.vercel.app/",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/anmol2411/PRODIGY_WD_02",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/stopwatch_app_screenshot.png",
        }
    ]
} as const;
