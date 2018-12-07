import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        console.log(Component)
        console.log("111")
        let pageProps = {}

        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props
    
        return (
          <Container>
            <Head>
                <title>Moviepick - The Best Selected Movies Around the World</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component {...pageProps} />
          </Container>
        )
    }
}

export default MyApp