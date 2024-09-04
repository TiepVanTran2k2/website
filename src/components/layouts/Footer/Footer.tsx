'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhoneCall } from 'react-icons/fi';
import { MdSupportAgent } from 'react-icons/md';
import { GiLifeSupport } from 'react-icons/gi';
import { IoIosSend } from 'react-icons/io';
import Image from 'next/image';

const cx = classNames;

const logoImg = require('@/assets/img/logo/logoTextRight.png');
const appStoreImg = require('@/assets/img/footer/app_store.png');
const googlePlayImg = require('@/assets/img/footer/google-play.png');
const facebookImg = require('@/assets/img/footer/facebook.png');
const youtubeImg = require('@/assets/img/footer/youtube.png');
const instagramImg = require('@/assets/img/footer/instagram.png');

type FooterLink = { title: string; link: string };

const instructionLinks: FooterLink[] = [
    { title: 'Về chúng tôi', link: '' },
    { title: 'Báo giá và hỗ trợ', link: '' },
    { title: 'Câu hỏi thường gặp', link: '' },
    { title: 'Góp ý báo lỗi', link: '' },
    { title: 'Sitemap', link: '' },
];

const ruleLinks: FooterLink[] = [
    { title: 'Quy định đăng tin', link: '' },
    { title: 'Quy chế hoạt động', link: '' },
    { title: 'Điều khoản thỏa thuận', link: '' },
    { title: 'Chính sách bảo mật', link: '' },
    { title: 'Giải quyết khiếu nại', link: '' },
];

function Footer() {
    return (
        <footer className={cx('flex justify-center bg-color-border')}>
            <div className={cx('px-[32px] py-[40px]')}>
                <div className={cx('flex justify-between text-color-text xl:w-[1140px]', 'max-lg:flex-wrap')}>
                    {/* logo, location,phone call, app download */}
                    <div
                        className={cx(
                            'pr-[16px] font-medium lg:w-[33.33%]',
                            'items-center gap-x-8 max-lg:mb-10 max-lg:flex max-lg:flex-wrap',
                        )}
                    >
                        {/* logo */}
                        <Link href={'/'}>
                            <Image src={logoImg} alt={logoImg} className={cx('h-[68px] w-auto lg:mb-[32px]')} />
                        </Link>
                        <div className={cx('max-sm:mt-[12px]')}>CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM </div>
                        {/* locaion*/}
                        <div className={cx('mt-[12px] flex items-center gap-2')}>
                            <IoLocationOutline size={34} />
                            Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội
                        </div>
                        {/* phone call */}
                        <div className={cx('mt-[12px] flex items-center gap-2')}>
                            <FiPhoneCall size={24} />
                            (024) 3562 5939 - (024) 3562 5940
                        </div>{' '}
                        {/*app download */}
                        <div className={cx('mt-[40px] flex items-center gap-4', 'max-lg:mt-[12px]')}>
                            <Link href={'/'}>
                                <Image src={appStoreImg} alt={appStoreImg} className={cx('h-[35px] w-auto')} />
                            </Link>
                            <Link href={'/'}>
                                <Image src={googlePlayImg} alt={googlePlayImg} className={cx('h-[35px] w-auto')} />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('lg:w-[66.66%]', 'max-lg:w-full')}>
                        {/* hotline, Hỗ trợ khách hàng, chăm sóc khách hàng */}
                        <div className={cx('mb-[32px] flex lg:*:h-[68px]', 'max-sm:flex-wrap')}>
                            <Link
                                href={''}
                                className={cx('flex w-[25%] items-center gap-4', 'max-sm:mb-2 max-sm:w-full')}
                            >
                                <FiPhoneCall size={32} />
                                <div>
                                    <span className={cx('block text-[12px] font-light')}>Hotline</span>
                                    <span className={cx('block font-medium')}>1900 1881</span>
                                </div>
                            </Link>
                            <Link
                                href={''}
                                className={cx('flex w-[33%] items-center gap-4', 'max-sm:mb-2 max-sm:w-full')}
                            >
                                <MdSupportAgent size={32} />
                                <div>
                                    <span className={cx('block text-[12px] font-light')}>Hỗ trợ khách hàng</span>
                                    <span className={cx('block font-medium')}>trogiup.batdongsan.com.vn</span>
                                </div>
                            </Link>
                            <Link
                                href={''}
                                className={cx('flex w-[41%] items-center gap-4', 'max-sm:mb-2 max-sm:w-full')}
                            >
                                <GiLifeSupport size={32} />
                                <div>
                                    <span className={cx('block text-[12px] font-light')}>Chăm sóc khách hàng</span>
                                    <span className={cx('block font-medium')}>hotro.batdongsan.com.vn</span>
                                </div>
                            </Link>
                        </div>

                        {/* Hướng dẫn, Qui định, Đăng ký nhận tin, Social Media */}
                        <div className={cx('flex flex-wrap sm:gap-2')}>
                            {/* Hướng Dẫn */}
                            <div className={cx('w-[25%]', 'max-sm:w-[49%]')}>
                                <h1 className={cx('font-medium')}>HƯỚNG DẪN</h1>
                                <ul className={cx('mt-[12px]')}>
                                    {instructionLinks.map((value, index) => (
                                        <li key={index}>
                                            <Link href={value.link} className={cx('mb-[12px] block hover:opacity-80')}>
                                                {value.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Qui định*/}
                            <div className={cx('w-[25%]', 'max-sm:w-[49%]')}>
                                <h1 className={cx('font-medium')}>QUI ĐỊNH</h1>
                                <ul className={cx('mt-[12px]')}>
                                    {ruleLinks.map((value, index) => (
                                        <li key={index}>
                                            <Link href={value.link} className={cx('mb-[12px] block hover:opacity-80')}>
                                                {value.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Đăng ký nhận tin, Social Media*/}
                            <div className={cx('max-sm:mt-10')}>
                                <h1 className={cx('font-medium')}>ĐĂNG KÝ NHẬN TIN</h1>
                                <div className={cx('mb-[24px] mt-[12px]')}>
                                    <div
                                        className={cx(
                                            'relative w-[300px] overflow-hidden rounded-lg border border-solid border-[#ccc]',
                                        )}
                                    >
                                        <input
                                            placeholder="Nhập email của bạn"
                                            className={cx('h-full w-full border-none py-[13px] pl-[15px] pr-[40px]')}
                                        />
                                        <div
                                            className={cx(
                                                'absolute right-[8px] top-[50%] translate-y-[-50%] rounded bg-primary-500 p-1',
                                                'cursor-pointer hover:opacity-80',
                                            )}
                                        >
                                            <IoIosSend size={20} color="#fff" />
                                        </div>
                                    </div>
                                </div>
                                <h1 className={cx('font-medium')}>SOCIAL MEDIA</h1>
                                <div className={cx('mt-[12px] flex gap-4')}>
                                    <Link href={''} className={cx('hover:opacity-80')}>
                                        <Image src={facebookImg} alt={facebookImg} className={cx('h-8 w-auto')} />
                                    </Link>
                                    <Link href={''} className={cx('hover:opacity-80')}>
                                        <Image src={youtubeImg} alt={youtubeImg} className={cx('h-8 w-auto')} />
                                    </Link>
                                    <Link href={''} className={cx('hover:opacity-80')}>
                                        <Image src={instagramImg} alt={instagramImg} className={cx('h-8 w-auto')} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
