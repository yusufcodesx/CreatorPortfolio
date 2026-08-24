import { useState, useEffect } from 'react';
import { BadgeCheck, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // adjust delay to match your menu's close transition if it has one
    };
    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'motion-design', label: 'Motion Design' },
        { id: 'short-form', label: 'Short-Form' },
        { id: 'long-form', label: 'Long-Form' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'contact', label: 'Contact Me' },
    ];
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-card/95 backdrop-blur-md shadow-lg shadow-primary/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">   {/* ← Keep this wrapper */}
                <div className="flex items-center justify-between h-20">
                    {/* Profile Image + Name */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                            <a href="https://x.com/yaKUBedits" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://pbs.twimg.com/profile_images/2014298201935798272/_p11BIgR_400x400.jpg"
                                    alt="Profile"
                                    className="relative w-12 h-12 rounded-full object-cover ring-2 ring-primary/50"
                                />
                            </a>
                        </div>
                        <span className="hidden sm:flex  font-semibold text-primary tracking-wider">
                            Yakub Edits <span className='p-0.5'> <BadgeCheck /></span>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation - Only show on large screens */}
                    <div className="hidden lg:flex items-center gap-1.5">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-5 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group "
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-4/5 transition-all duration-300" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <motion.button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-left px-5 py-4 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-2xl transition-colors"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>

    )
}

export default Navbar;
