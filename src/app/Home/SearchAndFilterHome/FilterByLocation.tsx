'use client';

import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';

import FilterWrapper from '@/components/FilterWrapper';

const listFilter = ['Tỉnh/Thành', 'Quận/Huyện', 'Phường/Xã', 'Đường/Phố', 'Dự án'];

const cx = classNames;

function FilterByLocation() {
    const renderResult = (attrs: any) => (
        <div
            className={cx('ml-[-12px] w-[350px] rounded-lg bg-color-white text-black shadow-lg')}
            tabIndex="-1"
            {...attrs}
        >
            <FilterWrapper>
                <div className={cx('px-[16px] pt-[16px]')}>
                    <span className={cx('font-medium')}>Khu vực & dự án</span>
                    <ul className={cx('mt-[12px]')}>
                        {listFilter.map((value, index) => (
                            <li
                                key={index}
                                className={cx(
                                    'mb-[12px] cursor-pointer border border-solid border-[#ccc]',
                                    'flex flex-1 items-center rounded px-[13px] py-[15px]',
                                )}
                            >
                                <span className={cx('flex-1')}> {value}</span>
                                <FaChevronDown />
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
                    <span className={cx('flex-1')}> Trên toàn quốc</span>
                    <FaChevronDown />
                </div>
            </Tippy>
        </div>
    );
}

export default FilterByLocation;
