import type { BlogSchema } from 'types/blog';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
    date: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // 兼容老 Hexo 博客
    subtitle: z.string().optional(),
    catalog: z.boolean().optional(),
    categories: z
      .array(z.string())
      .or(z.array(z.array(z.string())))
      .optional(),

    // 多语言翻译字段
    translations: z
      .record(
        z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          subtitle: z.string().optional(),
          content: z.string().optional(),
        }),
      )
      .optional(),

    // 原始语言标记
    originalLanguage: z.string().default('zh-CN'),

    // 可用语言列表
    availableLanguages: z.array(z.string()).optional(),
  }) satisfies z.ZodType<BlogSchema>,
});

export const collections = {
  blog: blogCollection,
};
