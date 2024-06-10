import { IResourceItem } from "@refinedev/core";
import { DashboardOutlined,ShopOutlined,ProjectOutlined } from "@ant-design/icons";


export const resource:IResourceItem[] = [
    {
        name:'dashboard',
        list:'/',
        meta:{
            label:'Dashboard',
            icon:<DashboardOutlined/>
        }
    },
    {
        name:'companies',
        list:'/companies',
        show:'/companies/:id',
        create:'/companies/new',
        edit:'/companies/edit/:id',
        meta:{
            label:'Companies',
            icon:<ShopOutlined/>
        }
    },
    {
        name:'tasks',
        list:'/tasks',
        show:'/tasks/:id',
        create:'/tasks/new',
        edit:'/tasks/edit/:id',
        meta:{
            label:'Tasks',
            icon:<ProjectOutlined/>
        }
    }
]