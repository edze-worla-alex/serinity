import React from 'react'
import ServicesPage from '@/components/ServicesPage'
import { Suspense } from "react";

function Services() {
  return (
    <Suspense fallback={null}>
      <ServicesPage/>
    </Suspense>
  )
}

export default Services