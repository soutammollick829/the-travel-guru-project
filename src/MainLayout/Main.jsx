
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer/Footer';
import Header from '../Pages/shared/Header/Header';


const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;