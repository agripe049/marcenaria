import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <div className="bg-[#553b2b] text-slate-100 selection:bg-[#553b2b]">
            <section className="relative overflow-hidden">
                <div className='mx-auto max-w-6xl px-4 py-20 relative'>
                    <motion.h1 initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-extrabold">
                        Feito à mão para sua casa.{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-200'>
                            Sua casa seu estilo.
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: 1 }}
                        className="mt-4 text-amber-50/80 max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit sequi quae molestias est laborum, distinctio, corrupti
                        harum cupiditate sapiente facilis ipsa repellat
                        provident quod maiores rerum eaque dolorem
                        cumque. Impedit?
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: 1 }}
                        className="mt-8 flex flex-row gap-3"
                    >
                        <a href="#" className='inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-bold transition bg-amber-500  hover:bg-amber-800'>
                            Solicitar Orçamento <ArrowRight className='size-6'/>
                        </a>

                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero;