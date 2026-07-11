import Link from "next/link";
import RenderingSignalCard from "@/app/components/RenderingSignalCard";

export default function HowPage() {
  const exampleTimestamp = "2026-07-11T04:39:00.000Z";

  return (
    <div className="space-y-12 py-4">
      {/* Page Title */}
      <div className="border-b border-lilac pb-6">
        <h1 className="text-3xl font-extrabold text-navy">How rendering works in this lab</h1>
        <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
          Halaman ini membandingkan 4 strategi rendering yang digunakan dalam aplikasi ini.
          Setiap strategi menentukan <strong>kapan</strong> dan <strong>di mana</strong> HTML halaman dibuat.
        </p>
      </div>

      {/* Grid of 4 Signal Cards */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Contoh kartu sinyal untuk tiap strategi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RenderingSignalCard
            strategy="SSG"
            timestamp={exampleTimestamp}
            whoMadeIt="Halaman ini dibuat oleh dev team,"
            whenMadeIt="waktu build — sebelum kamu buka."
            timestampLabel="Built"
            experimentAction="Refresh halaman ini beberapa kali."
            expectedResult="Timestamp TIDAK berubah sama sekali."
          />
          <RenderingSignalCard
            strategy="SSR"
            timestamp={exampleTimestamp}
            whoMadeIt="Halaman ini dibuat BARUSAN oleh server,"
            whenMadeIt="tepat saat kamu request. Setiap request bikin ulang."
            timestampLabel="Server time"
            experimentAction="Refresh halaman ini 3 kali berturut-turut."
            expectedResult="Timestamp BERUBAH tiap refresh."
          />
          <RenderingSignalCard
            strategy="CSR"
            timestamp={exampleTimestamp}
            whoMadeIt="Isi dashboard ini dibuat sama BROWSER-mu,"
            whenMadeIt="setelah halaman ter-load. Server cuma kirim shell kosong."
            timestampLabel="Client time"
            experimentAction="Klik tombol 'Lihat HTML mentah' di bawah."
            expectedResult="Nama kamu dan progress-nya TIDAK ada di HTML."
          />
          <RenderingSignalCard
            strategy="ISR"
            timestamp={exampleTimestamp}
            whoMadeIt="Halaman ini dibuat waktu build, tapi bisa di-regenerate,"
            whenMadeIt="secara berkala di background tanpa full rebuild."
            timestampLabel="Revalidated"
            experimentAction="Tambahkan export const revalidate = 10 di halaman SSG."
            expectedResult="Timestamp berubah setelah interval revalidasi."
          />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Perbandingan strategi</h2>
        <div className="overflow-x-auto rounded-xl border border-lilac">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-lilac/30 text-navy text-left">
                <th className="px-4 py-3 font-bold">Strategy</th>
                <th className="px-4 py-3 font-bold">Kapan HTML dibuat?</th>
                <th className="px-4 py-3 font-bold">Butuh JS di browser?</th>
                <th className="px-4 py-3 font-bold">Cocok untuk</th>
                <th className="px-4 py-3 font-bold">Contoh di lab ini</th>
                <th className="px-4 py-3 font-bold">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-lilac/50">
              <tr className="bg-strategy-ssg-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-ssg-text">SSG</td>
                <td className="px-4 py-3">Saat <code className="font-mono bg-white/50 px-1 rounded">npm run build</code></td>
                <td className="px-4 py-3">Tidak (HTML sudah jadi)</td>
                <td className="px-4 py-3">Blog, marketing page, docs</td>
                <td className="px-4 py-3"><code className="font-mono">/blog</code></td>
                <td className="px-4 py-3"><Link href="/blog" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-ssr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-ssr-text">SSR</td>
                <td className="px-4 py-3">Setiap request masuk ke server</td>
                <td className="px-4 py-3">Tidak (tapi hydration tetap jalan)</td>
                <td className="px-4 py-3">Dashboard real-time, personalisasi</td>
                <td className="px-4 py-3"><code className="font-mono">/instructor/sinta</code></td>
                <td className="px-4 py-3"><Link href="/instructor/sinta" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-csr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-csr-text">CSR</td>
                <td className="px-4 py-3">Di browser, setelah JS load</td>
                <td className="px-4 py-3"><strong>Ya</strong> — tanpa JS, halaman kosong</td>
                <td className="px-4 py-3">Dashboard interaktif, app-like UI</td>
                <td className="px-4 py-3"><code className="font-mono">/dashboard</code></td>
                <td className="px-4 py-3"><Link href="/dashboard" className="text-purple font-semibold hover:underline">Try it →</Link></td>
              </tr>
              <tr className="bg-strategy-isr-bg/30">
                <td className="px-4 py-3 font-bold text-strategy-isr-text">ISR</td>
                <td className="px-4 py-3">Saat build, lalu re-generate berkala</td>
                <td className="px-4 py-3">Tidak</td>
                <td className="px-4 py-3">E-commerce, katalog, konten semi-statis</td>
                <td className="px-4 py-3"><em className="text-gray-400">Belum ada — exercise!</em></td>
                <td className="px-4 py-3"><span className="text-gray-400 text-xs italic">Toggling exercise</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline Diagram */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-navy">Timeline: kapan konten dibuat?</h2>
        <div className="rounded-xl border border-lilac bg-white p-6 overflow-x-auto">
          <div className="flex items-start justify-between min-w-[600px] relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>

            {/* Build marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-ssg-bg border-2 border-strategy-ssg-border flex items-center justify-center text-lg font-bold text-strategy-ssg-text">1</div>
              <p className="mt-2 text-xs font-bold text-navy">Build</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]"><code className="font-mono">npm run build</code></p>
              <div className="mt-2 space-y-0.5">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-ssg-bg text-strategy-ssg-text">SSG ✓</span>
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-isr-bg text-strategy-isr-text">ISR ✓ (awal)</span>
              </div>
            </div>

            {/* Deploy marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center text-lg font-bold text-gray-500">2</div>
              <p className="mt-2 text-xs font-bold text-navy">Deploy</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">HTML statis di-upload ke CDN/server</p>
              <div className="mt-2">
                <span className="block text-[10px] text-gray-400 italic">Tidak ada render baru</span>
              </div>
            </div>

            {/* User Request marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-ssr-bg border-2 border-strategy-ssr-border flex items-center justify-center text-lg font-bold text-strategy-ssr-text">3</div>
              <p className="mt-2 text-xs font-bold text-navy">User Request</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">Browser request masuk ke server</p>
              <div className="mt-2 space-y-0.5">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-ssr-bg text-strategy-ssr-text">SSR ✓</span>
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-isr-bg text-strategy-isr-text">ISR ✓ (regen)</span>
              </div>
            </div>

            {/* Browser Load marker */}
            <div className="flex flex-col items-center text-center z-10 w-1/4">
              <div className="w-12 h-12 rounded-full bg-strategy-csr-bg border-2 border-strategy-csr-border flex items-center justify-center text-lg font-bold text-strategy-csr-text">4</div>
              <p className="mt-2 text-xs font-bold text-navy">Browser Load</p>
              <p className="text-[10px] text-gray-500 mt-1 max-w-[120px]">JavaScript execute di browser user</p>
              <div className="mt-2">
                <span className="block text-[10px] font-semibold px-2 py-0.5 rounded bg-strategy-csr-bg text-strategy-csr-text">CSR ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-lilac pt-6 text-sm text-gray-600 leading-relaxed space-y-2">
        <p>
          Sekarang coba kunjungi langsung halaman-halaman berikut untuk merasakan perbedaannya:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/blog" className="text-purple font-semibold hover:underline">/blog</Link> — SSG, konten sudah ada di HTML</li>
          <li><Link href="/instructor/sinta" className="text-purple font-semibold hover:underline">/instructor/sinta</Link> — SSR, timestamp berubah tiap refresh</li>
          <li><Link href="/dashboard" className="text-purple font-semibold hover:underline">/dashboard</Link> — CSR, konten muncul setelah JavaScript jalan</li>
        </ul>
      </section>
    </div>
  );
}
