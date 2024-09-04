'use client';

import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import Tippy from '@tippyjs/react/headless';

import FilterWrapper from '@/components/FilterWrapper';
import { Fragment } from 'react';

const listBedRoom = ['1', '2', '3', '4', '5+'];
const listHouseDirection = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông-Bắc', 'Tây-Bắc', 'Tây-Nam', 'Đông-Nam'];
const listNewContent = ['Hình ảnh', 'Video', '3D & 360°'];

const cx = classNames;

function FilterMore() {
    const Item = ({ value }: { value: string }) => (
        <div
            className={cx(
                'mb-2 mr-2 rounded-full bg-[#F2F2F2] px-[16px] py-[6px]',
                'cursor-pointer hover:bg-primary-100',
            )}
        >
            {value}
        </div>
    );

    const renderResult = (attrs: any) => (
        <div
            className={cx('mr-[12px] w-[350px] rounded-lg bg-color-white text-black shadow-lg')}
            tabIndex="-1"
            {...attrs}
        >
            <FilterWrapper>
                <Fragment>
                    <div className={cx('mb-[16px] px-[16px] pt-[16px]')}>
                        <span className={cx('font-medium')}>Số phòng ngủ</span>
                        <ul className={cx('mt-[6px] flex flex-wrap')}>
                            {listBedRoom.map((value, index) => (
                                <Item key={index} value={value} />
                            ))}
                        </ul>
                    </div>
                    <div className={cx('mb-[16px] px-[16px]')}>
                        <span className={cx('font-medium')}>Hướng nhà</span>
                        <ul className={cx('mt-[6px] flex flex-wrap')}>
                            {listHouseDirection.map((value, index) => (
                                <Item key={index} value={value} />
                            ))}
                        </ul>
                    </div>
                    <div className={cx('mb-[16px] px-[16px]')}>
                        <span className={cx('font-medium')}>Nội dung tin có</span>
                        <ul className={cx('mt-[6px] flex flex-wrap')}>
                            {listNewContent.map((value, index) => (
                                <Item key={index} value={value} />
                            ))}
                        </ul>
                    </div>
                </Fragment>
            </FilterWrapper>
        </div>
    );

    return (
        <div className={cx('flex flex-1')}>
            <Tippy interactive offset={[12, 8]} placement="bottom-end" render={renderResult} trigger="click">
                <div
                    className={cx(
                        'cursor-pointer border border-solid border-white',
                        'flex flex-1 items-center rounded px-[11px] py-[5px]',
                    )}
                >
                    <span className={cx('flex-1')}>Lọc thêm</span>
                    <FaChevronDown />
                </div>
            </Tippy>
        </div>
    );
}

export default FilterMore;
