import Footer from '@/components/modules/Footer'
import Header from '@/components/modules/Header'
import HosesBox from '@/components/modules/HosesBox'
import Sidebar from '@/components/modules/Sidebar'
import Featurs from '@/components/templates/Featurs'
import Gallery from '@/components/templates/Gallery'
import RealTors from '@/components/templates/RealTors'
import Story from '@/components/templates/Story'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <Featurs />
      <Story />
      <HosesBox />
      <Gallery />
    </>
  )
}







