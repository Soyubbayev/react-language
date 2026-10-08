import React from 'react'
import { useTranslation } from 'react-i18next';
import twoGirl from "../../assets/twoGirl.png"
import { CiShop } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { FaSackDollar } from 'react-icons/fa6';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full max-w-[1540px] m-auto'>
      <section className='px-[120px] mb-[100px]'>
        <p className='py-[42px]'> <span className='text-[gray]'>{t("headerNav1")} /</span> {t("headerNav3")}</p>
        <div className='flex justify-between items-center mb-[100px]'>
          <div>
            <h1 className='font-semibold text-[54px] mb-[40px]'>{t("heroTitle")}</h1>
            <p className='font-normal text-base w-[525px] mb-[24px]'>{t("heroSubtitle1")}</p>
            <p className='font-normal text-base w-[505px]'>{t("heroSubtitle2")}</p>
          </div>
          <img src={twoGirl} alt="" />
        </div>
        <div className='flex justify-between'>
          <div className='w-[270px] h-[230px] border-1 border-[#0000004D] flex flex-col justify-center items-center gap-[20px]'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
              <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><CiShop className='text-white text-5xl'/></div>
            </div>
            <h3 className='font-bold text-3xl'>{t("iconMoney1")}</h3>
          <p>{t("iconSubtitle1")}</p>
          </div>
          <div className='w-[270px] h-[230px] border-1 border-[#0000004D] flex flex-col justify-center items-center gap-[20px] bg-[#DB4444]'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-red-300'>
              <div className='w-[58px] h-[58px] rounded-[50%] bg-white flex items-center justify-center'><FaDollarSign className='text-5xl'/></div>
            </div>
            <h3 className='font-bold text-3xl'>{t("iconMoney2")}</h3>
          <p>{t("iconSubtitle2")}</p>
          </div>
          <div className='w-[270px] h-[230px] border-1 border-[#0000004D] flex flex-col justify-center items-center gap-[20px]'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
              <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><BiSolidShoppingBags className='text-white text-5xl'/></div>
            </div>
            <h3 className='font-bold text-3xl'>{t("iconMoney3")}</h3>
          <p>{t("iconSubtitle3")}</p>
          </div>
          <div className='w-[270px] h-[230px] border-1 border-[#0000004D] flex flex-col justify-center items-center gap-[20px]'>
            <div className='w-[80px] h-[80px] rounded-[50%] flex items-center justify-center border-11 border-[gray]'>
              <div className='w-[58px] h-[58px] rounded-[50%] bg-black flex items-center justify-center'><FaSackDollar className='text-white text-4xl'/></div>
            </div>
            <h3 className='font-bold text-3xl'>{t("iconMoney4")}</h3>
          <p>{t("iconSubtitle4")}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
