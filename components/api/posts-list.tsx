'use client';

import React, { useState, useEffect } from 'react';
import { Search, Loader2, RefreshCw } from 'lucide-react';
import { Post } from '@/types';
import { CustomButton } from '../ui/custom-button';
import { CustomCard, CardHeader, CardContent } from '../ui/custom-card';

export function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <CustomCard>
          <CardContent>
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600 dark:text-gray-400">Loading posts...</span>
            </div>
          </CardContent>
        </CustomCard>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto">
        <CustomCard>
          <CardContent>
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
              <CustomButton onClick={fetchPosts} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                Retry
              </CustomButton>
            </div>
          </CardContent>
        </CustomCard>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <CustomCard>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Posts</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {filteredPosts.length} posts found
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search posts..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
              </div>
              <CustomButton onClick={fetchPosts} variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4" />
              </CustomButton>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPosts.map(post => (
              <CustomCard key={post.id} hover>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                    {post.body}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                    <span>Post #{post.id}</span>
                    <span className="mx-2">•</span>
                    <span>User {post.userId}</span>
                  </div>
                </CardContent>
              </CustomCard>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <CustomButton
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </CustomButton>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <CustomButton
                    key={page}
                    variant={currentPage === page ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </CustomButton>
                ))}
              </div>
              
              <CustomButton
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </CustomButton>
            </div>
          )}
        </CardContent>
      </CustomCard>
    </div>
  );
}