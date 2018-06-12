import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'shmi',
                    body: 'hi',
                },
                {
                    id: 2,
                    userName: 'ngerard',
                    body: 'hey wassup',
                },
            ]
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(),
            userName: 'Jieun',
            body,
        })
            this.setState({ messages })
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

export default Chat