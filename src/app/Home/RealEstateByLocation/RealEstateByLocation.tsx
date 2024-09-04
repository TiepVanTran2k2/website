import classNames from 'classnames';

import RealEstateCard, { RealEstate } from './RealEstateCard';

const cx = classNames;

const RealEstates: RealEstate[] = [
    {
        title: 'TP.Hồ Chí Minh',
        postQuantity: '22.622',
        image: require('@/assets/img/RealEstateByLocation/HCM.jpg'),
    },
    {
        title: 'Hà Nội',
        postQuantity: '9.734',
        image: require('@/assets/img/RealEstateByLocation/HN.jpg'),
    },
    {
        title: 'Đà Nẵng',
        postQuantity: '637',
        image: require('@/assets/img/RealEstateByLocation/Da_Nang.jpg'),
    },
    {
        title: 'Bình Dương',
        postQuantity: '1.681',
        image: require('@/assets/img/RealEstateByLocation/Binh_Duong.jpg'),
    },
    {
        title: 'Đồng Nai',
        postQuantity: '444',
        image: require('@/assets/img/RealEstateByLocation/Dong_Nai.jpg'),
    },
];

const LocationOthers = [
    'Vinhomes Central Park',
    'Vinhomes Grand Park',
    'Vinhomes Smart City',
    'Vinhomes Ocean Park',
    'Vũng Tàu Pearl',
    'Bcons Green View',
    'Grandeur Palace',
];

function RealEstateByLocation() {
    return (
        <div className={cx('w-full justify-center bg-[#FAFAFA] px-[32px] py-[40px] xl:flex', 'max-sm:px-[16px]')}>
            <div className={cx('xl:w-[1140px]')}>
                {/* Title */}
                <div className={cx('mb-[24px] flex items-center justify-between', 'max-sm:mb-0')}>
                    <h1 className={cx('text-[24px] font-medium', 'max-sm:text-[20px]')}>Bất động sản theo địa điểm</h1>
                </div>
                {/* esate real card */}
                <div
                    className={cx(
                        'flex gap-[16px] sm:h-[calc((100vw-64px)/3)] xl:h-[calc(1024px/3)]',
                        'max-sm:flex-col',
                    )}
                >
                    <div className={cx('flex-1 overflow-hidden', 'aspect-[6/4]')}>
                        <RealEstateCard inforRealEstate={RealEstates[0]} />
                    </div>
                    <div className={cx('grid flex-1 grid-cols-2 grid-rows-2 gap-[16px]')}>
                        {RealEstates.slice(1, RealEstates.length).map((value, index) => (
                            <div key={index} className={cx('overflow-hidden', 'max-sm:aspect-[6/4]')}>
                                <RealEstateCard inforRealEstate={value} />
                            </div>
                        ))}
                    </div>
                </div>

                <ul className={cx('mt-6 flex gap-2 overflow-auto xl:w-[1440px]')}>
                    {LocationOthers.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'flex-none overflow-auto rounded-full bg-color-border px-[16px] py-[6px]',
                                'cursor-pointer hover:shadow-md',
                            )}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RealEstateByLocation;
