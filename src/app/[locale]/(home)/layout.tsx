import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
