'use client';

import classNames from 'classnames';
import { useState, useEffect, useRef, forwardRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import 'tippy.js/dist/tippy.css';

const cx = classNames;

const listMenu = ['Nhà đất bán', 'Nhà đất cho thuê', 'Dự án', 'Tin tức', 'Wiki BDS', 'Phân tích đánh giá', 'Danh bạ'];
type MenuItem = {
    title: string;
    new?: boolean;
};

type Menu = Record<string, MenuItem[]>;

const menu: Menu = {
    'Nhà đất bán': [
        { title: 'Bán căn hộ chung cư' },
        { title: 'Bán chung cư mini, căn hộ dịch vụ ', new: true },
        { title: 'Bán chà riêng' },
        { title: 'Bán nhà biệt thự liền kề' },
        { title: 'Bán nhà mặt phố' },
        { title: 'Bán shophouse, nhà phố thương mại' },
        { title: 'Bán đất nền dự án' },
        { title: 'Bán đất' },
        { title: 'Bán trang trại, khu nghĩ dưỡng' },
        { title: 'Bán condotel' },
        { title: 'Bán kho, nhà xưởng' },
        { title: 'Bán loại bất động sản' },
    ],
    'Nhà đất cho thuê': [
        { title: 'Cho thuê căn hộ chung cư' },
        { title: 'Cho thuê chung cư mini, căn hộ dịch vụ ', new: true },
        { title: 'Cho thuê chà riêng' },
        { title: 'Cho thuê nhà biệt thự liền kề' },
        { title: 'Cho thuê nhà mặt phố' },
        { title: 'Cho thuê shophouse, nhà phố thương mại' },
        { title: 'Cho thuê nhà trọ, phòng trọ' },
        { title: 'Cho thuê văn phòng' },
        { title: 'Cho thuê sang nhượng cửa hàng, ki ốt' },
        { title: 'Cho thuê kho, nhà xưởng, đất' },
        { title: 'Cho thuê loại bất động sản' },
    ],
    'Dự án': [
        { title: 'Căn hộ chung cư' },
        { title: 'Cao ốc văn phòng' },
        { title: 'Trung tâm thương mại' },
        { title: 'Khu đô thị mới' },
        { title: 'Khu phức hợp' },
        { title: 'Nhà ở xã hội' },
        { title: 'Khu nghĩ dưỡng, sinh thái' },
        { title: 'Khu công nghiệp' },
        { title: 'Biệt thự, liền kề' },
        { title: 'Shophouse' },
        { title: 'Nhà mặt phố' },
        { title: 'Dự án khác' },
    ],
    'Tin tức': [],
    'Wiki BDS': [
        { title: 'Mua BĐS' },
        { title: 'Bán BĐS' },
        { title: 'Thuê BĐS' },
        { title: 'Tài chính BĐS' },
        { title: 'Quy hoạch- Pháp lý' },
        { title: 'Nội-Ngoại thất' },
        { title: 'Phong thủy' },
    ],
    'Phân tích đánh giá': [
        { title: 'Biểu đồ giá' },
        { title: 'Video đánh giá' },
        { title: 'Báo cáo thị trường' },
        { title: 'Góc nhìn chuyên gia' },
        { title: 'Interkative Story' },
    ],
    'Danh bạ': [{ title: 'Nhà môi giới' }, { title: 'Doanh nghiệp' }],
};

const MenuHeader = ({
    isMenu,
    isUser,
    setIsMenu,
}: {
    isMenu: boolean;
    isUser: boolean;
    setIsMenu: (isMenu: boolean) => void;
}) => {
    const [subMenu, setSubMenu] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && isMenu === true) {
                setIsMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMenu]);

    const handeOpenSubMenu = (value: string) => {
        if (value === subMenu) {
            setSubMenu('');
            return;
        }
        setSubMenu(value);
    };
    return (
        <div
            className={cx(
                'top-[64px] max-xl:absolute max-xl:left-[-400px] max-xl:h-screen max-xl:pt-4 max-xl:shadow-lg',
                'bg-color-white transition-all duration-300',
                isMenu && '!left-0',
            )}
            ref={ref}
        >
            <div className={cx('mx-8 mb-4 flex flex-col font-semibold xl:hidden')}>
                {!isUser && (
                    <div className={cx('mb-4 flex justify-between')}>
                        <button className={cx('rounded-xl bg-lime-200 px-[15px] py-[13px] hover:bg-lime-300')}>
                            Đăng nhập
                        </button>
                        <button
                            className={cx(
                                'rounded-xl px-[15px] py-[13px] hover:bg-bg-hover-primary',
                                'border border-solid border-[#ccc]',
                            )}
                        >
                            Đăng ký
                        </button>
                    </div>
                )}

                <button
                    className={cx(
                        'rounded-xl px-[15px] py-[13px] hover:bg-bg-hover-primary',
                        'border border-solid border-[#ccc]',
                        isUser && 'bg-lime-200 hover:bg-lime-300',
                    )}
                >
                    Đăng tin
                </button>
            </div>
            <ul
                className={cx(
                    'flex flex-none cursor-pointer bg-white font-lexend font-medium xl:gap-6',
                    'max-xl:flex-col max-xl:py-4',
                    'max-xl:gap-2',
                )}
            >
                {listMenu.map((value, index) => (
                    <li key={index} className={cx('group', 'relative', 'max-xl:w-full max-xl:min-w-[300px]')}>
                        <div className={cx('items-center max-xl:flex max-xl:justify-between max-xl:px-4')}>
                            <div>{value}</div>
                            <div onClick={() => handeOpenSubMenu(value)} className={cx('px-2 xl:hidden')}>
                                {subMenu === value ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div
                                className={cx(
                                    'absolute mt-1 h-[2px] w-0 bg-primary transition-all duration-300',
                                    'xl:group-hover:w-full',
                                    'max-xl:hidden',
                                )}
                            ></div>
                        </div>
                        <ul
                            className={cx(
                                'min-w-[200px] origin-top-left text-nowrap py-1 xl:absolute xl:scale-0 xl:group-hover:scale-100',
                                'mt-2 rounded-xl bg-white font-roboto-regular font-normal xl:shadow-xl xl:transition-all xl:duration-300',
                                'max-xl:mx-4 max-xl:h-0 max-xl:origin-top max-xl:scale-y-0',
                                subMenu === value && 'max-xl:h-auto max-xl:scale-y-100',
                            )}
                        >
                            {menu[value].map((itemMenu, index) => (
                                <li key={index} className={cx('px-4 py-1', 'hover:bg-bg-hover-primary')}>
                                    {itemMenu.title}
                                    {itemMenu.new && (
                                        <span className={cx('rounded bg-red-500 p-1 text-[12px] text-white')}>Mới</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuHeader;
