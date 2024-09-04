'use client';

import classNames from 'classnames';
import { Fragment } from 'react';
import Image from 'next/image';
import { CiHeart, CiBellOn, CiCircleList, CiUser, CiLock, CiSquarePlus, CiBag1, CiLogout } from 'react-icons/ci';
import { LuUserSquare2 } from 'react-icons/lu';
import { RiAdvertisementLine } from 'react-icons/ri';
import { IoPieChartOutline } from 'react-icons/io5';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import MenuAction from './MenuAction';
import { TypeMenuItem } from '@/config/type';

const cx = classNames;

const listMenuAction: TypeMenuItem[] = [
    { title: 'Tổng quan', icon: IoPieChartOutline, new: true },
    { title: 'Quản lý tin đăng', icon: CiCircleList },
    { title: 'Gói Hội Viên', icon: LuUserSquare2, customComponent: () => <div></div> },
    { title: 'Quản lý tin tài trợ', icon: RiAdvertisementLine },
    { title: 'Chỉnh sửa thông tin cá nhân', icon: CiUser },
    { title: 'Thay đổi mật khẩu', icon: CiLock },
    { title: 'Môi giới chuyên nghiệp', icon: CiBag1, new: true },
    { title: 'Nạp tiền', icon: CiSquarePlus },
    { title: 'Đăng xuất', icon: CiLogout, seperate: true },
];

function Action({ isUser }: { isUser: boolean }) {
    return (
        <div className={cx('flex items-center')}>
            <Tippy content="Danh sách tin đã lưu">
                <button className={cx('mr-4')}>
                    <CiHeart size={24} />
                </button>
            </Tippy>
            {isUser && (
                <Tippy content="Thông báo">
                    <button className={cx('mr-4')}>
                        <CiBellOn size={24} />
                    </button>
                </Tippy>
            )}

            <div className={cx('flex items-center font-semibold max-xl:hidden')}>
                {!isUser && (
                    <Fragment>
                        <button className={cx('ml-2 rounded-lg px-[11px] py-[5px] hover:bg-bg-hover-primary')}>
                            Đăng nhập
                        </button>
                        <span className={cx('h-4 w-[1px] bg-gray-300')}></span>
                        <button
                            className={cx(
                                'mr-2 rounded-lg px-[11px] py-[5px] hover:bg-bg-hover-primary',
                                'max-sm:hidden',
                            )}
                        >
                            Đăng ký
                        </button>
                    </Fragment>
                )}
                <button
                    className={cx(
                        'rounded-lg px-[11px] py-[5px] hover:bg-bg-hover-primary',
                        'border border-solid border-[#ccc]',
                    )}
                >
                    Đăng tin
                </button>
            </div>
            <MenuAction
                items={listMenuAction}
                hideOnClick={true}
                onChange={() => {
                    console.log('Changed');
                }}
            >
                <Image
                    src={require('@/assets/img/logo/logo.png')}
                    alt="avatar"
                    className="ml-4 h-8 w-8 cursor-pointer rounded-full border border-solid border-primary object-cover"
                />
            </MenuAction>
        </div>
    );
}

export default Action;
