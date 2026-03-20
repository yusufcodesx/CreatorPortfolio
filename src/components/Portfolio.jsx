import { useState } from 'react';
import { motionVideos, shortVideos, longVideos } from '../videos';
import { motion } from 'framer-motion';

// Auto-extracts YouTube thumbnail from embed URL
const getYoutubeThumbnail = (url) => {
    const videoId = url.split("/embed/")[1]?.split("?")[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Lazy video card — shows thumbnail until clicked, then loads iframe
function VideoCard({ video, index }) {
    const [play, setPlay] = useState(false);

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="shadow-lg min-w-75 aspect-video rounded-xl overflow-hidden hover:shadow-primary/50 transition-shadow"
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
                    {/* Auto-generated YouTube thumbnail */}
                    <img
                        src={getYoutubeThumbnail(video.url)}
                        alt="video thumbnail"
                        className="w-full h-full object-cover"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="bg-secondary/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-black "
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
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl font-bold mb-4">Motion Design</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stunning animations and motion graphics that bring brands to life
                    </p>
                </motion.div>
                <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible px-6">
                    {motionVideos.map((video, index) => (
                        <VideoCard key={index} video={video} index={index} />
                    ))}
                </div>
            </section>

            {/* Short-Form Content */}
            <section id="short-form" className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl font-bold mb-4">Short-Form Content</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Bite-sized videos that hook viewers in seconds and keep them watching until the end
                    </p>
                </motion.div>
                <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible px-6">
                    {shortVideos.map((video, index) => (
                        <VideoCard key={index} video={video} index={index} />
                    ))}
                </div>
            </section>

            {/* Long-Form Productions */}
            <section id="long-form" className="py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl font-bold mb-4">Long-Form Productions</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Cinematic storytelling that captivates audiences through compelling narratives
                    </p>
                </motion.div>
                <div className="flex shadow-primary/30 md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible px-6">
                    {longVideos.map((video, index) => (
                        <VideoCard key={index} video={video} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Portfolio;