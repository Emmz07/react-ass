'use client';

import React, { useState } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';
import { Task, TaskFilter } from '@/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { CustomButton } from '../ui/custom-button';
import { CustomCard, CardHeader, CardContent } from '../ui/custom-card';

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState<TaskFilter>('all');

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskText.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks(prev => [...prev, newTask]);
      setNewTaskText('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  };

  return (
    <div className="max-w-4xl mx-auto">
      <CustomCard>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Task Manager</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {stats.total} total, {stats.active} active, {stats.completed} completed
              </p>
            </div>
            
            <div className="flex gap-2">
              <CustomButton
                variant={filter === 'all' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </CustomButton>
              <CustomButton
                variant={filter === 'active' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilter('active')}
              >
                Active
              </CustomButton>
              <CustomButton
                variant={filter === 'completed' ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setFilter('completed')}
              >
                Completed
              </CustomButton>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            />
            <CustomButton onClick={addTask} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add
            </CustomButton>
          </div>

          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                {filter === 'all' ? 'No tasks yet. Add one above!' : 
                 filter === 'active' ? 'No active tasks!' : 'No completed tasks!'}
              </div>
            ) : (
              filteredTasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 ${
                    task.completed 
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {task.completed && <Check className="h-3 w-3" />}
                  </button>
                  
                  <span className={`flex-1 transition-all duration-200 ${
                    task.completed 
                      ? 'text-gray-500 dark:text-gray-400 line-through' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {task.title}
                  </span>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </CustomCard>
    </div>
  );
}