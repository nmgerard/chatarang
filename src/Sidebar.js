import React from 'react'

import UserInfo from './UserInfo'
import RoomList from './RoomList'

const Sidebar = ({user, signOut}) => {
  return (
    <aside
      className="Sidebar"
      style={styles.Sidebar}
    >
      <UserInfo user={user} signOut={signOut} />
      <h1
        style={{
          ...styles.children,
          ...styles.h1,
        }}
      >
        XTBC 18
      </h1>
      <RoomList />
    </aside>
  )
}

const styles = {
  Sidebar: {
    // backgroundColor: '#316d3f',
    backgroundImage: `url(https://images.unsplash.com/photo-1519120693210-d47b03b31d77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3b8d462021896b6a8825629fb69a04b4&auto=format&fit=crop&w=1537&q=80)`,
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
  },
}

export default Sidebar