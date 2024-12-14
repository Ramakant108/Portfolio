import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Doctor Appointment Web',
        description: "Me and my team built an Doctor Appointment Web application. I have developed API using Express and MongoDB. ",
        tools: ['Express', 'MongoDB','React js','node js','Github','Render','Netlify','Postman'],
        live:'https://user-doctorappointment.netlify.app',
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Resume Builder',
        description: 'Our Resume Builder web app simplifies the process of creating professional resumes. Designed with React and Redux for seamless state management, this platform empowers users to select from beautifully designed templates, input their personal and professional information, and generate polished resumes tailored to their career needs.',
        tools: ['React js','redux'],
        live:'https://nexttepcv.netlify.app',
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Todo app',
        description: 'Our To-Do App, built with React and Redux, is a powerful yet simple tool to help users manage their daily tasks and stay organized. Designed with a clean and intuitive interface, this app ensures that productivity is always at your fingertips.',
        tools: ['React','redux'],
        live:'https://reactodoweb.netlify.app',
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },