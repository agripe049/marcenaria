import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import cozinha from "../../public/cozinha.jpeg"
import quarto from "../../public/quarto.jpeg"
import banheiro from "../../public/banheiro.jpeg"
import sala from "../../public/sala.jpeg"

const Projects = () => {

    // Estado para saber qual projeto está aberto
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    const categorias = [
        { label: "Cozinha", imagem: cozinha, descricao: "Cozinhas planejadas com aproveitamento inteligente de cada centímetro." },
        { label: "Quarto", imagem: quarto, descricao: "Dormitórios que unem conforto térmico e organização impecável." },
        { label: "Banheiro", imagem: banheiro, descricao: "Gabinetes e detalhes que transformam seu banheiro em um spa particular." },
        { label: "Sala", imagem: sala, descricao: "Painéis e mobiliário para criar o ambiente perfeito de convivência." }
    ];
    return (
        <div className='bg-[#1f1f1f] text-slate-100'>
            <section className='relative overflow-hidden'>
                <div className='mx-auto max-w-6xl px-4 pt-4 pb-20 relative'>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="mt-11">
                        <h3 className='text-4xl font-extrabold flex items-center justify-center'>
                            Conheça nossos projetos{" "}</h3>
                        <p className='mt-4 flex items-center justify-center font-medium'>A união perfeita entre
                            o uso inteligente do espaço e o estilo que
                            atravessa gerações.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: .7 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {categorias.map((i, label) => (
                            <div
                                key={label}
                                onClick={() => setProjetoSelecionado(i)}
                                className='group relative rounded-2xl overflow-hidden bg-[#1f1f1f] aspect-square cursor-pointer touch-auto'
                            >
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

            {/* Modal */}
            <AnimatePresence>
                {projetoSelecionado && (
                    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setProjetoSelecionado(null)}
                            className='absolute inset-0 bg-black/90 backdrop-blur-sm'
                        />

                        {/* Janela do Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className='bg-[#2a2a2a] rounded-3xl overflow-hidden max-w-4xl w-full relative z-10 shadow-2xl border border-white/10'
                        >
                            <button onClick={() => setProjetoSelecionado(null)} className='absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-black cursor-pointer'>
                                <X size={20} />
                            </button>

                            <div className='flex flex-col md:flex-row'>
                                <div className='md:w-3/5 h-[300px] md:h-[500px]'>
                                    <img src={projetoSelecionado.imagem} className='w-full h-full object-cover' alt={projetoSelecionado.label} />
                                </div>
                                <div className='md:w-2/5 p-8 flex flex-col justify-center'>
                                    <h3 className='text-3xl font-bold'>{projetoSelecionado.label}</h3>
                                    <p className='text-slate-400 mt-4'>{projetoSelecionado.descricao}</p>
                                    <a href={`https://wa.me/5544999999999?text=Olá! Vi o projeto de ${projetoSelecionado?.label} no seu site e gostaria de um orçamento parecido.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()} // Impede conflitos com o fundo do modal 
                                        className='mt-8 inline-block w-full max-w-[150px] text-center font-bold py-2 rounded-2xl bg-amber-500 text-amber-50 
                                        relative z-[110] cursor-pointer transition-all duration-500 ease-in-out 
                                         hover:bg-amber-600 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20'>
                                        Orçamento
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects