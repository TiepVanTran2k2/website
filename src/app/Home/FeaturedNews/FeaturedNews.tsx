'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import Image from 'next/image';

const cx = classNames;

const listNews = ['Tin nổi bật', 'Tin tức', 'BĐS TPHCM', 'BĐS Hà Nội'];

const newsOrders = [
    'Thị Trường BĐS Tháng 7/2024: Nhu Cầu Thuê Trọ Tăng Mạnh',
    'Nhu Cầu Nhà Đất Bình Dương Tăng Nhiệt Trong Tháng 7/2024',
    'Batdongsan.com.vn Thông Báo Lịch Nghỉ Lễ Quốc Khánh 2/9/2024',
    'Thị Trường BĐS TP.HCM Tháng 7/2024: Khởi Sắc Ở Cả Mua Bán Và Cho Thuê',
    'Tìm Nhà Không Khó, Free Trọ 1 Năm Cùng Batdongsan.com.vn',
    'Tổng Hợp Dự Án Chung Cư Hà Nội Mở Bán Quý 3/2024',
];

const Images = [
    require('@/assets/img/FeaturedNews/FeaturedNews1.jpg'),
    require('@/assets/img/FeaturedNews/FeaturedNews2.jpg'),
    require('@/assets/img/FeaturedNews/FeaturedNews3.jpg'),
    require('@/assets/img/FeaturedNews/FeaturedNews4.jpg'),
    require('@/assets/img/FeaturedNews/FeaturedNews5.jpg'),
    require('@/assets/img/FeaturedNews/FeaturedNews6.jpg'),
];

function FeaturedNews() {
    const [typeNewsIndex, setTypeNewsIndex] = useState(0);

    const changeTypeNewsIndex = (index: number) => {
        setTypeNewsIndex(index);
    };
    return (
        <div className={cx('px-[32px] max-xl:w-full', 'max-sm:px-[16px]')}>
            <div className={cx('xl:w-[1140px]')}>
                <div className={cx('mb-[40px] flex')}>
                    <div className={cx('flex-1 lg:mr-[30px]')}>
                        {/* Filter Title */}
                        <div className={cx('mb-[24px] border-b sm:flex sm:justify-between')}>
                            <div className={cx('flex overflow-x-auto')}>
                                {listNews.map((value, index) => (
                                    <span
                                        key={index}
                                        className={cx(
                                            'group relative flex-none cursor-pointer px-[16px] py-[12px] text-[24px] font-medium',
                                            'text-color-text-secondnary hover:text-color-text',
                                            index === typeNewsIndex && '!text-color-text',
                                        )}
                                        onClick={() => changeTypeNewsIndex(index)}
                                    >
                                        {value}
                                        <div
                                            className={cx(
                                                'absolute left-0 mt-1 h-[3px] w-0 bg-primary transition-all duration-300',
                                                'group-hover:w-full',
                                                index === typeNewsIndex && 'w-full',
                                            )}
                                        ></div>
                                    </span>
                                ))}
                            </div>
                            <div
                                className={cx(
                                    'flex cursor-pointer items-center gap-2 text-primary-500 hover:opacity-80',
                                    'max-sm:hidden',
                                )}
                            >
                                Xem thêm <FaArrowRight />
                            </div>
                        </div>
                        {/* content */}
                        <div className={cx('flex', 'max-lg:hidden')}>
                            {/* main content */}
                            <div
                                className={cx(
                                    'mr-[30px] w-[458px] cursor-pointer font-medium',
                                    'text-color-text hover:text-color-text-secondnary',
                                )}
                            >
                                <Image
                                    src={Images[0]}
                                    alt={Images[0]}
                                    className={cx('mb-[16px] w-full rounded object-cover')}
                                />
                                <span className={cx('mb-[8px] block text-[24px]')}>
                                    Thị Trường BĐS Tháng 7/2024: Nhu Cầu Thuê Trọ Tăng Mạnh
                                </span>
                                <span className={cx('flex items-center gap-1 text-color-text-secondnary')}>
                                    <IoTimeOutline />
                                    17 giờ trước
                                </span>
                            </div>
                            {/* other news */}
                            <div className={cx('flex-1 text-[16px] text-color-text')}>
                                {newsOrders.map((value, index) => (
                                    <Link
                                        key={index}
                                        href={'#'}
                                        className={cx(
                                            'block cursor-pointer pb-[14px] hover:text-color-text-secondnary',
                                            'border-b border-solid border-b-color-border',
                                            index !== 0 && 'pt-[14px]',
                                        )}
                                    >
                                        {value}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* list News mobile */}
                        <div className={cx('flex-1 text-[16px] text-color-text')}>
                            {newsOrders.map((value, index) => (
                                <div
                                    key={index}
                                    className={cx(
                                        'flex py-[16px] lg:hidden',
                                        'border-b border-solid border-b-color-border',
                                    )}
                                >
                                    {/* Image */}
                                    <Link
                                        href={''}
                                        className={cx(
                                            'mr-[16px] h-[calc(33vw*255/458)] w-[33%]',
                                            'max-sm:h-[80px] max-sm:w-[142px]',
                                        )}
                                    >
                                        <Image
                                            src={Images[index]}
                                            alt={Images[index]}
                                            className={cx('h-full w-full rounded object-cover')}
                                        />
                                    </Link>
                                    {/* title */}
                                    <div className={cx('flex-1', 'flex flex-col')}>
                                        <Link
                                            href={'#'}
                                            className={cx(
                                                'block cursor-pointer font-medium hover:text-color-text-secondnary sm:mb-[12px]',
                                                'max-sm:text-[14px]',
                                            )}
                                        >
                                            {value}
                                        </Link>
                                        <div className={cx('max-sm:flex max-sm:flex-1 max-sm:items-end')}>
                                            <span
                                                className={cx(
                                                    'flex items-center gap-1 text-color-text-secondnary',
                                                    'max-sm:text-[12px]',
                                                )}
                                            >
                                                <IoTimeOutline />
                                                17 giờ trước
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* advertisement */}
                    <div className={cx('w-[250px]', 'max-lg:hidden')}>
                        <Link href={''}>
                            <Image
                                src={Images[1]}
                                alt={Images[1]}
                                className={cx('mb-[24px] h-[250px] w-[250px] rounded')}
                            />
                        </Link>
                        <Link href={''}>
                            <Image
                                src={Images[2]}
                                alt={Images[2]}
                                className={cx('mb-[24px] h-[250px] w-[250px] rounded')}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedNews;
