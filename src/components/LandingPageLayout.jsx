import React from 'react'
import Navbar from '@/components/layout-components/Navbar'
import { Outlet } from 'react-router-dom'

function Content(){
    return (
        <main>
            <Outlet/>
        </main>
    )
}

export function LandingPageLayout() {
  return (
    <div>
        <Navbar/>
        <Content/>
        <section className="md:relative p-2 py-8 sm:px-12 lg:px-[5.5rem] xl:px-36 2xl:px-[10.5rem] bg-green-900 h-96">
            Footer
        </section>
    </div>
  )
}
