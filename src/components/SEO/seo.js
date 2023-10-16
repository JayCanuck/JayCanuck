import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../data/siteConfig';

function SEO({ title }) {
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={siteConfig.siteDescription} />
      {siteConfig.keywords && siteConfig.keywords.length > 0 && (
        <meta name='keywords' content={siteConfig.keywords.join(', ')} />
      )}
      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={siteConfig.siteUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={siteConfig.siteDescription} />
      <meta property='og:image' content={siteConfig.siteUrl + siteConfig.authorAvatar} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content={siteConfig.siteUrl} />
      <meta name='twitter:creator' content={siteConfig.authorName} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={siteConfig.siteDescription} />
      <meta name='twitter:image' content={siteConfig.siteUrl + siteConfig.authorAvatar} />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired
};

export default SEO;
