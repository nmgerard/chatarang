import React, { Component } from 'react'

import Message from './Message'

class MessageList extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.messages.length < this.props.messages.length) {
            this.scrollToBottom()
        }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        const { messages, room } = this.props

        return (
            <div className="MessageList" style={styles.MessageList}>
                <div className="roomAnnouncement" style={styles.roomAnnouncement}>
                    <h3 style={styles.h3}>#{room.displayName}</h3>
                    {
                        room.dm
                        ? <p>This is the beginning of the direct message.</p>
                        : <p>This is the beginning of the #{room.displayName} room.</p>
                    }
                </div>
                {
                    messages.map(msg => (
                        <Message key={msg.id} message={msg} addReaction={this.props.addReaction}/>
                    ))
                }
                <div ref={el => this.messagesEnd = el}></div>
            </div>
        )
    }
}

const styles = {
    MessageList: {
        backgroundImage: `url(https://images.unsplash.com/photo-1504204267155-aaad8e81290d?ixlib=rb-0.3.5&s=9c03a31650c01e877b240fd3a1b3960e&auto=format&fit=crop&w=1950&q=80)`,
        flex: 1,
        paddingBottom: "1rem",
        overflowY: "scroll",
    },
    roomAnnouncement: {
        padding: "2rem 1rem 10rem",

    },
    h3: {
        fontSize: "1.5rem",
    },
}

export default MessageList