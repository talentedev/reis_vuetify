const leftLinks = [
  {
    path: '/standards/formorder',
    name: 'Forms Order',
    icon: 'reorder',
    mb: true
  },
  {
    path: '/standards/scope',
    name: 'Project Scope',
    icon: 'fa-newspaper-o'
  },
  {
    path: '/standards/authorization',
    name: 'Work Authorization',
    icon: 'fa-pencil'
  },
  {
    path: '/standards/antimicrobial',
    name: 'Anti-Microbial',
    icon: 'fa-certificate'
  },
  {
    path: '/standards/responsibility',
    name: 'Customer Responsibility',
    icon: 'fa-hand-grab-o'
  },
  {
    path: '/standards/liability',
    name: 'Release from Liability',
    icon: 'fa-chain-broken'
  },
  {
    path: '/standards/stoppage',
    name: 'Work Stoppage',
    icon: 'fa-hand-paper-o'
  },
  {
    path: '/standards/certificate',
    name: 'Certificate of Completion',
    icon: 'fa-trophy',
    mb: true
  },
  {
    path: '/standards/areas',
    name: 'Affected Areas',
    icon: 'fa-bullseye'
  },
  {
    path: '/standards/crews',
    name: 'Crews / Teams',
    icon: 'fa-users'
  },
  {
    path: '/standards/structures',
    name: 'Structures',
    icon: 'fa-cubes'
  },
  {
    path: '/standards/materials',
    name: 'Materials',
    icon: 'fa-cogs'
  }
]

const rightLinks = [
  {
    path: 'support',
    name: 'Suggestions/Support',
    icon: 'fa-ticket'
  },
  {
    path: 'calendar',
    name: 'Calendar',
    icon: 'fa-calendar-o'
  },
  {
    path: '/standards/createform',
    name: 'Create Form',
    icon: 'fa-file-text',
    mt: true
  }
]

const routes = (configRoute) => [
  {
    path: '/standards/formorder',
    name: 'Formorder',
    props: {title: 'Formorder'},
    meta: {
      title: 'Set order of the forms',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Formorder.vue'], resolve)
    }
  },
  {
    path: '/standards/scope',
    name: 'Scope',
    props: {title: 'Scope'},
    meta: {
      title: 'Project Scope',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Scope.vue'], resolve)
    }
  },
  {
    path: '/standards/authorization',
    name: 'Authorization',
    props: {title: 'Authorization'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Authorization.vue'], resolve)
    }
  },
  {
    path: '/standards/antimicrobial',
    name: 'Antimicrobial',
    props: {title: 'antimicrobial'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Antimicrobial.vue'], resolve)
    }
  },
  {
    path: '/standards/responsibility',
    name: 'Responsibility',
    props: {title: 'Responsibility'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Responsibility.vue'], resolve)
    }
  },
  {
    path: '/standards/liability',
    name: 'Liability',
    props: {title: 'Liability'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Liability.vue'], resolve)
    }
  },
  {
    path: '/standards/stoppage',
    name: 'Stoppage',
    props: {title: 'Stoppage'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Stoppage.vue'], resolve)
    }
  },
  {
    path: '/standards/certificate',
    name: 'Certificate',
    props: {title: 'Certificate'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Certificate.vue'], resolve)
    }
  },
  {
    path: '/standards/areas',
    name: 'Areas',
    props: {title: 'Areas'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Areas.vue'], resolve)
    }
  },
  {
    path: '/standards/crews',
    name: 'Crews',
    props: {title: 'Crews'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Crews.vue'], resolve)
    }
  },
  {
    path: '/standards/structures',
    name: 'Structures',
    props: {title: 'Structures'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Structures.vue'], resolve)
    }
  },
  {
    path: '/standards/materials',
    name: 'Materials',
    props: {title: 'Materials'},
    meta: {
      title: '',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/standards/Materials.vue'], resolve)
    }
  }
]

export default routes
