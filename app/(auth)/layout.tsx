
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="  h-screen flex justify-center items-center bg-blue-900">{children}</div>
  );
};

export default Layout;
