/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  // {
  //   title: "开发文档",
  //   path: "/doc",
  //   icon: "file",
  //   roles:["admin","editor","guest"]
  // },
  // {
  //   title: "引导页",
  //   path: "/guide",
  //   icon: "key",
  //   roles:["admin","editor"]
  // },
  // {
  //   title: "权限测试",
  //   path: "/permission",
  //   icon: "lock",
  //   children: [
  //     {
  //       title: "权限说明",
  //       path: "/permission/explanation",
  //       roles:["admin"]
  //     },
  //     {
  //       title: "admin页面",
  //       path: "/permission/adminPage",
  //       roles:["admin"]
  //     },
  //     {
  //       title: "guest页面",
  //       path: "/permission/guestPage",
  //       roles:["guest"]
  //     },
  //     {
  //       title: "editor页面",
  //       path: "/permission/editorPage",
  //       roles:["editor"]
  //     },
  //   ],
  // },
  // {
  //   title: "组件",
  //   path: "/components",
  //   icon: "appstore",
  //   roles:["admin","editor"],
  //   children: [
  //     {
  //       title: "富文本",
  //       path: "/components/richTextEditor",
  //       roles:["admin","editor"],
  //     },
  //     {
  //       title: "Markdown",
  //       path: "/components/Markdown",
  //       roles:["admin","editor"],
  //     },
  //     {
  //       title: "拖拽列表",
  //       path: "/components/draggable",
  //       roles:["admin","editor"],
  //     },
  //   ],
  // },
  // {
  //   title: "图表",
  //   path: "/charts",
  //   icon: "area-chart",
  //   roles:["admin","editor"],
  //   children: [
  //     {
  //       title: "键盘图表",
  //       path: "/charts/keyboard",
  //       roles:["admin","editor"],
  //     },
  //     {
  //       title: "折线图",
  //       path: "/charts/line",
  //       roles:["admin","editor"],
  //     },
  //     {
  //       title: "混合图表",
  //       path: "/charts/mix-chart",
  //       roles:["admin","editor"],
  //     },
  //   ],
  // },
  {
    title: "Products",
    path: "/nested",
    icon: "bars",
    roles:["admin","editor"],
    children: [
      {
        title: "Bank",
        path: "/nested/menu1/menu1-1",
        // children: [
        //   {
        //     title: "菜单1-1",
        //     path: "/nested/menu1/menu1-1",
        //     roles:["admin","editor"],
        //   },
        //   {
        //     title: "菜单1-2",
        //     path: "/nested/menu1/menu1-2",
        //     children: [
        //       {
        //         title: "菜单1-2-1",
        //         path: "/nested/menu1/menu1-2/menu1-2-1",
        //         roles:["admin","editor"],
        //       },
        //     ],
        //   },
        // ],
      },
      {
        title: "DP&LS",
        path: "/nested/menu1"
      },
      {
        title: "ShopeePay",
        path: "/nested/menu1"
      },
      {
        title: "ShopeeFood",
        path: "/nested/menu1"
      }
    ],
  },
  {
    title: "Tests",
    path: "/table",
    icon: "monitor",
    roles:["admin","editor"]
  },
  {
    title: "Findings",
    path: "/excel/export",
    icon: "bug",
    roles:["admin","editor"],
    children: [
      {
        title: "Code Scan",
        path: "/excel/export",
        roles:["admin","editor"]
      },
      {
        title: "Pen test",
        path: "/nested/menu1/menu1-2/menu1-2-1",
        roles:["admin","editor"]
      },
      {
        title: "OpenScan",
        path: "/nested/menu1/menu1-2/menu1-2-22",
        roles:["admin","editor"]
      },
      {
        title: "Nessus Scan",
        path: "/nested/menu1/menu1-2/menu1-2-2",
        roles:["admin","editor"]
      },
      {
        title: "HackerOne",
        path: "/nested/menu1/menu1-2/menu1-2-3",
        roles:["admin","editor"]
      }
    ],
  },
  {
    title: "Endpoints",
    path: "/zip",
    icon: "cluster",
    roles:["admin","editor"]
  },
  {
    title: "Assets",
    path: "/excel/export/2",
    icon: "hdd",
    roles:["admin","editor"]
  },
  {
    title: "Users",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  },
  {
    title: "About",
    path: "/about",
    icon: "question",
    roles:["admin","editor","guest"]
  },
  {
    title: "Feedback",
    path: "/bug",
    icon: "smile",
    roles:["admin"]
  },
];
export default menuList;
