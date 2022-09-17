import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import siteConfig from '../../data/siteConfig';
import { withPrefix } from 'gatsby';
import loadable from '@loadable/component';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';

const Layout = loadable(() => import('../components/layout'));

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0, 0, 0, 0.51);
  ${({ theme }) => {
    if (theme.colors.background !== siteConfig.background_color) {
      return 'filter: brightness(0.8);';
    }
  }}
`;

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`;

const Contributions = ({ className, location }) => (
  <Layout location={location}>
    <Hero heroImg={withPrefix('/images/contributions')} title="Projects I've Worked On" />
    <Wrapper className={className}>
      <Container className='page-content' fluid>
        <Row>
          {siteConfig.contributions.map(job => (
            <Col key={job.description} align='center'>
              <JobCard as={job.url ? 'a' : 'div'} href={job.url} target='_blank'>
                <Image src={withPrefix(job.image)} />
                <p>{job.description}</p>
              </JobCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

const StyledContributions = styled(Contributions)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

export default StyledContributions;
export const Head = () => <SEO title="Projects I've Worked On" keywords={siteConfig.keywords} />;
