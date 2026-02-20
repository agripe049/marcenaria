import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {

    const [open, setOpen] = useState(false);

    const navLinks = [
        { href: "#projects", label: "Projetos" },
        { href: "#features", label: "Recursos" },
        { href: "#testimonials", label: "Feedbacks" },
        { href: "#contact", label: "Contato" }
    ]

    return (
        <div className="sticky top-0 z-40 bg-[#1f1f1f] text-slate-100">
            {/* Navbar */}
            <header className="border-b border-white/5">
                <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                    <a href="#" className='flex items-center gap-2'>
                        <span className='font-bold tracking-tight'>PSA Planejados</span>
                    </a>
                    <nav className='hidden md:flex items-center gap-6 text-sm'>
                        {navLinks.map((l) => (
                            <a key={l.href} href={l.href}
                                className="hover:text-amber-400 transition">
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden p-2 rounded-lg"
                        onClick={() => setOpen(true)}>
                        <Menu className='size-5' />
                    </button>

                    {open && (
                        <div className="md:hidden">
                            <div className='fixed bg-black/60' onClick={() => setOpen(false)}>
                                <div className='fixed right-0 top-0 h-full w-60 bg-[#1f1f1f] border-l border-white/10 p-6'>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className='flex items-center gap-2'>
                                            <Sparkles className='size-6' />
                                            <span className='font-semibold'>PSA Planejados</span>
                                        </div>
                                        <button className="p-2 rounded-lg" onClick={() => setOpen(false)}>
                                            <X className='size-5' />
                                        </button>
                                    </div>
                                    <div className="flex flex-col gap-4 p-4 w-90">
                                        {navLinks.map((l) => (
                                            <a key={l.href} href={l.href}
                                                className="hover:text-amber-400 transition">
                                                {l.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header