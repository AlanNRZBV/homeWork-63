import React from 'react';

export interface IPosts extends React.PropsWithChildren {
}
export interface IPostsItem {
  id?: string;
  date: string;
  title: string;
  text: string;
  onUnwrap?: (key: string | undefined) => void;
  onDelete?: (key: string | undefined) => void;
}

export interface IInputData {
  date: string;
  title: string;
  text: string;
}

export interface IHome {
  posts: IPostsItem[]
  onUnwrap?: (key: string | undefined) => void;
  onDelete?: (key: string | undefined) => void;
}
export interface IAddPost {
  loadNewPost: ()=>void
}