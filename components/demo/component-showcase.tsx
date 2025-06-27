'use client';

import React from 'react';
import { Star, Heart, Download, Settings } from 'lucide-react';
import { CustomButton } from '../ui/custom-button';
import { CustomCard, CardHeader, CardContent, CardFooter } from '../ui/custom-card';

export function ComponentShowcase() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Component Showcase
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our beautiful, reusable UI components with different variants and interactive states.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Button Variants */}
        <CustomCard>
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Button Variants</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Different button styles and sizes</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary & Danger</p>
                <div className="flex gap-2 flex-wrap">
                  <CustomButton variant="primary" size="sm">
                    <Star className="h-4 w-4 mr-2" />
                    Small
                  </CustomButton>
                  <CustomButton variant="primary">
                    <Heart className="h-4 w-4 mr-2" />
                    Medium
                  </CustomButton>
                  <CustomButton variant="danger" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Large
                  </CustomButton>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Secondary & Ghost</p>
                <div className="flex gap-2 flex-wrap">
                  <CustomButton variant="secondary">
                    Secondary
                  </CustomButton>
                  <CustomButton variant="ghost">
                    <Settings className="h-4 w-4 mr-2" />
                    Ghost
                  </CustomButton>
                  <CustomButton variant="primary" disabled>
                    Disabled
                  </CustomButton>
                </div>
              </div>
            </div>
          </CardContent>
        </CustomCard>

        {/* Card Examples */}
        <CustomCard>
          <CardHeader>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Card Components</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Flexible card layouts with hover effects</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CustomCard hover className="p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Hover Card</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hover to see the lift effect</p>
                </div>
              </CustomCard>
              
              <CustomCard className="p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Static Card</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Regular card without hover</p>
                </div>
              </CustomCard>
            </div>
          </CardContent>
        </CustomCard>

        {/* Feature Card */}
        <CustomCard hover className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Feature Highlight</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">A beautiful card with gradient accent</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This comprehensive Next.js application showcases modern UI components, state management with React hooks, 
              API integration, and responsive design principles. Each component is built with accessibility and 
              performance in mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Components</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Custom Hooks</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Responsive</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-3">
              <CustomButton variant="primary">Get Started</CustomButton>
              <CustomButton variant="secondary">Learn More</CustomButton>
            </div>
          </CardFooter>
        </CustomCard>
      </div>
    </div>
  );
}