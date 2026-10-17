import React, { useContext } from 'react'
import { ThemeChange } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

const Card = () => {
    const [theme, setTheme] = useContext(ThemeChange)

    const changeTheme = () => {
        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        console.log(theme);
    }
    return (
        <div className={theme}>
            <div className='m-5 p-2 border-1 border-lime-800 rounded-xl w-100'>
                <div className='flex justify-between'>
                    <div>
                        <h6 className=''>User Profile</h6>
                    </div>
                    <div className='flex'>
                        <Sun onClick={changeTheme} />
                        <Moon onClick={changeTheme} />
                    </div>
                </div>
                <h1 className='text-2xl font-bold'>Navya</h1>
                <h6>About me:</h6>
                <p>Hi, I’m Bhoomi Arora, a BCA graduate and passionate web developer with experience in building responsive and interactive web applications. My technical skills include HTML, CSS, JavaScript, React.js, Node.js, Express.js, and databases. I enjoy solving problems, learning new technologies, and building practical projects. I’m looking forward to growing as a developer and contributing to real-world projects with a collaborative team.</p>
            </div>
        </div>
    )
}

export default Card
