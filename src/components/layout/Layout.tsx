import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-text font-body selection:bg-accent selection:text-white overflow-x-hidden">
            <Navbar />
            <main className="pt-24 min-h-[calc(100vh-300px)]">
                {children}
            </main>
            <Footer />
        </div>
    );
};
