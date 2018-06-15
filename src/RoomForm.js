import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

class RoomForm extends Component {
  state = {
    room: {
        name: '',
        description: ''
    },
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addRoom(this.state.room)
    this.props.hideRoomForm()
  }

  handleChange = (ev) => {
    const room = {...this.state.room}
    room[ev.target.name] = ev.target.value
    this.setState({ room })
  }

  render() {
    return (
      <div className={`RoomForm ${css(styles.roomForm)}`}>
        <main className={css(styles.main)}>
          <h2 className={css(styles.title)}></h2>
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <p>
              <label htmlFor="name" className={css(styles.label)}>
                Room Name
              </label>
              <input
                type="text"
                name="name"
                value={this.state.room.name}
                className={css(styles.input)}
                onChange={this.handleChange}
                autoFocus
              />
            </p>
            <p>
              <label htmlFor="description" className={css(styles.label)}>
                Description
              </label>
              <input
                type="text"
                name="description"
                value={this.state.room.description}
                className={css(styles.input)}
                onChange={this.handleChange}
              />
            </p>
            <div className={css(styles.buttonContainer)}>
              <button
                type="button"
                className={css(styles.button, styles.cancel)}
                onClick={this.props.hideRoomForm}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={css(styles.button)}
              >
                Create Room
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
  //  backgroundColor: '#f6f6f6',
  //backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
    backgroundImage: `url(https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eda6f34a3343980b50f2ba298103093f&auto=format&fit=crop&w=1895&q=80)`
  },

  title: {
    color: 'whitesmoke',
    backgroundColor: "rgba(255,255,255, 0.4",
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
    marginBottom: '2rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    //backgroundColor: 'transparent',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    paddingBottom: '2rem',
    marginTop: '7rem',
    color: "whitesmoke",
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: "whitesmoke",
    //color: '#999',
  },

  input: {
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: 'rgb(250, 250, 250, 0.6)',


    ':focus': {
      outline: 0,
    },
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: 'rgb(49, 109, 63, 0.7)',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,

    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
        backgroundColor: 'rgb(49,109,63)',
    }
  },

  cancel: {
    backgroundColor: 'rgb(250, 250, 250, 0.6)',
    color: '#666',

    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
        backgroundColor: 'rgb(150,31,31)',
        color: "white",
    }
  },
})

export default RoomForm