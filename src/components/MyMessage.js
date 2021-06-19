import React from 'react'

export default function MyMessage({ message }) {
    // console.log(message)
    if (message?.attachments?.length > 0) {
        return (
            <img src={message.attachments[0].file} alt="message-attachments" className="message-image" style={{ float: 'right' }} />
        )
    }


    return (
        <div className="message" style={{ float: "right", marginRight: '18px', background: '#3B2A50', color: 'white' }}>
            {message.text}
        </div>
    )
}
