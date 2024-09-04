'use client';

import classNames from 'classnames';
import { BsHouses } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';

import FilterWrapper from '@/components/FilterWrapper';

const cx = classNames;

type TypeOfLand = {
    title: string;
    new?: boolean;
};

const listTypeOfLand: TypeOfLand[] = [
    { title: 'Căn hộ chung cư' },
    { title: 'Chung cư mini, căn hộ dịch vụ ', new: true },
    { title: 'Chà riêng' },
    { title: 'Nhà biệt thự liền kề' },
    { title: 'Nhà mặt phố' },
    { title: 'Shophouse, nhà phố thương mại' },
    { title: 'Đất nền dự án' },
    { title: 'Đất' },
    { title: 'Rrang trại, khu nghĩ dưỡng' },
    { title: 'Condotel' },
    { title: 'Kho, nhà xưởng' },
    { title: 'Loại bất động sản' },
];

function FilterTypeOfLand() {
    const renderResult = (attrs: any) => (
        <div className={cx('ml-[-12px] rounded-lg bg-color-white shadow-lg')} tabIndex="-1" {...attrs}>
            <FilterWrapper>
                <ul className={cx('max-h-[300px] overflow-auto py-[8px]')}>
                    {listTypeOfLand.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'flex items-center px-4 py-2',
                                'border-b-color-border border-b border-solid',
                                'hover:bg-primary-100 cursor-pointer',
                            )}
                        >
                            <span className={cx('flex-1')}> {value.title}</span>
                            {value.new && (
                                <span className={cx('ml-2 rounded bg-red-500 p-[2px] text-[12px] text-white')}>
                                    Mới
                                </span>
                            )}
                            <input type="checkbox" className={cx('ml-4')} />
                        </li>
                    ))}
                </ul>
            </FilterWrapper>
        </div>
    );

    return (
        <div className={cx('flex')}>
            <Tippy interactive offset={[12, 8]} placement="bottom-start" render={renderResult} trigger="click">
                <div
                    className={cx(
                        'flex cursor-pointer items-center gap-3 px-4 text-[#2C2C2C]',
                        'border-r border-solid border-[#F2F2F2]',
                    )}
                >
                    <BsHouses size={20} />
                    <span> Loại nhà đất</span>
                    <FaChevronDown />
                </div>
            </Tippy>
        </div>
    );
}

export default FilterTypeOfLand;
