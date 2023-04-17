// docs/.vuepress/config.ts
import { resolve as resolve2 } from "path";
import { defineConfig4CustomTheme } from "vuepress/config";

// docs/.vuepress/config/nav.ts
var nav_default = [
  { text: "Home", link: "/" },
  {
    text: "Space",
    link: "/start/",
    items: [
      {
        text: "Start",
        link: "/pages/33ba0f/"
      },
      {
        text: "Others",
        link: "/pages/492541/"
      }
    ]
  },
  {
    text: "Firedoc - Guide",
    link: "/pages/6b925b/"
  },
  {
    text: "Link",
    items: [
      {
        text: "Ctrldoc Website",
        link: "https://k8suat.ctrldoc.com/web_ux/"
      },
      {
        text: "Contact Us",
        link: "https://k8suat.ctrldoc.com/web_ux/"
      }
    ]
  }
];

// docs/.vuepress/config/themeVdoingConfig.ts
var themeVdoingConfig_default = {
  nav: nav_default,
  sidebarDepth: 2,
  logo: "/assets/img/logo.png",
  repo: "sunflowerseat/CTRLDoc-Wiki",
  searchMaxSuggestions: 10,
  lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
  docsDir: "docs",
  editLinks: true,
  editLinkText: "\u7F16\u8F91",
  category: true,
  tag: true,
  archive: true,
  sidebarOpen: true,
  sidebar: { mode: "structuring", collapsable: true },
  updateBar: {
    showToArticle: false,
    moreArticle: "/archives"
  },
  author: {
    name: "Fancy"
  },
  social: {
    icons: [
      {
        iconClass: "icon-QQ",
        title: "QQ",
        link: "/assets/html/qq-groups.html"
      },
      {
        iconClass: "icon-bilibili",
        title: "\u54D4\u54E9\u54D4\u54E9",
        link: "https://space.bilibili.com/28474682"
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/u2sb/vuepress-theme-vdoing-template"
      },
      {
        iconClass: "icon-youjian",
        title: "\u53D1\u90AE\u4EF6",
        link: "mailto:xxwhite@foxmail.com"
      }
    ]
  },
  footer: {
    createYear: 2022,
    copyrightInfo: `
      <a href='https://blog.xxwhite.com' target='_blank'>MonoLogueChi</a> | <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' rel='external nofollow' target='_blank'>CC BY-NC-SA 4.0</a>
      <br>
      <a href="http://beian.miit.gov.cn/" target="_blank">\u8499ICP\u590712345678\u53F7-1</a>
    `
  }
};

// docs/.vuepress/config/markdown.ts
var markdown_default = {
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-attrs",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
    "markdown-it-abbr",
    "markdown-it-ins",
    "markdown-it-multimd-table-ext"
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
  extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
};

