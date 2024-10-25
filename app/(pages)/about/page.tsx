export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <div className="py-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Giới Thiệu Hệ Thống Mô Phỏng Đầu Tư Tài Chính
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Hệ thống mô phỏng đầu tư tài chính của chúng tôi là một nền tảng học
          tập tương tác, giúp người dùng tìm hiểu và rèn luyện kỹ năng phân tích
          tài chính thông qua giao dịch chứng khoán giả lập. Hệ thống được thiết
          kế với dữ liệu thị trường thực tế từ quá khứ, cho phép người chơi khám
          phá những chiến lược đầu tư hiệu quả mà không phải đối mặt với rủi ro
          thực sự.
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Cách Chơi</h2>
        <ul className="mb-6 list-inside list-disc space-y-3 text-gray-700">
          <li>
            <strong className="text-gray-900">Tài Khoản Giả Lập</strong>: Mỗi
            người chơi sẽ được cấp một tài khoản với số tiền giả lập ban đầu.
            Bạn có thể dùng số tiền này để thực hiện các giao dịch mua, bán,
            hoặc giữ cổ phiếu qua từng phiên giao dịch.
          </li>
          <li>
            <strong className="text-gray-900">Dữ Liệu Nến Nhật Cố Định</strong>:
            Hệ thống sử dụng dữ liệu nến Nhật của các mã cổ phiếu trong một
            khoảng thời gian cố định. Người chơi có thể theo dõi diễn biến giá
            cả qua các cây nến để phân tích và đưa ra quyết định giao dịch.
          </li>
          <li>
            <strong className="text-gray-900">Tiến Trình Giả Lập 1 năm</strong>:
            Mỗi phiên giao dịch tương ứng với một ngày trong lịch sử thị trường.
            Người chơi có thể mô phỏng hoạt động đầu tư trong vòng 90 ngày, với
            kết quả được cập nhật hàng ngày.
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Lợi Ích Khi Sử Dụng Hệ Thống
        </h2>
        <ul className="list-inside list-disc space-y-3 text-gray-700">
          <li>
            <strong className="text-gray-900">
              Phát Triển Kỹ Năng Phân Tích Kỹ Thuật
            </strong>
            : Người chơi có thể quan sát và phân tích biểu đồ nến, học cách đọc
            tín hiệu thị trường và xây dựng chiến lược đầu tư.
          </li>
          <li>
            <strong className="text-gray-900">
              Giảm Thiểu Rủi Ro Khi Đầu Tư Thực Tế
            </strong>
            : Hệ thống giúp bạn thử nghiệm các quyết định đầu tư trong một môi
            trường an toàn, nhằm rèn luyện và cải thiện kỹ năng trước khi bước
            vào thị trường thật.
          </li>
          <li>
            <strong className="text-gray-900">
              Trải Nghiệm Thực Tế Không Rủi Ro
            </strong>
            : Với các dữ liệu thực, bạn sẽ cảm nhận được sự biến động của thị
            trường và các tình huống khó khăn, từ đó rèn luyện tư duy và kiểm
            soát cảm xúc khi đầu tư.
          </li>
        </ul>
      </div>
    </div>
  );
}
