// 使用动态导入来处理ES模块
async function checkArticleLanguages() {
  try {
    const contentModule = await import('./src/lib/content.ts');
    const articleI18nModule = await import('./src/lib/article-i18n.ts');

    const { getSortedPosts } = contentModule;
    const { getAvailableLanguages } = articleI18nModule;

    const posts = await getSortedPosts();

    // 查找 options 文章
    const optionsPost = posts.find(
      (post) => post.slug.includes('options') && (post.data.link === 'options' || post.slug.endsWith('options/index')),
    );

    if (optionsPost) {
      console.log('Options article found:');
      console.log('Slug:', optionsPost.slug);
      console.log('Link:', optionsPost.data.link);
      console.log('Available languages:', getAvailableLanguages(optionsPost));

      // 检查具体的语言支持
      const languages = getAvailableLanguages(optionsPost);
      console.log('\nLanguage support details:');
      languages.forEach((lang) => {
        console.log(`- ${lang}`);
      });
    } else {
      console.log('Options article not found');

      // 列出所有文章的 slug 和 link
      console.log('\nAll articles:');
      posts.forEach((post) => {
        console.log(`- Slug: ${post.slug}, Link: ${post.data.link || 'N/A'}`);
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkArticleLanguages();
