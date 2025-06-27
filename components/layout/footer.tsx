import React from 'react';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">TaskFlow Pro</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern task management application built with Next.js, TypeScript, and Tailwind CSS.
              Manage your tasks efficiently with a beautiful, responsive interface.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#tasks" className="hover:text-primary transition-colors">Tasks</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors">API Data</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            © 2025 TaskFlow Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}