// docs/.vuepress/config/plugins.ts
import fs from "fs";
import { resolve } from "path";
var plugins_default = [
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(resolve("/Users/fancy/workspaces/web/Ctrldoc Wiki/docs/.vuepress/config", "../public", "CNAME"))}`
    }
  ],
  [
    "smplayer",
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
          moreVideoAttr: {
            preload: "auto"
          }
        }
      }
    }
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ],
      copyMessage: "\u590D\u5236\u6210\u529F",
      duration: 1e3,
      showInMobile: false
    }
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)",
      options: {
        bgColor: "rgba(0,0,0,0.6)"
      }
    }
  ],
  ["fulltext-search"]
];

// docs/.vuepress/config/head.ts
var head_default = [
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no"
    }
  ]
];

// docs/.vuepress/config.ts
var config_default = defineConfig4CustomTheme({
  title: "CTRLDoc",
  description: "CTRLDoc",
  dest: "dist",
  shouldPrefetch: () => false,
  head: head_default,
  theme: resolve2("/Users/fancy/workspaces/web/Ctrldoc Wiki/docs/.vuepress", "../../vdoing"),
  themeConfig: themeVdoingConfig_default,
  markdown: markdown_default,
  plugins: plugins_default
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9uYXYudHMiLCAiZG9jcy8udnVlcHJlc3MvY29uZmlnL3RoZW1lVmRvaW5nQ29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZy9tYXJrZG93bi50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvcGx1Z2lucy50cyIsICJkb2NzLy52dWVwcmVzcy9jb25maWcvaGVhZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gXHU3OTNBXHU0RjhCXHU1MTY4XHU5MEU4XHU0RjdGXHU3NTI4IC50cyBcdTkxNERcdTdGNkUsIFx1OEJFNlx1ODlDMVx1OEJGNFx1NjYwRSBodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC9ndWlkZS90eXBlc2NyaXB0LWFzLWNvbmZpZy5odG1sXG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVmRvaW5nVGhlbWVDb25maWcgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtdmRvaW5nL3R5cGVzXCI7XG5pbXBvcnQgdGhlbWVDb25maWcgZnJvbSBcIi4vY29uZmlnL3RoZW1lVmRvaW5nQ29uZmlnXCI7XG5pbXBvcnQgbWFya2Rvd24gZnJvbSBcIi4vY29uZmlnL21hcmtkb3duXCI7XG5pbXBvcnQgcGx1Z2lucyBmcm9tIFwiLi9jb25maWcvcGx1Z2luc1wiO1xuaW1wb3J0IGhlYWQgZnJvbSBcIi4vY29uZmlnL2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnNEN1c3RvbVRoZW1lPFZkb2luZ1RoZW1lQ29uZmlnPih7XG4gIHRpdGxlOiBcIkNUUkxEb2NcIiwgLy9cdTdBRDlcdTcwQjlcdTY4MDdcdTk4OTgsIFx1NUVGQVx1OEJBRVx1NEZFRVx1NjUzOVxuICBkZXNjcmlwdGlvbjogXCJDVFJMRG9jXCIsIC8vXHU2M0NGXHU4RkYwLCBcdTVFRkFcdThCQUVcdTRGRUVcdTY1MzlcbiAgZGVzdDogXCJkaXN0XCIsIC8vXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1LCBcdTlFRDhcdThCQTRcdTY2MkYgZGlzdCxcdTY1RTBcdTk3MDBcdTRGRUVcdTY1MzlcbiAgLy8gYmFzZTogXCIvdmRvaW5nLXRlbXBsYXRlL1wiLCAvL1x1OTBFOFx1N0Y3Mlx1N0FEOVx1NzBCOVx1NzY4NFx1NTdGQVx1Nzg0MFx1OERFRlx1NUY4NCwgXHU5RUQ4XHU4QkE0XHU2NjJGIC8sIFx1NEUwRFx1NjFDMlx1NEUwRFx1ODk4MVx1NUYwMFx1NTQyRlxuICBzaG91bGRQcmVmZXRjaDogKCkgPT4gZmFsc2UsIC8vXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU5ODg0XHU1MkEwXHU4RjdELCBcdTVFRkFcdThCQUVcdTRFMERcdTVGMDBcdTU0MkYsIFx1NjVFMFx1OTcwMFx1NEZFRVx1NjUzOVxuICBoZWFkOiBoZWFkLCAvL1x1NTE2OFx1NUM0MFx1NTkzNFx1OTBFOFx1NEZFMVx1NjA2Rlx1OTE0RFx1N0Y2RSwgXHU1OTgyXHU5NzAwXHU0RkVFXHU2NTM5XHU4QkY3XHU0RkVFXHU2NTM5IGNvbmZpZy9oZWFkLnRzXG4gIC8vIHRoZW1lOiBcInZkb2luZ1wiLCAvL1x1NEUzQlx1OTg5OCwgXHU2NUUwXHU5NzAwXHU0RkVFXHU2NTM5XG4gIHRoZW1lOiByZXNvbHZlKFwiL1VzZXJzL2ZhbmN5L3dvcmtzcGFjZXMvd2ViL0N0cmxkb2MgV2lraS9kb2NzLy52dWVwcmVzc1wiLCBcIi4uLy4uL3Zkb2luZ1wiKSwgLy8gXHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU0RTNCXHU5ODk4XHU1MzA1XG4gIHRoZW1lQ29uZmlnLCAvL1x1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RSwgXHU1OTgyXHU5NzAwXHU0RkVFXHU2NTM5XHU4QkY3XHU0RkVFXHU2NTM5IGNvbmZpZy90aGVtZVZkb2luZ0NvbmZpZy50c1xuICBtYXJrZG93biwgLy9tYXJrZG93biBcdTc2RjhcdTUxNzNcdTkxNERcdTdGNkUsIFx1NTk4Mlx1OTcwMFx1NEZFRVx1NjUzOVx1OEJGN1x1NEZFRVx1NjUzOSBjb25maWcvbWFya2Rvd24udHNcbiAgcGx1Z2lucywgLy9cdTYzRDJcdTRFRjZcdTkxNERcdTdGNkUsIFx1NTk4Mlx1OTcwMFx1NEZFRVx1NjUzOVx1OEJGN1x1NEZFRVx1NjUzOSBjb25maWcvcGx1Z2lucy50c1xufSk7XG4iLCAiLy8gbmF2IFx1OTE0RFx1N0Y2RSwgXHU1MzczXHU0RTBBXHU2NUI5XHU1QkZDXHU4MjJBXHU2ODBGXG5cbmltcG9ydCB7IE5hdkl0ZW0gfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IDxBcnJheTxOYXZJdGVtPj5bXG4gIHsgdGV4dDogXCJIb21lXCIsIGxpbms6IFwiL1wiIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlNwYWNlXCIsXG4gICAgbGluazogXCIvc3RhcnQvXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJTdGFydFwiLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy8zM2JhMGYvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIk90aGVyc1wiLFxuICAgICAgICBsaW5rOiBcIi9wYWdlcy80OTI1NDEvXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkZpcmVkb2MgLSBHdWlkZVwiLFxuICAgIGxpbms6IFwiL3BhZ2VzLzZiOTI1Yi9cIixcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiTGlua1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQ3RybGRvYyBXZWJzaXRlXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9rOHN1YXQuY3RybGRvYy5jb20vd2ViX3V4L1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJDb250YWN0IFVzXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9rOHN1YXQuY3RybGRvYy5jb20vd2ViX3V4L1wiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbiIsICIvLyBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcdUZGMENcdThCRTZcdTg5QzEgaHR0cHM6Ly9kb2MueHVnYW95aS5jb21cblxuaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IFZkb2luZ1RoZW1lQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8VmRvaW5nVGhlbWVDb25maWc+e1xuICBuYXY6IG5hdiwgLy8gXHU0RTBBXHU2NUI5XHU1QkZDXHU4MjJBXHU2ODBGXHU5MTREXHU3RjZFLCBcdTU5ODJcdTk3MDBcdTRGRUVcdTY1MzlcdThCRjdcdTRGRUVcdTY1MzkgbmF2LnRzXG4gIHNpZGViYXJEZXB0aDogMiwgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU2NjNFXHU3OTNBXHU2REYxXHU1RUE2XHVGRjBDXHU5RUQ4XHU4QkE0MVx1RkYwQ1x1NjcwMFx1NTkyNzJcdUZGMDhcdTY2M0VcdTc5M0FcdTUyMzBoM1x1NjgwN1x1OTg5OFx1RkYwOVxuICBsb2dvOiBcIi9hc3NldHMvaW1nL2xvZ28ucG5nXCIsIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRkxvZ29cbiAgcmVwbzogXCJ1MnNiL3Z1ZXByZXNzLXRoZW1lLXZkb2luZy10ZW1wbGF0ZVwiLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc1MUZcdTYyMTBHaXRodWJcdTk0RkVcdTYzQTVcbiAgc2VhcmNoTWF4U3VnZ2VzdGlvbnM6IDEwLCAvLyBcdTY0MUNcdTdEMjJcdTdFRDNcdTY3OUNcdTY2M0VcdTc5M0FcdTY3MDBcdTU5MjdcdTY1NzBcbiAgbGFzdFVwZGF0ZWQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXCIsIC8vIFx1NjZGNFx1NjVCMFx1NzY4NFx1NjVGNlx1OTVGNFx1RkYwQ1x1NTNDQVx1NTI0RFx1N0YwMFx1NjU4N1x1NUI1NyAgIHN0cmluZyB8IGJvb2xlYW4gKFx1NTNENlx1NTAzQ1x1NEUzQWdpdFx1NjNEMFx1NEVBNFx1NjVGNlx1OTVGNClcbiAgZG9jc0RpcjogXCJkb2NzXCIsIC8vIFx1N0YxNlx1OEY5MVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOVxuICBlZGl0TGlua3M6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1N0YxNlx1OEY5MVxuICBlZGl0TGlua1RleHQ6IFwiXHU3RjE2XHU4RjkxXCIsIC8vIFx1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVx1NjU4N1x1NUI1N1xuXG4gIC8vKioqIFx1NEVFNVx1NEUwQlx1NjYyRlZkb2luZ1x1NEUzQlx1OTg5OFx1NzZGOFx1NTE3M1x1OTE0RFx1N0Y2RVx1RkYwQ1x1NjU4N1x1Njg2M1x1RkYxQWh0dHBzOi8vZG9jLnh1Z2FveWkuY29tL3BhZ2VzL2EyMGNlOC8gKioqLy9cblxuICBjYXRlZ29yeTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1MjA2XHU3QzdCXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVx1MzAwMiBcdTU5ODJcdTYyNTNcdTVGMDBcdUZGMENcdTRGMUFcdTUwNUFcdTc2ODRcdTRFOEJcdTYwQzVcdTY3MDlcdUZGMUExLiBcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTc2ODRmcm9udCBtYXR0ZXJcdTUzMDVcdTU0MkJcdTUyMDZcdTdDN0JcdTVCNTdcdTZCQjUgMi5cdTk4NzVcdTk3NjJcdTRFMkRcdTY2M0VcdTc5M0FcdTRFMEVcdTUyMDZcdTdDN0JcdTc2RjhcdTUxNzNcdTc2ODRcdTRGRTFcdTYwNkZcdTU0OENcdTZBMjFcdTU3NTcgMy5cdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdTUyMDZcdTdDN0JcdTk4NzVcdTk3NjJcdUZGMDhcdTU3MjhAcGFnZXNcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMDlcdTMwMDJcdTU5ODJcdTUxNzNcdTk1RURcdUZGMENcdTUyMTlcdTUzQ0RcdTRFNEJcdTMwMDJcbiAgdGFnOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTY4MDdcdTdCN0VcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NzY4NGZyb250IG1hdHRlclx1NTMwNVx1NTQyQlx1NjgwN1x1N0I3RVx1NUI1N1x1NkJCNSAyLlx1OTg3NVx1OTc2Mlx1NEUyRFx1NjYzRVx1NzkzQVx1NEUwRVx1NjgwN1x1N0I3RVx1NzZGOFx1NTE3M1x1NzY4NFx1NEZFMVx1NjA2Rlx1NTQ4Q1x1NkEyMVx1NTc1NyAzLlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NjgwN1x1N0I3RVx1OTg3NVx1OTc2Mlx1RkYwOFx1NTcyOEBwYWdlc1x1NjU4N1x1NEVGNlx1NTkzOVx1RkYwOVx1MzAwMlx1NTk4Mlx1NTE3M1x1OTVFRFx1RkYwQ1x1NTIxOVx1NTNDRFx1NEU0Qlx1MzAwMlxuICBhcmNoaXZlOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXHUzMDAyIFx1NTk4Mlx1NjI1M1x1NUYwMFx1RkYwQ1x1NEYxQVx1NTA1QVx1NzY4NFx1NEU4Qlx1NjBDNVx1NjcwOVx1RkYxQTEuXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU1RjUyXHU2ODYzXHU5ODc1XHU5NzYyXHVGRjA4XHU1NzI4QHBhZ2VzXHU2NTg3XHU0RUY2XHU1OTM5XHVGRjA5XHUzMDAyXHU1OTgyXHU1MTczXHU5NUVEXHVGRjBDXHU1MjE5XHU1M0NEXHU0RTRCXHUzMDAyXG4gIC8vIGJvZHlCZ0ltZzogW1xuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODI4LmpwZWcnLFxuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ1LmpwZWcnLFxuICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ2LmpwZWcnXG4gIC8vIF0sIC8vIGJvZHlcdTgwQ0NcdTY2NkZcdTU5MjdcdTU2RkVcdUZGMENcdTlFRDhcdThCQTRcdTY1RTBcdTMwMDIgXHU1MzU1XHU1RjIwXHU1NkZFXHU3MjQ3IFN0cmluZyB8IFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0NyBBcnJheSwgXHU1OTFBXHU1RjIwXHU1NkZFXHU3MjQ3XHU2NUY2XHU2QkNGXHU5Njk0MTVcdTc5RDJcdTYzNjJcdTRFMDBcdTVGMjBcdTMwMDJcbiAgLy8gYm9keUJnSW1nT3BhY2l0eTogMC41LCAvLyBib2R5XHU4MENDXHU2NjZGXHU1NkZFXHU5MDBGXHU2NjBFXHU1RUE2XHVGRjBDXHU5MDA5XHU1MDNDIDAuMX4gMS4wLCBcdTlFRDhcdThCQTQwLjVcbiAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgLy8gdGl0bGVCYWRnZUljb25zOiBbIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NTZGRVx1NjgwN1x1NzY4NFx1NTczMFx1NTc0MFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQlx1OTg5OFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1xuICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAxJyxcbiAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMidcbiAgLy8gXSxcbiAgLy8gY29udGVudEJnU3R5bGU6IDEsIC8vIFx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOVx1NTc1N1x1NzY4NFx1ODBDQ1x1NjY2Rlx1OThDRVx1NjgzQ1x1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMC4gMSBcdTY1QjlcdTY4M0MgfCAyIFx1NkEyQVx1N0VCRiB8IDMgXHU3QUQ2XHU3RUJGIHwgNCBcdTVERTZcdTY1OUNcdTdFQkYgfCA1IFx1NTNGM1x1NjU5Q1x1N0VCRiB8IDYgXHU3MEI5XHU3MkI2XG4gIC8vIHJpZ2h0TWVudUJhcjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTNGM1x1NEZBN1x1NjU4N1x1N0FFMFx1NTkyN1x1N0VCMlx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWUgKFx1NUM0Rlx1NUJCRFx1NUMwRlx1NEU4RTEzMDBweFx1NEUwQlx1NjVFMFx1OEJCQVx1NTk4Mlx1NEY1NVx1OTBGRFx1NEUwRFx1NjYzRVx1NzkzQSlcbiAgLy8gc2lkZWJhck9wZW46IGZhbHNlLCAvLyBcdTUyMURcdTU5Q0JcdTcyQjZcdTYwMDFcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVERTZcdTRGQTdcdThGQjlcdTY4MEZcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gIC8vIHBhZ2VCdXR0b246IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTVGRUJcdTYzNzdcdTdGRkJcdTk4NzVcdTYzMDlcdTk0QUVcdUZGMENcdTlFRDhcdThCQTR0cnVlXG5cbiAgc2lkZWJhck9wZW46IHRydWUsIC8vIFx1NTIxRFx1NTlDQlx1NzJCNlx1NjAwMVx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NEZBN1x1OEZCOVx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgc2lkZWJhcjogeyBtb2RlOiBcInN0cnVjdHVyaW5nXCIsIGNvbGxhcHNhYmxlOiB0cnVlIH0sIC8vIFx1NEZBN1x1OEZCOVx1NjgwRiAgJ3N0cnVjdHVyaW5nJyB8IHsgbW9kZTogJ3N0cnVjdHVyaW5nJywgY29sbGFwc2FibGU6IEJvb2xlYW59IHwgJ2F1dG8nIHwgXHU4MUVBXHU1QjlBXHU0RTQ5XG5cbiAgdXBkYXRlQmFyOiB7XG4gICAgLy8gXHU2NzAwXHU4RkQxXHU2NkY0XHU2NUIwXHU2ODBGXG4gICAgc2hvd1RvQXJ0aWNsZTogZmFsc2UsIC8vIFx1NjYzRVx1NzkzQVx1NTIzMFx1NjU4N1x1N0FFMFx1OTg3NVx1NUU5NVx1OTBFOFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICBtb3JlQXJ0aWNsZTogXCIvYXJjaGl2ZXNcIiwgLy8gXHUyMDFDXHU2NkY0XHU1OTFBXHU2NTg3XHU3QUUwXHUyMDFEXHU4REYzXHU4RjZDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjBDXHU5RUQ4XHU4QkE0Jy9hcmNoaXZlcydcbiAgfSxcblxuICBhdXRob3I6IHtcbiAgICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTc2ODRcdTRGNUNcdTgwMDVcdTRGRTFcdTYwNkZcdUZGMENcdTUzRUZcdTU3MjgubWRcdTY1ODdcdTRFRjZmcm9udCBtYXR0ZXJcdTRFMkRcdTUzNTVcdTcyRUNcdTkxNERcdTdGNkVcdTZCNjRcdTRGRTFcdTYwNkYgU3RyaW5nIHwge25hbWU6IFN0cmluZywgbGluazogU3RyaW5nfVxuICAgIG5hbWU6IFwiRmFuY3lcIiwgLy8gXHU1RkM1XHU5NzAwXG4gIH0sXG5cbiAgLy8gXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGXHVGRjBDXHU2NjNFXHU3OTNBXHU1NzI4XHU5OTk2XHU5ODc1XHU0RkE3XHU4RkI5XHU2ODBGXG4gIC8vIGJsb2dnZXI6IHtcbiAgLy8gICBhdmF0YXI6XG4gIC8vICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDAxMDMxMjMyMDMuanBnXCIsXG4gIC8vICAgbmFtZTogXCJFdmFuIFh1XCIsXG4gIC8vICAgc2xvZ2FuOiBcIlx1NTI0RFx1N0FFRlx1NzU0Q1x1NzY4NFx1NUMwRlx1NUI2Nlx1NzUxRlwiLFxuICAvLyB9LFxuXG4gIC8vIFx1NzkzRVx1NEVBNFx1NTZGRVx1NjgwNyAoXHU2NjNFXHU3OTNBXHU0RThFXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGXHU2ODBGXHU1NDhDXHU5ODc1XHU4MTFBXHU2ODBGXHUzMDAyXHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHVGRjFBaHR0cHM6Ly9kb2MueHVnYW95aS5jb20vcGFnZXMvYTIwY2U4LyNzb2NpYWwpXG4gIHNvY2lhbDoge1xuICAgIC8vIGljb25mb250Q3NzRmlsZTogJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTY3ODQ4Ml91NG5ybnA4eHA2Zy5jc3MnLCAvLyBcdTUzRUZcdTkwMDlcdUZGMENcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNcdTU3MjhcdTdFQkZjc3NcdTY1ODdcdTRFRjZcdTU3MzBcdTU3NDBcdUZGMENcdTVCRjlcdTRFOEVcdTRFM0JcdTk4OThcdTZDQTFcdTY3MDlcdTc2ODRcdTU2RkVcdTY4MDdcdTUzRUZcdTgxRUFcdTc1MzFcdTZERkJcdTUyQTBcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBpY29uQ2xhc3M6IFwiaWNvbi1RUVwiLFxuICAgICAgICB0aXRsZTogXCJRUVwiLFxuICAgICAgICBsaW5rOiBcIi9hc3NldHMvaHRtbC9xcS1ncm91cHMuaHRtbFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWNvbkNsYXNzOiBcImljb24tYmlsaWJpbGlcIixcbiAgICAgICAgdGl0bGU6IFwiXHU1NEQ0XHU1NEU5XHU1NEQ0XHU1NEU5XCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vMjg0NzQ2ODJcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb25DbGFzczogXCJpY29uLWdpdGh1YlwiLFxuICAgICAgICB0aXRsZTogXCJHaXRIdWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdTJzYi92dWVwcmVzcy10aGVtZS12ZG9pbmctdGVtcGxhdGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGljb25DbGFzczogXCJpY29uLXlvdWppYW5cIixcbiAgICAgICAgdGl0bGU6IFwiXHU1M0QxXHU5MEFFXHU0RUY2XCIsXG4gICAgICAgIGxpbms6IFwibWFpbHRvOnh4d2hpdGVAZm94bWFpbC5jb21cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgLy8gXHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGLCBcdThCRjdcdTY4MzlcdTYzNkVcdTVCOUVcdTk2NDVcdTYwQzVcdTUxQjVcdTRGRUVcdTY1MzksIFx1NTIyMFx1NjM4OVx1NEUwRFx1OTcwMFx1ODk4MVx1NzY4NFx1OTBFOFx1NTIwNlxuICAgIGNyZWF0ZVllYXI6IDIwMjIsIC8vIFx1NTM1QVx1NUJBMlx1NTIxQlx1NUVGQVx1NUU3NFx1NEVGRFxuICAgIGNvcHlyaWdodEluZm86IGBcbiAgICAgIDxhIGhyZWY9J2h0dHBzOi8vYmxvZy54eHdoaXRlLmNvbScgdGFyZ2V0PSdfYmxhbmsnPk1vbm9Mb2d1ZUNoaTwvYT4gfCA8YSBocmVmPSdodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtc2EvNC4wLycgcmVsPSdleHRlcm5hbCBub2ZvbGxvdycgdGFyZ2V0PSdfYmxhbmsnPkNDIEJZLU5DLVNBIDQuMDwvYT5cbiAgICAgIDxicj5cbiAgICAgIDxhIGhyZWY9XCJodHRwOi8vYmVpYW4ubWlpdC5nb3YuY24vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHU4NDk5SUNQXHU1OTA3MTIzNDU2NzhcdTUzRjctMTwvYT5cbiAgICBgLCAvLyBcdTUzNUFcdTVCQTJcdTcyNDhcdTY3NDNcdTRGRTFcdTYwNkZcdUZGMENcdTY1MkZcdTYzMDFhXHU2ODA3XHU3QjdFXG4gIH0sXG59O1xuIiwgIi8vIFx1OTE0RFx1N0Y2RVx1OEJGNFx1NjYwRSBodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC9jb25maWcvI21hcmtkb3duXG5cbmltcG9ydCB7IE1hcmtkb3duQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8TWFya2Rvd25Db25maWc+e1xuICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgcGx1Z2luczogW1xuICAgIFwibWFya2Rvd24taXQtc3ViXCIsXG4gICAgXCJtYXJrZG93bi1pdC1zdXBcIixcbiAgICBcIm1hcmtkb3duLWl0LWZvb3Rub3RlXCIsXG4gICAgXCJtYXJrZG93bi1pdC10YXNrLWxpc3RzXCIsXG4gICAgXCJtYXJrZG93bi1pdC1hdHRyc1wiLFxuICAgIFwibWFya2Rvd24taXQtaW1zaXplXCIsXG4gICAgXCJtYXJrZG93bi1pdC1tYXRoamF4M1wiLFxuICAgIFwibWFya2Rvd24taXQtYWJiclwiLFxuICAgIFwibWFya2Rvd24taXQtaW5zXCIsXG4gICAgXCJtYXJrZG93bi1pdC1tdWx0aW1kLXRhYmxlLWV4dFwiLFxuICBdLFxuICBleHRlbmRNYXJrZG93bjogKG1kKSA9PiB7XG4gICAgbWQuc2V0KHsgYnJlYWtzOiB0cnVlIH0pO1xuICB9LFxuICBleHRyYWN0SGVhZGVyczogW1wiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiXSwgLy8gXHU2M0QwXHU1M0Q2XHU2ODA3XHU5ODk4XHU1MjMwXHU0RkE3XHU4RkI5XHU2ODBGXHU3Njg0XHU3RUE3XHU1MjJCXHVGRjBDXHU5RUQ4XHU4QkE0WydoMicsICdoMyddXG59O1xuIiwgIi8vIFx1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RSwgXHU4QkU2XHU4OUMxIGh0dHBzOi8vdjEudnVlcHJlc3MudnVlanMub3JnL3poL3BsdWdpbi91c2luZy1hLXBsdWdpbi5odG1sXG5cbmltcG9ydCB7IFVzZXJQbHVnaW5zIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdHlwZSB7IFNtUGxheWVyUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1zbXBsYXllci90eXBlc1wiO1xuXG4vLyBcdTkxNERcdTdGNkVcdTYzRDJcdTRFRjZcdUZGMENcdTYzQThcdTgzNTBcdTRGN0ZcdTc1MjggQmFiZWwgXHU1RjBGLCBcdTY4MzlcdTYzNkVcdTgxRUFcdTVERjFcdTYzRDJcdTRFRjZcdTYwQzVcdTUxQjVcdTRGRUVcdTY1MzlcdTYzRDJcdTRFRjZcdTkxNERcdTdGNkVcbmV4cG9ydCBkZWZhdWx0IDxVc2VyUGx1Z2lucz5bXG4gIFtcbiAgICBcInNpdGVtYXBcIixcbiAgICB7XG4gICAgICBob3N0bmFtZTogYGh0dHBzOi8vJHtmcy5yZWFkRmlsZVN5bmMoXG4gICAgICAgIHJlc29sdmUoXCIvVXNlcnMvZmFuY3kvd29ya3NwYWNlcy93ZWIvQ3RybGRvYyBXaWtpL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ1wiLCBcIi4uL3B1YmxpY1wiLCBcIkNOQU1FXCIpXG4gICAgICApfWAsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIFwic21wbGF5ZXJcIixcbiAgICB7XG4gICAgICBhcnRwbGF5ZXI6IHtcbiAgICAgICAgc3JjOiB7XG4gICAgICAgICAgcGxheWJhY2tSYXRlOiB0cnVlLFxuICAgICAgICAgIHdoaXRlbGlzdDogW1wiKlwiXSxcbiAgICAgICAgICBtb3JlVmlkZW9BdHRyOiB7XG4gICAgICAgICAgICBwcmVsb2FkOiBcImF1dG9cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9IGFzIFNtUGxheWVyUGx1Z2luT3B0aW9uLFxuICBdLFxuICBbXCJwYW5ndVwiXSxcbiAgW1xuICAgIFwib25lLWNsaWNrLWNvcHlcIixcbiAgICB7XG4gICAgICBjb3B5U2VsZWN0b3I6IFtcbiAgICAgICAgJ2RpdltjbGFzcyo9XCJsYW5ndWFnZS1cIl0gcHJlJyxcbiAgICAgICAgJ2RpdltjbGFzcyo9XCJhc2lkZS1jb2RlXCJdIGFzaWRlJyxcbiAgICAgIF0sXG4gICAgICBjb3B5TWVzc2FnZTogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIixcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSxcbiAgICB9LFxuICBdLFxuICBbXG4gICAgXCJ6b29taW5nXCIsXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwiLnRoZW1lLXZkb2luZy1jb250ZW50IGltZzpub3QoLm5vLXpvb20pXCIsIC8vIFx1NjM5Mlx1OTY2NGNsYXNzXHU2NjJGbm8tem9vbVx1NzY4NFx1NTZGRVx1NzI0N1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBiZ0NvbG9yOiBcInJnYmEoMCwwLDAsMC42KVwiLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBbXCJmdWxsdGV4dC1zZWFyY2hcIl0sXG5dO1xuIiwgImltcG9ydCB7IEhlYWRUYWdzIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCA8SGVhZFRhZ3M+W1xuICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvZmF2aWNvbi5pY29cIiB9XSwgLy9cdTdBRDlcdTcwQjlcdTU2RkVcdTY4MDcsIFx1OUVEOFx1OEJBNFx1NEUzQSBwdWJsaWMvZmF2aWNvbi5pY29cbiAgW1xuICAgIFwibWV0YVwiLFxuICAgIHtcbiAgICAgIG5hbWU6IFwidmlld3BvcnRcIixcbiAgICAgIGNvbnRlbnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx1c2VyLXNjYWxhYmxlPW5vXCIsXG4gICAgfSxcbiAgXSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUE7QUFDQTs7O0FDQ0EsSUFBTyxjQUF3QjtBQUFBLEVBQzdCLEVBQUUsTUFBTSxRQUFRLE1BQU07QUFBQSxFQUN0QjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBLE1BRVI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlaO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUEsTUFFUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUM1QmQsSUFBTyw0QkFBMkI7QUFBQSxFQUNoQyxLQUFLO0FBQUEsRUFDTCxjQUFjO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixzQkFBc0I7QUFBQSxFQUN0QixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFJZCxVQUFVO0FBQUEsRUFDVixLQUFLO0FBQUEsRUFDTCxTQUFTO0FBQUEsRUFpQlQsYUFBYTtBQUFBLEVBQ2IsU0FBUyxFQUFFLE1BQU0sZUFBZSxhQUFhO0FBQUEsRUFFN0MsV0FBVztBQUFBLElBRVQsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBO0FBQUEsRUFHZixRQUFRO0FBQUEsSUFFTixNQUFNO0FBQUE7QUFBQSxFQVlSLFFBQVE7QUFBQSxJQUVOLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUE7QUFBQSxNQUVSO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUE7QUFBQSxNQUVSO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUE7QUFBQSxNQUVSO0FBQUEsUUFDRSxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJWixRQUFRO0FBQUEsSUFFTixZQUFZO0FBQUEsSUFDWixlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNwRm5CLElBQU8sbUJBQXdCO0FBQUEsRUFDN0IsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLEVBRUYsZ0JBQWdCLENBQUMsT0FBTztBQUN0QixPQUFHLElBQUksRUFBRSxRQUFRO0FBQUE7QUFBQSxFQUVuQixnQkFBZ0IsQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNO0FBQUE7OztBQ2xCM0M7QUFDQTtBQUlBLElBQU8sa0JBQXFCO0FBQUEsRUFDMUI7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVSxXQUFXLEdBQUcsYUFDdEIsUUFBUSxrRUFBa0UsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUk3RjtBQUFBLElBQ0U7QUFBQSxJQUNBO0FBQUEsTUFDRSxXQUFXO0FBQUEsUUFDVCxLQUFLO0FBQUEsVUFDSCxjQUFjO0FBQUEsVUFDZCxXQUFXLENBQUM7QUFBQSxVQUNaLGVBQWU7QUFBQSxZQUNiLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNbkIsQ0FBQztBQUFBLEVBQ0Q7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsY0FBYztBQUFBLFFBQ1o7QUFBQSxRQUNBO0FBQUE7QUFBQSxNQUVGLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQTtBQUFBO0FBQUEsRUFHbEI7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSWYsQ0FBQztBQUFBOzs7QUNuREgsSUFBTyxlQUFrQjtBQUFBLEVBQ3ZCLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNO0FBQUEsRUFDOUI7QUFBQSxJQUNFO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBO0FBQUE7QUFBQTs7O0FMRWYsSUFBTyxpQkFBUSx5QkFBNEM7QUFBQSxFQUN6RCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFFTixnQkFBZ0IsTUFBTTtBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUVOLE9BQU8sU0FBUSwyREFBMkQ7QUFBQSxFQUMxRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
