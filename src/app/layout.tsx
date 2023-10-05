"use client";
import "./globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from '@/utils/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Chat App on NextJS</title>
      </head>
      <body>
        <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }} theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
