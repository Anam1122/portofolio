// src/data/projects.js
const projects = [
  {
    id: 'project-ecommerce-redesign',
    title: 'E-commerce Redesign & Frontend Revamp',
    shortDescription: 'Memodernisasi tampilan dan pengalaman pengguna toko online fashion.',
    longDescription: `Proyek ini berfokus pada peningkatan UI/UX dari platform e-commerce yang sudah ada. Kami melakukan riset pengguna untuk mengidentifikasi pain points, kemudian membuat wireframe dan prototipe di Figma. Implementasi frontend dilakukan menggunakan React.js, dengan fokus pada reusable components dan performa. Tantangan utama adalah memastikan konsistensi desain di berbagai halaman dan perangkat, serta mengintegrasikan API pihak ketiga. Hasilnya adalah peningkatan kecepatan loading halaman dan feedback positif dari pengguna terkait navigasi yang lebih intuitif.

    **Proses Desain:**
    1. User Research & Persona Development
    2. Information Architecture Restructuring
    3. Wireframing (Low-fidelity & High-fidelity)
    4. Prototyping & User Testing (Figma)

    **Proses Pengembangan:**
    1. Component-based architecture dengan React.js
    2. Pure CSS untuk styling yang bersih dan performant
    3. State management sederhana dengan React Context API
    4. Optimasi gambar dan lazy loading untuk kecepatan
    `,
    technologies: ['React.js', 'Pure CSS', 'HTML5', 'JavaScript', 'Figma', 'API Integration'],
    imageUrl: '/assets/images/project-ecommerce.jpg', // Pastikan gambar ini ada di public/assets/images
    altText: 'Tampilan aplikasi e-commerce yang didesain ulang',
    liveLink: 'https://demo-ecommerce.example.com', // Ganti dengan link demo live Anda
    githubLink: 'https://github.com/yourusername/ecommerce-redesign', // Ganti dengan link repo GitHub Anda
    figmaLink: 'https://www.figma.com/file/ecommerce-redesign-prototype' // Ganti dengan link Figma Anda
  },
  {
    id: 'project-mobile-todo-app',
    title: 'Mobile To-Do App Concept (UI/UX)',
    shortDescription: 'Desain prototype aplikasi mobile untuk manajemen tugas harian yang intuitif.',
    longDescription: `Proyek ini adalah studi kasus UI/UX untuk aplikasi mobile. Fokus utama adalah menciptakan alur pengguna yang mulus dan desain visual yang minimalis namun fungsional. Kami mulai dengan sketsa ide, kemudian mengembangkan wireframe dan prototipe interaktif menggunakan Figma. Pengujian awal dengan beberapa calon pengguna membantu menyempurnakan navigasi dan tata letak. Aplikasi ini dirancang untuk membantu pengguna mengelola daftar tugas mereka dengan mudah di mana pun mereka berada.

    **Proses Desain:**
    1. User Flow Mapping
    2. Sketching & Ideation
    3. Wireframing & UI Kit Creation
    4. Interactive Prototyping (Figma)
    5. Usability Testing

    **Tools:**
    1. Figma
    2. Adobe Illustrator (untuk ikon)
    `,
    technologies: ['Figma', 'User Research', 'Prototyping', 'UI Design', 'UX Design'],
    imageUrl: '/assets/images/project-todo-app.jpg', // Pastikan gambar ini ada
    altText: 'Mockup aplikasi to-do list mobile',
    liveLink: null, // Mungkin hanya prototype Figma yang bisa diakses
    githubLink: null,
    figmaLink: 'https://www.figma.com/file/mobile-todo-app-prototype' // Ganti dengan link Figma Anda
  },
  {
    id: 'project-portfolio-website',
    title: 'Personal Portfolio Website',
    shortDescription: 'Website portofolio pribadi untuk memamerkan keahlian React.js dan UI/UX.',
    longDescription: `Anda sedang melihatnya! Proyek ini adalah implementasi dari desain UI/UX saya sendiri. Dibangun dari nol menggunakan React.js dan pure CSS untuk memastikan performa optimal dan kustomisasi penuh. Tujuan utamanya adalah menciptakan platform yang bersih, responsif, dan mudah dinavigasi untuk memamerkan karya-karya saya, serta menunjukkan kemampuan saya dalam membangun aplikasi web modern.

    **Teknologi & Fitur:**
    1. React.js (Component-based architecture)
    2. Pure CSS & CSS Modules (Modular styling)
    3. React Router DOM (Single Page Application navigation)
    4. Responsive Design (Mobile-first approach)
    5. Optimasi performa (Image compression, minimal dependencies)
    6. Versi Control dengan Git & GitHub
    `,
    technologies: ['React.js', 'Pure CSS', 'HTML5', 'JavaScript', 'Responsive Design', 'Git', 'Vite'],
    imageUrl: '/assets/images/project-portfolio.jpg', // Gambar portofolio Anda sendiri
    altText: 'Tampilan website portofolio',
    liveLink: 'https://your-portfolio-url.com', // Ganti dengan URL portofolio Anda
    githubLink: 'https://github.com/yourusername/my-portfolio', // Ganti dengan link repo GitHub portofolio Anda
    figmaLink: null // Jika Anda mendesainnya di Figma, sertakan link-nya
  }
  // Tambahkan lebih banyak proyek di sini
];

export default projects;