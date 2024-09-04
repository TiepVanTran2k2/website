'use client';

import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';
import { FaArrowRight } from 'react-icons/fa';

import FilterWrapper from '@/components/FilterWrapper';

const listFilter = [
    'Tất cả mức giá',
    'Dưới 500 triệu',
    '500-800 triệu',
    '800 triệu-1 tỷ',
    '1-2 tỷ',
    '2-3 tỷ',
    '3-5 tỷ',
    '5-7 tỷ',
    '7-10 tỷ',
    '10-20 tỷ',
    '20-30 tỷ',
    '30-40 tỷ',
    '40-60 tỷ',
    'Trên 60 tỷ',
    'Thỏa thuận',
];

const cx = classNames;

function FilterByPrice() {
    const renderResult = (attrs: any) => (
        <div
            className={cx('ml-[-12px] w-[300px] rounded-lg bg-color-white text-black shadow-lg')}
            tabIndex="-1"
            {...attrs}
        >
            <FilterWrapper>
                <div className={cx('px-[16px] pt-[16px]')}>
                    <div className={cx('mb-[16px] flex items-center justify-between')}>
                        <input className={cx('w-[108px] px-[16px] py-[6px] text-center')} placeholder="Từ" />
                        <FaArrowRight />
                        <input className={cx('w-[108px] px-[16px] py-[6px] text-center')} placeholder="Đến" />
                    </div>
                    <input type="range" className={cx('w-full')} maxLength={60000} minLength={0} />

                    <ul className={cx('mt-[12px] max-h-[250px] overflow-auto')}>
                        {listFilter.map((value, index) => (
                            <li
                                key={index}
                                className={cx(
                                    'cursor-pointer',
                                    'flex flex-1 items-center rounded px-[16px] py-[6px]',
                                    'hover:bg-primary-100',
                                )}
                            >
                                <span className={cx('flex-1')}> {value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </FilterWrapper>
        </div>
    );

    return (
        <div className={cx('flex flex-1')}>
            <Tippy interactive offset={[12, 8]} placement="bottom-start" render={renderResult} trigger="click">
                <div
                    className={cx(
                        'cursor-pointer border border-solid border-white',
                        'flex flex-1 items-center rounded px-[11px] py-[5px]',
                    )}
                >
                    <span className={cx('flex-1')}> Mức giá</span>
                    <FaChevronDown />
                </div>
            </Tippy>
        </div>
    );
}

export default FilterByPrice;
