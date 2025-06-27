'use client';

import React from 'react';
import { ThemeProvider } from '@/contexts/theme-context';
import { Layout } from '@/components/layout/layout';
import { TaskManager } from '@/components/tasks/task-manager';
import { PostsList } from '@/components/api/posts-list';
import { ComponentShowcase } from '@/components/demo/component-showcase';

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="py-16 px-2 md:px-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 min-h-screen">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-extrabold text-left text-blue-900 dark:text-blue-200 leading-tight mb-6">
                Organize Your <span className="underline decoration-wavy decoration-blue-400 dark:decoration-blue-600">Workflow</span>
              </h1>
              <p className="text-lg md:text-2xl text-left text-blue-700 dark:text-blue-300 mb-8">
                Experience a fresh approach to productivity. Manage tasks, explore API data, and preview custom components—all in one place.
              </p>
              <div className="flex gap-4">
                <a
                  href="#tasks"
                  className="px-7 py-3 bg-blue-900 hover:bg-blue-700 text-white rounded-md font-semibold shadow transition-all duration-150"
                >
                  Go to Tasks
                </a>
                <a
                  href="#api-data"
                  className="px-7 py-3 border-2 border-blue-900 dark:border-blue-300 text-blue-900 dark:text-blue-200 rounded-md font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-150"
                >
                  Explore API Data
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:flex justify-center">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-600 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 shadow-2xl flex items-center justify-center">
                <span className="text-7xl text-white font-black opacity-30 select-none">📝</span>
              </div>
            </div>
          </section>

          {/* Timeline Navigation */}
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mb-16">
            <div className="hidden md:flex flex-col items-center mr-8">
              <div className="w-2 h-2 bg-blue-700 rounded-full mb-8"></div>
              <div className="flex-1 w-1 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950"></div>
              <div className="w-2 h-2 bg-blue-700 rounded-full mt-8"></div>
              <div className="flex-1 w-1 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950"></div>
              <div className="w-2 h-2 bg-blue-700 rounded-full mt-8"></div>
              <div className="flex-1 w-1 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950"></div>
              <div className="w-2 h-2 bg-blue-700 rounded-full mt-8"></div>
            </div>
            <div className="flex-1 space-y-24">
              {/* Task Manager Section */}
              <section id="tasks" className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-blue-900">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">Task Manager</h2>
                <TaskManager />
              </section>

              {/* API Data Section */}
              <section id="api-data" className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-blue-900">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">API Data</h2>
                <PostsList />
              </section>

              {/* Components Section */}
              <section id="components" className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-blue-100 dark:border-blue-900">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">Component Showcase</h2>
                <ComponentShowcase />
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}