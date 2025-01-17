
interface skillsList {
    title: string,
    value: string,
    content: {
        itemList: string[],
        blurb: string
    },
    cardContent: React.ReactNode
}

export const skillsList = [
    {
        title : 'Skills',
        value: 'skills',
        content: {
            itemList: ['Team leadership', 'Effective communication', 'Time management', 'Problem Solving', 'Training', 'Product development'],
            blurb: 'My previous roles have required ample communication and problem solving \
            in detail-oriented, high-pressure settings. I am well-versed in long hours and \
            I give my best every day. As a manager I lead teams with clear vision, setting \
            standards and goals that build a path to excellence. My team members enjoy working \
            with me as I take the time to understand their motivators and how to guide each person towards our shared mission.'
        },
    },
    {
        title : 'Languages',
        value: 'languages',
        content: {
            itemList: ['C++', 'Objective-C', 'C#', 'Python', 'PostgresSQL', 'C for Arduino', 'JavaScript', 'Typescript', 'HTML', 'CSS3'],
            blurb: 'Languages are tools we use as programmers, and I enjoy learning each one and its use case. \
            I started in high school with C++ and I have programmed in languages ranging from assembly to python over the years. \
            I am confident and comfortable with the process of learning languages and can adapt to any tech stack.'
        },
    },
    {
        title : 'Frameworks',
        value: 'frameworks',
        content: {
            itemList: ['Flask', 'ReactJS', 'Tailwind CSS', 'Godot'],
            blurb: 'Frameworks extend the functionality of languages and provide great built-in functionality for \
            their task-oriented purpose. I have built programs using these frameworks and spent a bunch of time \
            exploring their docs. You could call me a "documentation enthusiast."'
        },
    },
    
]