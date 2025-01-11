interface singleProject {
    title: string,
    info: string,
    link: string,
    bg: string
}

interface projectsContent extends Array<singleProject>{}

export const projectsContent = [
    {
        title: "Bean Counter",
        info : "Built in React with Typescript and Vite, and \
                        with a back-end PostgreSQL database hosted on\
                        AWS. This app will help you journal your coffee\
                        experiences and explore new roasts.",
        link: "https://github.com/acarlseen/bean-counter-react",
        bg: 'src/assets/img/BeanCounter.jpeg'
    },
    {
        title: "Break Out",
        info : "A retro game in the Godot enginel written in C# \
                    this game is all about the Observer pattern.",
        link: "https://github.com/acarlseen/breakout",
        bg: 'src/assets/img/BreakOut.jpeg'
    },
    {
        title: "Quicken Amortization",
        info : "A contribution to a project written in Objective-C. \
                    I extended functionality to include customizable \
                    payment and compounding schedules.",
        link: "https://github.com/acarlseen/QAmmoriization",
        bg: 'src/assets/img/QAmmort.jpeg'
    },
    
]