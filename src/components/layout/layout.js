import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { useKonami } from 'react-konami-code';
import { ResetCSS, GlobalStyle, themes } from '../styles';
import Header from '../header';
import Footer from '../footer';
import { useDarkMode } from './useDarkMode';
import { animateOnScroll } from '../../utils/isVisible';

const variants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`;

const easterEgg = () => {
  import('emojisplosion').then(({ emojisplosions }) => {
    const { cancel } = emojisplosions({
      emojiCount: 35,
      physics: {
        gravity: 0.25,
        initialVelocities: {
          rotation: {
            max: 45,
            min: -45
          },
          x: {
            max: 17,
            min: -17
          },
          y: {
            max: 14,
            min: -21.7
          }
        }
      }
    });

    setTimeout(cancel, 15000);
  });
};

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useDarkMode();

  useKonami(easterEgg, { code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13] });

  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <ThemeProvider theme={themes[theme || 'light']}>
      <ResetCSS />
      <GlobalStyle />
      <StyledContainer>
        <Header location={location} onChangeTheme={setTheme} theme={theme} />
        <motion.main key={location} variants={variants} initial='initial' animate='enter'>
          {children}
        </motion.main>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired
};

export default Layout;
