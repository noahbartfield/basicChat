import React, { useState, useEffect } from 'react'

const ChatWindow = () => {
    const [chat, setChat] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = (message) => {
        setChat(`${chat} \n ${message}`)
    }

    useEffect(() => {
        if (message !== '') {
            setMessage(message)
        }
        const splitAndReversedChat = chat.split('').reverse()
        if (splitAndReversedChat[0] === '?') {
            console.log('question')
            if (message.includes(('how' || 'How') && 'does')) {
                console.log('it just does')
                setChat(`${chat} \n it just does`)
            } else if (message.includes('how' || 'How')) {
                setChat(`${chat} \n fine`)
            } else if (message.includes(Number)) {
                setChat(`${chat} \n ${Number + 10}`)
            } else {
                setChat(`${chat} \n yes`)
            }
        }
    }, [message, chat])

    return (
        <>
            <input
                type='text'
                onChange={({ target: { value } }) => setMessage(value)}
                id='message'
            />
            <button onClick={() => sendMessage(message)}>send</button>

            <textarea
                cols="20"
                rows='15'
                value={chat}
                id='chat'
            />
        </>
    )

}

export default ChatWindow