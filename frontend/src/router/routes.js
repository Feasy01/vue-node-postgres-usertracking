import Home from "@/views/Home.vue"
import Dashboard from "@/views/Dashboard.vue"
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]

export default routes