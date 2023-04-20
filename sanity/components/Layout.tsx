import Navbar from './Navbar';
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="layout flex flex-col gap-[100p]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
