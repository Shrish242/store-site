import React from 'react'
import facebook from '../image/facebook.png'
import insta from '../image/insta.png'
import tiktok from '../image/tiktok.png'
import profile from '../image/profile.png'
import down from '../image/down.png'
import search from '../image/serach.jpg'
import cart from '../image/cart.png'
import love from '../image/love.png'
import bag from '../image/bag.png'
import model from '../image/model1.jpg'
import line from '../image/line.png'
import adiddas from '../image/adiddas.png'
import nike from '../image/nike.png'
import brand1 from '../image/brand1.png'
import zara from '../image/zara.png'
import money from '../image/money.png'
import product from '../image/product.png'
import delivery from '../image/delivery.png'
import satisfaction from '../image/satisfaction.png'
import shoe from '../image/shoes.jpeg'
import jacket from '../image/jacket.jpeg'
import jeans from '../image/jeans.jpg'
import shirt from '../image/tshirt.jpeg'
import bag1 from '../image/bag.jpeg'
import best from '../image/best.png'
import men from  '../image/men.png'
import women from '../image/women.png'
import profile1  from '../image/mixture.jpg'
import master from '../image/master.png'
import esewa from '../image/esewa.png'
import online from '../image/online.png'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import offer from '../image/offer.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Homepage = () => {
  return (
    <div>
      <div className='flex w-full h-[7vh] bg-[#FFD700]'>
        <img className='w-[2vw] h-[4vh] my-1 ml-14' src={facebook} alt="" />
        <img className='w-[2vw] h-[4vh] my-1 ml-4' src={insta} alt="" />
        <img className='w-[2vw] h-[4vh] my-1 ml-4' src={tiktok} alt="" />
        <p className='mont text-xl font-semibold absolute left-[40vw] top-[1vh]'>Special offer upto 50% on all products.</p>
        <div className='absolute left-[80%] flex top-[1.5vh]'>
          <img className='w-[2vw] h-[4vh]' src={profile} alt="" />
          <p>My account</p>
          <img className='w-[2vw] h-[4vh]' src={down} alt="" />
        </div>
      </div>

      <div className='flex w-full h-[9vh] bg-[#F5F5F5]'>
        <p className='font-mont text-xl absolute left-[12%] top-[9%] font-medium'>Glam.</p>
        <p className='font-mont text-lg absolute left-[25%] top-[9%] '>Man</p>
        <p className='font-mont text-lg absolute left-[33%] top-[9%]'>Woman</p>
        <p className='font-mont text-lg absolute left-[41%] top-[9%] '>Children</p>
        <p className='font-mont text-lg absolute left-[49%] top-[9%] '>Explore</p>
        <input className='absolute left-[60%] top-[9%] w-[15vw] rounded-lg h-[5vh] border-1 border-[black]' placeholder='  Search for products' type="text" />
        <img className='w-[2vw] h-[4vh] absolute left-[73%] top-[9.5%]' src={search} alt="" />
        <img className='w-[2vw] h-[4vh] absolute left-[79%] top-[9.5%]' src={cart} alt="" />
        <img className='w-[2vw] h-[4vh] absolute left-[84%] top-[9.5%]' src={love} alt="" />
        <img className='w-[2vw] h-[4vh] absolute left-[88%] top-[9.5%]' src={bag} alt="" />
      </div>

      <div className=' w-full h-[70vh] bg-[#0C1212]'>
        <p className='text-left absolute font-mont text-4xl  left-[5%] top-[30%] text-white'>
          Discover Luxurious <br />
          Creations for Your <br />
          Ideal Lifestyle
        </p>
        <p className='text-white opacity-75 absolute top-[50%] left-[5%]'>Experience Elegance in Every Detail, Shop Our <br />
          Exclusive Collection Now</p>

        <button className='absolute top-[64%] left-[5%] w-[10vw] h-[5vh] bg-[#003366] text-[white] rounded-lg'>Shop Now</button>
        <button className='absolute top-[64%] left-[18%] w-[10vw] h-[5vh] bg-[#0C1212] border border-[#003366] text-[white] rounded-lg'>Explore</button>
        <img className='w-[35vw] h-[60vh] relative top-[9.8vh] left-[62vw]' src={model} alt="" />
      </div>

      <div className='flex space-x-9 mx-9 my-9 px-9'>
        <div className='rounded-lg bg-[#D9D9D9] w-[6vw] h-[5vh]'> <p className='absolute left-[5.5vw]'>Brands</p> <img className='w-[1.5vw] h-[3vh] absolute left-[9%] top-[92.5vh]' src={down} alt="" /></div>
        <div className='rounded-lg bg-[#D9D9D9] w-[6vw] h-[5vh]'> <p > Services </p> <img className='w-[1.5vw] h-[3vh] absolute left-[18%] top-[92.5vh]' src={down} alt="" /></div>
        <div className='rounded-lg bg-[#D9D9D9] w-[6vw] h-[5vh]'> <p className='absolute left-[23.5vw]'>Picks </p> <img className='w-[1.5vw] h-[3vh] absolute left-[26.5%] top-[92.5vh]' src={down} alt="" /></div>
        <div className='rounded-lg bg-[#D9D9D9] w-[6vw] h-[5vh]'> <p className='absolute left-[31.5vw]'>Review </p> <img className='w-[1.5vw] h-[3vh] absolute left-[35.5%] top-[92.5vh]' src={down} alt="" /></div>
      </div>

      <div className='h-[40vh]'>
        <img className='absolute left-[60%] top-[115vh]' src={line} alt="" />
        <p className='absolute left-[50%] top-[112vh] mont text-2xl text-[#003366] '>Brands</p>
        <img className='absolute left-[30%] top-[115vh]'  src={line} alt="" />
        <div className='flex spcae-x-9 absolute left-[40%] '>
        <img className='w-[6.7vw] h-[10vh] relative left-[15vw] top-[28vh] ' src={adiddas} alt="" />
        <img className='w-[6.7vw] h-[10vh] absolute left-[30vw] top-[28vh]' src={brand1} alt="" />
        <img className='w-[6.7vw] h-[10vh] absolute right-[0vw] top-[28vh]' src={nike} alt="" />
        <img className='w-[6.7vw] h-[10vh] absolute right-[15vw] top-[28vh]' src={zara} alt="" />
        </div>
      </div>

      <div className='h-[70vh]'>
      <img className='absolute left-[60%] top-[169vh]' src={line} alt="" />
        <p className='absolute left-[50%] top-[167vh] mont text-2xl text-[#003366] '>Services</p>
        <img className='absolute left-[30%] top-[169vh]'  src={line} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 top-[185vh] left-[12%] absolute">
  <div className='relative'><img className='w-[5vw] h-[11vh]' src={product} alt=""/>
    <p className='text-lg text-[#003366] font-semibold '>Original Products</p>
    <p className='text-[#003366] text-sm font-semibold'>We don’t compromise on products, <br /> all the products are 100% legit.</p></div>
  <div className='relative'><img className='w-[5vw] h-[11vh]' src={money} alt=""/>
    <p  className='text-lg text-[#003366] font-semibold '>Money Back Guarantee</p>
    <p  className='text-[#003366] text-sm font-semibold'>We provide money back guarantee if <br /> the product is wrong or damaged</p></div>
  <div className='relative'><img className='w-[5vw] h-[11vh]' src={delivery} alt=""/>
    <p  className='text-lg text-[#003366] font-semibold '>Free Shipping</p>
    <p className='text-[#003366] text-sm font-semibold'>Get your order instantly <br /> without any extra charge.</p></div>
  <div className='relative'><img className='w-[5vw] h-[11vh]' src={satisfaction} alt="" />
    <p  className='text-lg text-[#003366] font-semibold '>Satisfaction Guarantee</p>
    <p className='text-[#003366] text-sm font-semibold'>You will be able to exchange product <br /> if you are not satisfied.</p></div>
</div>


<div className='h-[70vh] relative'>
  <img className='absolute left-[62%] top-[10vh]' src={line} alt="" />
  <p className='absolute left-[48%] top-[7.5vh] font-mont text-2xl text-[#003366] font-medium'>Top Products</p>
  <img className='absolute left-[32%] top-[10vh]' src={line} alt="" />

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 absolute top-[22vh] space-x-14">
    <div className='bg-[#D9D9D9] relative left-[15vw] w-[16vw] h-[60vh] '>
      <img src={shoe} alt="" />
      <p className='absolute top-[35vh] left-[0.5vw] opacity-60 text-lg'>Featured</p>
      <p className='absolute top-[39vh] left-[0.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[44vh] left-[0.5vw] opacity-60 text-s'>From 99$</p>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
      
    </div>
    <div className='bg-[#D9D9D9] relative left-[15vw] w-[16vw] h-[60vh]'>
      <img src={shirt} alt="" />
      <p className='absolute top-[35vh] left-[0.5vw] opacity-60 text-lg'>Featured</p>
      <p className='absolute top-[39vh] left-[0.6vw] font-semibold text-2xl'>Tshirt</p>
      <p className='absolute top-[44vh] left-[0.5vw] opacity-60 text-s'>From 199$</p>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
      
    </div>
    <div className='bg-[#D9D9D9] relative left-[20vw] w-[16vw] h-[60vh] '>
      <img src={bag1} alt="" />
      <p className='absolute top-[35vh] left-[0.5vw] opacity-60 text-lg'>Featured</p>
      <p className='absolute top-[39vh] left-[0.6vw] font-semibold text-2xl'>Bag</p>
      <p className='absolute top-[44vh] left-[0.5vw] opacity-60 text-s'>From 299$</p>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
      
    </div>
    <div className='bg-[#D9D9D9] relative left-[10.5vw] w-[16vw] h-[60vh]'>
      <img src={jeans} alt="" />
      <p className='absolute top-[30vh] left-[0.5vw] opacity-60 text-lg'>Featured</p>
      <p className='absolute top-[34vh] left-[0.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[40vh] left-[0.5vw] opacity-60 text-s'>From 99$</p>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[45vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[45vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[45vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[45vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
      
    </div>
    <div className='bg-[#D9D9D9] relative left-[14.5vw] w-[16vw] h-[60vh]'>
      <img src={jacket} alt="" />
      <p className='absolute top-[35vh] left-[0.5vw] opacity-60 text-lg'>Featured</p>
      <p className='absolute top-[39vh] left-[0.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[44vh] left-[0.5vw] opacity-60 text-s'>From 99$</p>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
      <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
      <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[50vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
    </div>

  </div>
</div>

<div className='h-[75vh] relative'>
<img className='absolute left-[66%] top-[100vh]' src={line} alt="" />
  <p className='absolute left-[48%] top-[97.5vh] font-mont text-2xl text-[#003366] font-medium'>Popular Categories</p>
  <img className='absolute left-[32%] top-[100vh]' src={line} alt="" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 absolute top-[112vh] space-x-14">
    <div className='bg-[#D9D9D9] relative left-[2vw] w-[25vw] h-[20vh] '>
      <img className='absolute w-[10vw] h-[20vh]' src={shoe} alt="" />
      <p className='absolute top-[2vh]  left-[10.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[7vh] left-[10.5vw] opacity-60 text-s'>From 99$</p>
      <p className='absolute top-[10vh] left-[10.5vw] opacity-60 text-lg'>Available 99+</p>
    </div>
    <div className='bg-[#D9D9D9] relative left-[2vw] w-[25vw] h-[20vh] '>
      <img className='absolute w-[10vw] h-[20vh]' src={shoe} alt="" />
      <p className='absolute top-[2vh]  left-[10.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[7vh] left-[10.5vw] opacity-60 text-s'>From 99$</p>
      <p className='absolute top-[10vh] left-[10.5vw] opacity-60 text-lg'>Available 99+</p>
    </div>
    <div className='bg-[#D9D9D9] relative left-[2vw] w-[25vw] h-[20vh] '>
      <img className='absolute w-[10vw] h-[20vh]' src={shoe} alt="" />
      <p className='absolute top-[2vh]  left-[10.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[7vh] left-[10.5vw] opacity-60 text-s'>From 99$</p>
      <p className='absolute top-[10vh] left-[10.5vw] opacity-60 text-lg'>Available 99+</p>
    </div>
    <div className='bg-[#D9D9D9] relative left-[-2.2vw] w-[25vw] h-[20vh] '>
      <img className='absolute w-[10vw] h-[20vh]' src={shoe} alt="" />
      <p className='absolute top-[2vh]  left-[10.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[7vh] left-[10.5vw] opacity-60 text-s'>From 99$</p>
      <p className='absolute top-[10vh] left-[10.5vw] opacity-60 text-lg'>Available 99+</p>
    </div>
    <div className='bg-[#D9D9D9] relative left-[2vw] w-[25vw] h-[20vh] '>
      <img className='absolute w-[10vw] h-[20vh]' src={shoe} alt="" />
      <p className='absolute top-[2vh]  left-[10.6vw] font-semibold text-2xl'>Men's Shoes</p>
      <p className='absolute top-[7vh] left-[10.5vw] opacity-60 text-s'>From 99$</p>
      <p className='absolute top-[10vh] left-[10.5vw] opacity-60 text-lg'>Available 99+</p>
    </div>
  </div>

</div>


<div className='relative h-[70vh]'>
  <img className='absolute left-[64%] top-[100vh]' src={line} alt="" />
  <p className='absolute left-[50%] top-[97vh] font-mont text-2xl text-[#003366] '>Best Picks</p>
  <img className='absolute left-[32%] top-[100vh]' src={line} alt="" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 absolute top-[110vh] left-[12vw]  space-x-14">
  <div><img className=' h-[35vh] w-[17vw]  top-[120vh]' src={women} alt="" /> 
  <div className='absolute bg-[#D9D9D9] left-[7vh] top-[27vh] h-[5vh] w-[9vw] rounded-lg'><p className='font-mont font-semibold left-[2vw] relative'>Best Seller</p></div>
  </div>
  <div> <img className=' h-[35vh] w-[17vw]  top-[120vh]' src={best} alt="" />
  <div className='absolute bg-[#D9D9D9] left-[69vh] top-[27vh] h-[5vh] w-[9vw] rounded-lg'><p className='font-mont font-semibold left-[1vw] relative'>  Shop Woman</p></div>
  </div>
  <div> <img className=' h-[35vh] w-[17vw] top-[120vh]' src={men} alt="" />
  <div className='absolute bg-[#D9D9D9] left-[122vh] top-[27vh] h-[5vh] w-[9vw] rounded-lg'><p className='font-mont font-semibold left-[2vw] relative'>Shop Men</p></div>
  </div>
  </div>
</div>


      <div className='h-[30vh] relative top-[25vw] '>
       <img className='absolute left-[64%] top-[50vh]' src={line} alt="" />
  <p className='absolute left-[50%] top-[47vh] font-mont text-2xl text-[#003366] '>Testimonials</p>
  <img className='absolute left-[32%] top-[50vh]' src={line} alt="" />
  <div className="testimonialWrapper">
    <div className="testimonialTop">
    </div>

    <div className="testimonialContainer">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 1,
          },
          768: {
            navigation: true,
            slidesPerView: 1,
            // Display only 1 slide for screens >= 768px
          },
          480: {
            navigation: false,
            slidesPerView: 1,
            // Other settings for screens >= 480px
          },
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="testimonialBox">
          <div className="testimonialContents absolute top-[60vh] left-[20vw]">
              <div className="studentDetails">
                <div className="studentPhoto">
                  <img className='absolute w-[9vw] h-[19vh] rounded-full left-[45%] border border-[#0080FF] ' src={profile1} alt="Student Profile" />
                  <div className="flex justify-center items-center h-screen">
                  <h1 className="text-4xl font-semibold absolute left-[25vw] top-[18vh]">Sangam GC</h1>
        <p className="text-xl absolute left-[28] top-[24vh]">Professor</p>
                  </div>
                </div>
              </div>
      <p className="text-lg text-center mont relative bottom-[70vh]">
        "Absolutely delighted with my purchase from this store! The product's quality exceeded my expectations,<br />
        and the attention to detail is exceptional. Fast shipping too.<br />
        Will definitely be coming back for more. Highly recommended!"
      </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
          <div className="testimonialContents relative top-[60vh] left-[20vw]">
              <div className="studentDetails">
                <div className="studentPhoto">
                  <img className='absolute w-[9vw] h-[19vh] rounded-full left-[28vw] border border-[#0080FF] ' src={profile1} alt="Student Profile" />
                  <div className="flex justify-center items-center h-screen">
                  <h1 className="text-4xl font-semibold absolute left-[25vw] top-[18vh]">Sangam GC</h1>
        <p className="text-xl absolute left-[28vw] top-[24vh]">Professor</p>
                  </div>
                </div>
              </div>
      <p className="text-lg text-center relative right-[19vw] bottom-[70vh]">
        "Absolutely delighted with my purchase from this store! The product's quality exceeded my expectations,<br />
        and the attention to detail is exceptional. Fast shipping too.<br />
        Will definitely be coming back for more. Highly recommended!"
      </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
          <div className="testimonialContents relative top-[60vh] left-[20vw]">
              <div className="studentDetails">
                <div className="studentPhoto">
                  <img className='absolute w-[9vw] h-[19vh] rounded-full left-[28vw] border border-[#0080FF] ' src={profile1} alt="Student Profile" />
                  <div className="flex justify-center items-center h-screen">
                  <h1 className="text-4xl font-semibold absolute left-[25vw] top-[18vh]">Sangam GC</h1>
        <p className="text-xl absolute left-[28vw] top-[24vh]">Professor</p>
                  </div>
                </div>
              </div>
      <p className="text-lg text-center relative right-[19vw] bottom-[70vh]">
        "Absolutely delighted with my purchase from this store! The product's quality exceeded my expectations,<br />
        and the attention to detail is exceptional. Fast shipping too.<br />
        Will definitely be coming back for more. Highly recommended!"
      </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonialBox">
          <div className="testimonialContents relative top-[60vh] left-[20vw]">
              <div className="studentDetails">
                <div className="studentPhoto">
                  <img className='absolute w-[9vw] h-[19vh] rounded-full left-[28vw] border border-[#0080FF] ' src={profile1} alt="Student Profile" />
                  <div className="flex justify-center items-center h-screen">
                  <h1 className="text-4xl font-semibold absolute left-[25vw] top-[18vh]">Sangam GC</h1>
        <p className="text-xl absolute left-[28vw] top-[24vh]">Professor</p>
                  </div>
                </div>
              </div>
      <p className="text-lg text-center relative right-[19vw] bottom-[70vh]">
        "Absolutely delighted with my purchase from this store! The product's quality exceeded my expectations,<br />
        and the attention to detail is exceptional. Fast shipping too.<br />
        Will definitely be coming back for more. Highly recommended!"
      </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</div> 

<div className='h-[50vh] top-[160vh] relative'>
  <img  className='w-[60vw] h-[30vh] relative left-[20vw]' src={offer} alt="" />
</div>


<div className='relative h-[70vh] top-[160vh]'>
  <p className='font-mont text-3xl font-semibold text-[#003366] absolute left-[33vw]'>Subscribe to our Customer Profile</p>
  <p className='flex justify-center items-center font-mont text-2xl text-[#003366] absolute top-[6vh] left-[27vw]'>
    Get 23% off on your first purchase by subscribing to our newsletter
  </p>

  <input className='w-[20vw] h-[10vh] bg-slate-300 border border-1 border-[#003366] relative top-[19vh] left-[37vw]' type="text" placeholder="Enter your mail" />
  <button className='bg-[#003366] w-[9vw] h-[10vh] relative top-[19.2vh] left-[37vw] border border-1 border-white '><p className='font-mont text-white text-xl'>Submit</p></button>
  <p className='font-mont text-black opacity-75 absolute top-[35vh] left-[37vw] text-xl'>You will be able to unsubscribe anytime.</p>
  <p className='font-mont text-black opacity-75 absolute top-[40vh] left-[40vw] text-xl'>Read our Privacy Policy here.</p>
</div>

<div className='h-[32vh] bg-[#003366] top-[150vh] relative'>
<p className='font-mont text-white text-4xl absolute top-[6vh] left-[10vw]'>Glam</p>
<p className='font-mont text-white text-1xl absolute opacity-75 top-[13vh] left-[10vw] font-light'>Elevate Your Style With our Glamorous Fashion <br /> with us</p>
<p className='font-mont text-white text-2xl absolute top-[9vh] left-[45vw]'>Shop</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[13.5vh] left-[45vw]'>Men's Wear</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[17.3vh] left-[45vw]'>Special Footwear</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[21vh] left-[45vw]'>Summer Collection</p>
<p className='font-mont text-white text-2xl absolute top-[9vh] left-[60vw]'>Quick Links</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[13.5vh] left-[60vw]'>Home</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[17.3vh] left-[60vw]'>Special Offers</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[21vh] left-[60vw]'>Testimonials</p>
<p className='font-mont text-white text-2xl absolute top-[9vh] left-[75vw]'>Support</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[13.5vh] left-[75vw]'>FAQs</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[17.3vh] left-[75vw]'>Privacy Policy</p>
<p className='font-mont text-white text-lg opacity-75 font-light absolute top-[21vh] left-[75vw]'>Terms & Conditions</p>
<p className='font-mont text-white text-2xl absolute top-[9vh] left-[89vw]'>Payment</p>
<div className='float flex space-x-3 absolute left-[87vw] top-[15vh] '>
<img className='w-[4vw] h-[4vh]' src={master} alt="" />
<img className='w-[2.5vw] h-[4vh]' src={esewa} alt="" />
<img className='w-[3vw] h-[4vh]' src={online} alt="" />
</div>

</div>


    </div>
  )
}

export default Homepage
