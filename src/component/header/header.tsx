//import logo from './logo.svg';
import "./header.css";

const Header: React.FC = () => {
    return (
        <div className='container'>
            <div className='second-header'>
                <ul>
                    <p className='logo'>
                        {" "}
                        <b> وکالپ</b> {""}{" "}
                    </p>

                    <li>
                        <a href='#Video'> صفحه اصلی </a>
                    </li>

                    <li>
                        <a href='#Playlist'>خدمات حقوقی </a>
                    </li>

                    <li>
                        <a href='#Podcast'> موضوعات حقوقی </a>
                    </li>

                    <li>
                        <a href='#Event'> تماس با ما </a>
                    </li>

                    <li>
                        <a href='#Blog '> وبلاگ </a>
                    </li>
                    <div className='search-container'>
                        <script src='https://kit.fontawesome.com/a076d05399.js'></script>

                        <button className='search-btn' type='submit'>
                            <i className='fa fa-search icon'></i>
                        </button>
                        <input
                            className='mohi'
                            type='text'
                            placeholder='....جست و جو کنید '
                            name='search'
                        />
                    </div>

                    <span className='spacer' />
                </ul>
            </div>
        </div>
    );
};

export default Header;
