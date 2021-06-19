import React from 'react'

export default function TheirMessage({ lastMessage, message }) {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    return (
        <div className='message-row'>
            {
                isFirstMessageByUser &&
                <div className='message-avatar' style={{ backgroundImage: `url(${message?.sender?.avatar})` }} />
            }

            {
                (message?.attachments?.length > 0) ?
                    <img src={message.attachments[0].file} alt="message-attachments" className="message-image" style={{ float: 'right' }} />
                    :
                    <div className="message" style={{ float: "right", marginRight: '18px', background: '#3B2A50', color: 'white' }}>
                        {message.text}
                    </div>
            }

        </div>
    )
}
