export type Router = {
  name?: string;
  path?: string;
  icon?: string;
  children?: Router[];
  translationKey?: string; // 用于多语言翻译的键
};

export enum Routes {
  Home = '/',
  About = '/about',
  Categories = '/categories',
  Tags = '/tags',
  // Gallery = '/gallery',
  Post = '/article',
  Archives = '/archives',
  // Dashboard = '/dashboard',
}

export const routers: Router[] = [
  {
    name: '首页',
    path: Routes.Home,
    icon: 'fa6-solid:house-chimney',
    translationKey: 'home',
  },
  {
    name: '文章',
    icon: 'ri:quill-pen-ai-fill',
    translationKey: 'articles',
    children: [
      {
        name: '分类',
        path: Routes.Categories,
        icon: 'ri:grid-fill',
        translationKey: 'categories',
      },
      {
        name: '标签',
        path: Routes.Tags,
        icon: 'fa6-solid:tags',
        translationKey: 'tags',
      },
      {
        name: '归档',
        path: Routes.Archives,
        icon: 'ri:archive-2-fill',
        translationKey: 'archives',
      },
    ],
  },
  {
    name: '关于',
    path: Routes.About,
    icon: 'fa6-regular:circle-user',
    translationKey: 'about',
  },
  // { name: '展示柜', path: Routes.Gallery },
  // { name: '仪表盘', path: Routes.Dashboard, needOwner: true },
];
