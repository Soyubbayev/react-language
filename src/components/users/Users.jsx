import React from 'react'
import { useTranslation } from 'react-i18next';
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import { LuTwitter } from 'react-icons/lu';
import { FaHeadset, FaInstagram, FaLinkedinIn, FaShieldAlt } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';

const Users = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full max-w-[1540px] m-auto'>
      <section className='px-[120px] mb-[100px]'>
        <div className='flex justify-between mb-[43px]'>
          <div className='flex flex-col items-start gap-[10px]'>
            <img src={user1} alt="" />
            <h3 className='font-medium text-3xl'>Tom Cruise</h3>
            <p>{t("userJob1")}</p>
            <div className='flex gap-[15px]'>
              <LuTwitter className='text-xl'/>
              <FaInstagram className='text-xl'/>
              <FaLinkedinIn className='text-xl'/>
            </div>
          </div>
          <div className='flex flex-col items-start gap-[10px]'>
            <img src={user2} alt="" />
            <h3 className='font-medium text-3xl'>Emma Watson</h3>
            <p>{t("userJob2")}</p>
            <div className='flex gap-[15px]'>
              <LuTwitter className='text-xl'/>
              <FaInstagram className='text-xl'/>
              <FaLinkedinIn className='text-xl'/>
            </div>
          </div>
          <div className='flex flex-col items-start gap-[10px]'>
            <img src={user3} alt="" />
            <h3 className='font-medium text-3xl'>Will Smith</h3>
            <p>{t("userJob3")}</p>
            <div className='flex gap-[15px]'>
              <LuTwitter className='text-xl'/>
              <FaInstagram className='text-xl'/>
              <FaLinkedinIn className='text-xl'/>
            </div>
          </div>
        </div>
        <div className='flex gap-[15px] justify-center mb-[100px]'>
          <div className='w-[12px] h-[12px] bg-[gray] rounded-[50%]'></div>
          <div className='w-[12px] h-[12px] bg-[gray] rounded-[50%]'></div>
          <div className='w-[12px] h-[12px] bg-[#DB4444] rounded-[50%]'></div>
          <div className='w-[12px] h-[12px] bg-[gray] rounded-[50%]'></div>
          <div className='w-[12px] h-[12px] bg-[gray] rounded-[50%]'></div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-[10px] items-center'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
                          <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><FaTruckFast className='text-white text-4xl'/></div>
                        </div>
                        <h4 className='font-semibold text-xl'>{t("iconTitle1")}</h4>
                        <p>{t("iconSubtitle5")}</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
                          <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><FaHeadset className='text-white text-4xl'/></div>
                        </div>
                        <h4 className='font-semibold text-xl'>{t("iconTitle2")}</h4>
                        <p>{t("iconSubtitle6")}</p>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
                          <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><FaShieldAlt className='text-white text-4xl'/></div>
                        </div>
                        <h4 className='font-semibold text-xl'>{t("iconTitle3")}</h4>
                        <p>{t("iconSubtitle7")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Users
