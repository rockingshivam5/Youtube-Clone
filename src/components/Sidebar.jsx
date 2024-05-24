import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { youtubeStore } from '../utils/userStore';

const Sidebar = () => {


    const { isMenuOpen } = youtubeStore();
    if (!isMenuOpen) return null;

    return (

        <div className='shadow-md w-48 p-5 fixed bg-white h-screen mt-[80px]'>
            <ul >
                <li><HomeIcon /> Home</li>
                <li><ElectricBoltIcon /> Sorts</li>
                <li><SlowMotionVideoIcon /> Video</li>
                <li><LiveTvIcon /> Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul  >
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul >
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar