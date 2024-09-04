'use client';

import classNames from 'classnames';

import LinkItem, { InformationLink } from './LinkItem';

const cx = classNames;

const informationLinks: InformationLink[] = [
    {
        title: 'Chủ đề nổi bật',
        links: [
            { title: 'Tin tức bất động sản', children: [''] },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Bất động sản bán',
        links: [
            { title: 'Tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
        ],
    },
    {
        title: 'Bất động sản thuê',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Bất động sản toàn quốc',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Dự án nổi bật',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Chủ đầu tư nổi bật',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Bất động sản Quận/Huyện',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
    {
        title: 'Giá bất động sản toàn quốc',
        links: [
            { title: 'tin tức bất động sản' },
            { title: 'Bất động sản Hà Nội' },
            { title: 'Bất động sản Hồ Chí Minh' },
            { title: 'Báo cáo thị trường' },
            { title: 'Mua bất động sản' },
            { title: 'Bán bất động sản' },
            { title: 'Thuê bất động sản' },
            { title: 'Quy hoạch-Pháp lý' },
            { title: 'Tài chính' },
            { title: 'Video đánh giá' },
        ],
    },
];

function FeaturedInformationLink() {
    return (
        <div className={cx('mb-10 px-[32px] py-[40px] max-xl:w-full', 'max-sm:px-[16px]')}>
            <div className={cx('xl:w-[1140px]')}>
                {/* Title */}
                <div className={cx('mb-[24px] flex items-center justify-between', 'max-sm:mb-0')}>
                    <h1 className={cx('text-[24px] font-medium', 'max-sm:text-[20px]')}>Liên kết thông tin nổi bật</h1>
                </div>
                <p className={cx('mb-10')}>
                    Batdongsan.com.vn là trang web bất động sản hàng đầu tại Việt Nam - Nơi tốt nhất dành cho những
                    người đang tìm kiếm bất động sản để ở hoặc đầu tư. Chúng tôi cung cấp dữ liệu tin rao lớn với đa
                    dạng loại hình bất động sản giúp bạn có những lựa chọn phù hợp với nhu cầu của mình. <br />
                    <br />Ở phân khúc nhà đất bán, các loại hình nổi bật gồm bán căn hộ chung cư, bán nhà riêng, nhà mặt
                    tiền, biệt thự và liền kề, bán đất, đất nền dự án và một số loại hình đang được nhà đầu tư quan tâm
                    như bán condotel, shophouse và khu nghỉ dưỡng. Ngoài ra, người dùng quan tâm đến bất động sản cho
                    thuê có nhiều cơ hội để tìm thấy nhà đất ưng ý với danh sách tin rao được cập nhật liên tục tại các
                    danh mục cho thuê nhà nguyên căn, thuê phòng trọ giá rẻ, thuê văn phòng, mặt bằng kinh doanh. <br />
                    <br />
                    Với bộ lọc chi tiết dựa theo khoảng giá, vị trí, diện tích,... bạn có thể dễ dàng chọn lọc bất động
                    sản phù hợp trong hàng ngàn tin rao bán và cho thuê được cập nhật liên tục mỗi ngày. Lượng tin rao
                    chính chủ lớn đáp ứng nhu cầu của những người tìm nhà không qua môi giới. <br />
                    <br />
                    Batdongsan.com.vn cũng cung cấp thông tin toàn diện nhất về các dự án căn hộ chung cư, những đánh
                    giá dự án từ góc nhìn chuyên gia giúp bạn ra quyết định đúng đắn. Ở chuyên mục Wiki BĐS có thể tìm
                    thấy các thông tin đánh giá thị trường, những kiến thức, kinh nghiệm mua bán, cho thuê bất động sản
                    để đồng hành cùng bạn trong hành trình tìm nhà. <br />
                    <br />
                    Truy cập Batdongsan.com.vn để được cung cấp giải pháp hiệu quả trong lĩnh vực mua bán bất động sản
                    cũng như cho thuê nhà đất tại Việt Nam
                </p>
                <div className={cx('flex flex-wrap justify-between')}>
                    {informationLinks.map((value, index) => (
                        <LinkItem key={index} listLink={value} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedInformationLink;
