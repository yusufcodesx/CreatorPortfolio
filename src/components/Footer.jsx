import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center space-y-4"
                >
                    <motion.div className="inline-flex items-center gap-2 text-muted-foreground"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <span>Crafted with</span>
                        <Heart className="w-4 h-4 text-primary fill-primary" />
                        <span>and Motion</span>
                    </motion.div>

                    <p className="text-muted-foreground">
                        © {currentYear} YaKUBeditss. All rights reserved.
                    </p>

                    <p className="text-muted-foreground hover:text-primary transition-colors">
                        <a href="http://x.com/yusufcodesx">Built by Yxsuf (@yusufcodesx)</a> 
                    </p>

                    <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                        <button className="hover:text-primary transition-colors">
                            Privacy
                        </button>
                        <span>•</span>
                        <button className="hover:text-primary transition-colors">
                            Terms
                        </button>
                        <span>•</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="hover:text-primary transition-colors"
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;