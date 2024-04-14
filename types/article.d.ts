export interface Tag {
  createTime: string;
  updateTime: string;
  id: number;
  tagName: string;
  icon: string;
}

export interface Author {
  createTime: string;
  updateTime: string;
  id: number;
  userName: string;
  email?: any;
  nickName?: any;
  phoneNumber?: any;
  userEnabled: number;
  userAvatar?: any;
}

export interface Category {
  createTime: string;
  updateTime: string;
  id: number;
  categoryName: string;
}

export interface Article {
  createTime: string;
  updateTime: string;
  id: number;
  title: string;
  summary?: any;
  content: string;
  contentModel: number;
  cover: string;
  likes: number;
  views: number;
  type: number;
  status: number;
  isTop: number;
  tags: Tag[];
  author: Author;
  category: Category;
}
