type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="max-w-7xl mx-auto px-6">{children}</div>;
};

export default Layout;
