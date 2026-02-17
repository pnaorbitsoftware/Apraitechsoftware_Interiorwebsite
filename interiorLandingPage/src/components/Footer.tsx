import { Link } from "react-router-dom"

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
]

const services = [
  "Residential Design",
  "Commercial Interior Design",
  "Themed Interior",
  "Renovation",
  "Space Management",
]

export default function Footer() {
  return (
    <footer className="bg-[#0c1513] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* COMPANY INFO */}
<div>
  {/* Logo */}
  <img src="/logo.png" alt="logo" className="w-36 mb-4" />

  <p className="text-sm leading-relaxed text-gray-400">
    Aparaitech Interior is a Pune-based company started in 2025. 
    It is a fine mixture of architect and interior firm.
  </p>

  {/* Social Icons */}
  <div className="flex gap-3 mt-5">
    {/* YouTube */}
    <a
      href="https://youtube.com/@aparaitech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label="Visit our YouTube channel"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/aparaitech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label="Follow us on Instagram"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/company/aparaitech"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label="Connect on LinkedIn"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917559394029"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </div>
</div>

        {/* QUICK LINK */}
        <div>
          <h3 className="text-[#d4a14a] font-semibold tracking-[3px] mb-4">
            QUICK LINK
          </h3>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[#d4a14a] transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-[#d4a14a] font-semibold tracking-[3px] mb-4">
            SERVICES
          </h3>

          <ul className="space-y-2 text-sm">
            {services.map((s, i) => (
              <li key={i} className="hover:text-[#d4a14a] cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* FIND US */}
        <div>
          <h3 className="text-[#d4a14a] font-semibold tracking-[3px] mb-4">
            FIND US
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>📞 +91 7559394029</li>
            <li>✉️ aparaitech.interior@gmail.com</li>
            <li>
              📍 Anand Nagar Colony, Anandnagar, Ashok Nagar Colony, Baramati, Maharashtra 413102, India
            </li>
          </ul>

          {/* GOOGLE MAP */}
<div className="mt-5 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
  <iframe
    title="Aparaitech Software Baramati Location"
    className="w-full h-40 grayscale contrast-90"
    src="https://www.google.com/maps?q=Aparaitech%20Software%20Baramati%20Maharashtra&output=embed"
    loading="lazy"
  ></iframe>
</div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        ©2025 Aparaitech Interior. All Rights Reserved.
      </div>
    </footer>
  )
}
