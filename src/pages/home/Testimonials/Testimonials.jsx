import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);

  return (
    <div className='bg-[#1C1C1E]'>
      <div className="py-10">
        <SectionTitle heading="Client say what!!!!!"></SectionTitle>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index.id}>
            <div className="flex flex-col items-center mx-5 p-10 my-16 border-4 shadow-md  border-[#411564] text-white">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.ratings}
                readOnly
              />
              <img src={review.clientImage} alt={`client-${index}`} />
              <h3 className="text-2xl text-orange-400">{review.clientName}</h3>
              <p className="pt-8">{review.clientReview}</p>
              <p className="pb-8">{review.clientSay}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
