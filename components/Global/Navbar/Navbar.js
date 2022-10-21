import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from '/public/img/logo.svg'
import Link from "next/link";
import { IoIosCall } from 'react-icons/io';
import Styles from './Navbar.module.css'
import ToogleIcon from '/public/img/toogle-icon.svg'
import { Offcanvas } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';



const Navbar = () => {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);



    const menus = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About Us",
            link: "/about-us"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Resources",
            link: "/resources"
        }
    ]



    return (
        <div id='navbar'>
            <div className={`container ${Styles.container}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={Styles.logo}>
                        <Link href="/">
                            <Image className='img-fluid' src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="menus d-none d-lg-flex align-items-center">
                        <ul className={`d-flex mb-0 ${Styles.ul}`}>
                            {
                                menus.map((item, index) => <li key={index} className={router.pathname == item.link ? "active" : ""}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>)
                            }
                        </ul>
                        <div className={`${Styles.buttons} d-flex align-items-center`}>
                            <button><IoIosCall className='me-1' />726-888-9024</button>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className={`${Styles.toogleBtn} d-lg-none`}>
                        <button onClick={handleShow}>
                            <Image src={ToogleIcon} alt="Menu Toogle"></Image>
                        </button>
                    </div>
                </div>
            </div>
            <MobileMenu show={show} handleShow={handleShow} setShow={setShow} menus={menus} router={router} />
        </div>
    );
};

function MobileMenu({ show, setShow, menus, router }) {


    const handleClose = () => setShow(false);


    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Body className='m- p-0'>
                    <div className={Styles.mobileNavWrapper}>
                        <div className={`${Styles.mHeader} d-flex justify-content-between align-items-center px-3 py-4 border-bottom`}>
                            <div className={`${Styles.logo}`}>
                                <Link href="/">
                                    <Image className='img-fluid' src={Logo} alt="Logo" />
                                </Link>
                            </div>
                            <div>
                                <button onClick={handleClose} className='btn shadow-none border-0'> <AiOutlineCloseCircle className='fs-3' /> </button>
                            </div>
                        </div>
                        <div className="menus d-flex flex-column mt-4 align-items-start">
                            <ul className={`d-flex flex-column mb-0 ${Styles.ul}`}>
                                {
                                    menus.map((item, index) => <li key={index} className={router.pathname == item.link ? "active" : ""}>
                                        <Link href={item.link}>{item.title}</Link>
                                    </li>)
                                }
                            </ul>
                            <div className={`${Styles.buttons} ms-4 mt-3 d-flex align-items-center`}>
                                <button><IoIosCall className='me-1' />726-888-9024</button>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



export default Navbar;