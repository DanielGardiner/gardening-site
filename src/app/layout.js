'use client'

import styled from "styled-components";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry.jsx";
import { Gabarito } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
})

const StyledBody = styled.body`
  margin: 0;
`

export default function RootLayout({ children }) {
  return (
    <html className={gabarito.className}>
      
        <StyledComponentsRegistry>
        <StyledBody>
          {children}
      </StyledBody>
          </StyledComponentsRegistry>
    </html>
  );
}
