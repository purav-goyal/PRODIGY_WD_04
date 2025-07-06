import {Icons} from "@/components/icons";
import {HomeIcon} from "lucide-react";

export const DATA = {
    name: "Purav Goyal",
    initials: "PG",
    url: "https://purav-goyal-portfolio.vercel.app",
    location: "Fatehabad, Haryana",
    locationLink: "",
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
        email: "puravgoyal2018@gmail.com",
        tel: "+91 95883 48758",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/purav-goyal",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/purav-goyal-0a1013293/",
                icon: Icons.linkedin,

                navbar: true,
            },
            Email: {
                name: "Send Email",
                url: "mailto:puravgoyal2018@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    education: [
        {
            school: "Jawahar Navodaya Vidyalaya, Fatehabad",
            href: "https://cbseitms.rcil.gov.in/nvs",
            degree: "XII",
            logoUrl: "/navodaya_school.png",
            start: "",
            end: "",
        }
    ],
    projects: [
        {
            title: "Weather App",
            href: "https://purav-weather.vercel.app/",
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
                    href: "https://purav-weather.vercel.app/",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/purav-goyal/PRODIGY_WD_05",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/weather_app_screenshot.png",
        },
        {
            title: "Stopwatch App",
            href: "https://purav-stopwatch.vercel.app/",
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
                    href: "https://purav-stopwatch.vercel.app/",
                    icon: <Icons.globe className="size-3"/>,
                },
                {
                    type: "Source",
                    href: "https://github.com/purav-goyal/PRODIGY_WD_02",
                    icon: <Icons.github className="size-3"/>,
                },
            ],
            image: "/stopwatch_app_screenshot.png",
        }
    ]
} as const;
