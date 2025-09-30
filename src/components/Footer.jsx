import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '../assets/github-icon.svg';
import LinkedInIcon from '../assets/linkedin-icon.svg';
import FileIcon from '../assets/file-icon.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="grid gap-5 border-t-1 border-c1blue/20 pt-8">
      <div className="flex justify-between max-md:grid max-md:gap-5">
        <ul className="self-start space-y-1 text-p-s -mx-2 *:text-c1blue">
          <li>
            <Link to="sobre" className="py-1 px-2">
              sobre.
            </Link>
          </li>
          <li>
            <Link to="user/" className="py-1 px-2">
              minha área.
            </Link>
          </li>
        </ul>
        <div className="grid place-items-end gap-2 max-md:place-items-start">
          <p className="text-p-s text-c1blue">desenvolvido por aggxb.</p>
          <ul className="flex gap-6">
            <li>
              <a href="https://github.com/aggxb" target="_blank">
                <img src={GitHubIcon} alt="Icon GitHub" className="size-10" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aggxb/" target="_blank">
                <img
                  src={LinkedInIcon}
                  alt="Icon LinkedIn"
                  className="size-10"
                />
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1qm2F27NJFXrfsoSqB2YS18DpjnFVCRMa/view?usp=sharing"
                target="_blank"
              >
                <img src={FileIcon} alt="Icon File" className="size-10" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Link
        to="/"
        className="py-1 px-2 -mx-2 max-w-max text-p-l text-c2blue place-self-center"
      >
        raterate. {year}
      </Link>
    </footer>
  );
};

export default Footer;
