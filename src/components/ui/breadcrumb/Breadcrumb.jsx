import React from 'react'
import './Breadcrumb.css'
import { useNavigate } from 'react-router-dom'
const Breadcrumb = ({ links }) => {
    const navigate = useNavigate();
    return (
        <div className='breadcrumb'>
            {links.map((link, i) => {
                return (
                    <span onClick={() => navigate(link === 'home' ? '/' : `/${link}`)} className={`breadcrumb__item ${i === links.length - 1 ? 'breadcrumb__item--active' : ''}`} key={i}>{link} / </span>
                )
            })}
        </div>
    )
}

export default Breadcrumb
