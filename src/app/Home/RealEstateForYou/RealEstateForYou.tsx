'use client';

import { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

import RealEstateCard, { RealEstate } from './RealEstateCard';

const cx = classNames;

const RealEstates: RealEstate[] = [
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
    {
        title: 'Nhà mới 5 tầng 3PN, 150m2 DTSD ngay KĐT Geleximco D Lê trọng tấn, ra Aeon HĐ chỉ 8ph. Giá chỉ 3.1tỷ',
        price: '3,1 tỷ',
        area: '31m²',
        location: 'Thanh xuân, Hà nội',
        postTime: 'Đăng hôm nay',
        save: true,
    },
];

function RealEstateForYou() {
    const [realEstatesCurent, setRealEstatesCurrent] = useState(RealEstates);
    const [isBtnMore, setIsBtnMore] = useState(true);

    const handleAddMore = () => {
        const realEstatesCurentCoppied = [...realEstatesCurent];
        setRealEstatesCurrent([...realEstatesCurent, ...realEstatesCurentCoppied]);
        setIsBtnMore(false);
    };
    return (
        <div className={cx('flex w-full justify-center bg-[#FAFAFA] px-[32px] py-[40px]', 'max-sm:px-0')}>
            <div className={cx('w-[1140px]')}>
                {/* Title */}
                <div className={cx('mb-[24px] flex items-center justify-between', 'max-sm:mb-0 max-sm:px-[16px]')}>
                    <h1 className={cx('text-[24px] font-medium', 'max-sm:text-[20px]')}>Bất động sản dành cho bạn</h1>
                    <div className={cx('flex items-center gap-4', 'max-lg:hidden')}>
                        <Link href={''} className={cx('hover:text-color-text-secondnary')}>
                            Tin nhà đất bán mới nhất
                        </Link>
                        <span className={cx('h-4 w-[2px] bg-black')}></span>
                        <Link href={''} className={cx('hover:text-color-text-secondnary')}>
                            Tin nhà đất cho thuê mới nhất
                        </Link>
                    </div>
                </div>
                {/* esate real card */}
                <div className={cx('flex flex-wrap justify-between gap-y-[30px]', 'max-sm:gap-y-1')}>
                    {realEstatesCurent.map((value, index) => (
                        <RealEstateCard key={index} inforRealEstate={value} />
                    ))}
                </div>
                {/* btn More */}
                {isBtnMore && (
                    <div className={cx('mt-[24px] flex justify-center', 'hover:opacity-80')}>
                        <button
                            className={cx(
                                'flex items-center justify-center gap-1 py-[13px] font-semibold sm:w-[160px]',
                                'rounded-lg border border-solid border-[#ccc]',
                                'max-sm:px-[20px] max-sm:py-[5px]',
                            )}
                            onClick={handleAddMore}
                        >
                            Mở rộng <FaChevronDown />
                        </button>
                    </div>
                )}
                {/* look more */}
                {!isBtnMore && (
                    <div className={cx('mt-[24px] flex justify-center', 'hover:opacity-80')}>
                        <button
                            className={cx(
                                'flex w-[160px] items-center justify-center gap-1 py-[13px] font-semibold',
                                'rounded-lg border border-solid border-[#ccc]',
                                'max-sm:px-[20px] max-sm:py-[5px]',
                            )}
                        >
                            Xem tiếp <FaChevronDown />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RealEstateForYou;
