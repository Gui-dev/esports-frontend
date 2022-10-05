import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Check, GameController } from 'phosphor-react'

import { Input } from './Form/Input'
import { InputSelect } from './Form/Select'
import { api } from '../services/api'

type GamesProps = {
  id: string
  title: string
  bannerUrl: string
}

export const CreateAdModal = () => {
  const [games, setGames] = useState<GamesProps[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])

  useEffect(() => {
    const loadGames = async () => {
      const { data } = await api.get('/games')
      setGames(data)
    }
    loadGames()
  }, [])

  return (
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
            <InputSelect games={games} />
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
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('0') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('1') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('2') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('3') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('4') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('5') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className={`
                    w-8 h-8 rounded hover:bg-zinc-700 
                    ${weekDays.includes('6') ? 'bg-violet-600' : 'bg-zinc-900'}
                  `}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>

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

          <label className="flex items-center justify-center gap-2 mt-2 text-sm">
            <Checkbox.Root
              className="p-1 h-6 w-6 bg-zinc-900 rounded"
            >
              <Checkbox.Indicator>
                <Check className="h-4 w-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

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
  )
}
