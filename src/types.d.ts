import React from "react";

export interface IPosts extends React.PropsWithChildren{}
export interface IPostsItem {
  id?: string,
  date: string,
  title:string,
  text: string
}

export interface IInputData {
  date: string,
  title:string,
  text: string
}

