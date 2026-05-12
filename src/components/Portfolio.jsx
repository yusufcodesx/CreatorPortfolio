import { useState } from 'react';
import { motionVideos, shortVideos, longVideos } from '../videos';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Auto-extracts YouTube thumbnail from embed URL
const getYoutubeThumbnail = (url) => {
    const videoId = url.split("/embed/")[1]?.split("?")[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Lazy video card
function VideoCard({ video, index }) {
    const [play, setPlay] = useState(false);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full aspect-video rounded-xl overflow-hidden
                       shadow-lg hover:shadow-primary/50 transition-shadow"
        >
            {play ? (
                <iframe
                    className="w-full h-full"
                    src={`${video.url}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                    title="portfolio video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            ) : (
                <div
                    className="w-full h-full cursor-pointer relative group"
                    onClick={() => setPlay(true)}
                >
                    <img
                        src={getYoutubeThumbnail(video.url)}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://img.youtube.com/vi/${video.url.split('/embed/')[1]?.split('?')[0]}/0.jpg`;
                        }}
                        alt="video thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="bg-secondary/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-black"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}

// Mobile carousel
function MobileCarousel({ videos }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
    };

    const paginate = (dir) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + videos.length) % videos.length);
    };

    // Touch swipe support
    let touchStartX = 0;
    const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
    const handleTouchEnd = (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
    };

    return (
        <div className="px-4 space-y-3">
            {/* Carousel window */}
            <div
                className="relative w-full aspect-video rounded-xl overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence custom={direction} mode="popLayout">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <VideoCard video={videos[current]} index={current} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-1">
                <button
                    onClick={() => paginate(-1)}
                    className="p-2 rounded-full bg-accent/30 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {videos.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className={`rounded-full transition-all duration-300 ${i === current
                                ? 'w-6 h-2 bg-primary'
                                : 'w-2 h-2 bg-primary/30'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => paginate(1)}
                    className="p-2 rounded-full bg-accent/30 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-muted-foreground">
                {current + 1} / {videos.length}
            </p>
        </div>
    );
}

// Desktop grid
function DesktopGrid({ videos }) {
    return (
        <div className="grid grid-cols-2 gap-6 px-6">
            {videos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
            ))}
        </div>
    );
}

// Section wrapper — carousel on mobile, grid on desktop
function VideoRow({ videos }) {
    return (
        <>
            <div className="md:hidden">
                <MobileCarousel videos={videos} />
            </div>
            <div className="hidden md:block">
                <DesktopGrid videos={videos} />
            </div>
        </>
    );
}

function Portfolio() {
    return (
        <div>
            {/* Motion Design */}
            <section id="motion-design" className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 px-4"
                >
                    <h2 className="text-3xl font-bold mb-4">Motion Design</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stunning animations and motion graphics that bring brands to life
                    </p>
                </motion.div>
                <VideoRow videos={motionVideos} />
            </section>

            {/* Short-Form Content */}
            <section id="short-form" className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 px-4"
                >
                    <h2 className="text-3xl font-bold mb-4">Short-Form Content</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Bite-sized videos that hook viewers in seconds and keep them watching until the end
                    </p>
                </motion.div>
                <VideoRow videos={shortVideos} />
            </section>

            {/* Long-Form Productions */}
            <section id="long-form" className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6 px-4"
                >
                    <h2 className="text-3xl font-bold mb-4">Long-Form Productions</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Cinematic storytelling that captivates audiences through compelling narratives
                    </p>
                </motion.div>
                <VideoRow videos={longVideos} />
            </section>
        </div>
    );
}

export default Portfolio;