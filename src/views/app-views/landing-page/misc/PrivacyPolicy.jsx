import React from 'react';
import BannerDownload from "@/components/shared-components/BannerDownload";
import Breadcrumb from '@/components/layout-components/Breadcrumb';
import { privacy } from "@/views/app-views/landing-page/constant/privacy-policy"

export default function PrivacyPolicy() {
    
  return (
    <>
    <section className='base-container'>
        <Breadcrumb currentPage="Kebijakan Privasi" />
    </section>

    <section className='base-container'>
        <h1 className='mt-5 mb-4'>Kebijakan Privasi</h1>
        <p className='font-medium text-base'>
        Selamat datang di Website Reprohealth. Kami berkomitmen untuk menjaga kerahasiaan informasi pribadi Anda dan memberikan perlindungan terhadap data yang Anda bagikan kepada kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkap, dan melindungi informasi pribadi Anda. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi dan terikat oleh kebijakan privasi ini.
        </p>
        {privacy.map((items, indexs) => (
            <div key={indexs}>
                <h5 className='font-bold text-base'>{items.title}</h5>
                <h5 className='font-medium text-base'>{items.subs[0]}</h5>
                <h5 className='font-medium text-base'>{items.subs[1]}</h5>
                <ul>
                {items.textContent.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className='mx-2 font-medium text-base'>{index + 1}.</span>
                        <span className='font-medium text-base'>{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        ))}
    </section>

    <section className='base-container mt-[3.5rem] mb-[2rem]'>
        <BannerDownload />
    </section>
    </>
  )
}
