import React, { useEffect, useState } from 'react'
import { GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './assets/logo.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { api } from './services/api'

import './styles/main.css'
import { Input } from './components/Form/Input'

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

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="fixed bg-black/60 inset-0" />
          <Dialog.Content className="
            fixed top-1/2 left-1/2 text-white px-10 py-8 w-[480px] bg-[#2A2634]
            rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-lg"
          >
            <Dialog.Title className="font-black text-3xl text-white">
              Publique um anúncio
            </Dialog.Title>

            <form className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  type="text"
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Seu nome (ou nickname)</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Como te chamam dentro do game?"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label>
                  <Input
                    type="number"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord" className="font-semibold">Qual é o seu Discord?</label>
                  <Input
                    type="text"
                    id="discord"
                    placeholder="Usuário#0000"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      title="Domingo"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      D
                    </button>
                    <button
                      title="Segunda"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      S
                    </button>
                    <button
                      title="Terça"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      T
                    </button>
                    <button
                      title="Quarta"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      Q
                    </button>
                    <button
                      title="Quinta"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      Q
                    </button>
                    <button
                      title="Sexta"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      S
                    </button>
                    <button
                      title="Sábado"
                      className="w-8 h-8 bg-zinc-900 rounded hover:bg-violet-500"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="hourStart" className="font-semibold">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="time"
                      id="hourStart"
                      placeholder="De"
                    />
                    <Input
                      type="time"
                      id="hourEnd"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-2 gap-2 text-sm">
                <Input type="checkbox" /> Costumo me conectar ao chat de voz
              </div>

              <footer className="flex justify-end gap-4 mt-4">
                <Dialog.Close
                  type="button"
                  className="font-semibold px-5 h-12 bg-zinc-500 rounded-md hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  className="flex items-center gap-3 font-semibold px-5 h-12 bg-violet-500 rounded-md hover:bg-violet-600"
                >
                  <GameController size={24} />
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}

export default App
