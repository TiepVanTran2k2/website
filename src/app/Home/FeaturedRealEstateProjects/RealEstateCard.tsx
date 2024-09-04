'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { CiLocationOn, CiHeart } from 'react-icons/ci';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';

const cx = classNames;

enum Status {
    OnSaleNow = 'Đang mở bán',
    Updating = 'Đang cập nhật',
}

export type RealEstate = {
    title: string;
    status: string;
    area: string;
    location: string;
    image: string;
};

function RealEstateCard({ inforRealEstate }: { inforRealEstate: RealEstate }) {
    const StatusComponent = ({ status }: { status: string }) => {
        if (status.startsWith(Status.OnSaleNow)) {
            return (
                <div title={status} className={cx('rounded-full bg-green-200 px-2 py-[2px] text-green-600')}>
                    {inforRealEstate.status}
                </div>
            );
        }

        if (status.startsWith(Status.Updating)) {
            return (
                <div title={status} className={cx('rounded-full bg-gray-200 px-2 py-[2px] text-gray-500')}>
                    {inforRealEstate.status}
                </div>
            );
        }
        return (
            <div title={inforRealEstate.title} className={cx('mb-[4px] block font-medium')}>
                {inforRealEstate.status}
            </div>
        );
    };
    return (
        <Link
            href={''}
            className={cx(
                'relative overflow-hidden rounded bg-color-white shadow-md sm:w-[262px]',
                'max-xl:!w-[30%]',
                'max-lg:!w-[46%]',
                'max-sm:!w-[100%] max-sm:p-[16px]',
                'transition-all hover:translate-y-[-1px] hover:opacity-80 hover:shadow-lg',
            )}
        >
            <Image
                src={inforRealEstate.image}
                alt={inforRealEstate.image}
                className={cx(
                    'h-[136px] w-full rounded object-cover',
                    'max-sm:absolute max-sm:top-[51px] max-sm:h-[90px] max-sm:w-[120px]',
                    'transform filter transition duration-300 ease-in-out hover:scale-[1.05] hover:blur-none sm:blur-[0.5px]',
                )}
            />
            {/* information */}
            <div className={cx('mx-[16px] mb-[16px] mt-[12px] text-color-text', 'max-sm:m-0')}>
                {/* status */}
                <div className={cx('mb-[4px] flex text-[12px] font-semibold', 'max-sm:hidden')}>
                    <StatusComponent status={inforRealEstate.status} />
                </div>
                <span
                    title={inforRealEstate.title}
                    className={cx('mb-[4px] block text-[16px] font-semibold leading-[24px]', 'max-sm:mb-[12px]')}
                >
                    {inforRealEstate.title}
                </span>
                <div className={cx('max-sm:flex max-sm:h-[90px] max-sm:flex-col max-sm:pl-[136px]')}>
                    {/* status */}
                    <div className={cx('mb-[4px] flex text-[12px] font-semibold', 'sm:hidden')}>
                        <StatusComponent status={inforRealEstate.status} />
                    </div>
                    <div className={cx('mb-[4px] font-medium text-primary-500')}>
                        <span>{inforRealEstate.area}</span>
                    </div>
                    <div className={cx('flex items-end', 'max-sm:flex-1')}>
                        <div className={cx('flex items-center gap-x-1', 'max-sm:flex-1')}>
                            <CiLocationOn size={16} />
                            <span>{inforRealEstate.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RealEstateCard;
