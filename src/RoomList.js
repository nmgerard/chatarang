import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'
import RoomForm from './RoomForm'

import base from './base'

class RoomList extends Component {
    state = {
        rooms: {},
    }

    componentDidMount() {
        base.syncState(
            'rooms',
            {
                context: this,
                state: 'rooms'
            }
        )
    }
    addRoom = (room) => {
        const rooms = { ...this.state.rooms }
        rooms[room.name] = room
        this.setState({ rooms })
    }
    render() {
        return (

            <nav
                className={`RoomList ${css(styles.nav)}`}
            >
                <div className={css(styles.heading)}>
                    <h2 className={css(styles.h2)}>Rooms</h2>
                    <button
                        className={css(styles.button)}
                        onClick={this.showRoomForm}
                    >
                        <i className="fas fa-plus-circle" title="Add room"></i>
                    </button>
                </div>

                <ul className={css(styles.list)}>
                    {
                        Object.keys(this.state.rooms).map(roomName => (
                            <RoomLink
                                key={roomName}
                                room={this.state.rooms[roomName]}
                                loadRoom={this.props.loadRoom}
                            />
                        ))
                    }
                </ul>

                {/* <form>
                        <input 
                        type="text" 
                        name="roomName" 
                        className={css(styles.input)}
                        placeholder="Enter room name..."/>
                {/* <input type="submit" value="Submit" /> */}
                {/* </form>
            <button type="submit" className={css(styles.add)}>add room</button> */}

            </nav>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        padding: '0 1rem',
    },

    h2: {
        fontSize: '1rem',
    },

    list: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
        paddingBottom: "1rem",
    },

    heading: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      button: {
        border: 0,
        backgroundColor: 'transparent',
        outline: 0,
        padding: 0,
        fontSize: '1rem',
        color: 'rgba(255,255,255, 0.4)',
        cursor: 'pointer',
        transition: 'color 0.25s ease-out',
    
        ':hover': {
          color: 'white',
        }
      },

    // add: {
    //     display: 'block',
    //     margin: '0 auto',
    //     padding: '.5rem 1rem',
    //     fontSize: '1rem',
    //     borderRadius: '1rem',
    //     backgroundColor: '#316d3f',
    //     color: 'whitesmoke',
    //     width: '10rem',
    //     font: "sans-serif",

    //     '::before': {
    //         content: '" "',
    //     },

    //     ':hover': {
    //         backgroundColor: 'rgba(255, 255, 255, 0.2)',
    //     }
    // },

    // input: {
    //     display: 'block',
    //     margin: '0 auto',
    //     flex: 1,
    //     width: '10rem',
    //     fontSize: '1rem',
    //     border: 0,
    //     marginBottom: ".5rem",
    //     padding: ".5rem .15rem",
    //     borderRadius: '1rem',
    //     backgroundColor: "rgba(255, 255, 255, 0.2)",
    //     color: "whitesmoke",
    //     font: "sans-serif",

    //     ':focus': {
    //         outline: 0,
    //     },
    //     '::placeholder': {
    //         color: "whitesmoke",
    //         fontSize: "1rem",
    //         font: "sans-serif",
    //     }
    // },
})

export default RoomList