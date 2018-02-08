import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Info from './Info'
import JoinUs from './JoinUs'
import Members from './Members/Members';
import Search from './Search'
import Contact from './Contact'

const App = () =>
    <div>
        <Header />
        <Search/>
        <Members />
        <Info />
        <JoinUs />
        <Contact/>
        <Footer />
    </div>
export default App