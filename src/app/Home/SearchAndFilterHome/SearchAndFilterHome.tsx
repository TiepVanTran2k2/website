'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';

import FilterTypeOfLand from './FilterTypeOfLand';
import FilterByLocation from './FilterByLocation';
import FilterByPrice from './FilterByPrice';
import FilterByArea from './FilterByArea';
import FilterMore from './FilterMore';

const listTypeProduct = ['Nhà đất bán', 'Nhà đất cho thuê', 'Dự án'];
const listFilter = [''];

const cx = classNames;
function SearchAndFilterHome() {
    const [typeProductIndex, setTypeProductIndex] = useState(0);

    const ChangeTypeProduct = (index: number) => {
        setTypeProductIndex(index);
    };

    return (
        <div
            className={cx(
                'absolute left-[50%] top-[32px] h-20 w-[945px] translate-x-[-50%] rounded',
                'max-lg:w-[calc(100%-64px)]',
                'max-md:hidden',
            )}
        >
            <ul className={cx('flex gap-1')}>
                {listTypeProduct.map((product, index) => (
                    <li
                        key={index}
                        className={cx(
                            'cursor-pointer rounded-t bg-primary-200 px-[24px] py-[6px]',
                            index === typeProductIndex && '!bg-lime-700/95 text-color-white',
                            'hover:bg-lime-700/95 hover:text-color-white',
                        )}
                        onClick={() => ChangeTypeProduct(index)}
                    >
                        {product}
                    </li>
                ))}
                <li className={cx('flex-1 rounded-t bg-primary-200')}></li>
            </ul>
            <div className={cx('rounded-b bg-lime-700/95 p-[16px]')}>
                <div className={cx('flex overflow-hidden rounded-lg bg-color-white')}>
                    {/* DropDown Loại nhà đất */}
                    <FilterTypeOfLand />
                    {/*input Search */}
                    <div className={cx('relative flex flex-1 py-[14px] pl-[12px] pr-[128px]')}>
                        <input placeholder="Dự án Shunshine" className={cx('flex-1 border-none')} />

                        {/* btn Search */}
                        <button
                            className={cx(
                                'flex items-center gap-2 rounded bg-primary-500 px-[11px] py-[5px] font-medium text-color-white',
                                'absolute right-[12px] top-[50%] translate-y-[-50%]',
                                'hover:opacity-80',
                            )}
                        >
                            <FaSearch />
                            Tìm kiếm
                        </button>
                    </div>
                </div>

                {/* filter */}
                <div
                    className={cx(
                        'mt-5 flex flex-wrap justify-between gap-4 text-color-white',
                        'max-lg:grid max-lg:grid-cols-2 max-lg:gap-2',
                    )}
                >
                    <FilterByLocation />
                    <FilterByPrice />
                    <FilterByArea />
                    <FilterMore />
                    <div className={cx('flex items-center justify-end max-lg:col-start-2')}>
                        <button className={cx('flex gap-1 rounded px-2 hover:bg-lime-900 max-lg:py-1')}>
                            <BsArrowRepeat size={20} /> <span className={cx('lg:hidden')}>Đặt lại</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchAndFilterHome;
