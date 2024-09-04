'use client';

import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';

import MenuHeader from './Menu';
import Action from './Action/Action';

const cx = classNames;

const isUser = true;

function Header() {
    const [isMenu, setIsMenu] = useState(false);

    const handleClickMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <header
            className={cx(
                '!fixed left-0 z-20 h-[64px] w-full bg-color-white px-[15px] py-[17px] shadow-lg',
                'relative flex items-center justify-between',
            )}
        >
            <button onClick={handleClickMenu} className={cx('xl:hidden', isMenu && 'invisible')}>
                <IoMdMenu size={20} />
            </button>
            <div className={cx('flex items-center gap-4')}>
                {/* Logo */}
                <Link href={'/'}>
                    <Image src={require('@/assets/img/logo/logoTextRight.png')} alt="logo" height={60} />
                </Link>

                {/* Menu */}
                <MenuHeader isMenu={isMenu} isUser={isUser} setIsMenu={setIsMenu} />
            </div>

            {/* Action */}
            <Action isUser={isUser} />
        </header>
    );
}

export default Header;
