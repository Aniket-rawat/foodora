import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.svg";
import footer from "../assets/footer.jpg";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '../assets/data';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {

    const SOCIALS = {
        title: "Socials",
        links: [
            <FaFacebook />,
            <FaInstagram />,
            <FaTwitter />,
            <FaYoutube />,
            <FaLinkedin />
        ]
    }

    return (
        <footer className='bg-white mt-[100px] py-20 shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)]'>
            <div className=' container relative px-6 md:px-8 lg:px-0 flex flex-col'>
                <div className='flex flex-col  gap-[10%]
                md:flex-row p-8 rounded-t-xl'>
                    <div className='flex flex-wrap gap-16 sm:justify-between'>
                        <div className='max-w-60'>
                            {/* Logo */}
                            <Link to="/" className="flex items-baseline gap-1">
                                <img src={logo} alt="logo" />
                                <h4 className="text-3xl font-bold text-amber-600">
                                    Food<span className="text-gray-900">ora</span>
                                </h4>
                            </Link>
                            <div>
                                <p className='mt-3'>We serve meals made from the freshest and finest ingredients daily.</p>
                                <img src={footer} alt="" className='rounded-md mt-6 w-44' />

                            </div>
                        </div>
                        {FOOTER_LINKS.map((col) => (
                            <FooterColumn key={col.title} title={col.title}>
                                <ul className='flex flex-col gap-4 text-[14px] font-medium text-gray-20'>
                                    {col.links.map((link, i) => (
                                        <Link to={'/'} key={i}>{link}</Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}
                        <div>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link, i) => (
                                    <Link to={'/'} key={i} className='flex gap-4 md:flex-col lg:flex-row'>
                                        <p> {link.label}:</p>
                                        <p>{link.value}</p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                        <div className='flex'>
                            <FooterColumn title={SOCIALS.title}>
                                <ul className='flex gap-4'>
                                    {SOCIALS.links.map((link, i) => (

                                        <Link to={'/'} className='text-xl'>{link}</Link>


                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterColumn = ({ title, children }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='font-semibold whitespace-nowrap  text-xl'>{title}</h4>
            {children}
        </div>
    )
}

export default Footer
