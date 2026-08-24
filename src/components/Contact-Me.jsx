import { Mail, ArrowUpRight } from 'lucide-react';
import XIcon from '@mui/icons-material/X';
import { FiYoutube } from "react-icons/fi";
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';
import { PiTiktokLogoThin } from "react-icons/pi";


function ContactMe() {
    const contactInfo = {
        email: 'yakubabiona847@gmail.com',
        twitter: '@yaKUBedits',
        instagram: '@yakubcreates',
        tiktok: '@yakubedits',
        youtube: '@yaKUBeditss',
        profileImage: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?w=200',
    };

    const socialLinks = [
        {
            name: 'X (Twitter)',
            handle: contactInfo.twitter,
            url: `https://twitter.com/${contactInfo.twitter.replace('@', '')}`,
            icon: XIcon,
            color: 'hover:text-[#1DA1F2]',
        },
        {
            name: 'Instagram',
            handle: contactInfo.instagram,
            url: `https://instagram.com/${contactInfo.instagram.replace('@', '')}`,
            icon: InstagramIcon,
            color: 'hover:text-[#E4405F]',
        },
        {
            name: 'Tiktok',
            handle: contactInfo.tiktok,
            url: `https://tiktok.com/${contactInfo.tiktok}`,
            icon: PiTiktokLogoThin,
            color: 'hover:text-[#FF0050]',
        },
        {
            name: 'Youtube',
            handle: contactInfo.youtube,
            url: `https://youtube.com/${contactInfo.youtube}`,
            icon: FiYoutube,
            color: 'hover:text-[#E4405F]',
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -top-1/2 -left-1/4 w-full h-full bg-linear-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-linear-to-tl from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl"
                />

                <div
                    className="absolute -top-1/2 -left-1/4 w-full h-full bg-linear-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"
                />
                <div
                    className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-linear-to-tl from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                    </motion.div>
                </motion.div>

                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-linear-to-br from-primary/20 via-card/50 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl shadow-primary/10"
                >
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                            className="inline-block"
                        >
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <Mail className="w-10 h-10 text-primary" />
                            </div>
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold">
                            Get in Touch
                        </h3>

                        <motion.a className="inline-block pr-6 text-xl md:text-3xl font-semibold text-primary hover:text-primary/80 transition-colors"
                            href={`mailto:${contactInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}

                        >
                            {contactInfo.email}
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/30 
                             mt-4"
                            href={`mailto:${contactInfo.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Send an Email
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Social Links */}
                <div className="grid md:grid-cols-2 gap-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            className="group bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl  hover:border-primary/50 transition-all sm:p-4"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4 sm:gap-3">
                                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <social.icon className={`w-6 h-6 text-foreground ${social.color} transition-colors`} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-1">{social.name}</h4>
                                    <p className="text-sm font-bold  text-muted-foreground group-hover:text-primary transition-colors sm:text-xs">
                                        {social.handle}
                                    </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

        </section >
    );
}



export default ContactMe;