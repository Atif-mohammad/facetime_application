import StreamVideoProvider from '@/providers/StreamClientProvider'
import { StreamVideoClient } from '@stream-io/node-sdk'
import React, { ReactNode } from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "facetime_application",
  description: "A video Calling Application",
  icons: '/icons/logo.svg'
};


const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <main>
       <StreamVideoProvider>
        {children}
       </StreamVideoProvider>
        
        
    </main>
  )
}

export default RootLayout