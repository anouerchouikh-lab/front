

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-display text-3xl font-bold mb-4">NUIT DE L'INFO</h2>
                    <p className="text-white/60 max-w-md">
                        The ultimate hackathon experience. Build, break, and create something amazing in 12 hours.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-accent">Links</h3>
                    <ul className="space-y-2 text-white/60">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Rules</a></li>
                        <li><a href="#" className="hover:text-white">Sponsors</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4 text-accent">Contact</h3>
                    <ul className="space-y-2 text-white/60">
                        <li><a href="#" className="hover:text-white">Discord</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">Email</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
