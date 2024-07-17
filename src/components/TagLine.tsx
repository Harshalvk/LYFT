type Props = {
  children: string;
};

const TagLine = ({ children }: Props) => {
  return (
    <div className="capitalize text-indigo-600 text-3xl font-display">
      {children}
    </div>
  );
};

export default TagLine;
