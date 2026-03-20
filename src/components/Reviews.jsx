import { Star, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { reviews } from "../reviews";


function Reviewssection() {

  const [reviewValues, setReviews] = useState(reviews);

  const [newReview, setNewReview] = useState({
    name: "",
    company: "",
    rating: 5,
    comment: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newReview.name || !newReview.comment) return;

    const review = {
      id: Date.now().toString(),
      ...newReview,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([review, ...reviewValues]);

    setNewReview({
      name: "",
      company: "",
      rating: 5,
      comment: "",
    });
  };

  const averageRating =
    reviewValues.reduce((acc, r) => acc + r.rating, 0) / reviewValues.length;

  return (
    <section id="reviews" className="max-w-6xl mx-auto py-20 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl"
        />
      </div>
      {/* Header */}
      {/* Section Header */}
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Client Reviews
        </h2>

        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 text-teal-400"
                fill={star <= Math.round(averageRating) ? "currentColor" : "none"}
              />
            ))}
          </div>

          <span className="text-lg">
            {averageRating.toFixed(1)} ({reviewValues.length} reviews)
          </span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Reviews list */}
        <div className="space-y-6">
          {reviewValues.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-700 rounded-xl p-6"
            >

              <div className="flex justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.company}</p>
                </div>

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-teal-400"
                      fill={star <= review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-2">{review.comment}</p>

              <p className="text-xs text-gray-500">{review.date}</p>

            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-gray-700 rounded-xl p-8">

          <h3 className="text-2xl mb-6 font-semibold">Leave a Review</h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800"
            />

            <input
              type="text"
              placeholder="Company"
              value={newReview.company}
              onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800"
            />

            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-800"
            />

            <button className="w-full bg-teal-500 py-3 rounded-lg flex justify-center gap-2">
              <Send className="w-5 h-5" />
              Submit Review
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Reviewssection;