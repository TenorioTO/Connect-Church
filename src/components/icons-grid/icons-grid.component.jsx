import React from 'react';


import './icons-grid.styles.scss';

const IconsGrid = () => (
    <div className="icons-container">
        <div className="icon_bbb" id='icon_1'>
            <div className="icon_layer">
                <div className="icon_text">
                    <h2>Belong</h2>
                    <p>
                        You were not made to be alone! <br/>
                        Here you can connect to others. <br/>
                        Connect is a community where 
                        you can belong even before you believe.
                    </p>
                </div>
            </div>
        </div>
        <div className="icon_bbb" id='icon_2' >
            <div className="icon_layer">
                <div className="icon_text">
                    <h2>Believe</h2>
                    <p>
                        We don’t expect people to believe or to behave in particular ways to belong here. 
                        Our intention is to help people connect to God and to meet Him in a real way.  
                        We believe that through a growing relationship with Jesus, people will come to 
                        know and to believe in God and in His word.
                    </p>
                </div>
            </div>
        </div>
        <div className="icon_bbb" id='icon_3' >
            <div className="icon_layer">
                <div className="icon_text">
                    <h2 id='become'>Become</h2>
                    <p>
                        Life with God is not boring or tasteless. 
                        Through a friendship with Jesus and fellowship 
                        with each other we will see transformation 
                        happening in and through our lives. Through this
                        process we find our purpose and we become part 
                        of the work that Jesus is doing the world.  In
                        this way we go and make the difference, 
                        inviting others to know God too. 
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default IconsGrid;