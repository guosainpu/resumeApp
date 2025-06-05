'use client';

import Image from "next/image";
import { motion } from "framer-motion";

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
  {
    id: 4,
    title: "TypeScript 高级类型实战指南",
    excerpt: "深入探讨 TypeScript 中的高级类型系统，包括泛型、条件类型、映射类型等...",
    date: "2024-03-12",
    category: "TypeScript",
  },
  {
    id: 5,
    title: "微服务架构设计最佳实践",
    excerpt: "分享在微服务架构设计中的经验教训，包括服务拆分、通信、部署等关键话题...",
    date: "2024-03-10",
    category: "架构",
  },
  {
    id: 6,
    title: "React 18 新特性详解",
    excerpt: "详细介绍 React 18 带来的新特性，包括并发渲染、自动批处理、Suspense 等...",
    date: "2024-03-08",
    category: "React",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 头部区域 */}
      <header className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mb-6 rounded-full overflow-hidden"
          >
            <Image
              src="/avatar.jpg"
              alt="个人头像"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold mb-2">郭赛</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              图灵奖获得者 / 计算机科学先驱 / 开源领袖
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>🏆 图灵奖 2023</span>
              <span>🌟 GitHub 百万星标项目作者</span>
              <span>🎓 MIT 计算机科学博士</span>
              <span>💡 50+ 项技术专利持有者</span>
              <span>🌍 全球技术影响力 TOP 10</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">关于我</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              作为计算机科学领域的先驱者，我在人工智能、分布式系统和编程语言设计方面做出了开创性贡献。2023年，因在量子计算和人工智能交叉领域的突破性研究，荣获计算机科学最高荣誉——图灵奖。
            </p>
            <p>
              在 MIT 攻读博士期间，我开发了革命性的编程语言框架，被全球超过 1000 家企业采用。作为开源社区领袖，我主导的项目在 GitHub 上获得了超过 100 万星标，影响了数百万开发者。
            </p>
            <p>
              在 Google 和 OpenAI 担任首席科学家期间，我领导了多个改变世界的项目，包括新一代 AI 大语言模型的架构设计，以及量子计算在 AI 领域的创新应用。目前持有 50 多项技术专利，发表顶级学术论文 100 余篇。
            </p>
            <p>
              作为技术布道者，我经常受邀在 Google I/O、Apple WWDC、Microsoft Build 等顶级技术大会上发表主题演讲。我的技术博客每月访问量超过 100 万，影响了全球数百万开发者。
            </p>
          </div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            最新文章
          </motion.h2>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="max-w-4xl mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div>© 2024 郭赛的个人博客</div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">
              Twitter
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
