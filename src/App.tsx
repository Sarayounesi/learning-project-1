//import logo from './logo.svg';
import "./App.css";
import Cart from "./component/cart/cart";
import Header from "./component/header/header";
import Sidebar from "./component/sidebar/sidebar";

const App: React.FC = () => {
    return (
        <div className='App'>
            <Header />
            <div className='main-container'>
                <div className='components'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <h1 key={index} className='sara'>sara</h1>
                    ))}
                </div>
                <div className='sidebar-div'>dd</div>
            </div>
        </div>
    );
};

export default App;
