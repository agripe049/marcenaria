import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Testimonials = () => {

  const depoimentos = [
    { name: "Compromisso com Qualidade", descricao: "Estamos preparando esta seção para compartilhar as experiências reais dos nossos clientes. Em breve, novos depoimentos aqui." },
    { name: "Excelência no Atendimento", descricao: "A satisfação de quem confia no nosso trabalho é o que nos move. Acompanhe em breve os feedbacks dos nossos parceiros." },
    { name: "Projetos de Alto Padrão", descricao: "Cada detalhe é planejado com exclusividade. Em breve, você poderá ler aqui os relatos de transformações nos lares de nossos clientes." }
  ]

  return (
    <div className='bg-[#1f1f1f] text-slate-100'>
      <motion.section id='testimonials' className='mx-auto max-w-6xl px-4 py-20 relative'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário rolar até aqui
        viewport={{ once: true }} // Anima apenas uma vez
        transition={{ duration: 0.8 }}
      >
        <h2 className='text-3xl font-bold text-center'>
          O que dizem sobre nós
        </h2>
        <p className='text-center text-slate-400 mt-2 text-sm italic'>
          Seção em atualização com depoimentos reais
        </p>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {depoimentos.map((n) => (
            <blockquote
              key={n.name}
              className='rounded-2xl border border-white/10 p-6'>
              <div className='flex items-center gap-2 text-amber-400'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className='size-4 fill-current' />
                ))}
              </div>
              <p className='mt-3 text-slate-300'>"{n.descricao}"</p>
              <footer className='mt-3 text-sm-text-slate-400'>- {n.name}</footer>
            </blockquote>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Testimonials