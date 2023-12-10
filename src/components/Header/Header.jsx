import React, { useState } from 'react'
import "./header.css"

import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from 'react-scroll'
const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menu, setmenu] = useState(false);
    return (
        <div className='header'>

            <img src={Logo} alt="" className='logo' />

            {(menu === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }}

                    onClick={() => setmenu(true)}

                >
                    <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
                </div>
            ) : <ul className='header-menu'>
                <li>
                    <Link
                        onClick={() => setmenu(false)}
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                    >
                        Home

                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setmenu(false)}
                        to='programs'
                        spy={true}
                        smooth={true}
                    >
                        Programs
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setmenu(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                    >
                        Why us
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setmenu(false)}
                        to='plans'
                        spy={true}
                        smooth={true}
                    >
                        Plans
                    </Link>
                </li>
                <li><Link
                    onClick={() => setmenu(false)}
                    to='testimonials'
                    spy={true}
                    smooth={true}
                >Testimonials</Link></li>
            </ul>}



        </div>
    );
};

export default Header
