import React, { useState, useEffect, useCallback } from 'react'
import GitHubButton from 'react-github-btn'
import './Header.css'
import Toggle from './Toggle'
import { keepTheme } from '../utils/theme'

function Header() {
  const theme = localStorage.getItem('theme');
  const [togClass, setTogClass] = useState('dark');

  const callback = useCallback((theme) => {
    setTogClass(theme);
  }, [setTogClass]);

  useEffect(() => {
    keepTheme();
    const storedTheme = localStorage.getItem('theme');
    setTogClass(storedTheme);
  }, [togClass]);

  return (
    <div className="header">
      <h1>
        Emoji Search <span role="img" aria-label="Cat Emoji">😼</span>
      </h1>
      <p>
        A simple emoji search tool made with ReactJS.
      </p>
      <p className="github">
        <GitHubButton
          href="https://github.com/lrmn7/emoji-search"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="false"
          aria-label="Star LRMN/react-emoji-search on GitHub"
        >
          Star
        </GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/lrmn7/emoji-search/fork"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-repo-forked"
          data-size="large"
          data-show-count="false"
          aria-label="Fork LRMN/react-emoji-search on GitHub"
        >
          Fork
        </GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton
          href="https://github.com/sponsors/lrmn7/"
          data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`}
          data-icon="octicon-heart"
          data-size="large"
          data-show-count="false"
          aria-label="Donate LRMN/react-emoji-search on GitHub"
        >
          Sponsor
        </GitHubButton>
      </p>

      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">
          Switch to your preferred theme.
        </p>
      </div>
    </div>
  );
}

export default Header;
