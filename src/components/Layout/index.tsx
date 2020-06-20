import React from 'react'

import { Grid } from './styles'

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'
import ChannelData from '../ChannelData'
import ChannelMessage from '../ChannelMessage'


const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <ChannelData />
            <UserList />
            <UserInfo />
        </Grid>
    )
}

export default Layout