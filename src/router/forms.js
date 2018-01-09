const leftLinks = [
  {
    path: '/forms',
    name: 'Forms',
    mb: true
  },
  {
    path: '/forms/callreport',
    name: 'Call Report'
  },
  {
    path: '/forms/scope',
    name: 'Project Scope'
  },
  {
    path: '/forms/dailylog',
    name: 'Daily Log'
  }
]

const rightLinks = [
  {
    path: 'support',
    name: 'Suggestion/Support',
    icon: 'fa-ticket'
  },
  {
    path: 'calendar',
    name: 'Calendar',
    icon: 'fa-calendar-o'
  },
  {
    path: 'preview',
    name: 'Preview',
    icon: 'fa-eye'
  },
  {
    path: 'email',
    name: 'Email',
    icon: 'fa-envelope-o'
  },
  {
    path: 'print',
    name: 'Print',
    icon: 'fa-print'
  },
  {
    path: 'save',
    name: 'Save',
    icon: 'fa-floppy-o'
  },
  {
    path: 'areas',
    name: 'Affected Areas',
    icon: 'fa-bullseye',
    mt: true
  }
]

const routes = (configRoute) => [
  {
    path: '/forms',
    name: 'Forms',
    props: {title: 'Forms'},
    meta: {
      title: 'Forms',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/forms/Forms.vue'], resolve)
    }
  },
  {
    path: '/forms/callreport',
    name: 'Callreport',
    props: {title: 'Callreport'},
    meta: {
      title: 'Call Report',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/forms/Callreport.vue'], resolve)
    }
  },
  {
    path: '/forms/scope',
    name: 'Projectscope',
    props: {title: 'Projectscope'},
    meta: {
      title: 'Project Scope',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/forms/Scope.vue'], resolve)
    }
  },
  {
    path: '/forms/dailylog',
    name: 'dailylog',
    props: {title: 'dailylog'},
    meta: {
      title: 'Daily Log',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/forms/Dailylog.vue'], resolve)
    }
  }
]

export default routes
