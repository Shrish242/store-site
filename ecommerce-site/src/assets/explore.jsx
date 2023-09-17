import React from 'react'
import model2 from '../image/model2.png'
import home from '../image/home.png'
import profile from '../image/profile.png'
import line from '../image/line.png'
import shoe from '../image/shoes.jpeg'
import jacket from '../image/jacket.jpeg'
import jeans from '../image/jeans.jpg'
import shirt from '../image/tshirt.jpeg'
import bag1 from '../image/bag.jpeg'
import star from '../image/star.png'

const explore = () => {
  return (
    <div>
      <div className="relative">
        <img className="z-10 absolute top-[3vh] left-[5vw] w-[2.4vw] h-[5vh]" src={home} alt="" />
        <img className="w-full h-[100vh] top-[-13vh] absolute  z-1" src={model2} alt="" />
        <img className="z-10 absolute top-[3vh] left-[90vw] w-[2.4vw] h-[5vh]" src={profile} alt="" />
        <p className="z-10 absolute text-5xl font-jude text-white top-[19vh] left-[7vw] text-center">Explore <br /> Our <br /> Wardrobe.</p>
        <p className='z-10 absolute text-5xl font-jude text-white top-[27vh] left-[67vw]'>30% on New Arrivals.</p>
      </div>


      <div className='h-[170vh] relative top-[90vh]'>
        <img className='absolute left-[62%] top-[10vh]' src={line} alt="" />
        <p className='absolute left-[48%] top-[7.5vh] font-mont text-2xl text-[#003366] font-medium'>New Arrivals</p>
        <img className='absolute left-[32%] top-[10vh]' src={line} alt="" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 absolute top-[22vh] space-x-14">
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={shoe} alt="" />
            <p className='absolute top-[25.6vh] left-[2vw] font-semibold text-2xl'>Converse Shoe</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={shirt} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Fancy Tshirt</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={bag1} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Gucci Bag</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[1vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
        </div>
        
        <div className='h-[140vh] relative top-[155vh]'>
        <img className='absolute left-[66%] top-[10vh]' src={line} alt="" />
        <p className='absolute left-[48%] top-[7.5vh] font-mont text-2xl text-[#003366] font-medium'>Men's Showroom</p>
        <img className='absolute left-[31%] top-[10vh]' src={line} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 absolute top-[22vh] space-x-14">
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={shoe} alt="" />
            <p className='absolute top-[25.6vh] left-[2vw] font-semibold text-2xl'>Converse Shoe</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={shirt} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Fancy Tshirt</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={bag1} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Gucci Bag</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[1vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
        </div>

        <div className='h-[140vh] relative top-[165vh]'>
        <img className='absolute left-[67%] top-[10vh]' src={line} alt="" />
        <p className='absolute left-[48%] top-[7.5vh] font-mont text-2xl text-[#003366] font-medium'>Women's Showroom</p>
        <img className='absolute left-[32%] top-[10vh]' src={line} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 absolute top-[22vh] space-x-14">
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={shoe} alt="" />
            <p className='absolute top-[25.6vh] left-[2vw] font-semibold text-2xl'>Converse Shoe</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={shirt} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Fancy Tshirt</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh] '>
            <img className='w-[16vw] h-[25vh]' src={bag1} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Gucci Bag</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>
          <div className='bg-[#CCC8AA] relative left-[1vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[3vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[4vw] w-[16vw] h-[60vh]'>
            <img className='w-[16vw] h-[25vh]' src={jeans} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jeans</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>

          <div className='bg-[#CCC8AA] relative left-[5vw] w-[16vw] h-[60vh]'>
            <img className='h-[25vh] w-[16vw]' src={jacket} alt="" />
            <p className='absolute top-[25.6vh] left-[4vw] font-semibold text-2xl'>Jacket</p>
            <p className='absolute top-[30vh] left-[1vw] opacity-60 text-s'>Available at: 99$</p>
            <p className='absolute top-[33vh] left-[1vw] opacity-60 text-s'>Available sizes:</p>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[0.5vw]'><p className='relative left-[0.8vw]'>X</p></div>
            <div className='absolute rounded-full bg-[#D9D9D9] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[3.5vw]'><p className='relative left-[0.8vw]'>S</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[6.5vw]'><p className='relative text-[white] left-[0.7vw]'>M</p></div>
            <div className='absolute rounded-full bg-[black] border border-1 border-black w-[2.5vw] h-[5vh] top-[37vh] left-[9.5vw]'><p className='relative text-[white] left-[0.8vw]'>L</p></div>
            <p className='absolute top-[43vh] left-[1vw] opacity-60 text-s'>Reviews: </p>
            <div className='flex absolute top-[43.5vh] left-[6vw]'>
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
              <img className='w-[1.3vw] h-[2.6vh]' src={star} alt="" srcset="" />
            </div>
            <button className='bg-[#4B532A] w-[7vw] h-[6vh] absolute top-[52vh] left-[4vw] rounded-lg' type="submit"><p className='text-[white] font-semibold' >Shop Now </p></button>
          </div>      
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default explore
