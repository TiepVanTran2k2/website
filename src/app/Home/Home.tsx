'use client';

import { Fragment } from 'react';
import classNames from 'classnames';

import ImageSlider from '@/app/Home/ImageSlider';
import SearchAndFilterHome from '@/app/Home/SearchAndFilterHome';
import FeaturedNews from '@/app/Home/FeaturedNews';
import RealEstateForYou from './RealEstateForYou';
import FeaturedRealEstateProjects from './FeaturedRealEstateProjects';
import RealEstateByLocation from './RealEstateByLocation';
import FeaturedInformationLink from './FeaturedInformationLink';

const IMAGES = [
    require('@/assets/img/slideShow/slide1.jpg'),
    require('@/assets/img/slideShow/slide2.jpg'),
    require('@/assets/img/slideShow/slide3.jpg'),
    require('@/assets/img/slideShow/slide4.jpg'),
];

const cx = classNames;

export default function Home() {
    return (
        <Fragment>
            <div className={cx('relative mx-auto my-0 h-[370px] w-full', 'max-md:h-[300px]', 'max-sm:h-[190px]')}>
                <ImageSlider imageUrls={IMAGES} /> <SearchAndFilterHome />
            </div>
            <div className={cx('mt-[40px] flex flex-col items-center')}>
                <FeaturedNews />
                <RealEstateForYou />
                <FeaturedRealEstateProjects />
                <RealEstateByLocation />
                <FeaturedInformationLink />
            </div>
        </Fragment>
    );
}
