import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return (
        <div className="MessageList" style={styles.MessageList}>
            <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                <h3 style={styles.h3}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            {
                props.messages.map(msg => (
                    <Message key={msg.id} message={msg} />
                ))
            }
        </div>
    )
}

const styles = {
    MessageList: {
        // backgroundColor: "white",
        backgroundImage: `url(https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-0.3.5&s=9c03a31650c01e877b240fd3a1b3960e&auto=format&fit=crop&w=1950&q=80)`,
        flex: 1,
        paddingBottom: "1rem",
        overFlowY: "scroll",
    },

    roomAnnouncement: {
        padding: "2rem 1rem",

    },

    h3: {
        fontSize: "1.5rem",
    },
}

export default MessageList