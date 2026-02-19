import { motion } from 'framer-motion'

const Features = () => {

    const qualidades = [
        { id: 'industria', descricao: "Indústria parceira com controle total de qualidade" },
        { id: 'projeto-3d', descricao: "Projeto 3D realista antes da produção" },
        { id: 'instalacao', descricao: "Instalação profissional inclusa" },
        { id: 'materiais', descricao: "Materiais de alta durabilidade e acabamento premium" }
    ];


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
                    {qualidades.map((d, id) => (
                        <div key={id} className='flex items-center justify-center p-6 bg-[#2a2a2a] border border-white/5 rounded-2xl shadow-xl hover:bg-[#323232] hover:border-amber-50 transition-all duration-500 font-medium text-center text-slate-200 cursor-pointer'>
                            {d.descricao}
                        </div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}

export default Features