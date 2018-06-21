import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { auth, googleProvider, gitHubProvider, faceBookProvider, twitterProvider } from './base'

class SignIn extends Component {
    state = {
        email: '',
    }

    handleChange = (ev) => {
        this.setState({ email: ev.target.value })
    }

    authenticate = (provider) => {
        auth.signInWithPopup(provider)
    }
    render() {
        return (
            <div className={`SignIn ${css(styles.signIn)}`}>
                <header className={css(styles.header)}>
                    <span className={css(styles.title)}>
                        <i className="fas fa-hashtag"></i>
                        Chatarang
          </span>
                </header>
                <main className={css(styles.main)}>
                    <form
                        className={css(styles.form)}
                    >
                        <h1>Welcome! Sign In</h1>
                        <button
                            type="button"
                            className={css(styles.button, styles.google)}
                            onClick={()=>this.authenticate(googleProvider)}
                        >
                            <i className={`fab fa-google ${css(styles.brandIcon)}`}></i>

                            Google
            </button>
                        <button
                            type="button"
                            className={css(styles.button, styles.github)}
                            onClick={() => this.authenticate(gitHubProvider)}
                        >
                            <i className={`fab fa-github ${css(styles.brandIcon)}`}></i>

                            GitHub
            </button>
                        <button
                            type="button"
                            className={css(styles.button, styles.facebook)}
                            onClick={() => this.authenticate(faceBookProvider)}
                        >
                            <i className={`fab fa-facebook-f ${css(styles.brandIcon)}`}></i>

                            Facebook
            </button>
                        <button
                            type="button"
                            className={css(styles.button, styles.twitter)}
                            onClick={() => this.authenticate(twitterProvider)}
                        >
                            <i className={`fab fa-twitter ${css(styles.brandIcon)}`}></i>

                            Twitter
            </button>
                    </form>

                    <div className="blurb">
                        <h2 className={css(styles.h2)}>You're in good company.</h2>
                        <p className={css(styles.p)}>Join the ones of people already using Chatarang!</p>
                    </div>
                </main>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    signIn: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        // backgroundColor: '#f6f6f6',
        backgroundImage: `url(https://images.unsplash.com/photo-1518965539400-77d851d65c43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8251a92a6aa331a81f1736c2311ed465&auto=format&fit=crop&w=933&q=80)`,
    },
    header: {
        //backgroundColor: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',

        height: '4rem',
        padding: '0 2rem',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    },
    title: {
        color: '#316d3f',
        fontWeight: 400,
        textTransform: 'uppercase',
        lineHeight: '80px',
        fontSize: '2rem',
    },
    main: {
        flex: 1,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        paddingBottom: '3rem',
    },
    form: {
        width: '40rem',
        height: '15rem',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 1px 1px rgba(0,0,0,.1)',
        marginBottom: '2rem',
        color: 'whitesmoke',
    },
    label: {
        display: 'block',
        textTransform: 'uppercase',
        color: '#999',
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
        ':focus': {
            outline: 0,
        },
    },
    h2: {
        fontWeight: 'normal',
        color: "white",
    },
    button: {
        display: 'inline-block',
        margin: '0 auto',
        padding: '1rem 2rem',
        fontSize: '1.2rem',
        borderRadius: '1rem',
        backgroundColor: 'rgb(49, 109, 63, 0.7)',
        color: 'white',
        width: '15rem',
        marginBottom: '1rem',
        marginRight: '1rem',

        transition: 'color 0.25s ease-out',

        // ':hover': {
        //     backgroundColor: 'rgb(0,0,0, 0.6)',
        //     cursor: 'pointer',
        // },
    },

    google: {
          ':hover': {
            cursor: 'pointer',
            //backgroundImage: `url(https://images7.alphacoders.com/909/909467.jpg)`,
            //backgroundSize: "cover",
            backgroundColor: "#EA4335",

        },
    },

    facebook: {
        ':hover': {
            cursor: 'pointer',
            backgroundColor: "rgb(59, 89, 152)",
        },
    },

    twitter: {
        ':hover': {
            cursor: 'pointer',
            backgroundColor: "rgb(29, 161, 242)",
        },
    },

    github: {
        ':hover': {
            cursor: 'pointer',
            backgroundColor: "rgb(0, 0, 0)",
        },
    },

    p: {
        color: "white",
    },

    brandIcon: {
        marginRight: '1rem',
    },
})
export default SignIn

