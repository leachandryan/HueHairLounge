import React from 'react'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"
/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ data, navClass }) => (
    <>
        {data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <AniLink className={navClass}  paintDrip to={navItem.url} key={i}>{navItem.label}</AniLink>
            } else {
                return <AniLink className={navClass}  paintDrip to={navItem.url} key={i}>{navItem.label}</AniLink>
            }
        })}
    </>
)

Navigation.defaultProps = {
    navClass: `site-nav-item`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
