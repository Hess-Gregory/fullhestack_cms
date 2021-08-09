export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard',
    },
    {
      name: 'Utilisateur',
      url: '/user',
      icon: 'fa fa-user',
    },
    // {
    //   name: 'Message',
    //   url: '/message',
    //   icon: 'fa fa-user',
    // },
    {
      name: 'Carousel',
      url: '/carousel',
      icon: 'fa fa-leaf',
    },
    {
      name: 'Nos Services',
      url: '/service',
      icon: 'fa fa-feed',
      children: 
      [
          {
            name: 'Description',
            url: '/service/servicedesc',
            icon: 'fa fa-info',
          },
          {
            name: 'Liste de services',
            url: '/service/service',
            icon: 'fa fa-check',
          }

      ],
    },     
    {
      name: 'Galerie Photos',
      url: '/gallery',
      icon: 'fa fa-film',
      children: 
      [
          {
            name: 'Description',
            url: '/gallery/gallerydesc',
            icon: 'fa fa-info',
          },
          {
            name: 'Les médias',
            url: '/gallery/gallery',
            icon: 'fa fa-check',
          },

      ],
    },
    {
      name: 'Commentaires',
      url: '/testimony',
      icon: 'fa fa-comments-o',
    },
    {
      name: 'L\'équipe',
      url: '/team',
      icon: 'fa fa-users',
    },
    {
      name: 'Réseaux Social',
      url: '/socmed',
      icon: 'fa fa-share-alt',
    },
    {
      name: 'Blog',
      url: '/blog',
      icon: 'fa fa-rss',
    },
    {
      name: 'Header',
      url: '/header',
      icon: 'fa fa-header',
    },
    {
      name: 'A Propos',
      url: '/about',
      icon: 'fa fa-info',
    },
    {
      name: 'Coordonnées',
      url: '/contact',
      icon: 'fa fa-phone',
    }
  ],
};
