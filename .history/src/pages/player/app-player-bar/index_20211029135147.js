import React, { memo } from 'react'

import { PlayerBarWrapper } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content">Hello</div>
            </PlayerBarWrapper>
            
        
    )
})