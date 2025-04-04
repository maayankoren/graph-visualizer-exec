import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Graph Visualizer",
  description: "Graph Visualizer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SidebarProvider>
          <div className="flex flex-1 min-h-screen">
            <AppSidebar />
            <main className="flex-1 flex flex-col h-screen">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
