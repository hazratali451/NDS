import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Logo from '/public/img/logo.svg'
import Link from "next/link";
import { IoIosCall } from 'react-icons/io';
import Styles from './Navbar.module.css'
import ToogleIcon from '/public/img/toogle-icon.svg'
import { Button, Offcanvas } from 'react-bootstrap';



const Navbar = () => {
    const router = useRouter();

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <nav id='navbar'>
            <div className={`container ${Styles.container}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={Styles.logo}>
                        <Link href="/">
                            <Image className='img-fluid' src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="menus d-none d-lg-flex align-items-center">
                        <ul className={`d-flex mb-0 ${Styles.ul}`}>
                            <li className={router.pathname == "/" ? "active" : ""}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={router.pathname == "/about-us" ? "active" : ""}>
                                <Link href="/">About Us</Link>
                            </li>
                            <li className={router.pathname == "/services" ? "active" : ""}>
                                <Link href="/">Services</Link>
                            </li>
                            <li className={router.pathname == "/resources" ? "active" : ""}>
                                <Link href="/">Resources</Link>
                            </li>
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
            <MobileMenu show={show} handleShow={handleShow} setShow={setShow} />
        </nav>
    );
};

function MobileMenu({ show, setShow, handleShow }) {


    const handleClose = () => setShow(false);


    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}



export default Navbar;