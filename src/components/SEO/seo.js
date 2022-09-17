import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../data/siteConfig';

function SEO({ description, keywords, title }) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={siteConfig.authorName} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {keywords.length > 0 && <meta name='keywords' content={keywords.join(', ')} />}
    </>
  );
}

SEO.defaultProps = {
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
