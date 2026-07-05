import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    image: '/images/KATEGORI LOGO SIPATUO.png',
    title: 'SIPATUO',
    shortDescription: 'Desain logo dan identitas visual untuk program budidaya udang berbasis smart aquafarming.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'SIPATUO adalah program pengabdian masyarakat yang merepresentasikan kolaborasi, inovasi, dan keberlanjutan dalam pengembangan budidaya udang berbasis smart aquafarming.',
    palette: ['#233ea0', '#ff7e00', '#4c9640'],
    client: 'SRE Universitas Hasanuddin',
    stack: ['Brand Identity', 'Social Media Content', 'Campaign Visuals', 'Creative Direction'],
    summary: 'Perancangan loogo untuk program SIPATUO yang diinisiasi oleh PPK Ormawa SRE Universitas Hasanuddin. Proyek ini bertujuan untuk memvisualisasikan sinergi antara desa, budidaya udang, dan ekosistem tambak sebagai penggerak utama ekonomi masyarakat Pajukkang. Desain logo yang menyatu melambangkan semangat kolaborasi dan keberlanjutan dalam mewujudkan sistem budidaya smart aquafarming.',
    roles: [
      { name: 'Rais Ibad Rahman', role: 'Graphic Designer' }
    ]
  },
  {
    id: 2,
    image: '/images/KATEGORI LOGO MAPPALEBBI (2).png',
    title: 'MAPPALEBBI',
    shortDescription: 'Desain logo dan identitas visual untuk program pemberdayaan produk lokal Desa Belo.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'MAPPALEBBI merupakan sebuah program yang berfokus pada upaya mengangkat nilai produk Desa Belo melalui penguatan identitas produk, peningkatan kualitas usaha, dan pemberdayaan Kelompok Wanita Tani untuk kesejahteraan masyarakat secara berkelanjutan melalui kolaborasi, inovasii, dan pengembangan potensi lokal yang berdaya saing dan berkelanjutan',
    palette: ['#70191d', '#970a12', '#d1601f', '#fecd6d', '#5686bb'],
    client: 'Program Pemberdayaan Kelompok Wanita Tani (KWT) Desa Belo, Kabupaten Soppeng',
    stack: ['Logo Design', 'Visual Identity', 'Stationery', 'Art Direction'],
    summary: 'Perancangan logo untuk program MAPPALEBBI yang mengusung konsep "Mengangkat Potensi Lokal Desa Belo melalui Hilirisasi Produk dan Penguatann Identitas Lokal". Proyek ini memadukan unsur tipografi huruf "M" dengan ikon produk unggulan (kunyit) dan maskot daerah (kelelawar) untuk menciptakan sinergi visual antara potensi alam dan pemberdayaan masyarakat. Logo dirancang agar terlihat sederhana, elegan, mudah diingat, dan sangat fleksibel untuk diaplikasikan ke berbagai media pemasaran, mulai dari kemasan produk UMKM hingga banner kegiatan resmi.',
    roles: [
      { name: 'Dewi Laras', role: 'Brand Strategist' },
      { name: 'Eka Pratama', role: 'UI/UX Designer' },
      { name: 'Fajar Hadi', role: 'Motion Designer' }
    ]
  },
  {
    id: 3,
    image: '/images/KATEGORI LOGO VANCASTRA.png',
    title: 'VANCASTRA',
    shortDescription: 'Desain kemasan produk yang menarik dan mudah dikenali di rak retail.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'Kemasan premium dengan desain yang tegas dan karakter produk yang mudah diingat.',
    palette: ['#0EA5E9', '#14B8A6', '#F59E0B', '#E11D48'],
    client: 'CV. Rasa Nusantara',
    stack: ['Packaging Design', 'Retail Display', 'Copywriting'],
    summary: 'Mendesain kemasan yang berdiri kuat di rak dan memberikan kesan premium, dengan perhatian khusus pada diferensiasi dan kejelasan informasi produk.',
    roles: [
      { name: 'Gita Rahma', role: 'Packaging Designer' },
      { name: 'Hendra Putra', role: 'Creative Copywriter' },
      { name: 'Indah Sari', role: 'Art Director' }
    ]
  },
  {
    id: 4,
    image: '/images/KATEGORI LOGO ANGKASA.png',
    title: 'ANGKASA VOL.2',
    shortDescription: 'Desain kemasan produk yang menarik dan mudah dikenali di rak retail.',
    brand: 'Event Branding',
    brandDescription: 'Kemasan premium dengan desain yang tegas dan karakter produk yang mudah diingat.',
    palette: ['#0EA5E9', '#14B8A6', '#F59E0B', '#E11D48'],
    client: 'CV. Rasa Nusantara',
    stack: ['Packaging Design', 'Retail Display', 'Copywriting'],
    summary: 'Mendesain kemasan yang berdiri kuat di rak dan memberikan kesan premium, dengan perhatian khusus pada diferensiasi dan kejelasan informasi produk.',
    roles: [
      { name: 'Gita Rahma', role: 'Packaging Designer' },
      { name: 'Hendra Putra', role: 'Creative Copywriter' },
      { name: 'Indah Sari', role: 'Art Director' }
    ]
  },
  {
    id: 5,
    image: '/images/KATEGORI LOGO VANCASTRA.png',
    title: 'VANCASTRA',
    shortDescription: 'Desain kemasan produk yang menarik dan mudah dikenali di rak retail.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'Kemasan premium dengan desain yang tegas dan karakter produk yang mudah diingat.',
    palette: ['#0EA5E9', '#14B8A6', '#F59E0B', '#E11D48'],
    client: 'CV. Rasa Nusantara',
    stack: ['Packaging Design', 'Retail Display', 'Copywriting'],
    summary: 'Mendesain kemasan yang berdiri kuat di rak dan memberikan kesan premium, dengan perhatian khusus pada diferensiasi dan kejelasan informasi produk.',
    roles: [
      { name: 'Gita Rahma', role: 'Packaging Designer' },
      { name: 'Hendra Putra', role: 'Creative Copywriter' },
      { name: 'Indah Sari', role: 'Art Director' }
    ]
  },
  {
    id: 6,
    image: '/images/KATEGORI LOGO VANCASTRA.png',
    title: 'VANCASTRA',
    shortDescription: 'Desain kemasan produk yang menarik dan mudah dikenali di rak retail.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'Kemasan premium dengan desain yang tegas dan karakter produk yang mudah diingat.',
    palette: ['#0EA5E9', '#14B8A6', '#F59E0B', '#E11D48'],
    client: 'CV. Rasa Nusantara',
    stack: ['Packaging Design', 'Retail Display', 'Copywriting'],
    summary: 'Mendesain kemasan yang berdiri kuat di rak dan memberikan kesan premium, dengan perhatian khusus pada diferensiasi dan kejelasan informasi produk.',
    roles: [
      { name: 'Gita Rahma', role: 'Packaging Designer' },
      { name: 'Hendra Putra', role: 'Creative Copywriter' },
      { name: 'Indah Sari', role: 'Art Director' }
    ]
  },
  {
    id: 7,
    image: '/images/KATEGORI LOGO VANCASTRA.png',
    title: 'VANCASTRA',
    shortDescription: 'Desain kemasan produk yang menarik dan mudah dikenali di rak retail.',
    brand: 'Logo Design & Visual Identity',
    brandDescription: 'Kemasan premium dengan desain yang tegas dan karakter produk yang mudah diingat.',
    palette: ['#0EA5E9', '#14B8A6', '#F59E0B', '#E11D48'],
    client: 'CV. Rasa Nusantara',
    stack: ['Packaging Design', 'Retail Display', 'Copywriting'],
    summary: 'Mendesain kemasan yang berdiri kuat di rak dan memberikan kesan premium, dengan perhatian khusus pada diferensiasi dan kejelasan informasi produk.',
    roles: [
      { name: 'Gita Rahma', role: 'Packaging Designer' },
      { name: 'Hendra Putra', role: 'Creative Copywriter' },
      { name: 'Indah Sari', role: 'Art Director' }
    ]
  }
]

