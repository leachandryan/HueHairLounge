import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import "../styles/app.css";


const POCdash = () => {
    const data = useStaticQuery(graphql`
    query {
        

        instagram: file(relativePath: { eq: "instagram.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                }
        }

        phone: file(relativePath: { eq: "phone.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                }
        }

        email: file(relativePath: { eq: "email.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }

        }
    `)
        return (
            <div id="POCdash">
                    
                
            
                <a href="https://www.instagram.com/huehairlounge/" className="minimumIconSize" target="Hue Hair Lounge Instagram" id="Instagram Logo">
                    <Img fluid={data.instagram.childImageSharp.fluid}
                        alt="Instagram"
                    />
                </a>
    
                <a href="mailto: huehairlounge@gmail.com" target="Email Ryan Leach" className="icon">
                    <Img fluid={data.email.childImageSharp.fluid}
                        alt="Email Icon"
                    /> 
                </a>
                
                <a href="tel:5129202901‬" target="Call Hue Hair Lounge" className="icon">
                    <Img fluid={data.phone.childImageSharp.fluid}
                        alt="Phone Call Icon"
                    />  
                </a>

            </div>
        )    
    }

export default POCdash

