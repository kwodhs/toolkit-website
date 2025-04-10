import React, { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './toolbox-header.css';
import users from '../../login-form/database/users.json';

function ToolBoxHeader () {
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
        setUserName(user.name);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000); 
    
        return () => clearTimeout(timer);
      }, []);

    const logout = () => {
        setUserName(null);
        localStorage.removeItem('user');
        navigate('../../login-form');
    };
    
    return (
        <div className="toolbox-header">
            <div className="marquee">
                <p>Welcome back, {userName}</p>
            </div>
            <div className='toolbox-infographics-and-buttons-container'>
                <div className='toolbox-buttons-container'>
                <button className="button" onClick={logout}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                            fill="currentColor"
                        />
                        <path
                            d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                </div>
            </div>
        </div>
    )
}

export default ToolBoxHeader;

