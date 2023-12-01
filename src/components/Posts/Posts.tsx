import { FC } from "react";
import { IPosts } from "../../types";

const Posts:FC<IPosts> = ({children}) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default Posts;