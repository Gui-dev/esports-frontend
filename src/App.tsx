import React, { useEffect, useState } from 'react'

import logoImg from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'
import { api } from './services/api'

type GamesProps = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App () {
  const [games, setGames] = useState<GamesProps[]>([])

  useEffect(() => {
    const loadGames = async () => {
      const { data } = await api.get('/games')
      setGames(data)
    }
    loadGames()
  }, [])

  return (
    <section className="flex flex-col items-center mx-auto my-10 px-10 max-w-[1344px]">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-10">
        Seu <span className="text-transparent bg-clip-text bg-gradient-text">duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-10">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <CreateAdBanner />
    </section>
  )
}

export default App
