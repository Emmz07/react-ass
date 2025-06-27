export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  description?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
}

export type TaskFilter = 'all' | 'active' | 'completed';