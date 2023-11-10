import React from 'react'
import { LandingPageLayout } from '../components/LandingPageLayout'
import { Outlet } from 'react-router-dom'

export default function PublicRoute() {
  return (
    <LandingPageLayout>
        <Outlet/>
    </LandingPageLayout>
  )
}
