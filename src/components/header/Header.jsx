import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo, LogoutBtn } from '../Index.js';
import { useEffect, useState } from 'react';

function Header() {
    const [navopen, setnavOpen] = useState(false)
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    useEffect(() => {
      if(!authStatus){
        navigate("/login")
      }
    }, [authStatus])
    

    const handlenavopen = () => {
        setnavOpen(!navopen);
    }

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'My Posts',
            slug: '/my-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 sticky top-0 z-20 shadow-lg bg-[#efefef] bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <Container>
                <nav className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-3">
                        <Link to="/" className='flex items-center gap-2'>
                            <Logo />
                        </Link>
                    </div>
                    <div className='relative md:hidden  transition-all duration-500' onClick={handlenavopen}>
                
                        <div className='flex flex-col gap-1'>
                            <div className='w-5 h-1 bg-black'></div>
                            <div className='w-5 h-1 bg-black'></div>
                            <div className='w-5 h-1 bg-black'></div>
                        </div>
                    </div>
                    <ul className={`${navopen ? 'flex flex-col top-4' : ' flex flex-col -top-96 gap-7'} md:hidden -z-20 transition-all duration-500 bg-[#efefef] bg-opacity-90 backdrop-filter backdrop-blur-lg items-center right-0 p-10 gap-7 w-full absolute md:gap-4 `}>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => {
                                            navigate(item.slug)
                                            setnavOpen(false)
                                        }}
                                        className="inline-bock py-2 px-3 rounded-full  md:hover:text-white bg-gray-200 md:hover:bg-gradient-to-r from-[#8a6aff] to-[#dda6ff] active:text-white active:bg-gradient-to-r from-[#8a6aff] to-[#dda6ff]"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                    <ul className='md:flex items-center hidden gap-4'>
                    {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-bock py-2 px-3 transition-all duration-500 text-xl cursor-pointer bg-gray-200 hover:text-white hover:bg-gradient-to-r from-[#8a6aff] to-[#dda6ff] rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;