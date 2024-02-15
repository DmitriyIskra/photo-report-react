import styles from './css/style.module.css';

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import Logo from '../components/logo/Logo';
import Social from '../components/social/wrapper/Social';
import Insta from '../components/social/insta/Insta';
import Youtube from '../components/social/youtube/Youtube';
import Telegram from '../components/social/telegram/Telegram';
import Faceboock from '../components/social/faceboock/Faceboock';
import Phone from '../components/phone/wrapper/Phone';
import IconPhone from '../components/phone/icon/Icon';
import NumberPhone from '../components/phone/number/Number';

export default function Layout() {
  return (
    <>
        <header>
            <div className={styles['header__block-top']}>
              <div className={styles.content}>
                <div className={styles['logo-city']}>
                  <Logo />
                </div>
                <div className={styles['social-phone']}>
                  <Social>
                    <Insta />
                    <Youtube />
                    <Telegram />
                    <Faceboock />
                  </Social>

                  <Phone>
                    <IconPhone atr='header' />
                    <NumberPhone atr='header' num='+998 458 254 45' />
                  </Phone>
                </div>
              </div>
            </div>
            <div className={styles['header__block-bottom']}>
              
            </div>
        </header>

            <Outlet />

        <footer>

        </footer>
    </>
    
  )
}
