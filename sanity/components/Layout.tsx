import Navbar from './Navbar';
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="layout flex flex-col  align-center justify-center">
      <Navbar />
      <main className="flex flex-col  gap-[100px] bg-white items-center space-around justify-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
