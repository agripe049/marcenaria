import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="bg-[#553b2b] text-slate-100 selection:bg-[#553b2b]">
        <section className="relative overflow-hidden">
            <div className='mx-auto max-w-6xl px-4 py-20 relative'>
                <motion.h1 initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="text-4xl font-extrabold">
                    Feitos à mão para sua casa.{" "}
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300'>
                        Sua casa seu estilo
                    </span>
                </motion.h1>
            </div>
        </section>
    </div>
  )
}

export default Hero;