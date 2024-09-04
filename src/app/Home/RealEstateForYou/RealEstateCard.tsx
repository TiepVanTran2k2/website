'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { CiLocationOn, CiHeart } from 'react-icons/ci';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import FeatureNew1 from '@/assets/img/FeaturedNews/FeaturedNews6.jpg';

const cx = classNames;

export type RealEstate = {
    title: string;
    price: string;
    area: string;
    location: string;
    postTime: string;
    save?: boolean;
    image?: string;
};

function RealEstateCard({ inforRealEstate }: { inforRealEstate: RealEstate }) {
    return (
        <Link
            href={''}
            className={cx(
                'relative overflow-hidden rounded bg-color-white shadow-md sm:h-[318px] sm:w-[262px]',
                'max-xl:!w-[30%]',
                'max-lg:!w-[46%]',
                'max-sm:!w-[100%] max-sm:p-[16px]',
                'transition-all hover:translate-y-[-1px] hover:opacity-80 hover:shadow-lg',
            )}
        >
            <Image
                src={FeatureNew1}
                alt={FeatureNew1.toString()}
                className={cx(
                    'h-[calc(100%-142px-12px-16px)] w-full rounded object-cover',
                    'max-sm:absolute max-sm:top-[72px] max-sm:h-[90px] max-sm:w-[120px]',
                    'transform filter transition duration-300 ease-in-out hover:scale-[1.05] hover:blur-none sm:blur-[0.5px]',
                )}
            />
            {/* information */}
            <div className={cx('mx-[16px] mb-[16px] mt-[12px]', 'max-sm:m-0')}>
                <span
                    title={inforRealEstate.title}
                    className={cx('overflow-hidden text-ellipsis font-medium', 'max-sm:mb-[12px]')}
                    style={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        display: '-webkit-box',
                    }}
                >
                    {inforRealEstate.title}
                </span>
                <div className={cx('max-sm:pl-[136px]')}>
                    <div className={cx('mt-[4px] flex gap-6 text-[16px] font-medium text-primary-500')}>
                        <span>{inforRealEstate.price}</span>
                        <span>{inforRealEstate.area}</span>
                    </div>
                    <div className={cx('mt-[4px] flex items-center gap-1')}>
                        <CiLocationOn size={16} />
                        <span>{inforRealEstate.location}</span>
                    </div>
                    <div className={cx('mt-[16px] flex items-center justify-between')}>
                        <span className={cx('text-[12px] text-color-text-secondnary')}>{inforRealEstate.postTime}</span>
                        <Tippy content="Bấm để lưu tin">
                            <div className={cx('rounded border border-solid border-[#ccc] p-[6px]')}>
                                <CiHeart size={16} />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RealEstateCard;
