import React, { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

export default function MessageForm(props) {
    const [value, setvalue] = useState('')
    const { chatId, creds } = props
    const handleSubmit = (event) => {
        event.preventDefault()
        const text = value.trim()
        if (text.length > 0) sendMessage(creds, chatId, { text })
        setvalue('')
    }

    const handleChange = (event) => {
        setvalue(event.target.value)
        isTyping(props, chatId)
    }
    const handleUplaod = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }
    return (
        <div>
            <form className='message-form' onSubmit={handleSubmit}>
                <input className='message-input' placeholder='send a message' type="text" onSubmit={handleSubmit} onChange={handleChange} value={value} name="" id="" />
                <label htmlFor="upload-button">
                    <span className='image-button'>
                        <PictureOutlined className='picture-icon' />
                    </span>
                </label>
                <input type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={handleUplaod}
                />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
                </button>
            </form>
        </div>
    )
}
