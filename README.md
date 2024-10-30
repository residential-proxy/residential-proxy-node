# ProxySDK

ProxySDK là một giải pháp proxy xoay dân cư tiêu chuẩn cho các dự án tại Việt Nam, đặc biệt phù hợp cho các dự án MMO và Airdrop.

## Nội Dung

- [Giới thiệu](#giới-thiệu)
- [Cài đặt](#cài-đặt)
- [Sử dụng](#sử-dụng)
- [API](#api)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)

## Giới thiệu

ProxySDK là một bộ công cụ phát triển phần mềm tiêu chuẩn cho việc sử dụng proxy xoay dân cư tại Việt Nam. Chúng tôi tạo ra tiêu chuẩn này nhằm phục vụ nhu cầu của người dùng và các dự án, đặc biệt là trong lĩnh vực MMO và Airdrop. ProxySDK cung cấp các tính năng chính như quản lý proxy, xoay IP theo tỉnh thành, và tích hợp dễ dàng vào các dự án hiện có.

## Cài đặt

Để cài đặt ProxySDK, bạn có thể sử dụng npm:

## Sử dụng

Hướng dẫn cách sử dụng dự án. Dưới đây là một ví dụ mã nguồn:

```javascript
import ProxySDK from "residential-proxy-sdk";

const sdk = new ProxySDK("https://vinproxy.net", "YOUR_API_KEY");

sdk.getProvinces().then((provinces) => {
  console.log(provinces);
});
```

## API

ProxySDK cung cấp các API sau:

### Lấy danh sách tỉnh

- **Phương thức**: `getProvinces(searchText?: string)`
- **Mô tả**: Trả về danh sách các tỉnh thành có sẵn proxy.
- **Tham số**:
  - `searchText` (tùy chọn): Chuỗi tìm kiếm để lọc danh sách tỉnh.

### Lấy IP mới

- **Phương thức**: `getNewIP(proxyKey: string, provinceId?: number)`
- **Mô tả**: Lấy một IP mới từ proxy.
- **Tham số**:
  - `proxyKey`: Khóa proxy.
  - `provinceId` (tùy chọn): ID của tỉnh cần lấy IP.

### Lấy IP hiện tại

- **Phương thức**: `getCurrentIP(proxyKey: string)`
- **Mô tả**: Lấy thông tin IP hiện tại của proxy.
- **Tham số**:
  - `proxyKey`: Khóa proxy.

### Xóa IP cũ

- **Phương thức**: `removeOldIP(proxyKey: string)`
- **Mô tả**: Xóa IP cũ của proxy.
- **Tham số**:
  - `proxyKey`: Khóa proxy.

### Lấy danh sách khóa

- **Phương thức**: `getKeyList()`
- **Mô tả**: Lấy danh sách các khóa proxy của người dùng.

### Lấy chi tiết khóa

- **Phương thức**: `getKeyDetail(proxyKey: string)`
- **Mô tả**: Lấy thông tin chi tiết của một khóa proxy.
- **Tham số**:
  - `proxyKey`: Khóa proxy cần lấy thông tin.

### Mua khóa mới

- **Phương thức**: `buyNewKey(buyKeyDto: any)`
- **Mô tả**: Thực hiện giao dịch mua khóa proxy mới.
- **Tham số**:
  - `buyKeyDto`: Đối tượng chứa thông tin mua khóa mới.

### Gia hạn khóa

- **Phương thức**: `renewKey(renewKeyDto: any)`
- **Mô tả**: Gia hạn một khóa proxy hiện có.
- **Tham số**:
  - `renewKeyDto`: Đối tượng chứa thông tin gia hạn khóa.

### Xóa khóa

- **Phương thức**: `removeKey(proxyKey: string)`
- **Mô tả**: Xóa một khóa proxy.
- **Tham số**:
  - `proxyKey`: Khóa proxy cần xóa.

### Lấy thông tin người dùng

- **Phương thức**: `getUserInfo()`
- **Mô tả**: Lấy thông tin của người dùng hiện tại.

## Đóng góp

Chúng tôi rất hoan nghênh mọi đóng góp cho ProxySDK. Nếu bạn muốn đóng góp, vui lòng làm theo các bước sau:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## Giấy phép

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.
