#  Menjalankan dan Memverifikasi Node Deteksi Objek pada Kamera Robot
### Deskripsi Project
Sebagai AI Engineer Junior, Anda bertugas untuk mengeksekusi, memvalidasi, dan mendokumentasikan node deteksi objek pada sistem ROS 2 untuk robot otonom. Project ini mengharuskan Anda memverifikasi kestabilan aliran data sensor visual di lingkungan simulasi, memastikan logika bounding box bekerja secara presisi tanpa anomali, dan melakukan audit lisensi perangkat lunak open-source. Hasil kerja Anda akan menjadi penentu apakah modul persepsi ini layak dan aman (baik secara teknis maupun legal) untuk diintegrasikan oleh tim navigasi ke dalam repositori utama perusahaan.
___
### Materi & Skill yang Dipraktikkan
* Node ROS 2 untuk Persepsi Robot
* Konversi Pesan Kamera dengan cv_bridge
* Verifikasi Topik ROS 2 (ros2 topic hz/echo)
* Literasi Lisensi Model Open Source
___
### Konteks & Deskripsi Case
PT Girisena Robotika Indonesia sedang dalam fase krusial pengembangan "GiriBot", sebuah
Autonomous Mobile Robot (AMR) untuk logistik gudang tugas berat. Saat ini, tim pergerakan telah
berhasil men-deploy lapisan navigasi dasar (Nav2) di dalam simulator Gazebo. Namun, robot
tersebut masih "buta" karena subsistem persepsi visualnya belum terintegrasi.

Robotics Engineering Lead Anda, Bpk. Yoga Pratama, telah menyiapkan sebuah starter code
bernama `detector_node.py` yang membungkus model deteksi SSDLite MobileNetV3 (dari library
torchvision). Tim navigasi menolak untuk melakukan integrasi sebelum ada bukti empiris bahwa
node persepsi ini dapat berjalan stabil tanpa membebani CPU (ditandai dengan frekuensi publish
yang konsisten) dan kotak pembatas (bounding box) tidak berhalusinasi mendeteksi objek gaib di
simulator.

