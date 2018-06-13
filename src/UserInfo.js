import React from 'react'

import SignOut from './SignOut'
import Avatar from './Avatar'

const UserInfo = ({user}) => {
    return (
        <div className="UserInfo" style={styles.UserInfo}>

        <Avatar user={user} style={styles.Avatar}/>

         <div className="user" style={styles.user}>
                {user.userName}
         </div>
         <SignOut />
        </div>
    )
}

const styles = {
    UserInfo: {
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        padding: '0 1rem',
    },

    Avatar: {
        marginRight: "0.5rem",
    },

    user: {
        flex: 1,
    },
}

export default UserInfo