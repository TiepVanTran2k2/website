'use client';

import classNames from 'classnames';
import { Lexend, Roboto } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const lexend = Lexend({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

const cx = classNames;

export type Menu = {
    title: string;
    children?: string[];
};

export type InformationLink = {
    title: string;
    links: Menu[];
};

function LinkItem({ listLink }: { listLink: InformationLink }) {
    const [linksCurrent, setLinksCurrent] = useState(listLink.links.slice(0, 5));
    const [visibleLinksMobile, setVisibleLinksMobile] = useState(false);

    const AddMoreLinks = () => {
        const newLinks = [...listLink.links];
        setLinksCurrent(newLinks);
    };

    const ShortenLinks = () => {
        const newLinks = [...listLink.links.slice(0, 5)];
        setLinksCurrent(newLinks);
    };

    const OpenLinks = () => {
        setVisibleLinksMobile(!visibleLinksMobile);
    };
    return (
        <div
            className={cx(
                'mb-[24px] w-[23%]',
                'max-md:w-[48%]',
                'max-sm:mb-0 max-sm:w-[100%]',
                'border-b border-solid border-b-color-border',
                lexend.className,
            )}
        >
            <h1
                className={cx(
                    'mb-[8px] text-[15px] font-medium',
                    'flex items-center justify-between max-sm:mb-0 max-sm:py-[15px]',
                )}
            >
                {listLink.title}
                <div className={cx('sm:hidden')} onClick={OpenLinks}>
                    <FaChevronRight />
                </div>
            </h1>
            <ul
                className={cx(
                    roboto.className,
                    !visibleLinksMobile && 'max-sm:hidden',
                    visibleLinksMobile && 'max-sm:ml-2',
                )}
            >
                {linksCurrent.map((value, index) => (
                    <li key={index} className={cx('mb-[8px] hover:opacity-60')}>
                        <Link href={''} className={cx('flex items-center gap-2')}>
                            {value.title} {value.children && <FaChevronDown size={12} color="#000000" />}
                        </Link>
                    </li>
                ))}

                {listLink.links.length > 5 && linksCurrent.length <= 5 && (
                    <li
                        className={cx('cursor-pointer font-medium text-primary-500 hover:opacity-60')}
                        onClick={AddMoreLinks}
                    >
                        Xem thêm
                    </li>
                )}

                {linksCurrent.length > 5 && (
                    <li
                        className={cx('cursor-pointer font-medium text-primary-500 hover:opacity-60')}
                        onClick={ShortenLinks}
                    >
                        Thu gọn
                    </li>
                )}
            </ul>
        </div>
    );
}

export default LinkItem;
