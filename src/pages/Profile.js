import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {
    const [userInfo, setUserInfo] = useState({})
    const token = localStorage.getItem("token")

    const getProfileInfo = async (e) => {
        e.preventDefault()
        try {

            const config = {
                headers : {
                    Authorization : "Bearer " + token.toString()
                }
            }
            const {data, status} = await axios.get("http://localhost:9000/user", config)
            if (status === 200) {
                setUserInfo(data.user)
                console.log(data.user)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProfileInfo()
    }, [])

    return (
        <div>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.email}</h1>
        </div>
    );
};

export default Profile;