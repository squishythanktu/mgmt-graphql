import Header from "../../components/Header/Header";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">{children}</div>
    </>
  );
}
