interface singleProject {
    title: string,
    value: string,
    info: string,
    link: string,
    bg: string
}

interface projectsContent extends Array<singleProject>{}

export const projectsContent = [
    {
        title: "Bean Counter",
        value: 'beancounter',
        info : "Built in React with Typescript and Vite, and \
                        with a back-end PostgreSQL database hosted on\
                        AWS. This app will help you journal your coffee\
                        experiences and explore new roasts.",
        link: "https://github.com/acarlseen/bean-counter-react",
        bg: '/img/BeanCounter.jpeg'
    },
    {
        title: "Break Out",
        value: 'breakout',
        info : "A retro game made in the Godot engine— \
        from a series of small games centered around \
        implementing design patterns.\
        This game is a quick study of the Observer pattern.",
        link: "https://github.com/acarlseen/breakout",
        bg: '/img/BreakOut.jpeg'
    },
    {
        title: "Quicken Amortization",
        value: 'quickenamort',
        info : "A contribution to a project written in Objective-C. \
                    I extended functionality to include customizable \
                    payment and compounding schedules.",
        link: "https://github.com/acarlseen/QAmmoriization",
        bg: '/img/QAmmort.jpeg'
    },
    
]