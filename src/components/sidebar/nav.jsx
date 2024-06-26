import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const Nav = function (props) {
  // eslint-disable-next-line react/prop-types
  // const { navStatus } = props;
  const { pathname } = useLocation();

  const [isMenuActive, setIsMenuActive] = useState(false);

  const falseMenuHandler = () => {
    setIsMenuActive(false);
  };
  // navStatus(isMenuActive);

  // console.log(pathname);

  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     color: isActive ? '#07c514' : '#fff',
  //     fill: isActive ? '#07c514' : '#fff',
  //   };
  // };

  return (
    <nav className="">
      <div className="lg:flex flex-col justify-center rounded-7 bg-sup w-max pt-20 pb-20 lg:pr-10 md:pr-6 lg:pl-10 md:pl-6  gap-4 duration-500 border-1 border-sub group hover:flex dark:bg-mainOpacity dark:text-white dark:border-primary dark:border-1 hidden sm:hidden md:block transition-all duration-[2000ms] dark:transition-all dark:duration-[2000ms]">
        <div className="my-4 transition transition-all duration-[2000ms]">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2  font-josefin-sans transition transition-all duration-500 hover:text-primary iconing"
            to="/home"
          >
            {/* <span className="material-symbols-rounded">home</span> */}

            {/* alternative code for icon */}
            {/* <HomeIcon
              className={`${
                pathname === '/home'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary'
              }  `}
            /> */}

            {/* // normal thing */}
            <HomeIcon
              className={classNames(
                pathname === '/home'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary'
              )}
            />
            <span
              className={`${
                pathname === '/home' ? 'text-primary' : ''
              } hidden transition-all duration-[2000ms]  group-hover:flex  hover:text-primary `}
            >
              Home
            </span>
          </NavLink>
        </div>

        <div className="my-4 transition transition-all duration-500">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2 font-josefin-sans transition transition-all duration-500 hover:text-primary"
            to="/skills"
          >
            {/* <i className="material-icons material-icons-round"> */}
            {/* integration_instructions */}
            {/* </i> */}
            <IntegrationInstructionsIcon
              className={classNames(
                pathname === '/skills'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary'
              )}
            />
            <span
              className={`${
                pathname === '/skills' ? 'text-primary' : ''
              } hidden group-hover:flex`}
            >
              Skills
            </span>
          </NavLink>
        </div>
        <div className="my-4 transition transition-all duration-500">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2 font-josefin-sans transition transition-all duration-500 hover:text-primary"
            to="/works"
          >
            {/* <i className="material-icons material-icons-round">work</i> */}
            <WorkspacesIcon
              className={classNames(
                pathname === '/works'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary'
              )}
            />
            <span
              className={`${
                pathname === '/works' ? 'text-primary' : ''
              } hidden group-hover:flex`}
            >
              Works
            </span>
          </NavLink>
        </div>
        <div className="my-4 transition transition-all duration-500">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2 font-josefin-sans transition transition-all duration-500 hover:text-primary"
            to="/side-project"
          >
            {/* <i className="material-icons material-icons-round">workspaces</i> */}
            <WorkspacePremiumIcon
              className={classNames(
                pathname === '/side-project'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary '
              )}
            />
            <span
              className={`${
                pathname === '/side-project' ? 'text-primary' : ''
              } hidden group-hover:flex`}
            >
              Side project
            </span>
          </NavLink>
        </div>
        <div className="my-4 transition transition-all duration-500">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2 font-josefin-sans transition transition-all duration-500 hover:text-primary"
            to="/about-me"
          >
            {/* <i className="material-icons material-icons-round">person</i> */}
            <PersonIcon
              className={classNames(
                pathname === '/about-me'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white hover:text-primary'
              )}
            />
            <span
              className={`${
                pathname === '/about-me' ? 'text-primary' : ''
              } hidden group-hover:flex`}
            >
              About me
            </span>
          </NavLink>
        </div>
        <div className="my-4 transition transition-all duration-500">
          <NavLink
            className="flex items-center text-base no-underline gap-3.5 text-lg ml-2 font-josefin-sans transition  transition-all duration-500 group hover:text-primary"
            to="/contact-me"
          >
            {/* <i className="material-icons material-icons-round">email</i> */}
            <ContactPageIcon
              className={classNames(
                pathname === '/contact-me'
                  ? ' text-primary'
                  : 'iconFill-secondary text-white group hover:text-primary'
              )}
            />
            <span
              className={`${
                pathname === '/contact-me' ? 'text-primary' : ''
              } hidden group-hover:flex`}
            >
              Contact me
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

{
  /* <div className={classes["nav__container---box"]}>
  <NavLink
    className={classes["nav__container---box--link"]}
    style=""
    to="/home"
  >
    <i className="material-icons material-icons-round">home</i>
    <i className="fa fa-bullseye nav__container---box--icon"></i>
    <span className={classes["nav__container---box--name"]}>Home</span>
  </NavLink>
</div>; */
}
