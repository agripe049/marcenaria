import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Importações mantidas
import cozinha from "../../public/cozinha.jpeg"
import cozinha2 from "../../public/cozinha2.jpeg"
import cozinha3 from "../../public/cozinha3.jpeg"
import cozinha4 from "../../public/cozinha4.jpeg"
import cozinha5 from "../../public/cozinha5.jpeg"
import cozinha6 from "../../public/cozinha6.jpeg"
import cozinha7 from "../../public/cozinha7.jpeg"
import cozinha8 from "../../public/cozinha8.jpeg"
import quarto from "../../public/quarto.jpeg"
import banheiro from "../../public/banheiro.jpeg"
import sala from "../../public/sala.jpeg"

const Projects = () => {
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);
    const [fotoIndex, setFotoIndex] = useState(0);

    const categorias = [
        {
            label: "Cozinhas",
            imagens: [cozinha, cozinha2, cozinha3, cozinha4, cozinha5, cozinha6, cozinha7, cozinha8],
            descricao: "Cozinhas planejadas com aproveitamento inteligente de cada centímetro."
        },
        {
            label: "Quartos",
            imagens: [quarto],
            descricao: "Dormitórios que unem conforto térmico e organização impecável."
        },
        {
            label: "Banheiros",
            imagens: [banheiro],
            descricao: "Gabinetes e detalhes que transformam seu banheiro em um spa particular."
        },
        {
            label: "Salas",
            imagens: [sala],
            descricao: "Painéis e mobiliário para criar o ambiente perfeito de convivência."
        }
    ];


    const proximaFoto = (e) => {
        e.stopPropagation();
        const total = projetoSelecionado.imagens.length;
        setFotoIndex((prev) => (prev + 1 === total ? 0 : prev + 1));
    };

    const fotoAnterior = (e) => {
        e.stopPropagation();
        const total = projetoSelecionado.imagens.length;
        setFotoIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    return (
        <div className='bg-[#1f1f1f] text-slate-100'>
            <section id='projects' className='relative overflow-hidden'>
                <div className='mx-auto max-w-6xl px-4 pt-4 pb-20 relative'>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-11">
                        <h3 className='text-4xl font-extrabold flex items-center justify-center text-center'>
                            Conheça nossos projetos
                        </h3>
                        <p className='mt-4 flex items-center justify-center font-medium text-center text-slate-300'>
                            A união perfeita entre o uso inteligente do espaço e o estilo que atravessa gerações.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5, delay: .5 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {categorias.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setProjetoSelecionado(item);
                                    setFotoIndex(0); // Sempre reseta para a primeira foto ao abrir
                                }}
                                className='group relative rounded-2xl overflow-hidden bg-[#2a2a2a] aspect-square cursor-pointer'
                            >
                               
                                <img src={item.imagens[0]} alt={item.label} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                                    <span className='text-white font-bold text-lg sm:text-2xl transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300'>
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {projetoSelecionado && (
                    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setProjetoSelecionado(null)}
                            className='absolute inset-0 bg-black/95 backdrop-blur-sm'
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className='bg-[#2a2a2a] rounded-3xl overflow-hidden max-w-5xl w-full relative z-10 shadow-2xl border border-white/10'
                        >
                            <button onClick={() => setProjetoSelecionado(null)} className='absolute top-4 right-4 z-30 bg-black/50 p-2 rounded-full text-white hover:bg-black cursor-pointer'>
                                <X size={20} />
                            </button>

                            <div className='flex flex-col md:flex-row'>
                                {/* Lado da Imagem */}
                                <div className='md:w-3/5 h-[350px] md:h-[550px] relative bg-black flex items-center justify-center'>
                                    <motion.img
                                        key={fotoIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        src={projetoSelecionado.imagens[fotoIndex]}
                                        className='w-full h-full object-contain'
                                        alt={projetoSelecionado.label}
                                    />

                                    {projetoSelecionado.imagens.length > 1 && (
                                        <>
                                            <button onClick={fotoAnterior} className='absolute left-4 z-20 bg-black/20 hover:bg-black/50 p-3 rounded-full text-white transition-all'>
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button onClick={proximaFoto} className='absolute right-4 z-20 bg-black/20 hover:bg-black/50 p-3 rounded-full text-white transition-all'>
                                                <ChevronRight size={24} />
                                            </button>

                                            {/* Contador visual */}
                                            <div className='absolute bottom-4 bg-black/60 px-3 py-1 rounded-full text-[10px] text-white/70'>
                                                {fotoIndex + 1} / {projetoSelecionado.imagens.length}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Lado do Conteúdo */}
                                <div className='md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#2a2a2a]'>
                                    <h3 className='text-3xl font-bold'>{projetoSelecionado.label}</h3>
                                    <p className='text-slate-400 mt-4 leading-relaxed'>{projetoSelecionado.descricao}</p>

                                    <a href={`https://wa.me/5544997118089?text=Olá! Gostaria de um orçamento para um projeto de ${projetoSelecionado.label}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='mt-8 inline-block w-full text-center font-medium py-4 rounded-2xl bg-amber-500 text-amber-50 hover:bg-amber-600 transition-all hover:scale-105 active:scale-95'>
                                        Solicitar Orçamento
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