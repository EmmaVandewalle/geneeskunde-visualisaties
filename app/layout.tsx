import type {Metadata} from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
    title: "Geneeskunde Visualisaties",
    description: "Interactieve visualisaties voor geneeskunde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="nl" className="h-full">
        <body
            className="antialiased h-full bg-zinc-50 dark:bg-black"
        >
        <div className="flex h-full">
            <div className="max-w-48">
                <Sidebar/>
            </div>
            <main className="flex-1 pl-48">
                <div className="mx-auto p-6">
                    {children}
                </div>
            </main>
        </div>
        </body>
        </html>
    );
}
