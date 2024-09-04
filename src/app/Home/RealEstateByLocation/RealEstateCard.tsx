'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { CiLocationOn, CiHeart } from 'react-icons/ci';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';

const cx = classNames;

export type RealEstate = {
    title: string;
    postQuantity: string;
    image: string;
};

function RealEstateCard({ inforRealEstate }: { inforRealEstate: RealEstate }) {
    return (
        <Link href={''} className={cx('group relative h-full w-full')}>
            <Image
                src={inforRealEstate.image}
                alt={inforRealEstate.image}
                className={cx(
                    'h-full w-full rounded object-cover',
                    'transform filter transition duration-300 ease-in-out hover:scale-[1.05] hover:blur-none sm:blur-[0.5px]',
                )}
            />
            <div
                title={inforRealEstate.title}
                className={cx(
                    'absolute left-[16px] top-[16px] font-semibold text-color-white',
                    'group-hover:underline',
                )}
            >
                <span className={cx('text-[18px]', 'max-sm:text-[16px]')}>{inforRealEstate.title}</span>
                <br />
                <span>{inforRealEstate.postQuantity}</span>
            </div>
        </Link>
    );
}

export default RealEstateCard;
