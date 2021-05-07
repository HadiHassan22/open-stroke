import React from 'react'
import allLocales from './locales'
import allThemes from './themes'

import {
  Assignment,
  Business,
  ChromeReaderMode,
  Web,
  GetApp,
  InfoOutlined,
  People,
  Security,
  Slideshow,
  CallToAction,
  Whatshot,
  Chat,
  AccountBox as AccountBoxIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  FormatTextdirectionRToL as RTLIcon,
  FormatTextdirectionLToR as LTRIcon,
  Language as LanguageIcon,
  Lock as LockIcon,
  MenuOpen as MenuOpenIcon,
  SettingsApplications as SettingsIcon,
  Style as StyleIcon,
} from '@material-ui/icons'

const getMenuItems = (props) => {
  const {
    intl,
    updateLocale,
    locale,
    themeContext,
    menuContext,
    a2HSContext,
    firebaseApp,
    auth: authData,
  } = props

  const { isAuthMenuOpen, isDesktop, isMiniSwitchVisibility, toggleThis } =
    menuContext || {}
  const { isRTL, setThemeID, themeID, toggleThisTheme } = themeContext || {}
  const { isAppInstallable, isAppInstalled, deferredPrompt } = a2HSContext || {}

  const { auth } = authData || {}
  const { isGranted = () => false, isAdmin = false } = auth || {}

  const localeItems = allLocales.map((l) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: l.locale }),
      onClick: () => {
        updateLocale(l.locale)
        if (!isAuthorised) {
          try {
            window.location.reload()
          } catch (error) {}
        }
      },
      leftIcon: <LanguageIcon />,
    }
  })

  const isAuthorised = auth.isAuthenticated

  const themeItems = allThemes.map((t) => {
    return {
      value: undefined,
      visible: true,
      primaryText: intl.formatMessage({ id: t.id }),
      onClick: () => {
        setThemeID(t.id)
      },
      leftIcon: <StyleIcon style={{ color: t.color }} />,
    }
  })

  const handleSignOut = () => {
    toggleThis('isAuthMenuOpen', false)
    firebaseApp.auth().signOut()
    localStorage.clear()
  }

  if (isAuthMenuOpen) {
    return [
      {
        value: '/my_account',
        primaryText: intl.formatMessage({
          id: 'my_account',
          defaultMessage: 'My Account',
        }),
        leftIcon: <AccountBoxIcon />,
      },
      {
        value: '/signin',
        onClick: isAuthorised ? () => handleSignOut() : () => {},
        visible: true,
        primaryText: isAuthorised
          ? intl.formatMessage({ id: 'sign_out' })
          : intl.formatMessage({ id: 'sign_in' }),
        leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
      },
    ]
  }
  return [
    {
      value: '/signin',
      onClick: isAuthorised ? () => handleSignOut() : () => {},
      visible: !isAuthorised,
      primaryText: isAuthorised
        ? intl.formatMessage({ id: 'sign_out' })
        : intl.formatMessage({ id: 'sign_in' }),
      leftIcon: isAuthorised ? <ExitToAppIcon /> : <LockIcon />,
    },
    {value: '/predict',
    visible: true,
    primaryText: 'Predict',
    leftIcon: <img src='predict.svg' alt='predict' style={{maxHeight:25, maxWidth:25}}/>
  },
    {
      value: '/',
      visible: true,
      primaryText: intl.formatMessage({
        id: 'landing_page',
        defaultMessage: 'Landing Page',
      }),
      leftIcon: <Web />,
    },
    {
      value: '/dashboard',
      visible: isAuthorised,
      primaryText: intl.formatMessage({
        id: 'dashboard',
        defaultMessage: 'Dashboard',
      }),
      leftIcon: <DashboardIcon />,
    },
    {
      value: '/about',
      visible: true,
      primaryText: intl.formatMessage({ id: 'about', defaultMessage: 'About' }),
      leftIcon: <InfoOutlined />,
    },
    {
      visible: isAppInstallable && !isAppInstalled,
      onClick: () => {
        deferredPrompt.prompt && deferredPrompt.prompt()
      },
      primaryText: intl.formatMessage({
        id: 'install',
        defaultMessage: 'Install',
      }),
      leftIcon: <GetApp />,
    },
  ]
}
export default getMenuItems
