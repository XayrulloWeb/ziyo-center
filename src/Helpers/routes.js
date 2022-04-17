import Home from ".././Components/Home/Home";
import Journals from ".././Components/Home/Journals";
import Contact from ".././Pages/Contact";
import Arxiv from ".././Pages/Arxiv";
import Members from ".././Pages/Members";

const routes = [
    {

        id:1,
        path: '/',
        component: Home,
    },
    {
        id:2,
        path: "/journale",
        component: Journals
    },
    {
        id:3,
        path: "/contact",
        component: Contact
    },
    {
        id:4,
        path: "/arxiv",
        component: Arxiv
    },
    {
        id:5,
        path: "/members",
        component: Members
    }

]
export default routes