export default function WorkDetails() {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const selectedProject = projects.find((project) => project.id === selectedProjectId)

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          {selectedProject ? (
            <>
              <h1 className="text-5xl md:text-6xl font-black text-dark">{selectedProject.brand}</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{selectedProject.brandDescription}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {selectedProject.palette.map((color) => (
                  <span key={color} style={{ backgroundColor: color }} className="h-3 w-10 rounded-full shadow-sm"></span>
                ))}
              </div>
              <div className="mt-8">
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mx-auto w-full max-w-4xl rounded-3xl object-cover h-[450px]"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                )}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm uppercase tracking-[0.35em] text-secondaryBlue font-semibold">Project Overview</p>
              <h1 className="mt-4 text-4xl md:text-5xl font-black text-dark">See All Work</h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Pilih proyek untuk melihat ringkasan singkat, lalu buka detailnya untuk informasi lengkap.</p>
            </>
          )}
        </div>
        {selectedProject ? (
          <div className="space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="mt-2 text-3xl font-black text-dark">{selectedProject.title}</h2>
                <p className="mt-3 text-gray-600 max-w-3xl">{selectedProject.shortDescription}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProjectId(null)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-dark shadow-sm hover:bg-slate-50 transition"
              >
                Back to all projects
              </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
              <section className="space-y-8">
                <div className="rounded-3xl bg-slate-50 p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Overview</h3>
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-3xl object-cover h-72" onError={(e) => { e.target.style.display = 'none' }} />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm text-gray-500 uppercase tracking-[0.18em]">Brand</p>
                      <p className="mt-3 text-xl font-semibold text-dark">{selectedProject.brand}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <p className="text-sm text-gray-500 uppercase tracking-[0.18em]">Client</p>
                      <p className="mt-3 text-xl font-semibold text-dark">{selectedProject.client}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Project Summary</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.summary}</p>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Design Results</h3>
                  <p className="text-sm text-gray-500 mb-4">Tambahkan hasil desain di sini untuk ditampilkan pada detail project.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1,2,3].map((i) => (
                      <div key={i} className="h-40 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                        Add image #{i}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Who Was Involved</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {selectedProject.roles.map((member) => (
                      <div key={member.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="font-semibold text-dark">{member.name}</p>
                        <p className="mt-2 text-sm text-gray-500">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="space-y-8">
                <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Project Details</h3>
                  <dl className="space-y-6">
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-[0.18em]">Stack</dt>
                      <dd className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.stack.map((item) => (
                          <span key={item} className="rounded-full bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">{item}</span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-[0.18em]">Budget</dt>
                      <dd className="mt-3 text-xl font-semibold text-dark">{selectedProject.budget}</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-3xl bg-primary/5 p-8 text-center shadow-lg shadow-slate-200/40 ring-1 ring-slate-100">
                  <h3 className="text-2xl font-bold text-dark mb-4">Ready to work together?</h3>
                  <p className="text-gray-600 mb-6">Hubungi kami untuk diskusi proyek, estimasi, dan cara kami membantu mencapai target brand Anda.</p>
                  <a
                    href="mailto:hello@riceproject.com"
                    className="inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                className="group text-left overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500">{project.brand}</p>
                  <h2 className="mt-4 text-2xl font-black text-dark">{project.title}</h2>
                  <p className="mt-3 text-gray-600">{project.shortDescription}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
