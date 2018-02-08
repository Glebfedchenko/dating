import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import {connect} from 'react-redux'
import OnlineCarousel from './Onlinecarousel'
import NewCarousel from './Newcarousel'
import toggleOpen from '../../decorators/toggleOpen'

class Members extends Component {
    filteredByNew = (member) => { return member.new === true }
    fiterByOnline = (member) => { return member.online === true }

    render() {
        const {members, active, toggle} = this.props
        const newMembers = members.filter(this.filteredByNew).map((m) =>
            <img key={m.id} className='img-responsive' src={m.make_display} />
        )
        const onlineMembers = members.filter(this.fiterByOnline).map((m) =>
            <img key={m.id} className='img-responsive' src={m.make_display} />
        )
        return (
            <section className='memberssection'>
                <div className="container text-center" id='memberButtonsContainer'>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6 text-right">
                        <a className={active ? 'onlineMembers' : 'newMembers'} onClick={toggle}>New Members</a>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 text-left">
                        <a className={active ? 'newMembers' : 'onlineMembers'} onClick={toggle}>Online Members</a>
                    </div>
                </div>
                <div className="container" id='carousels'>
                    {active ? <NewCarousel members ={newMembers}/> : <OnlineCarousel members={onlineMembers}/>}
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    members:state.members
})


export default connect(mapStateToProps)(toggleOpen(Members));