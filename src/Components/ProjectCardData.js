// Here we gonna create an API which will store the data of our projects and we can render this info in form of cards
import img1 from '../assets/Project1.png'
import img2 from '../assets/Project2.png'
import img3 from '../assets/Project3.png'
// Now create a function contains the data of the cards
const ProjectData =[
    {
        imgad:img1,
        title:"Nerdy",
        about:"This website has few sections like: Tech-dive(It helps to make you updated with latest technologies and tools and blogs(In this I explained issue like-Procrastination, pschycological-problems and much more The Website is fully Responsive.To make it more attractive I included several animated sections using javascript and css very efficiently.",
        explore:"https://nerddytechh.netlify.app/",
        github:"https://github.com/KumarAbhay98/Nerdyytechh"

    },
    {
        imgad:img2,
        title:"Boxxoffice",
        about:"I used the Core concepts of React.js along with CSS, Javascript and a bit of bootstrap as well. Moreover, I used Formik along with YUP for form Validation. I created my API from where I'm fetching the data for cards. The Website has a beautiful react-bootstrap Carousel which shows some featured movies ",
        explore:"https://boxxoffice.netlify.app/",
        github:"https://github.com/KumarAbhay98/Boxxoffice"

    },
    {
        imgad:img3,
        title:"Portfolio",
        about:"This is my personal react portfolio which has an amazing UI. The portfolio has many sections like you guys can read about me and can take a look on my projects. Moreover, I mentioned about my skills and how you can contact me for work",
        explore:"https://kumarabhay-portfolio.netlify.app/",
        github:"https://github.com/KumarAbhay98/react-portfolio"
    }
];

export default ProjectData
