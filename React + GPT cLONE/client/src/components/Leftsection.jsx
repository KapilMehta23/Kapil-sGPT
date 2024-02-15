import { ExternalLinkIcon, LogOutIcon, PlusIcon, SunIcon, UserIcon } from '../assets/Icons';

const options = [
    
       { icon: <UserIcon />, text:"Upgrade to plus "},
       { icon: <SunIcon />, text:"Light Mode "},
       { icon: <ExternalLinkIcon />, text:"Get Help "},
       { icon: <LogOutIcon />, text:"Logout "},
      ];
function Leftsection() {
    return( <div className="flex flex-col bg-black fixed top-0 bottom-0 w-[260px]">
       <div className="flex h-full min-h-0 flex-col">
        <div className="flex h-full w-full flex-1 items-start border-white/20">
            <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
                <a className="flex px-4 py-4 items-center gap-3 rounded-md text-white cursor-pointer border border-white/20 text-sm md-2 flex-shrink-0
                hover:bg-gray-500/20">

                    <PlusIcon />
                    New chat
                </a>
                <div className='flex-col flex-1 flex-overflow-y-auto border-b border-white/20'>

                </div>
                {options.map((item) => (
                    <a className='flex gap-3 px-3 py-3 rounded-md hover:bg-gray-500/20  items-center text-white  cursor-pointer' key={item.text}>
                        {item.icon}
                        {item.text}
                    </a>
                ))}
            </nav>
        </div>
       </div>
    
    </div>
    );
}

export default Leftsection;
