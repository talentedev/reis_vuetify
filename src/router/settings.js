const leftLinks = [
  {
    path: '/settings/account',
    name: 'Account',
    icon: 'fa-user-circle-o'
  },
  {
    path: '/settings/company',
    name: 'Company',
    icon: 'fa-building'
  },
  {
    path: '/settings/users',
    name: 'Users',
    icon: 'fa-users'
  },
  // {
  //   path: '/settings/teams',
  //   name: 'Teams'
  // },
  {
    path: '/settings/invoices',
    name: 'Invoices',
    icon: 'fa-paper-plane'
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
  }
]

const routes = (configRoute) => [
  {
    path: '/settings/account',
    name: 'Account',
    props: {title: 'Account'},
    meta: {
      title: 'Manage Your Account',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/settings/Account.vue'], resolve)
    }
  },
  {
    path: '/settings/company',
    name: 'Company',
    props: {title: 'Company'},
    meta: {
      title: 'Manage Your Company Profile',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/settings/Company.vue'], resolve)
    }
  },
  {
    path: '/settings/users',
    name: 'Users',
    props: {title: 'Users'},
    meta: {
      title: 'Manage Your Users',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/settings/Users.vue'], resolve)
    }
  },
  {
    path: '/settings/invoices',
    name: 'Invoices',
    props: {title: 'Invoices'},
    meta: {
      title: 'Invoices',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/settings/Invoices.vue'], resolve)
    }
  }
]

export default routes
