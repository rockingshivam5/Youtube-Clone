import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"

const LiveChat = () => {

    const [message, setMessage] = useState();
    const [messagePass, setMessagePass] = useState([]);
    const handleOnChange = (e) => {
        setMessage(e.target.value);
    }

    const handleOnClick = () => {
        if (message.length > 0) {
            setMessagePass([...messagePass, message]);
            setMessage("");
        }

    }

    // useEffect(() => {
    //     const i = setInterval(() => {
    //         // console.log("API POLLING");

    //     }, 2000)
    //     return () => {
    //         clearInterval(i);
    //     }
    // }, [])



    return (
        <div>
            <div className='w-[300px] h-[500px] bg-slate-200 mt-[154px] ml-4 rounded-md border-[1.5px] border-black overflow-y-scroll'>

                {/* <ChatMessage name='Shivam Sharma' message={"This is Youtube Live 🙏 "} /> */}


                {/* {Array.from({ length: 20 }).map((index) => (
                    <ChatMessage key={index} name='Shivam Sharma' message={"This is Youtube Live 🙏 "} />
                ))
                } */}


                {messagePass.map((item, index) => (
                    <ChatMessage key={index} message={item} />
                ))}




            </div>

            <form className="w-[300px] p-1 rounded gap-1 border-[1px] h-9 border-black ml-4 flex justify-around"

                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(message);
                }}

            >

                <input className="rounded w-[220px] p-2"
                    type="text"
                    placeholder="chat"
                    onChange={handleOnChange}
                    value={message}

                >
                </input>
                <button className="border-black bg-slate-300 rounded w-20" onClick={handleOnClick} > Submit</button>

            </form>
        </div>
    )
}

export default LiveChat


