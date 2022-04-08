import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layouts/app-layout.vue'
import AuthLayout from '../layouts/auth-layout.vue'
import RouteViewComponent from './route-view.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:catchAll(.*)",
        redirect: { name: 'dashboard' },
    },
    // admin
    {
        name: 'admin',
        path: '/admin',
        component: AppLayout,
        children: [
          // dashboard
          {
            name: 'dashboard',
            path: 'dashboard',
            component: () => import('../pages/admin/dashboard/Dashboard.vue'),
          },
          // statistics
          {
            name: 'statistics',
            path: 'statistics',
            component: RouteViewComponent,
            children: [
              {
                name: 'charts',
                path: 'charts',
                component: () => import('../pages/admin/statistics/charts/Charts.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
                },
              },
              {
                name: 'progress-bars',
                path: 'progress-bars',
                component: () => import('../pages/admin/statistics/progress-bars/ProgressBars.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
                },
              },
            ],
          },
          // forms
          {
            name: 'forms',
            path: 'forms',
            component: RouteViewComponent,
            children: [
              {
                name: 'form-elements',
                path: 'form-elements',
                component: () => import('../pages/admin/forms/form-elements/FormElements.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
                },
              },
              {
                name: 'medium-editor',
                path: 'medium-editor',
                component: () => import('../pages/admin/forms/medium-editor/MediumEditor.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
                },
              },
            ],
          },
          // maps
          {
            name: 'maps',
            path: 'maps',
            component: RouteViewComponent,
            children: [
              {
                name: 'google-maps',
                path: 'google-maps',
                component: () => import('../pages/admin/maps/google-maps/GoogleMapsPage.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
                },
              },
              {
                name: 'yandex-maps',
                path: 'yandex-maps',
                component: () => import('../pages/admin/maps/yandex-maps/YandexMapsPage.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
                },
              },
              {
                name: 'leaflet-maps',
                path: 'leaflet-maps',
                component: () => import('../pages/admin/maps/leaflet-maps/LeafletMapsPage.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
                },
              },
              {
                name: 'bubble-maps',
                path: 'bubble-maps',
                component: () => import('../pages/admin/maps/bubble-maps/BubbleMapsPage.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
                },
              },
              {
                name: 'line-maps',
                path: 'line-maps',
                component: () => import('../pages/admin/maps/line-maps/LineMapsPage.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
                },
              },
            ],
          },
          // tables
          {
            name: 'tables',
            path: 'tables',
            component: RouteViewComponent,
            children: [
              {
                name: 'markup',
                path: 'markup',
                component: () => import('../pages/admin/tables/markup-tables/MarkupTables.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
                },
              },
              {
                name: 'data',
                path: 'data',
                component: () => import('../pages/admin/tables/data-tables/DataTables.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
                },
              },
            ],
          },
          // ui elements
                // ui
                {
                  name: 'ui',
                  path: 'ui',
                  component: RouteViewComponent,
                  children: [
                    {
                      name: 'typography',
                      path: 'typography',
                      component: () => import('../pages/admin/ui/typography/Typography.vue'),
                    },
                    {
                      name: 'buttons',
                      path: 'buttons',
                      component: () => import('../pages/admin/ui/buttons/Buttons.vue'),
                      meta: {
                        wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
                      },
                    },
          {
            name: 'rating',
            path: 'rating',
            component: () => import('../pages/admin/ui/rating/Rating.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Rating',
            },
          },
          {
            name: 'color-pickers',
            path: 'color-pickers',
            component: () => import('../pages/admin/ui/color-pickers/ColorPickers.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
            },
          },
          {
            name: 'timelines',
            path: 'timelines',
            component: () => import('../pages/admin/ui/timelines/Timelines.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
            },
          },
          {
            name: 'notifications',
            path: 'notifications',
            component: () => import('../pages/admin/ui/notifications/Notifications.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Notifications',
            },
          },
          {
            path: 'icons',
            component: () => import('../pages/admin/ui/icons/Icons.vue'),
            children: [
                    {
                      name: 'icon-sets',
                      path: '', // Default route
                      component: () => import('../pages/admin/ui/icons/SetsList.vue'),
                      meta: {
                        wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                      },
                    },
                    {
                      name: 'icon-set',
                      path: ':name',
                      component: () => import('../pages/admin/ui/icons/IconSet.vue'),
                      props: true,
                      meta: {
                        wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                      },
                    },
                  ],
                },
                {
                  name: 'spinners',
                  path: 'spinners',
                  component: () => import('../pages/admin/ui/spinners/Spinners.vue'),
                },
                {
                  name: 'grid',
                  path: 'grid',
                  component: () => import('../pages/admin/ui/grid/Grid.vue'),
                },
                {
                  name: 'modals',
                  path: 'modals',
                  component: () => import('../pages/admin/ui/modals/Modals.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
                  },
                },
                {
                  name: 'cards',
                  path: 'cards',
                  component: () => import('../pages/admin/ui/cards/Cards.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
                  },
                },
                {
                  name: 'file-upload',
                  path: 'file-upload',
                  component: () => import('../pages/admin/ui/file-upload/FileUpload.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
                  },
                },
                {
                  name: 'chips',
                  path: 'chips',
                  component: () => import('../pages/admin/ui/chips/Chips.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chips',
                  },
                },
                {
                  name: 'tree-view',
                  path: 'tree-view',
                  component: () => import('../pages/admin/ui/tree-view/TreeView.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
                  },
                },
                {
                  name: 'collapses',
                  path: 'collapses',
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Collapse',
                  },
                  component: () => import('../pages/admin/ui/collapse/Collapses.vue'),
                },
                {
                  name: 'colors',
                  path: 'colors',
                  component: () => import('../pages/admin/ui/colors/Colors.vue'),
                },
                {
                  name: 'spacing',
                  path: 'spacing',
                  component: () => import('../pages/admin/ui/spacing/Spacing.vue'),
                },
                {
                  name: 'sliders',
                  path: 'sliders',
                  component: () => import('../pages/admin/ui/sliders/Sliders.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Sliders',
                  },
                },
                {
                  name: 'popovers',
                  path: 'popovers',
                  component: () => import('../pages/admin/ui/popovers/Popovers.vue'),
                },
                {
                  name: 'chat',
                  path: 'chatPage',
                  component: () => import('../pages/admin/ui/chat/ChatPage.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chat',
                  },
                },
                {
                  name: 'tabs',
                  path: 'tabs',
                  component: () => import('../pages/admin/ui/tabs/Tabs.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
                  },
                },
                {
                  name: 'lists',
                  path: 'lists',
                  component: () => import('../pages/admin/ui/lists/Lists.vue'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Lists',
                  },
                },
                ],  
              },
          // pages
          {
            name: 'pages',
            path: 'pages',
            component: RouteViewComponent,
            children: [
              {
                name: '404-pages',
                path: '404-pages',
                component: () => import('../pages/admin/pages/404PagesPage.vue'),
              },
              {
                name: 'faq',
                path: 'faq',
                component: () => import('../pages/admin/pages/FaqPage.vue'),
              },
            ],
          },
        ]
      },
      // ui
        //     {
  //       name: 'ui',
  //       path: 'ui',
  //       component: EmptyParentComponent,
  //       children: [
  //         {
  //           name: 'typography',
  //           path: 'typography',
  //           component: () => import('../components/ui/typography/Typography.vue'),
  //         },
  //         {
  //           name: 'buttons',
  //           path: 'buttons',
  //           component: () => import('../components/ui/buttons/Buttons.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
  //           },
  //         },
  //         {
  //           name: 'rating',
  //           path: 'rating',
  //           component: () => import('../components/ui/rating/Rating.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Rating',
  //           },
  //         },
  //         {
  //           name: 'color-pickers',
  //           path: 'color-pickers',
  //           component: () => import('../components/ui/color-pickers/ColorPickers.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
  //           },
  //         },
  //         {
  //           name: 'timelines',
  //           path: 'timelines',
  //           component: () => import('../components/ui/timelines/Timelines.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
  //           },
  //         },
  //         {
  //           name: 'notifications',
  //           path: 'notifications',
  //           component: () => import('../components/ui/notifications/Notifications.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Notifications',
  //           },
  //         },
  //         {
  //           path: 'icons',
  //           component: () => import('../components/ui/icons/Icons.vue'),
  //           children: [
  //             {
  //               name: 'icon-sets',
  //               path: '', // Default route
  //               component: () => import('../components/ui/icons/SetsList.vue'),
  //               meta: {
  //                 wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
  //               },
  //             },
  //             {
  //               name: 'icon-set',
  //               path: ':name',
  //               component: () => import('../components/ui/icons/IconSet.vue'),
  //               props: true,
  //               meta: {
  //                 wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           name: 'spinners',
  //           path: 'spinners',
  //           component: () => import('../components/ui/spinners/Spinners.vue'),
  //         },
  //         {
  //           name: 'grid',
  //           path: 'grid',
  //           component: () => import('../components/ui/grid/Grid.vue'),
  //         },
  //         {
  //           name: 'modals',
  //           path: 'modals',
  //           component: () => import('../components/ui/modals/Modals.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
  //           },
  //         },
  //         {
  //           name: 'cards',
  //           path: 'cards',
  //           component: () => import('../components/ui/cards/Cards.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
  //           },
  //         },
  //         {
  //           name: 'file-upload',
  //           path: 'file-upload',
  //           component: () => import('../components/ui/file-upload/FileUpload.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
  //           },
  //         },
  //         {
  //           name: 'chips',
  //           path: 'chips',
  //           component: () => import('../components/ui/chips/Chips.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chips',
  //           },
  //         },
  //         {
  //           name: 'tree-view',
  //           path: 'tree-view',
  //           component: () => import('../components/ui/tree-view/TreeView.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
  //           },
  //         },
  //         {
  //           name: 'collapses',
  //           path: 'collapses',
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Collapse',
  //           },
  //           component: () => import('../components/ui/collapse/Collapses.vue'),
  //         },
  //         {
  //           name: 'colors',
  //           path: 'colors',
  //           component: () => import('../components/ui/colors/Colors.vue'),
  //         },
  //         {
  //           name: 'spacing',
  //           path: 'spacing',
  //           component: () => import('../components/ui/spacing/Spacing.vue'),
  //         },
  //         {
  //           name: 'sliders',
  //           path: 'sliders',
  //           component: () => import('../components/ui/sliders/Sliders.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Sliders',
  //           },
  //         },
  //         {
  //           name: 'popovers',
  //           path: 'popovers',
  //           component: () => import('../components/ui/popovers/Popovers.vue'),
  //         },
  //         {
  //           name: 'chat',
  //           path: 'chatPage',
  //           component: () => import('../components/ui/chat/ChatPage.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Chat',
  //           },
  //         },
  //         {
  //           name: 'tabs',
  //           path: 'tabs',
  //           component: () => import('../components/ui/tabs/Tabs.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
  //           },
  //         },
  //         {
  //           name: 'lists',
  //           path: 'lists',
  //           component: () => import('../components/ui/lists/Lists.vue'),
  //           meta: {
  //             wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Lists',
  //           },
  //         },
  //       ],
  //     },

      // auth
      {
        path: '/auth',
        component: AuthLayout,
        children: [
          {
            name: 'login',
            path: 'login',
            component: () => import('../pages/auth/Login.vue'),
          },
          {
            name: 'signup',
            path: 'signup',
            component: () => import('../pages/auth/Signup.vue'),
          },
          {
            name: 'recover-password',
            path: 'recover-password',
            component: () => import('../pages/auth/RecoverPassword.vue'),
          },
          {
            path: '',
            redirect: { name: 'login' },
          },
        ],
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router