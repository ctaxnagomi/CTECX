
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  name: string;
  description: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
