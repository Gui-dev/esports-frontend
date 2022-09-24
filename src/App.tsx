import React from 'react'
import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'
import logoImg from './assets/logo.svg'

function App () {
  return (
    <section className="flex flex-col items-center mx-auto my-10 px-10 max-w-[1344px]">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-10">
        Seu <span className="text-transparent bg-clip-text bg-gradient-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" alt="Game 1" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">League of Legends</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-2.png" alt="Game 2" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">Dota 2</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-3.png" alt="Game 3" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">Counter Strike</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-4.png" alt="Game 4" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">Apex</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-5.png" alt="Game 5" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">Fortnite</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/game-6.png" alt="Game 6" />
          <div className="absolute bottom-0 left-0 right-0 w-full pt-16 pb-4 px-4 bg-game-gradient">
            <strong className="block font-bold text-white">World Warcraft</strong>
            <span className="block text-sm text-zinc-300 mt-1">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="self-stretch mt-8 pt-1 bg-gradient-text rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-8 py-6 bg-[#2A2634]">
          <div>
            <h2 className="font-black text-2xl text-white">
              Não encontrou se duo ?
            </h2>
            <span className="text-zinc-400">
              Publique um anúncio para encontrar novos players
            </span>
          </div>

          <button className="flex items-center text-white px-4 py-3 bg-violet-500 rounded hover:bg-violet-600">
            <MagnifyingGlassPlus size={24} className="mr-2" />
            Publicar anúncio
          </button>
        </div>
      </div>
    </section>
  )
}

export default App
