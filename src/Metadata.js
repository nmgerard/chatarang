import React from 'react'

const Metadata = ({ message }) => {
  return (
    <div className="Metadata" style={styles.Metadata}>
      <div className="user" style={styles.user}>
        {message.user.userName}
      </div>
      <div className="time" style={styles.time}>
        1:10 PM
      </div>
    </div>
  )
}

const styles = {
  Metadata: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  }
}

export default Metadata