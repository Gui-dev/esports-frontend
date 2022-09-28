import React from 'react'
import { MagnifyingGlassPlus } from 'phosphor-react'

export const CreateAdBanner = () => {
  return (
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
  )
}
