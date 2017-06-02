import { Jobs } from '../../../both/collections/jobs.collection';
import { Job } from '../../../both/models/job.model';
export function loadJobs(){
    if (Jobs.find().cursor.count() ===0){
        const jobs: Job[] = [
            {
                ten_cong_viec: "Kiến trúc sư ( 4 vị trí làm việc tại HCM, 1 vị trí làm việc tại KCN Đông Xuyên, Tp. Vũng Tàu",
                nha_tuyen_dung: "TLC Modular Construction Joint Stock Company",
                location: {
                    name: "58 Đồng Khởi, Quận 1, TP. Hồ Chí Minh",
                },
                luong: "$700-$1200",
                mo_ta: "Tham gia hoặc chủ trì thiết kế các dự án nhà dân dụng, chung cư, nhà xưởng,...(từ thiết kế ý tưởng đến thiết kế bản vẽ thi công)",
                yeu_cau: "Tốt nghiệp đại học, cao đẳng chuyên ngành: kiến trúc công trình",
                dien_thoai: "01277814773",
                public: true,
                date: new Date(2017, 3, 23)
            },
            {
                ten_cong_viec: "Kiến trúc sư ( 4 vị trí làm việc tại HCM, 1 vị trí làm việc tại KCN Đông Xuyên, Tp. Vũng Tàu",
                nha_tuyen_dung: "TLC Modular Construction Joint Stock Company",
                location: {
                    name: "58 Đồng Khởi, Quận 6, TP. Hồ Chí Minh",
                },
                luong: "$700-$1200",
                mo_ta: "Tham gia hoặc chủ trì thiết kế các dự án nhà dân dụng, chung cư, nhà xưởng,...(từ thiết kế ý tưởng đến thiết kế bản vẽ thi công)",
                yeu_cau: "Tốt nghiệp đại học, cao đẳng chuyên ngành: kiến trúc công trình",
                dien_thoai: "02377976766",
                public: true,
                date: new Date(2017, 4, 27)
            },
            {
                ten_cong_viec: "Designer - working in Hung Yen",
                nha_tuyen_dung: "Hanes Brands Inc (Hys)",
                location: {
                    name: "Chinh Nghia Commune, Kim Dong District, Hung Yen Province, Vietnam",
                },
                luong: "Negotiable",
                mo_ta: "Thiết ké banner, poster, standee, backdrop, brochure cho các hoạt động xây dựng thương hiệu nhà tuyển dụng và các hoạt động tuyển dụng trong và ngoài tổ chức như hội trợ việc làm, tin tuyển dụng, thực tập sinh,...",
                yeu_cau: "Sử dụng thành thạo các phần mềm Photoshop, Illustrator, Indesign, Premiere, After Effects",
                dien_thoai: "0963906609",
                public: true,
                date: new Date(2017, 5, 29)
            }, 
            {
                ten_cong_viec: "Designer - working in Hanoi",
                nha_tuyen_dung: "Hanes Brands Inc (Hys)",
                location: {
                    name: "Chinh Nghia Commune, Kim Dong District, Hung Yen Province, Vietnam",
                },
                luong: "Negotiable",
                mo_ta: "Thiết ké banner, poster, standee, backdrop, brochure cho các hoạt động xây dựng thương hiệu nhà tuyển dụng và các hoạt động tuyển dụng trong và ngoài tổ chức như hội trợ việc làm, tin tuyển dụng, thực tập sinh,...",
                yeu_cau: "Sử dụng thành thạo các phần mềm Photoshop, Illustrator, Indesign, Premiere, After Effects",
                dien_thoai: "01277316762",
                public: true,
                date: new Date(2017, 3, 29)

            }
        ];
        jobs.forEach((job: Job)=> Jobs.insert(job));
    }
    
}