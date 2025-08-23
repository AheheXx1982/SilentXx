import type { CollectionEntry } from 'astro:content';
import type { SupportedLanguage } from './i18n';

export type BlogPost = CollectionEntry<'blog'>;

export interface BlogSchema {
  title: string;
  description?: string; // 文章描述
  link?: string; // 文章短链接
  date: Date;
  cover?: string;
  tags?: string[];
  /**
   * 老 hexo shoka 的分类有的是这样的, 为了兼容这么写了：
   * categories:
   * - [笔记, 算法]
   * 有的是这样的：
   * categories:
   * - 笔记
   */
  categories?: string[] | string[][];
  subtitle?: string; // 文章副标题
  catalog?: boolean; // 是否分离

  // 多语言翻译字段
  translations?: {
    [languageCode: string]: {
      title?: string;
      description?: string;
      subtitle?: string;
      content?: string; // 翻译后的内容文件路径或内容
    };
  };

  // 标记原始语言
  originalLanguage?: string; // 默认 'zh-CN'

  // 可用语言列表
  availableLanguages?: string[];
}
