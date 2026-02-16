import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import cozinha from "../../public/cozinha.jpeg"
import quarto from "../../public/quarto.jpeg"
import banheiro from "../../public/banheiro.jpeg"


const Hero = () => {

    const categorias = [
        { label: "Cozinha", imagem: cozinha },
        { label: "Quarto", imagem: quarto },
        { label: "Banheiro", imagem: banheiro }
    ];




    return (
        <div className="bg-[#1f1f1f] text-slate-100">
            <section className="relative overflow-hidden">
                <div className='mx-auto max-w-6xl px-4 py-20 relative'>
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
                        <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-medium transition bg-amber-500  hover:bg-amber-800'>
                            Orçamento <ArrowRight className='size-6' />
                        </a>
                        {/* <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-medium border border-white/10 hover:bg-white/5 transition'>
                            Ver projetos
                        </a>*/}
                    </motion.div>




                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: .7 }}
                        className="mt-14 grid grid-cols-2 gap-4"
                    >
                        {categorias.map((i, label) => (
                            <div key={label} className='group relative rounded-2xl overflow-hidden bg-[#1f1f1f] aspect-square cursor-pointer touch-auto'>
                                <img src={i.imagem} alt={i.label} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 
                                    flex items-end p-6'>
                                    <span className='text-white font-bold text-lg sm:text-3xl transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300'>
                                        {i.label}
                                    </span>
                                </div>
                            </div>
                        ))}

                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero;