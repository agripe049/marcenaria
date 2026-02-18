import { motion } from 'framer-motion'

const Features = () => {
    return (
        <div className='bg-[#1f1f1f] text-slate-100'>
            <motion.section id='features' className='mx-auto max-w-6xl px-4 py-8'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // Só anima quando o usuário rolar até aqui
                viewport={{ once: true }} // Anima apenas uma vez
                transition={{ duration: 0.8 }}>
                <h2 className='text-3xl font-bold text-center'>
                    Móveis feitos sob medida com Eficiência
                </h2>
                <p className='text-slate-300 mt-4 text-center max-w-2xl mx-auto'>Na PSA Planejados, cuidamos de tudo:
                    do projeto à instalação. Com produção
                    própria e materiais nobres,
                    entregamos seu sonho com perfeição
                    e pontualidade, sem surpresas.</p>

                <div className='mt-8 grid grid-cols-2 gap-4'>

                </div>
            </motion.section>
        </div>
    )
}

export default Features