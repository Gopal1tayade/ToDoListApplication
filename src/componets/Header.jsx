

const Header = () => {
    const currentDate = new Date();
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const day = currentDate.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    const formattedDate = `${weekday}, ${day} ${month}`;
    return(
        <>
        <nav className="w-full  m-10 flex justify-between items-center">
            <div className="ml-24">
                <h1 className="text-white text-3xl font-bold">My Day</h1>
                <p className="text-amber-400 text-lg">{formattedDate.toString()}</p>
            </div>
            <div>
                <ul className="flex w-80 justify-around text-white font-bold cursor-pointer mr-20 text-lg">
                    <li>My Diary</li>
                    <li>Futre Task</li>
                </ul>
            </div>
           
        </nav>
        </>
    )
}

export default Header;