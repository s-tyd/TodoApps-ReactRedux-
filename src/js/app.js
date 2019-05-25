class Header extends React.Component {
    render() {
        return (
            <header className='header'>受信箱</header>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>&copy; 2018 s-tyd Project</footer>
        )
    }
}

class SideArea extends React.Component {
    render() {
        return (
            <div className='side-area'></div>
        )
    }
}

class MainArea extends React.Component {
    render() {
        return (
            <div className='main-area'>
                <Header />
                <Footer />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className='wrap'>
                <SideArea />
                <MainArea />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);