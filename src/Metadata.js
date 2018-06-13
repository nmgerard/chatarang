import React from 'react'

import Message from './Message'

const Metadata = (props) => {
    return (
        <div className="Metadata" style={styles.Metadata}>
            <div class="user" style={styles.user}>{props.message.userName}</div>
            <div class="time" style={styles.time}> 1:10 PM </div>
        </div>
    )
}

const styles = {
    Metadata: {
        display: "flex",
        alignItems: "baseline",
    },

    user: {
        fontWeight: "bold",
        marginRight: "0.5rem",
    },

    time: {
        color: "#999",
        fontSize: "0.8rem",
    }
}

export default Metadata