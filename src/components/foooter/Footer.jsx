import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaCopyright, FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import threeImg from "../../assets/threeImg.png"
import { LuTwitter } from 'react-icons/lu';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full max-w-[1540px] m-auto'>
      <footer className='pt-[50px] bg-black px-[120px]'>
    <div className='flex justify-between mb-[30px]'>
      <div className='flex flex-col gap-[20px]'>
    <h1 className='font-bold text-2xl text-white'>
            {t("headerTitle")}
          </h1>
          <p className='text-white'>{t("sub2")}</p>
          <p className='text-white w-[200px]'>{t("footerSubtitle1")}</p>
          <div className='w-[217px] h-[48px] border-1 border-[#FAFAFA] flex items-center justify-between px-[10px]'>
            <input
  type="text"
  placeholder={t("footerInput")}
  className="placeholder:text-gray-400 outline-0 text-white"/>
<FaTelegramPlane className='text-white'/>
          </div>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <h3 className='text-white font-medium text-xl'>{t("footerTitle1")}</h3>
        <p className='text-white text-base font-normal w-[175px]'>{t("footerSubtitle2")}</p>
        <p className='text-white'>{t("footerEmail")}</p>
        <p className='text-white'>{t("footerNumber")}</p>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <h3 className='text-white font-medium text-xl'>{t("footerTitle2")}</h3>
        <nav>
          <ul className='flex flex-col gap-[15px]'>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav1")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav2")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav3")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav4")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav5")}
            </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-col gap-[20px]'>
        <h3 className='text-white font-medium text-xl'>{t("footerTitle3")}</h3>
        <nav>
          <ul className='flex flex-col gap-[15px]'>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav6")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav7")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav8")}
            </Link>
            </li>
            <li>
              <Link to={"/"} className='text-white'>
              {t("footerNav9")}
            </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-col gap-[20px] items-center'>
        <h3 className='text-white font-medium text-xl'>{t("footerTitle4")}</h3>
        <p className='text-[gray] w-[200px]'>{t("footerSubtitle3")}</p>
        <img src={threeImg} alt="" />
        <div className='flex gap-[30px] text-white'>
          <FaFacebookF className='text-xl'/>
                      <LuTwitter className='text-xl'/>
                      <FaInstagram className='text-xl'/>
                      <FaLinkedinIn className='text-xl'/>
                    </div>
      </div>
    </div>
    <div className='text-center'>
      <h4 className='text-[gray] flex items-center gap-[5px] justify-center'><FaCopyright /> {t("footerSubtitle4")}</h4>
    </div>
      </footer>
    </div>
  )
}

export default Footer
