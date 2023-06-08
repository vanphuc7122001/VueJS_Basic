<template>
    <div>
        <h1>Demo in HTML to PDF in VueJS</h1>
        <div ref="pdfContent">
            <div class="container" v-show="true">
                <img src="https://www.senbac.com/wp-content/uploads/2017/09/vnpt-logo1.png" class="rounded-circle"
                    alt="Cinque Terre" style="height: 70px;">
                <div class="d-flex justify-content-between mt-4">
                    <p class="text-center ml-4">TÊN CÔNG TY <br>
                        VNPT Hậu Giang
                    </p>
                    <div class="text-center">
                        <p>CỘNG HÒA XÃ HỘI CHỦ NGHỈA VIỆT NAM</p>
                        <p>Độc lập - Tự do - Hạnh phúc</p>
                        <p>-----------------</p>
                    </div>
                </div>
                <div class="float-right">
                    <p>....ngày....tháng....năm</p>
                </div>
                <div class="text-center mt-4 font-weight-bold">
                    <h3>Báo Cáo Khách Hàng Đã Lâu Chưa Chăm Sóc</h3>
                </div>
                <div class="">
                    <span>Họ tên</span>
                    <br>
                    <span>Chức vụ</span>
                    <br>
                    <span>Bộ phận công tác</span>
                </div>
                <table class="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th v-for="(value, index) in labels" :key="index">{{ value }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dang Van Phuc</td>
                            <td>john@example.com</td>
                            <td>0333582263</td>
                            <td>7 Tháng trước</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pham Thanh Phong</td>
                            <td>mary@example.com</td>
                            <td>0333582263</td>
                            <td>7 Tháng trước</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nguyen Anh Nam</td>
                            <td>july@example.com</td>
                            <td>0333582263</td>
                            <td>7 Tháng trước</td>
                        </tr>
                    </tbody>
                </table>

                <div class="d-flex justify-content-around mt-4">
                    <p>Phụ trách bộ phận</p>
                    <p>Người Báo Cáo</p>
                </div>

            </div>
        </div>
        <button @click="handlePrintData">Export PDF</button>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default {
    setup() {
        const pdfContent = ref(null)

        const labels = [
            'STT',
            'Email',
            'Tên khách hàng',
            'Lần cuối sử dụng dịch vụ'
        ]


        const data = reactive({
            items: [
                {
                    id: 1,
                    name: "Dang Van Phuc",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 2,
                    name: "Pham Thanh Phong",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 3,
                    name: "Nguyen Anh Nam",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 4,
                    name: "Le Quoc Thinh",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 5,
                    name: "Vo Van Thach",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 6,
                    name: "Tran Minh Sang",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
                {
                    id: 7,
                    name: "Nguyen Hoang Trong Tien",
                    birthdate: new Date(),
                    address: "Dong Thap",
                    phone: "039977732",
                    email: "phuc@gmail.com",
                    type: "VIP",
                    avatar:
                        "https://i.pinimg.com/736x/ed/80/f7/ed80f704afb25270ea9dac456da6407a.jpg",
                    wor_current_workplace: "CTU",
                    wor_work_history: "VNPT",
                    wor_current_position: "Student",
                    recent_using: "20-10-2020",
                    wor_work_temp: "HKII",
                },
            ],
            entryValue: 5, // total record in page
            numberOfPages: 1,
            totalRow: 0, // total row data
            startRow: 0,
            endRow: 0,
            currentPage: 1,
            searchText: "",
            activeMenu: 2,
        });

        const handlePrintData = () => {
            const content = pdfContent.value

            // Chuyển đổi nội dung HTML thành PDF sử dụng html2canvas và jsPDF
            html2canvas(content).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");

                // Tạo tài liệu PDF và thêm ảnh vào
                const doc = new jsPDF({
                    format: "a4",
                });
                const imgWidth = 210; // Đặt chiều rộng ảnh bằng chiều rộng trang A4
                const imgHeight = (canvas.height * imgWidth) / canvas.width; // Tính toán chiều cao dựa trên tỷ lệ

                doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight); // Đặt kích thước ảnh là kích thước trang PDF
                // Tải xuống tệp PDF
                doc.save("demo.pdf");
            });
        }
        return {
            pdfContent,
            handlePrintData,
            labels,
            data,

        }
    }
}
</script>

<style></style>