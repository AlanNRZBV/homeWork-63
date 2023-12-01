import React from 'react';

export interface IPosts extends React.PropsWithChildren {}
export interface IPostsItem {
  id?: string;
  date: string;
  title: string;
  text: string;
  onUnwrap?: () => void;
  onDelete?: (key: string) => void;
  onEdit?: (key: string) => void;
}

export interface IInputData {
  id?: string
  date: string;
  title: string;
  text: string;
}

export interface IHome {
  posts: IPostsItem[];
  onUnwrap?: () => void;
  onDelete?: (key: string) => void;
  onEdit?: (key: string) => void;

}
export interface IAddPost {
  loadNewPost: () => void;
  editId: string
}
