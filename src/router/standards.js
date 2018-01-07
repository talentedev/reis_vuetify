const leftLinks = [
  {
    path: '/standards/formorder',
    name: 'Form Order'
  },
  {
    path: '/standards/scope',
    name: 'Project Scope'
  },
  {
    path: '/standards/authorization',
    name: 'Work Authorization'
  },
  {
    path: '/standards/antimicrobial',
    name: 'Anti-Microbial'
  },
  {
    path: '/standards/responsibility',
    name: 'Customer Responsibility'
  },
  {
    path: '/standards/liability',
    name: 'Release from Liability'
  },
  {
    path: '/standards/stoppage',
    name: 'Work Stoppage'
  },
  {
    path: '/standards/certificate',
    name: 'Certificate of Completion'
  },
  {
    path: '/standards/areas',
    name: 'Affected Areas'
  },
  {
    path: '/standards/crews',
    name: 'Crews Teams'
  },
  {
    path: '/standards/structures',
    name: 'Structures'
  },
  {
    path: '/standards/materials',
    name: 'Materials'
  }
]

const rightLinks = [
  {
    path: 'support',
    name: 'Suggestion/Support'
  },
  {
    path: 'calendar',
    name: 'Calendar'
  },
  {
    path: '/standards/createform',
    name: 'Create Form'
  }
]

const routes = (configRoute) => [
  {
    path: '/standards/formorder',
    name: 'Formorder',
    props: {title: 'Formorder'},
    meta: {
      title: 'Formorder',
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
      title: '',
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
