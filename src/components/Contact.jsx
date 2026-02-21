import { Clock4, MapPin, Phone } from "lucide-react"


const Contact = () => {

  const navLinks = [
    { href: "#projects", label: "Projetos" },
    { href: "#features", label: "Recursos" },
    { href: "#testimonials", label: "Feedbacks" },
    { href: "#contact", label: "Contato" }
  ]


  return (
    <footer id="contact" className='bg-[#1f1f1f] text-slate-100 border-t border-white/5'>
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4">
        {/* Container com 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Coluna sobre */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-200">PSA Planejados</h3>
            <p className="text-slate-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati nisi quas doloremque similique.</p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Navegação</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a href={l.href} key={l.href} className="text-slate-400 hover:text-amber-500 transition-colors duration-300 w-fit">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contatos */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Contatos</h3>
            <div className="flex flex-col gap-4 text-slate-400">

              {/* Telefone */}
              <div className="flex items-center gap-3">
                <Phone className="size-6 text-amber-500" />
                <span className="text-sm font-medium">(44) 99711-8089</span>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-3">
                <MapPin className="size-6 text-amber-500 mt-0.5" />
                <p className="text-sm leading-relaxed">
                  Rua Alberto Maranho, Zona 02 <br />
                  Terra Boa - PR - 87240-000
                </p>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-3">
                <Clock4 className="size-6 text-amber-500 mt-0.5" />
                <div className="flex flex-col text-sm">
                  <p>Seg a Sex: 08:00 às 18:00</p>
                  <p>Sábado: 08:00 às 12:00</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} PSA Planejados. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Contact