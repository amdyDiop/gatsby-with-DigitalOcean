import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as DemoStyles from "./static-files-demo.module.css"


const StaticFilesDemo = () => (
    <Layout>
        <Seo title="Static Files Demo" />
        <h1 className={DemoStyles.headerText}>Static Files Demo</h1>

        <section  className={'demo row around-xs  ' + DemoStyles.container}>
            <h2 className="col-xs-12">Static Image Files Demo</h2>

            <figure  className="image-demo col-xs-10 col-sm-5">
                <StaticImage data-fancybox
                    src="../gatsby-static-files-tutorial-assets-main/images/jujutsu-kaisen-satoru-gojo-anime-1259613-1280x0.jpeg"
                    width={1000}
                    quality={90}
                    alt="Underwater view of clear, blue body of water"
                />
                <figcaption>
                    Photo by{" "}
                    <a target="_blank" rel="noreferrer noopener" href="https://unsplash.com/@cristianpalmer">
                        Cristian Palmer
                    </a>
                </figcaption>
            </figure>

            <figure  className="image-demo col-xs-10 col-sm-5">
                <StaticImage data-fancybox
                    src="../gatsby-static-files-tutorial-assets-main/images/Naruto-and-Sasuke.jpg"
                    width={1000}
                    quality={90}
                    alt="Overhead view of a turtle floating over blue water"
                />
                <figcaption>
                    Photo by{" "}
                    <a target="_blank" rel="noreferrer noopener" href="https://unsplash.com/@ruizra">
                        Randall Ruiz
                    </a>
                </figcaption>
            </figure>
        </section>
    </Layout>
)

export default StaticFilesDemo