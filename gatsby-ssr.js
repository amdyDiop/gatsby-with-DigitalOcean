/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import * as React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script type="text/javascript" src="/every-page.js" key="every-page-js" defer></script>,
        <script
            src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.5/dist/fancybox.umd.js"
            integrity="sha256-B34QrPZs5i0CQ3eqywkXHKIWw8msfAVH30RWj/i+dMo="
            crossOrigin="anonymous"
            key="fancybox-js"
            defer
        ></script>,
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0.5/dist/fancybox.css"
            integrity="sha256-WIieo0WFPkV7kcA2lQ4ZCO5gTg1Bs/SBX5YzEB4JkyM="
            crossOrigin="anonymous"
            key="fancybox-css"
        ></link>,
    ])
}