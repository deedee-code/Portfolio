import birthmark from "../assets/birthmark.jpg"
import eCommerce from "../assets/E-Commerce.png"
import instagramClone from "../assets/instagram-clone.png"
import loanwise from "../assets/loanwise.jpg"

export const HERO_CONTENT = `I'm a backend developer with expertise in server-side technologies and database management. I love solving complex problems and optimizing performance.`

export const ABOUT_TEXT = `Hi, I'm Doris, a backend developer with a love for creating efficient software solutions. With a solid foundation in programming languages and a commitment to continuous learning, I strive to leverage my skills to build seamless and scalable backend systems.

I have a good understanding and experience in the following programming languages such as HTML, CSS, JavaScript, Nestjs, NodeJS, along with backend framework like ExpressJS. When it comes to databases, I have expertise in managing NoSQL technologies such as MongoDB and SQL technologies like Postgresql. Additionally, I have experience working with Git/GitHub and Postman.

I'm passionate about tackling new backend development challenges and I'm always eager to learn more. If you're interested in collaborating or discussing how my skills can benefit your project, feel free to get in touch. I'm excited to connect with you!`

export const PROJECTS = [
    {
        title: "Birthmark",
        image: birthmark,
        description:
            "A web automation tool that automatically sends birthday wishes to loved ones. It utilizes a background job to identify active birthdays for the upcoming day.",
        technologies: ["Nodejs", "Expressjs", "TypeScript", "PostgreSQL", "MongoDB"],
        link: "https://documenter.getpostman.com/view/26786258/2sA3JT1xKi"
    },
    {
        title: "E-Commerce Store Website",
        image: eCommerce,
        description:
            "A Cloned E-Commerce Store Website with features like product listing and shopping cart",
        technologies: ["Nextjs", "Reactjs", "Tailwindcss", "Nodejs", "Expressjs", "MongoDB"],
        link: "https://ecommerce-store-website-deedeecodes-projects.vercel.app/"
    },
    {
        title: "Instagram-Clone",
        image: instagramClone,
        description:
            "A cloned instagram platform with features like user profiles, posts, and comments.",
        technologies: ["Nodejs", "Expressjs", "EJS", "MongoDB"],
        link: "https://insta-clone-s9bn.onrender.com/home"
    },
    {
        title: "Loanwise",
        image: loanwise,
        description:
            "A FinTech Application APIs that help financial analysts and organizations to predict if a borrower will default or not after they receive a loan.",
        technologies: ["Nodejs", "Expressjs", "MongoDB"],
        link: "https://documenter.getpostman.com/view/16995065/2s93sZ7u1u"
    },
]

export const CONTACT = {
    Address: "Ibadan, Nigeria",
    PhoneNo: "+2349034386445",
    Email: "deedeeowoeye@gmail.com"
}