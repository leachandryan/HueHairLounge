import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/


const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast">
                                   
                                </div>
                                
                            </div>
                            
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                    <AniLink paintDrip to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </AniLink>
                                </div> 
                               
                            <nav className="site-nav">
                           
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                   
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-mast-right">
                                <a className="site-nav-item" href={ `https://www.facebook.com/huehairlounge` } target="Hue Hair Lounge Facebook" rel="noopener noreferrer">
                                    <img className="site-nav-icon" src="/images/facebook.png" alt="Facebook" />
                                </a>
                                <a className="site-nav-item" href={ `https://www.instagram.com/huehairlounge/` } target="Hue Hair Lounge Instagram" rel="noopener noreferrer">
                                    <img className="site-nav-icon" src="/images/instagram.png" alt="Instagram" />
                                </a>
                                <a className="site-nav-item" href={ `https://www.google.com/maps/place/Hue+Hair+Lounge/@29.760748,-95.774673,16z/data=!4m5!3m4!1s0x0:0x603791769c211548!8m2!3d29.7607477!4d-95.7746732?hl=en-US` } target="Hue Hair Lounge Location" rel="noopener noreferrer">
                                    <img className="site-nav-icon" src="/images/location.png" alt="Google Maps Directions" />
                                </a>

                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <AniLink paintDrip to="/">{site.title}</AniLink> © 2017
                            </div>
                            <div className="site-foot-nav-right">
                                <p className="footer-text">Built and Maintained By:</p>
                                <a className="bioLink" href={ `https://employthisguy.com/` } target="Ryan Leach's Website" rel="noopener noreferrer"><img id="bioPic" src="/images/me1.png" alt="Ryan Leach, The web developer" />
                                </a>
                                <p className="footer-text">Please contact for technical issues!</p>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}


const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                instagram: file(relativePath: { eq: "instagram.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                        }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
