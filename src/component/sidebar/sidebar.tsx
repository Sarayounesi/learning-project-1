import "./sidebar.css";

const Sidebar: React.FC = () => {
    return (
        <div className='Sidebar'>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#clients'>Clients</a>
            <a href='#contact'>Contact</a>
        </div>
    );
};

export default Sidebar;
