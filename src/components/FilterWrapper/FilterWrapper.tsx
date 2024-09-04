import React from 'react';
import classNames from 'classnames';
import { BsArrowRepeat } from 'react-icons/bs';
const cx = classNames;

function FilterWrapper({
    handleReset,
    handleApply,
    children,
}: {
    handleReset?: () => void;
    handleApply?: () => void;
    children: React.ReactElement;
}) {
    return (
        <div>
            {children}
            <div
                className={cx(
                    'flex items-center justify-between px-2 py-1',
                    'border-t-color-border border-t border-solid',
                )}
            >
                <span
                    className={cx(
                        'flex items-center gap-1 overflow-hidden rounded px-2 py-2 font-medium',
                        'hover:bg-primary-100 cursor-pointer',
                    )}
                    onClick={handleReset}
                >
                    <BsArrowRepeat size={18} />
                    Đặt lại
                </span>
                <button
                    className={cx(
                        'bg-primary-500 rounded px-[11px] py-[5px] font-medium text-color-white',
                        'hover:opacity-80',
                    )}
                    onClick={handleApply}
                >
                    Áp dụng
                </button>
            </div>
        </div>
    );
}

export default FilterWrapper;
