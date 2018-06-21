import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Emoji } from 'emoji-mart'

const Reaction = ({ message, emoji, addReaction }) => {
  return (
    <button
      className={css(styles.button)}
      onClick={() => addReaction(message, emoji)}
    >
      <Emoji emoji={emoji} size={16} />
      <span className={css(styles.count)}>
        {message.reactions[emoji].length}
      </span>
    </button>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #eee',
    outline: 0,
    borderRadius: '8px',
    padding: '0.125rem 0.25rem',
    marginRight: '0.25rem',
    marginBottom: '0.25rem',
    color: '#999',
    cursor: 'pointer',
    backgroundColor: "transparent",

    ':hover': {
      backgroundColor: 'rgba(49,109,63, 0.3)',
      border: '1px solid rgb(49,109,63)',
      color: 'rgb(49,109,63)',
    },
  },

  count: {
    marginLeft: '0.25rem',
    fontSize: '0.6rem',
  },
})

export default Reaction