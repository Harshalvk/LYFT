import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => {
  return (
    <div className="text-sm w-fit mx-auto mb-4 rounded-full bg-indigo-100 px-2 py-1 text-indigo-600 hover:bg-indigo-200 transition-colors duration-300">
      {children}
    </div>
  );
};

export default Tag;
