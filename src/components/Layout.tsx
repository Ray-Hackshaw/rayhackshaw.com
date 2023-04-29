import { Header } from "./Header";

export const Layout = ({
  children,
  maxWidth = true,
}: {
  children: any;
  maxWidth?: boolean;
}) => {
  return (
    <>
      <main className="min-h-screen space-y-4">
        <Header />
        <div className="w-full max-w-7xl mx-auto space-y-8">{children}</div>
      </main>
    </>
  );
};
