import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />

                    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/images/favicon/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />

                    <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,400,400i,700,700i" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'post') &&  
                    _.get(this.props, 'pageContext.frontmatter.canonical_url') && 
                    <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')}/>
                    }
                </Helmet>
                <div id="page" className={'site style-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_style') + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                  <Header {...this.props} />
                  <div id="content" className="site-content" style={this.props.styleHome}>
                    <div className="inner">
                      <main id="main" className="site-main">
                        {this.props.children}
                      </main>
                      <Footer {...this.props} />
                    </div>
                  </div>
                </div>
            </React.Fragment>
        );
    }
}
