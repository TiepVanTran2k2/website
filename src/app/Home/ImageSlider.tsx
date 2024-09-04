'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type ImageSliderProps = {
    imageUrls: string[];
};

const cx = classNames;

function ImageSlider({ imageUrls }: ImageSliderProps) {
    const [indexImage, setIndexImage] = useState(0);

    const showNext = () => {
        setIndexImage((prevSlide) => (prevSlide + 1) % imageUrls.length);
    };

    const showPrevious = () => {
        setIndexImage((prevSlide) => (prevSlide - 1 + imageUrls.length) % imageUrls.length);
    };

    const showByIndex = (index: number) => {
        setIndexImage(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexImage((prevSlide) => (prevSlide + 1) % imageUrls.length);
        }, 5000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('relative h-full w-full overflow-hidden')}>
            <div className={cx('flex h-full w-full')}>
                {imageUrls.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={image}
                        className={cx(
                            'block h-full w-full flex-none object-cover transition-all duration-1000 ease-in-out',
                            indexImage === index ? 'opacity-100' : 'opacity-0',
                        )}
                        style={{ translate: `${-100 * indexImage}%` }}
                    />
                ))}
            </div>

            <div
                className="absolute left-2 top-[50%] translate-y-[-50%] cursor-pointer rounded bg-color-white p-2 opacity-60 hover:opacity-80"
                onClick={showPrevious}
            >
                <FaChevronLeft />
            </div>
            <div
                className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer rounded bg-color-white p-2 opacity-60 hover:opacity-80"
                onClick={showNext}
            >
                <FaChevronRight />
            </div>

            <div className={cx('absolute bottom-2 left-[50%] flex translate-x-[-50%] gap-2')}>
                {imageUrls.map((_, index) => (
                    <div
                        key={index}
                        className={cx(
                            'h-2 w-2 cursor-pointer rounded-full bg-color-white opacity-50',
                            indexImage === index && '!bg-primary',
                        )}
                        onClick={() => showByIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
