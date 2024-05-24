import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatMessage = ({ name = "Shivam", message }) => {

    return (
        <div className="flex" >
            <div className='p-2'>
                <AccountCircleIcon />
            </div>
            <div className='text-sm p-2'>
                <span className="font-bold">{name} </span>{message}
            </div>

        </div>
    )
}

export default ChatMessage
