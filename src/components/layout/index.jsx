import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="page-container">
            <Header />
            <div className="main-content-area">
                <Sidebar />
                <main className="page-content">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
