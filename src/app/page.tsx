import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "使用 Next.js 构建现代化 Web 应用",
    excerpt: "探索 Next.js 框架的核心特性，以及如何利用它构建高性能的 Web 应用...",
    date: "2024-03-20",
    category: "技术",
  },
  {
    id: 2,
    title: "人工智能在软件开发中的应用",
    excerpt: "讨论 AI 如何改变软件开发流程，提高开发效率...",
    date: "2024-03-18",
    category: "AI",
  },
  {
    id: 3,
    title: "前端性能优化实践",
    excerpt: "分享一些实用的前端性能优化技巧，让你的网站更快...",
    date: "2024-03-15",
    category: "前端",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 头部区域 */}
      <header className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="个人头像"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">张三</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            全栈开发工程师 / 技术博主
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📍 北京</span>
            <span>💻 前端开发</span>
            <span>🎯 全栈工程师</span>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">关于我</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            我是一名热爱技术的全栈开发工程师，专注于 Web 开发和人工智能应用。
            有 5 年以上的开发经验，擅长使用 React、Next.js、Node.js 等技术栈。
            喜欢探索新技术，热爱开源，经常在 GitHub 上分享代码和技术心得。
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">最新文章</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-200 dark:border-gray-700 pb-8"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="max-w-4xl mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div>© 2024 张三的个人博客</div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
