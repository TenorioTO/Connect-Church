import React from 'react';
import { Link } from 'react-router-dom'
import './feeds.styles.scss';


const Feeds = () => (
    <div className='feeds'>
        <div className='f-title'>
            <h1>Title</h1>
            <hr />
        </div>
        {/* 1 */}
        <div className="f-container">
            <figure>
                <img 
                    src='https://images.unsplash.com/photo-1589451907336-7531424d8d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                    alt='figure' />
                <figcaption><h3>Some Title to be added</h3></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laborum nemo labore repellat cumque totam quibusdam molestiae tempore eius vero. 
                Vitae totam deleniti placeat quos, incidunt ipsa at. Exercitationem, facilis architecto.
            </p>
            <Link to='/' className='f-link'>
                Read
            </Link>
        </div>
        {/* 2 */}
        <div className="f-container">
            <figure>
                <img 
                    src='https://images.unsplash.com/photo-1589411454940-9a5ef32721cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                    alt='figure' />
                <figcaption><h3>Some Title to be added</h3></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laborum nemo labore repellat cumque totam quibusdam molestiae tempore eius vero. 
                Vitae totam deleniti placeat quos, incidunt ipsa at. Exercitationem, facilis architecto.
            </p>
            <Link to='/' className='f-link'>
                Read
            </Link>
        </div>
        {/* 3 */}
        <div className="f-container">
            <figure>
                <img 
                    src='https://images.unsplash.com/photo-1589417353569-2a4678b7e6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                    alt='figure' />
                <figcaption><h3>Some Title to be added</h3></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laborum nemo labore repellat cumque totam quibusdam molestiae tempore eius vero. 
                Vitae totam deleniti placeat quos, incidunt ipsa at. Exercitationem, facilis architecto.
            </p>
            <Link to='/' className='f-link'>
                Read
            </Link>
        </div>

        {/* 4 */}
        <div className="f-container">
            <figure>
                <img 
                    src='https://images.unsplash.com/photo-1589422186235-ea103dde3126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                    alt='figure' />
                <figcaption><h3>Some Title to be added</h3></figcaption>
            </figure>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Laborum nemo labore repellat cumque totam quibusdam molestiae tempore eius vero. 
                Vitae totam deleniti placeat quos, incidunt ipsa at. Exercitationem, facilis architecto.
            </p>
            <Link to='/' className='f-link'>
                Read
            </Link>
        </div>
    </div>
);

export default Feeds;