import DashboardIcon from "@material-ui/icons/Dashboard";
import TableComponent from "../table";
import FormComponent from "../form";
import HomeComponent from "../home";

const Routers = [
    {
        path:'/',
        name:'Inicial',
        component:<HomeComponent/>,
        icon:<DashboardIcon/>
    },
    {
        path:'/table',
        name:'Tabela',
        component:<TableComponent/>,
        icon:<DashboardIcon/>
    },
    {
        path:'/form',
        name:'Formulario',
        component: <FormComponent/>,
        icon:<DashboardIcon/>
    },
]

export default Routers