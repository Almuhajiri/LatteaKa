import React from 'react'

import './styles.css'
import IMAGES from '../../configs/images'

export default class FloatButtonWhatsapp extends React.Component {
    render() {
        return (
            <>
                <div className="fixed-action-btn horizontal hover-to-toggle" style={{ bottom: '45px', right: '24px' }}>
                    <a className="btn-floating btn-large red">
                        <img src={IMAGES.floatButton} />
                    </a>
                    <ul>
                        <li><p>Whatapps</p></li>
                    </ul>
                </div>

            </>
        )
    }
}