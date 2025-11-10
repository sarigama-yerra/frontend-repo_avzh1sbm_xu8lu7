export default function Footer() {
  return (
    <footer className="bg-[#07080d] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 ring-1 ring-white/30" />
            <p className="mt-4 text-white/70">Precision-crafted footwear for performance and presence.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#new" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#men" className="hover:text-white">Men</a></li>
              <li><a href="#women" className="hover:text-white">Women</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#story" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Get updates</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              <button className="rounded-lg bg-white text-gray-900 px-3 py-2 font-medium">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} PulseKicks. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
