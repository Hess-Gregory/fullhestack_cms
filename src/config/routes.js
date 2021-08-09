import React from 'react';

const Dashboard = React.lazy(() => import('pages/Dashboard/Dashboard')),
      User      = React.lazy(() => import('pages/User/User')),
      Carousel  = React.lazy(() => import('pages/Carousel/Carousel')),
      Service   = React.lazy(() => import('pages/Service/Service')),
      Servicedesc   = React.lazy(() => import('pages/Servicedesc/Servicedesc')),
      Gallery   = React.lazy(() => import('pages/Gallery/Gallery')),
      Gallerydesc   = React.lazy(() => import('pages/Gallerydesc/Gallerydesc')),
      Team      = React.lazy(() => import('pages/Team/Team')),
      Testimony = React.lazy(() => import('pages/Testimony/Testimony')),
      Socmed    = React.lazy(() => import('pages/Socmed/Socmed')),
      Message    = React.lazy(() => import('pages/Message/Message')),
      Blog      = React.lazy(() => import('pages/Blog/Blog')),
      Header    = React.lazy(() => import('pages/Header/Header')),
      About     = React.lazy(() => import('pages/About/About')),
      Contact   = React.lazy(() => import('pages/Contact/Contact')),
      NotFound   = React.lazy(() => import('pages/Page404/Page404')),
      InternalServer   = React.lazy(() => import('pages/Page500/Page500'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Accueil' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/user', name: 'Utilisateur', component: User },
  { path: '/carousel', name: 'Carousel', component: Carousel },
  { path: '/service', exact: true,  name: 'Service', component: Service }, 
  { path: '/service', name: 'Service', component: Service },
  { path: '/service/service', name: 'Nos Services', component: Service},
  { path: '/service/servicedesc', name: 'Introduction', component: Servicedesc},
  { path: '/gallery', exact: true,  name: 'Gallery', component: Gallery },
  { path: '/gallery/gallery', name: 'Nos Médias', component: Gallery},
  { path: '/gallery/gallerydesc', name: 'Introduction', component: Gallerydesc},
  { path: '/message', name: 'Message', component: Message },
  { path: '/team', name: 'L\'équipe', component: Team },
  { path: '/testimony', name: 'Testimony', component: Testimony },
  { path: '/socmed', name: 'Socmed', component: Socmed },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/header', name: 'Header', component: Header },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '*', component: NotFound },
  { path: '/500', component: InternalServer }
];

export default routes;
