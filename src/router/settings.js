const leftLinks = [
  {
    path: '/settings/account',
    name: 'Account'
  },
  {
    path: '/settings/company',
    name: 'Company'
  },
  {
    path: '/settings/users',
    name: 'Users'
  },
  // {
  //   path: '/settings/teams',
  //   name: 'Teams'
  // },
  {
    path: '/settings/invoices',
    name: 'Invoices'
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
      title: 'Manage Your Invoices',
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
