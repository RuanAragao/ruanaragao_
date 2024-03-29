import React from 'react';
import _ from 'lodash';

import components, {Layout, HeroHome} from '../components/index';

const styles = {
    marginTop: '100vh'
}

export default class Home extends React.Component {
    render() {
        return (
            <>
            <HeroHome />
            <Layout {...this.props} styleHome={styles}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let GetSectionComponent = components[_.get(section, 'component')];
                return (
                  <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
            </>
        );
    }
}
