import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import MainPage from './components/MainPage';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';


const router = createBrowserRouter([

    {
        path:'/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: "/project/:id",
                element: <ProjectDetail />
            }
        ]
    },


    // {
    //     path: '*',
    //     element: <NotFound />
    // }
]);

export default router;
