
import { useState } from "react";
import Board from '../../components/Chess-Board/Board';
function ChessPage() {
    const [show, setShow] = useState(false);

    function button(){
        return(
            <button
            className="text-3xl cursor-pointer rounded-2xl py-2 w-fit px-4 bg-white text-[#265bfc] font-bold text-center"
            onClick={()=>{
                setShow((pre)=>(!pre))
            }}
            >
                Yes
            </button>
        )
    }

    function title(text){
        return (
            <h1 className="text-4xl font-bold mb-10 text-center">
                {text}
            </h1>
        )
    }
    return (
        <div className="section-padding bg-gradient-to-r flex-wrap flex flex-col content-center items-center  from-[#265bfc] to-[#1a3dff] text-white  ">
            {
                !show&&
                <>
                {title("Do You Want To Play Chess?")}
                {button()}
                </>
            }
            {show&&
            <>
                <Board/>

                {title("Quite Playing?")}
                {button()}
            </>
            }
        </div>
    );
}

export default ChessPage;