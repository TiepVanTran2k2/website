import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import Link from 'next/link';

import { TypeMenuItem } from '@/config/type';

const cx = classNames;

const defaultFn = () => {};

function MenuAction({
    items = [],
    hideOnClick,
    onChange = defaultFn,
    children,
}: {
    items: TypeMenuItem[];
    hideOnClick: boolean;
    children: React.ReactElement;
    onChange: () => void;
}) {
    const renderResult = (attrs: any) => (
        <div className={cx('mr-4 min-w-[250px]')} tabIndex="-1" {...attrs}>
            <div className={cx('flex flex-col overflow-y-auto rounded-md bg-color-white py-1 shadow-xl')}>
                {items.map((value, index) => {
                    const Icon = value.icon;
                    return (
                        <Link
                            href={''}
                            key={index}
                            className={cx(
                                'font-lexend flex items-center px-3 py-[6px]',
                                'hover:bg-bg-hover-primary',
                                value.seperate && 'border-t border-solid border-t-gray-200 py-[8px]',
                            )}
                        >
                            <Icon className={cx('mr-2')} size={16} />
                            {value.title}
                            {value.new && (
                                <span className={cx('ml-2 rounded bg-red-500 p-[2px] text-[12px] text-white')}>
                                    Mới
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
        >
            {children}
        </Tippy>
    );
}

export default MenuAction;
