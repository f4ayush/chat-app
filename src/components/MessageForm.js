import React, { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'

export default function MessageForm(props) {
    const [value, setvalue] = useState('')
    const { chatId, creds } = props
    const handleSubmit = (event) => {
        event.preventDefault()
        const text = value.trim()
        if (text.length > 0) sendMessage(creds, chatId, { text })
    }

    const handleChange = (event) => {
        setvalue(event.target.value)
        isTyping(props, chatId)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={value} name="" id="" />
            </form>
        </div>
    )
}
