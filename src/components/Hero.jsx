import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'


const Hero = () => {
   
    return (
        <div className="bg-[#1f1f1f] text-slate-100">
            <section className="relative overflow-hidden">
                <div className='mx-auto max-w-6xl px-4 pt-20 pb-0 relative'>
                    <motion.h1 initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-extrabold">
                        Feito à mão para sua casa.{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-200'>
                            Fabricação, Restauração e Reformas.
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: 1 }}
                        className="mt-4 text-amber-50/80 max-w-2xl">
                        Desde 2014 realizando sonhos em forma de móveis. Fazemos a fabricação de
                        móveis planejados em MDF, Restaurações e Reformas.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: 1 }}
                        className="mt-8 flex flex-row gap-3"
                    >
                        <a href="https://wa.me/5544997118089?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                            className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-medium transition bg-amber-500  hover:bg-amber-800'
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            Orçamento <ArrowRight className='size-6' />
                        </a>
                        {/* <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-medium border border-white/10 hover:bg-white/5 transition'>
                            Ver projetos
                        </a>*/}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero;