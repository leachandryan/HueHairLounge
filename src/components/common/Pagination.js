import React from 'react'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className="pagination" role="navigation">
            <div>
                {previousPagePath && (

                    <AniLink paintDrip to={previousPagePath} rel="prev">
                            Previous
                    </AniLink>

                )}
            </div>
            {numberOfPages > 1 && <div className="pagination-location">Page {humanPageNumber} of {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <AniLink paintDrip to={nextPagePath} rel="next">
                            Next
                    </AniLink>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
