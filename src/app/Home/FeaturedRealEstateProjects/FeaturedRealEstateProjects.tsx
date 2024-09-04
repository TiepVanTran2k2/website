'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

import RealEstateCard, { RealEstate } from './RealEstateCard';

const cx = classNames;

const RealEstates: RealEstate[] = [
    {
        title: 'Newtown Diamond Đà Nẵng',
        status: 'Đang mở bán',
        area: '31m²',
        location: 'Điện bàn Quảng Nam',
        image: require('@/assets/img/FeaturedNews/FeaturedNews1.jpg'),
    },
    {
        title: 'PiCity Sky Park',
        status: 'Đang cập nhật',
        area: '31m²',
        location: 'Ngủ hành sơn, Đà Nẵng',
        image: require('@/assets/img/FeaturedNews/FeaturedNews4.jpg'),
    },
    {
        title: 'Newtown Diamond Đà Nẵng',
        status: 'Đang mở bán',
        area: '31m²',
        location: 'Điện bàn Quảng Nam',
        image: require('@/assets/img/FeaturedNews/FeaturedNews3.jpg'),
    },
    {
        title: 'PiCity Sky Park',
        status: 'Đang cập nhật',
        area: '31m²',
        location: 'Ngủ hành sơn, Đà Nẵng',
        image: require('@/assets/img/FeaturedNews/FeaturedNews2.jpg'),
    },
    {
        title: 'Newtown Diamond Đà Nẵng',
        status: 'Đang mở bán',
        area: '31m²',
        location: 'Điện bàn Quảng Nam',
        image: require('@/assets/img/FeaturedNews/FeaturedNews5.jpg'),
    },
    {
        title: 'PiCity Sky Park',
        status: 'Đang cập nhật',
        area: '31m²',
        location: 'Ngủ hành sơn, Đà Nẵng',
        image: require('@/assets/img/FeaturedNews/FeaturedNews6.jpg'),
    },
    {
        title: 'Newtown Diamond Đà Nẵng',
        status: 'Đang mở bán',
        area: '31m²',
        location: 'Điện bàn Quảng Nam',
        image: require('@/assets/img/FeaturedNews/FeaturedNews1.jpg'),
    },
    {
        title: 'PiCity Sky Park',
        status: 'Đang cập nhật',
        area: '31m²',
        location: 'Ngủ hành sơn, Đà Nẵng',
        image: require('@/assets/img/FeaturedNews/FeaturedNews4.jpg'),
    },
];

function FeaturedRealEstateProjects() {
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
                    <h1 className={cx('text-[24px] font-medium', 'max-sm:text-[20px]')}>Dự án bất động sản nổi bật</h1>
                    <div
                        className={cx(
                            'flex cursor-pointer items-center gap-2 text-primary-500 hover:opacity-80',
                            'max-sm:hidden',
                        )}
                    >
                        Xem thêm <FaArrowRight />
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

export default FeaturedRealEstateProjects;
