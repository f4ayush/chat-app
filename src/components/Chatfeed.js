
import React from 'react'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

export default function Chatfeed(props) {
    const { chats, activeChat, messages, userName } = props
    const chat = chats && chats[activeChat]
    const renderReadReceipt = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }} />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key]
            const isMyMessage = userName === message.sender.username
            const lastMessageKey = index === 0 ? null : keys[index - 1]

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipt(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }
    // console.log(props)

    if (!chat) return ('Loading....')
    return (
        <div>
            <div className="chat-feed">
                <div className="chat-title-container">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map(person => ` ${person.person.username}`)}
                </div>
                {renderMessages()}
                <div style={{ height: "100px" }} />
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
            </div>
        </div>
    )
}
