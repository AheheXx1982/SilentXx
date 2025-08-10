// edit https://github.com/lawvs/lawvs.github.io/blob/dba2e51e312765f8322ee87755b4e9c22b520048/src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { siteConfig } from '@constants/site-config';
import { getSortedPosts } from '@lib/content';
import { getSanitizeHtml } from '@lib/utils';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import type { BlogPost } from 'types/blog';

// 转义 XML 特殊字符
const escapeXml = (unsafe: string): string => {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
};

// 用于生成纯文本摘要的函数
const generateTextSummary = (html?: string, length: number = 150): string => {
  // 将HTML转换为纯文本（去除所有标签）
  const text = sanitizeHtml(html ?? '', {
    allowedTags: [], // 不允许任何标签
    allowedAttributes: {},
    textFilter: (text) => text.replace(/[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm, ''),
  });
  // 截取指定长度，并确保不会截断词语
  if (text.length <= length) return text;
  return text.substring(0, length).replace(/\s+\S*$/, '');
};

export async function GET(context: APIContext) {
  const posts = await getSortedPosts();
  const { site } = context;

  if (!site) {
    throw new Error('Missing site metadata');
  }

  return rss({
    title: escapeXml(siteConfig.title),
    description: escapeXml(siteConfig.subtitle || 'No description'),
    site,
    trailingSlash: false,
    stylesheet: '/rss/cos-feed.xsl', // https://docs.astro.build/en/recipes/rss/#adding-a-stylesheet
    items: posts
      .map((post: BlogPost) => {
        // 生成描述信息
        let description = post.data?.description ?? generateTextSummary(post.rendered?.html);

        // 对标题和描述进行XML转义
        const title = escapeXml(post.data.title);
        description = escapeXml(description);

        return {
          title: title,
          pubDate: post.data.date,
          description: description,
          link: `/post/${post.data.link ?? post.slug}`,
          content: getSanitizeHtml(post.rendered?.html ?? ''),
        };
      })
      .slice(0, 20),
  });
}
