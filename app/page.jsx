export default function BabyShopWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-white text-neutral-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MG Babyshop</h1>
          <a href="https://wa.me/254758882994" className="bg-pink-500 text-white px-5 py-2 rounded-2xl shadow">Order on WhatsApp</a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-blue-700">Soft as Love – Newborn Comfort from Turkey</h2>
          <p className="text-lg mb-6">Premium Turkish cotton rompers, receiving sets, socks, hats and newborn essentials. Gentle on baby skin. Trusted by Kenyan mums.</p>
          <a href="#products" className="bg-blue-500 text-white px-6 py-3 rounded-2xl shadow">Shop Collections</a>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <p className="text-sm text-neutral-500">100% Cotton • Newborn Safe • Limited Stock</p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-10 text-pink-600">Our Bestsellers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cotton Rompers", desc: "Soft, breathable & perfect for everyday wear" },
              { title: "Receiving Sets", desc: "All-in-one essentials for newborns" },
              { title: "Gift Bundles", desc: "Perfect baby shower gifts" }
            ].map((item, i) => (
              <div key={i} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h4>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-8 text-blue-700">Why Parents Choose Us</h3>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="bg-white p-6 rounded-2xl shadow">✔ Premium Turkish cotton</li>
          <li className="bg-white p-6 rounded-2xl shadow">✔ Affordable bundle pricing</li>
          <li className="bg-white p-6 rounded-2xl shadow">✔ Fast delivery within Kenya</li>
        </ul>
      </section>

      {/* Socials */}
      <section className="bg-pink-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-pink-600">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/mg_babyshop1?igsh=anU4emQ2a2F5anli" className="bg-white px-6 py-3 rounded-2xl shadow text-blue-600">Instagram</a>
            <a href="https://www.tiktok.com/@mg_babyshop1?lang=en" className="bg-white px-6 py-3 rounded-2xl shadow text-pink-600">TikTok</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-4">Order Today</h3>
          <p className="mb-6">Chat with us directly on WhatsApp for prices, bundles & delivery</p>
          <a href="https://wa.me/254758882994" className="bg-white text-blue-600 px-6 py-3 rounded-2xl shadow">Chat on WhatsApp</a>
          <p className="text-sm mt-6">© {new Date().getFullYear()} MG Babyshop • Kenya</p>
        </div>
      </section>
    </div>
  );
}
