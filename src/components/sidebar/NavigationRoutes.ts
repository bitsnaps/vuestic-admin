export default {
    root: {
      name: '/',
      displayName: 'app.navigationRoutes.home',
    },
    routes: [
      // dashboard
      {
        name: 'dashboard',
        displayName: 'app.menu.dashboard',
        meta: {
          icon: 'vuestic-iconset-dashboard',
        },
      },
      // statistics
      {
        name: 'statistics',
        displayName: 'app.menu.statistics',
        meta: {
          icon: 'vuestic-iconset-statistics',
        },
        disabled: true,
        children: [
          {
            name: 'charts',
            displayName: 'app.menu.charts',
          },
          {
            name: 'progress-bars',
            displayName: 'app.menu.progressBars',
          },
        ],
      },
      // forms
      {
        name: 'forms',
        displayName: 'app.menu.forms',
        meta: {
          icon: 'vuestic-iconset-forms',
        },
        disabled: true,
        children: [
          {
            name: 'form-elements',
            displayName: 'app.menu.formElements',
          },
          {
            name: 'medium-editor',
            displayName: 'app.menu.mediumEditor',
          },
        ],
      },
      // tables
      {
        name: 'tables',
        displayName: 'app.menu.tables',
        meta: {
          icon: 'vuestic-iconset-tables',
        },
        children: [
          {
            name: 'markup',
            displayName: 'app.menu.markupTables',
          },
          {
            name: 'data',
            displayName: 'app.menu.dataTables',
          },
        ],
      },
      // ui
      {
        name: 'ui',
        displayName: 'app.menu.uiElements',
        meta: {
          icon: 'vuestic-iconset-ui-elements',
        },
        disabled: true,
        children: [
          {
            name: 'buttons',
            displayName: 'app.menu.buttons',
          },
          {
            name: 'cards',
            displayName: 'app.menu.cards',
          },
          {
            name: 'chat',
            displayName: 'app.menu.chat',
          },
          {
            name: 'chips',
            displayName: 'app.menu.chips',
          },
          {
            name: 'collapses',
            displayName: 'app.menu.collapses',
          },
          {
            name: 'colors',
            displayName: 'app.menu.colors',
          },
          // {
          //   name: 'color-pickers',
          //   displayName: 'app.menu.colorPickers',
          // },
          {
            name: 'file-upload',
            displayName: 'app.menu.fileUpload',
          },
          {
            name: 'grid',
            displayName: 'app.menu.grid',
          },
          {
            name: 'icon-sets',
            displayName: 'app.menu.icons',
            children: [
              {
                displayName: 'app.concrete',
                name: 'icon-set',
              },
            ],
          },
          {
            name: 'lists',
            displayName: 'app.menu.lists',
          },
          {
            name: 'modals',
            displayName: 'app.menu.modals',
          },
          {
            name: 'notifications',
            displayName: 'app.menu.notifications',
          },
          {
            name: 'popovers',
            displayName: 'app.menu.popovers',
          },
          {
            name: 'rating',
            displayName: 'app.menu.rating',
          },
          {
            name: 'sliders',
            displayName: 'app.menu.sliders',
          },
          {
            name: 'spacing',
            displayName: 'app.menu.spacing',
          },
          // You'll need to npm install epic-spinners
          // {
          //   name: 'spinners',
          //   displayName: 'app.menu.spinners',
          // },
          {
            name: 'tabs',
            displayName: 'app.menu.tabs',
          },
          {
            name: 'timelines',
            displayName: 'app.menu.timelines',
          },
          {
            name: 'tree-view',
            displayName: 'app.menu.treeView',
          },
          {
            name: 'typography',
            displayName: 'app.menu.typography',
          },
        ],
      },
      // maps
      {
        name: 'maps',
        displayName: 'app.menu.maps',
        meta: {
          icon: 'vuestic-iconset-maps',
        },
        disabled: true,
        children: [
          {
            name: 'google-maps',
            displayName: 'app.menu.google-maps',
          },
      //     {
      //       name: 'yandex-maps',
      //       displayName: 'app.menu.yandex-maps',
      //     },
      //     {
      //       name: 'leaflet-maps',
      //       displayName: 'app.menu.leaflet-maps',
      //     },
      //     {
      //       name: 'bubble-maps',
      //       displayName: 'app.menu.bubble-maps',
      //     },
      //     {
      //       name: 'line-maps',
      //       displayName: 'app.menu.line-maps',
      //     },
        ],
      },
      // pages
      {
        name: 'pages',
        displayName: 'app.menu.pages',
        meta: {
          icon: 'vuestic-iconset-files',
        },
        disabled: true,
        children: [
          {
            name: 'login',
            displayName: 'app.menu.login-singup',
          },
          {
            name: '404-pages',
            displayName: 'app.menu.404-pages',
          },
          {
            name: 'faq',
            displayName: 'app.menu.faq',
          },
        ],
      },
    ],
  }
  