import React, {useState} from 'react'
import Facebook from '../image/facebook.png'
import Insta from '../image/insta.png'
import Tiktok from '../image/tiktok.png'
import { Link   } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const login = ( {setLoginuser} ) => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    mail: '',
    password: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { mail, password } = user;
    if (mail && password) {
      axios
        .post('http://localhost:5000/login', user)
        .then((res) => {
          console.log(res);
          setLoginuser(res.data.user);
          console.log('User data after login:', res.data.user);
          navigate('/home');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Invalid input');
    }
  };
  

  return (
  <div>
    {console.log('user' , user)}
    <div>
       <p className="font-lora text-2xl fixed left-[23%] top-[11%]">Already been to my shop?</p>

       <p className='font-lora bold sm:text-4xl fixed left-[20%] sm:top-[17%] xs:text-2xl xs:top-[15%]'>Log into your account.</p>

      <p className='font-lora bold text-2xl fixed mx-[15%] sm:top-[30%] xs:top-[24%]'>Email Address</p>
            
            <input className='bg-[#D9D9D9] sm:w-[33%] sm:h-[7%] border-gray-900 border-1 rounded-lg fixed left-[15%] sm:top-[37%] xs:top-[29%] xs:h-[4.5%] xs:w-[50%]' type="mail" onChange={handlechange} name="mail" value={user.mail} placeholder="                                                                      @gmail.com"/>

            <p className='font-lora bold text-2xl fixed mx-[15%] sm:top-[45%] xs:top-[35%]'>Password</p>
           
           <input className='bg-[#D9D9D9] sm:w-[33%] sm:h-[7%] border-gray-900 border-1 rounded-lg fixed left-[15%] sm:top-[52%] xs:top-[39%] xs:h-[4.5%] xs:w=[50%] ' type="password"  onChange={handlechange} name="password" value={user.password}/>
           <button type="button" onClick={login} className='bg-[#2F7074] sm:w-[7%] sm:h-[6%] fixed sm:left-[27%] sm:top-[65%] border-gray-900 border-1 rounded-lg xs:top-[59%] xs:left-[35%] xs:h-[5%] xs:w-[15%]'>Log In</button>

           <p className="font-lora text-2xl fixed sm:left-[25%] sm:top-[76%] xs:top-[65%] xs:left-[30%]">Follow us on: </p> 
           <img className='w-[37px] h-[37px] fixed sm:left-[25%] sm:top-[82%] xs:left-[30%] xs:top-[69%] ' src={Facebook} alt="" />
            <img className='w-[37px] h-[37px] fixed sm:top-[82%] sm:left-[29%] xs:left-[40%] xs:top-[69%] ' src={Tiktok} alt="" /> 
            <img className='w-[37px] h-[37px] fixed sm:top-[82%] sm:left-[33%] xs:left-[50%] xs:top-[69%]' src={Insta} alt="" />

    </div>

            <div className='bg-gradient-to-b from-[#286B6B] to-[#FFFFFF] sm:w-[30%] sm:top-[0%] sm:h-[100%] fixed flex sm:left-[70%] xs:top-[75%] xs:w-[100%] xs:h-[20%]'>
            <p className='font-lora text-3xl bold text-slate-50 absolute left-[25%] sm:top-[30%] xs:top-[10%]'>First Time Here?</p>
            <p className='font-lora text-1xl bold text-black absolute sm:left-[19%] top-[38%] align-items-center xs:left-[20%]' >Signup here and explore the shop. <br/> We love you all.</p>
            <p className='font-lora text-2xl bold text-black absolute sm:left-[32%] sm:top-[52%] xs:left-[33%] xs:top-[65%]'>SignUp Here</p>
            <Link to='/'> <button type="button" className='bg-[#2F7074] sm:w-[20%] sm:h-[6%] absolute sm:top-[59%] sm:left-[36%] border-gray-900 border-1 rounded-lg xs:left-[38%] xs:top-[90%] xs:w-[15%] xs:h-[17%]'>Sign Up</button></Link>
            </div>

  </div>
  )
}

export default login
