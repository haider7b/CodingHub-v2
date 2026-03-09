import React from 'react'
import { useState ,useEffect} from 'react'
import { gsap } from 'gsap/gsap-core'
import Gift from '../../components/theGifts/Gift'
import StarsBackground from '../../components/theGifts/StarsBackground'


const ForHer =()=> {

    const [answer,setAnswer]=useState(false)  
    
    useEffect(()=>{
        gsap.to('#gift input',{
            opacity:answer?0:1,
            duration:2,
            onComplete:()=>{
                gsap.to('#gift input',{
                    display:answer?"none":'block',
                })
            }
        })

        gsap.to("#gift-body",{
            display:answer?"block":'none',
            // delay:answer?3:0,
        })

        if(answer){
            gsap.to('#gift',{
                delay:2,
                width:'100%',
                height:'100%',
                zIndex:'10000',
            })
        }
    },[answer])

    return (
        <div
        id='gift'
        className='w-full h-[60vh]   text-white bg-gradient-to-r flex-wrap  content-center
        from-[#3e6efc] to-[#2443f1] flex justify-center items-center  section-padding'
        >
            
            <input 
            type='text' 
            placeholder='اكتب التاريخ هنا (;'
            onChange={(e)=>{
                setAnswer(e.target.value.replace(" ","")==='2023/3/9'?true:false)
            }}
            className='py-2 px-8 h-[60px] bg-white text-blue-500 font-bold outline-0 border-0 rounded-2xl'
            >
            </input>

            <div id='gift-body'>
                <Gift/>
            </div>

        </div>
    )
}


export default ForHer