Selain masalah teknis, jajaran manajemen sangat ketat terkait Hak Kekayaan Intelektual (HAKI).
Mereka berencana mematenkan software stack GiriBot. Jika model AI yang digunakan dalam starter
code tersebut menggunakan lisensi copyleft yang agresif (seperti AGPL/GPL), hal itu bisa memaksa
perusahaan untuk membuka seluruh kode rahasia mereka ke publik. Anda diinstruksikan untuk
memverifikasi fungsionalitas teknis sekaligus melakukan audit legalitas sebelum kode ini di-merge ke branch utama.
___
### Instruksi Utama:
1. Inisialisasi Simulasi: Jalankan simulator Gazebo untuk lingkungan gudang. Lakukan
pengecekan awal menggunakan perintah `ros2 topic list` untuk memastikan topik
`/camera/image_raw` tersedia.
2. Eksekusi & Observasi Node: Jalankan file `detector_node.py`. Biarkan berjalan selama
minimal 60 detik. Pantau terminal untuk memastikan tidak ada memory leak, pesan warning
berulang, atau exception/crash.
3. Verifikasi Aliran Data: Buka terminal baru. Gunakan `ros2 topic hz /detections` untuk
mengukur frekuensi publish node deteksi. Kemudian, gunakan `ros2 topic echo /detections`
untuk menangkap 1 payload pesan lengkap guna memastikan format matriks deteksi tidak
kosong.
4. Validasi Bounding Box: Gunakan tools visualisasi (seperti `rqt_image_view` atau RViz).
Posisikan robot menghadap ke minimal 2 objek berbeda di simulator (misal: rak dan kotak).
Evaluasi apakah koordinat bounding box benar-benar membingkai tepi objek secara presisi
atau meleset.
5. Audit Lisensi Model: Buka source code `detector_node.py`. Baca comment header di bagian
atas kode. Identifikasi nama model spesifik, asal sumber (framework), dan jenis lisensinya.
Buat kesimpulan tertulis apakah lisensi tersebut aman untuk repositori closed-source
perusahaan.
6. Dokumentasi Serah Terima: Tuliskan seluruh temuan (bukti screenshot, log terminal,
observasi visual, audit lisensi, dan catatan kendala jika ada) ke dalam Lembar Verifikasi untuk
diserahkan kepada tim navigasi.
___
### Petunjuk Pengerjaan
1. Persiapan Workspace: Source environment ROS 2 Anda. Jalankan perintah `ros2 launch` untuk
memanggil simulasi gudang Gazebo.
2. Pengecekan Pre-requisite: Pastikan simulator memancarkan gambar dengan menjalankan `ros2 topic
hz` `/camera/image_raw`. Jika tidak ada output, periksa status plugin
kamera Gazebo Anda.
3. Running Detection Node: Buka terminal baru, jalankan `python3 detector_node.py`. Biarkan berjalan
dan pastikan log terminal menunjukkan "Node Started" tanpa pesan
Traceback.
4. Pengambilan Log Data: Buka terminal ke-3. Simpan output dari `ros2 topic hz /detections` (minimal
10 sampel) dan tangkap satu isi pesan penuh dengan `ros2 topic echo
/detections --once`.
5. Analisis Visual: Buka `rqt_image_view`. Pilih topik yang mengeluarkan image dengan
bounding box tergambar. Lakukan observasi, ambil screenshot, dan
perhatikan apakah ada deteksi palsu (berhalusinasi).
6. Inspeksi Kode (Audit): Hentikan node. Buka file `detector_node.py` menggunakan text editor. Cari
blok komentar teratas untuk menemukan informasi lisensi model.
7. Pengisian Lembar Verifikasi: Tuliskan seluruh temuan secara rapi ke dalam dokumen template, sertakan
gambar bukti pendukung, analisis legalitas, dan rekomendasi. Simpan dan
kumpulkan.
___
### Code
```py
"""
Starter Code: Node Deteksi Objek (Persepsi Visual)
Project: Sistem Navigasi dan Persepsi Robot Otonom untuk Gudang
PT Girisena Robotika Indonesia

[INFORMASI MODEL & LISENSI]
Nama Model   : SSDLite dengan backbone MobileNetV3 (ssdlite320_mobilenet_v3_large)
Sumber       : PyTorch / Torchvision Model Zoo
Lisensi      : BSD 3-Clause License (Permissive)
Keterangan   : Bebas digunakan untuk komersial dan repositori tertutup (closed-source)
               selama menyertakan salinan lisensi ini.

Catatan untuk AI Engineer Junior:
Pastikan node ini berjalan tanpa exception, topik /detections ter-publish dengan stabil,
dan bbox akurat di lingkungan simulasi Gazebo.
"""

import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image
from std_msgs.msg import String
from cv_bridge import CvBridge
import cv2
import torch
import torchvision

class ObjectDetectionNode(Node):
    def __init__(self):
        super().__init__('detector_node')
        
        # Inisialisasi Publisher dan Subscriber
        self.subscription = self.create_subscription(
            Image,
            '/camera/image_raw',
            self.image_callback,
            10)
        self.publisher_ = self.create_publisher(String, '/detections', 10)
        self.image_publisher_ = self.create_publisher(Image, '/camera/detections_image', 10)
        
        self.br = CvBridge()
        
        self.get_logger().info('Memuat model SSDLite MobileNetV3...')
        
        # Load pre-trained model dari torchvision
        self.weights = torchvision.models.detection.SSDLite320_MobileNet_V3_Large_Weights.DEFAULT
        self.model = torchvision.models.detection.ssdlite320_mobilenet_v3_large(weights=self.weights)
        self.model.eval()
        
        # Pindahkan komputasi ke GPU jika tersedia, jika tidak gunakan CPU
        self.device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')
        self.model.to(self.device)
        
        self.get_logger().info('Model berhasil dimuat. Node Started. Menunggu data dari /camera/image_raw...')

    def image_callback(self, data):
        try:
            # Konversi pesan sensor_msgs/Image ROS 2 ke format numpy/OpenCV
            current_frame = self.br.imgmsg_to_cv2(data, 'bgr8')
        except Exception as e:
            self.get_logger().error(f'Exception: Gagal mengonversi gambar: {e}')
            return

        # Preprocessing Gambar
        img_rgb = cv2.cvtColor(current_frame, cv2.COLOR_BGR2RGB)
        img_tensor = torch.from_numpy(img_rgb / 255.0).permute(2, 0, 1).float().to(self.device)
        
        # Inferensi Model
        with torch.no_grad():
            predictions = self.model([img_tensor])

        # Parsing Hasil Deteksi (Ambil objek dengan confidence score > 0.55)
        detections = predictions[0]
        detected_objects_log = []
        
        for i in range(len(detections['scores'])):
            score = detections['scores'][i].item()
            if score > 0.55:
                box = detections['boxes'][i].detach().cpu().numpy().astype(int)
                label_idx = detections['labels'][i].item()
                label_name = self.weights.meta["categories"][label_idx]
                
                # Format payload deteksi
                detected_objects_log.append(f"{label_name} ({score:.2f})")
                
                # Visualisasi Bounding Box (Dapat dilihat melalui rqt_image_view)
                cv2.rectangle(current_frame, (box[0], box[1]), (box[2], box[3]), (0, 255, 0), 2)
                cv2.putText(current_frame, f'{label_name} {score:.2f}', (box[0], box[1]-10), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        # Publish payload format teks ke topik /detections
        msg = String()
        msg.data = f"Detected: {', '.join(detected_objects_log) if detected_objects_log else 'None'}"
        self.publisher_.publish(msg)
        
        # Publish gambar hasil visualisasi bounding box 
        try:
            out_img_msg = self.br.cv2_to_imgmsg(current_frame, 'bgr8')
            self.image_publisher_.publish(out_img_msg)
        except Exception as e:
            self.get_logger().error(f'Exception: Gagal mem-publish visualisasi deteksi: {e}')

def main(args=None):
    rclpy.init(args=args)
    node = ObjectDetectionNode()
    
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        node.get_logger().info('Node dihentikan oleh user (KeyboardInterrupt).')
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()

```