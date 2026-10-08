import React from 'react'
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full max-w-[1540px] m-auto'>
      <header>
        <div className='w-full h-[48px] bg-black flex items-center justify-center gap-[100px] mb-[45px]'>
        <p className='text-white'>{t("headerSubtitle")} <span className='font-semibold underline'>{t("sub1")}</span></p>
        <div className='flex gap-[10px]'>
      <button className='border-2 bg-white' onClick={() => i18n.changeLanguage("eng")}>ENG</button>
      <button className='border-2 bg-white' onClick={() => i18n.changeLanguage("ru")}>RU</button>
      <button className='border-2 bg-white' onClick={() => i18n.changeLanguage("uz")}>UZ</button>
        </div>
        </div>
        <div className='flex items-center justify-between px-[120px] pb-[25px] border-b-1'>
          <h1 className='font-bold text-2xl'>
            {t("headerTitle")}
          </h1>
          <nav>
            <ul className='flex gap-[40px]'>
              <li>
                <Link to={"/"}>{t("headerNav1")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("headerNav2")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("headerNav3")}</Link>
              </li>
              <li>
                <Link to={"/"}>{t("headerNav4")}</Link>
              </li>
            </ul>
          </nav>
          <div className='flex gap-[30px] items-center'>
          <div className='w-[300px] h-[43px] bg-[#F5F5F5] flex justify-between items-center px-[15px] rounded-[5px]'>
            <input className='w-[200px] h-[24px] outline-0' type="search" placeholder={t("headerInput")}/>
            <IoSearch className='text-lg'/>
          </div>
          <div className='flex gap-[30px]'>
            <FaRegHeart className='text-xl'/>
            <IoCartOutline className='text-2xl'/>
            <FaRegUser className='text-xl'/>
          </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
