import React from 'react'
import Avatar from './Avatar'

import Metadata from './Metadata'

const Message = (props) => {
    return (
        <div className="Message"
        style={styles.Message}>
         <Avatar />
         <Metadata message={props.message} />
            {/* {props.message.userName}:  */}
            <div style={styles.MessageDetails}>{props.message.body}</div>
        </div>
    )
}

const styles = {
    Message: {
        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem",
      },

      MessageDetails: {
        flex: "1",
        paddingLeft: "0.5rem",
        // color: "red",
      }
      
}

export default Message