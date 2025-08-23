import fs from 'fs';
import path from 'path';
import { SUPPORTED_LANGUAGES } from '../constants/i18n';

const pagesDir = path.resolve('src/pages');

// 要创建的页面模板
const templates = {
  index: (lang: string) => `---
import Layout from '@layouts/Layout.astro';
import TwoColumnLayout from '@layouts/TwoColumnLayout.astro';
import HomeSider from '@components/layout/HomeSider.astro';
import Cover from '@components/ui/cover/Cover.astro';
import { HomeSiderType } from '@constants/enum';
import { getTranslations } from '@i18n/index';
import type { SupportedLanguage } from '@types/i18n';

const currentLanguage: SupportedLanguage = '${lang}';
const translations = getTranslations(currentLanguage);

const title = translations.seo.defaultTitle;
const description = translations.seo.defaultDescription;
---

<Layout 
  title={title}
  description={description}
  siderType={HomeSiderType.HOME}
  lang={currentLanguage}
>
  <TwoColumnLayout>
    <Cover slot="cover" />
    <HomeSider slot="sider" type={HomeSiderType.HOME} />
    <div class="shadow-box bg-gradient-start flex flex-col gap-2 p-4 pt-6 md:px-5 md:py-4">
      <h1 class="text-2xl font-bold mb-4">{translations.nav.home}</h1>
      <p class="text-gray-600 dark:text-gray-300">
        {translations.seo.defaultDescription}
      </p>
    </div>
  </TwoColumnLayout>
</Layout>`,

  about: (lang: string) => `---
import Layout from '@layouts/Layout.astro';
import { getTranslations } from '@i18n/index';
import type { SupportedLanguage } from '@types/i18n';

const currentLanguage: SupportedLanguage = '${lang}';
const translations = getTranslations(currentLanguage);
---

<Layout
  title={\`\${translations.nav.about} | \${translations.seo.defaultTitle}\`}
  description={translations.seo.defaultDescription}
  lang={currentLanguage}
>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{translations.nav.about}</h1>
    <div class="prose dark:prose-invert max-w-none">
      <p>{translations.seo.defaultDescription}</p>
    </div>
  </div>
</Layout>`,

  archives: (lang: string) => `---
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import { parseDate } from '@lib/datetime';
import { getSiteConfig } from '@constants/site-config-i18n';
import { getTranslations } from '@i18n/index';
import { getLanguageFromUrl } from '@lib/i18n';
import { getPostTranslation } from '@lib/article-i18n';
import type { SupportedLanguage } from '../../types/i18n';
import TwoColumnLayout from '@layouts/TwoColumnLayout.astro';
import Cover from '@components/ui/cover/Cover.astro';
import HomeSider from '@components/layout/HomeSider.astro';

// 获取当前语言
const currentLanguage: SupportedLanguage = '${lang}';
const siteConfig = getSiteConfig(currentLanguage);
const translations = getTranslations(currentLanguage);

// 获取语言前缀
const langPrefix = currentLanguage === 'zh-CN' ? '' : \`/\${currentLanguage}\`;

const posts = await getCollection('blog');

// 按年份对文章进行分组
const postsByYear = posts
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .reduce(
    (acc, post) => {
      const year = new Date(post.data.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<number, typeof posts>,
  );

const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));
---

<Layout title={\`\${translations.archive.allPosts} | \${siteConfig.title}\`} description={translations.archive.allPosts}>
  <TwoColumnLayout>
    <Cover slot="cover" title={translations.archive.allPosts} />
    <HomeSider slot="sider" />
    <div class="shadow-box bg-gradient-start mx-0 flex w-full flex-col px-6 py-4 md:px-3 md:py-2">
      <h2 class="shoka-decoration-circle group relative h-19 px-7.5 py-5 text-2xl/9 font-bold md:text-xl/9">
        <a href={langPrefix || '/'} class="dashed-border text-muted-foreground group-hover:border-blue group-hover:text-blue border-b">{translations.nav.home}</a>
        <span class="text-muted-foreground text-lg md:text-base"> / </span>
        {translations.archive.allPosts} - {posts.length} {translations.archive.postsInYear}
      </h2>
      <div class="flex flex-col gap-4 md:gap-5">
        {
          years.map((year) => (
            <div>
              <h3 class="text-xl font-bold md:text-base">
                {year}
                <span class="text-muted-foreground ml-2 text-base md:text-sm">{postsByYear[Number(year)].length} {translations.archive.postsInYear}</span>
              </h3>
              <div class="mt-2">
                {postsByYear[Number(year)].map((post) => {
                  // 获取文章的${lang}翻译
                  const translation = getPostTranslation(post, currentLanguage);
                  // 正确使用翻译后的标题
                  const displayTitle = translation.isTranslated ? translation.title : post.data.title;
                  return (
                    <p class="shoka-decoration-circle group text-primary hover:text-blue relative px-7.5 py-2 text-base/9 md:flex md:flex-col md:items-stretch md:text-sm/9">
                      <span class="text-muted-foreground mr-2 text-xs">{parseDate(post.data.date, 'YYYY-MM-DD')}</span>
                      <a
                        href={\`\${langPrefix}/article/\${post.data?.link ?? post.slug.split('/').pop() ?? post.slug}\`}
                        class="dashed-border text-primary hover:text-blue truncate transition-colors"
                      >
                        {displayTitle}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </TwoColumnLayout>
</Layout>`,
};

// 创建多语言页面
function createMultilingualPages() {
  SUPPORTED_LANGUAGES.forEach((lang) => {
    if (lang === 'zh-CN') return; // 跳过默认语言

    const langCode = lang === 'zh-TW' ? 'zh-tw' : lang;
    const langDir = path.join(pagesDir, langCode);

    // 创建语言目录
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    // 创建首页
    const indexFile = path.join(langDir, 'index.astro');
    if (!fs.existsSync(indexFile)) {
      fs.writeFileSync(indexFile, templates.index(lang));
      console.log(`Created: ${indexFile}`);
    }

    // 创建关于页面
    const aboutFile = path.join(langDir, 'about.astro');
    if (!fs.existsSync(aboutFile)) {
      fs.writeFileSync(aboutFile, templates.about(lang));
      console.log(`Created: ${aboutFile}`);
    }

    // 创建归档页面
    const archivesFile = path.join(langDir, 'archives.astro');
    if (!fs.existsSync(archivesFile)) {
      fs.writeFileSync(archivesFile, templates.archives(lang));
      console.log(`Created: ${archivesFile}`);
    }

    // 创建文章目录
    const articleDir = path.join(langDir, 'article');
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }

    // 创建分类目录
    const categoriesDir = path.join(langDir, 'categories');
    if (!fs.existsSync(categoriesDir)) {
      fs.mkdirSync(categoriesDir, { recursive: true });
    }

    // 创建标签目录
    const tagsDir = path.join(langDir, 'tags');
    if (!fs.existsSync(tagsDir)) {
      fs.mkdirSync(tagsDir, { recursive: true });
    }
  });
}

createMultilingualPages();
