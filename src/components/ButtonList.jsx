import Button from "./Button"

const list = ["All", "Music", "JavaScript", "Mixes", "Java", "HTML", "CSS", "React"];



const ButtonList = () => {

    return (
        <div className="flex gap-2 p-2 z-10 bg-white w-full">
            {list.map((value) => (

                < Button key={value} name={value} ></Button>
            )
            )}


        </div >
    )
}

export default ButtonList
