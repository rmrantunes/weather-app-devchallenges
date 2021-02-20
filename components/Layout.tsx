export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen min-w-full flex flex-col xl:flex-row text-light-gray">
      {children}
    </div>
  );
};
